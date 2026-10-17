---
title: "Bedah & Optimasi VPS 1.9 GB RAM: Menjalankan Production API, PostgreSQL, dan AI Agent Fleet Tanpa OOM"
date: "2026-10-17"
category: "blog"
status: "published"
tags: ["linux", "vps-optimization", "systems-engineering", "sysctl", "systemd", "ai-engineering", "devops"]
summary: "Catatan hands-on mengaudit dan mengoptimalkan single VPS 1.9 GB RAM yang melayani trafik produksi sekaligus autonomous AI agent workstation—mulai dari memangkas daemon bawaan Ubuntu, tuning TCP BBR, cgroup memory guardrails, hingga menyiapkan rollback runbook sebelum eksekusi."
---

# Bedah & Optimasi VPS 1.9 GB RAM: Menjalankan Production API, PostgreSQL, dan AI Agent Fleet Tanpa OOM

Ada kepuasan tersendiri sebagai software engineer ketika kita berhasil memeras performa maksimal dari *hardware* yang terbatas.

Saat ini, satu VPS sederhana (`1 vCPU`, `1.9 GB RAM`, `29 GB SSD`) milik saya mengemban tiga peran sekaligus:
1. **Production Hosting**: Melayani API produksi (`nikahyuk-api` + PostgreSQL 16), internal link shortener (`golinks`), dan *blog/showcase* (`thio.dev`) di balik Caddy Reverse Proxy.
2. **Autonomous AI Agent Workstation**: Menjalankan *gateway* dan *dashboard* Hermes Agent, *local AI router* (`9router`), *knowledge graph* (`gbrain`), serta VPS Cockpit (`vps-dashboard`).
3. **On-Demand Coding Sandbox**: Tempat *agentic coding engine* (`agy`), *compiler* Go, dan *test runner* bekerja mengeksekusi tugas-tugas *engineering*.

Dengan batas RAM hanya **1.967 MB**, saya menetapkan satu aturan keras (*system invariant*): **RAM yang terpakai tidak boleh melewati 1.4 GB (minimal 500 MB RAM harus selalu tersedia sebagai *headroom*).** Kalau sampai *Out-of-Memory (OOM)* terjadi dan *kernel* membunuh `sshd` atau `postgresql`, selesai sudah.

Berikut adalah catatan lengkap bagaimana saya melakukan *deep server audit*, memilah apa yang harus dihapus, dipertahankan, ditingkatkan, dan ditambahkan—lengkap dengan **Rollback Plan** sebelum menyentuh satu pun *command* di *production*.

---

## 1. Mengukur Baseline: Ke Mana Perginya RAM & Disk Kita?

Langkah pertama dalam *systems engineering* selalu sama: **jangan menebak, ukur dulu.**

Ketika diukur dengan `free -m`, `ps aux --sort=-%mem`, dan `ss -tulpn`:
- **Idle Base RAM**: ~943 MB (naik ke ~1.174 MB saat sesi `agy` aktif berjalan).
- **Root Disk (`/dev/vda1`)**: Terpakai 19 GB dari 29 GB (67%).
- **Port Hygiene**: Hanya port `22` (SSH), `80`, dan `443` (Caddy) yang terbuka ke publik. Seluruh *microservice* internal mengikat ketat ke `127.0.0.1`.

Namun ketika membedah daftar proses dan *systemd unit* satu per satu, terlihat banyak *resource* yang terbuang percuma.

---

## 2. REMOVE: Memangkas Daemon "Siluman" di Cloud VPS

Image standar Ubuntu 24.04 LTS membawa banyak *service* yang masuk akal untuk laptop atau *bare-metal server*, tapi sama sekali tidak berguna di dalam *headless KVM virtual machine*:

1. **`fwupd.service` (~30.4 MB RAM)**  
   Daemon untuk *update firmware hardware* fisik. Di dalam VM berbasis KVM (`systemd-detect-virt` = `kvm`), kita tidak mungkin dan tidak perlu meng-*update* BIOS/firmware milik *hypervisor*.
2. **`udisks2.service` (~5.5 MB RAM)**  
   Daemon untuk mengelola *removable media* seperti USB flashdisk atau DVD drive. Di VPS dengan blok *storage* VirtIO statis (`/dev/vda`), daemon ini hanya memakan RAM.
3. **`open-vm-tools` & `open-iscsi`**  
   *Guest agent* khusus VMware yang ikut terpasang, padahal VPS berjalan di atas KVM dan sudah memiliki `qemu-guest-agent`.
4. **`snapd` (0 Snap Terpasang)**  
   `snap list` menunjukkan tidak ada satu pun paket Snap yang dipakai, namun 7 *unit file* `snapd` tetap aktif sejak *boot*.
5. **Desktop DBus di Sesi User (`at-spi-dbus-bus.service` & `dconf.service`)**  
   *Accessibility bus* dan *database* konfigurasi desktop GNOME yang ikut menyala di dalam `user@1001.service` meskipun server sepenuhnya *headless*.
6. **Duplikasi Logging (`rsyslog` vs `systemd-journald`)**  
   Menjalankan keduanya berarti setiap baris log ditulis dua kali. Selain itu, `systemd-journald` memakan **46.5 MB RAM** karena ukuran *journal* di disk (`233 MB`) tidak dibatasi.
7. **2.35 GB Sampah Cache Build**  
   Tumpukan cache di `~/.hermes/cache` (632 MB), `~/.npm` (407 MB), `~/.cache/go-build` (249 MB), dan profil lama yang diarsipkan (312 MB).

Hanya dengan mematikan daemon yang tidak relevan dan membatasi `SystemMaxUse=50M` pada `journald`, kita langsung menghemat **~75 MB RAM murni** dan **~2.35 GB ruang disk**.

---

## 3. IMPROVE: Tuning Kernel `sysctl` (TCP BBR & Backlog) dan Cgroup Guardrails

### A. Bottleneck Tersembunyi di `tcp_max_syn_backlog`
Saat memeriksa parameter jaringan kernel, saya menemukan ketimpangan klasik:
- `net.core.somaxconn = 4096`
- `net.ipv4.tcp_max_syn_backlog = 128`

Artinya, meskipun *application socket queue* mampu menampung 4.096 koneksi, antrean paket `SYN` di level kernel dibatasi hanya 128! Saat terjadi lonjakan trafik, koneksi baru bisa terbuang sebelum sempat menyentuh Caddy.

Selain itu, *congestion control* masih menggunakan `cubic` bawaan, padahal modul kernel **TCP BBR (`tcp_bbr`)** buatan Google sudah tersedia di kernel Linux 6.8 dan sangat efektif memangkas latensi di jaringan VPS.

Konfigurasi yang diterapkan di `/etc/sysctl.d/99-vps-performance.conf`:
```ini
net.core.default_qdisc = fq
net.ipv4.tcp_congestion_control = bbr
net.core.somaxconn = 4096
net.ipv4.tcp_max_syn_backlog = 4096
net.ipv4.tcp_fin_timeout = 15
vm.swappiness = 10
vm.vfs_cache_pressure = 50
vm.dirty_ratio = 10
vm.dirty_background_ratio = 5
```
Menurunkan `vm.dirty_ratio` ke `10%` dan `vm.dirty_background_ratio` ke `5%` memastikan kernel menyicil penulisan *dirty pages* ke disk lebih awal, mencegah *I/O freeze* mendadak pada VPS dengan RAM kecil.

### B. Memasang Sabuk Pengaman Cgroup (`MemoryHigh` & `MemoryMax`)
Service berbasis Python, Node.js, dan Bun cenderung nyaman memakai memori jika tidak diberi batas. Di *systemd user unit*, kita bisa memasang pagar *cgroup v2*:
- `hermes-dashboard.service`: `MemoryHigh=220M`, `MemoryMax=280M`
- `9router.service`: `MemoryHigh=180M`, `MemoryMax=240M`
- `vps-dashboard.service`: `MemoryHigh=80M`, `MemoryMax=120M`

Jika salah satu *service* mengalami *memory leak*, kernel hanya akan mengerem atau me-*restart* *service* tersebut—bukan menumbangkan seluruh VPS.

---

## 4. ADD: Proteksi Berlapis Tanpa Beban RAM (`zram`, `earlyoom`, Fail2Ban Caddy)

Di server dengan RAM 1.9 GB, memasang *monitoring agent* berat seperti Prometheus, Netdata, atau Wazuh justru menjadi ironi: alat pemantau memakan RAM yang ingin kita hemat. Solusinya adalah memilih *tool* dengan *footprint* mendekati nol:

1. **`zram-tools` (0 MB Idle Overhead)**: Membuat *compressed block device* di RAM menggunakan algoritma `zstd` (rasio kompresi ~3:1) untuk 25% kapasitas RAM sebelum menyentuh *swap* disk.
2. **`earlyoom` (~2 MB RAM)**: *Daemon* super ringan yang memantau memori setiap detik. Jika RAM bebas menipis drastis saat kompilasi kode, `earlyoom` dikonfigurasi untuk **melindungi** `sshd`, `caddy`, dan `postgres`, serta **memprioritaskan terminasi** proses *build* (`agy`, `go`, `bun`, `node`) sebelum *kernel OOM killer* membuat server membeku.
3. **Fail2Ban Caddy Scanner Jail (0 MB Extra RAM)**: Karena `fail2ban` sudah berjalan untuk melindungi SSH, kita cukup menambahkan satu *filter* yang membaca `/var/log/caddy/*.log` untuk langsung memblokir IP bot yang berulang kali memindai `/.env`, `/.git`, atau `/wp-admin`.

---

## 5. Prinsip Utama Production Engineering: Siapkan Rollback Sebelum Eksekusi

Banyak *engineer* langsung menjalankan belasan perintah `systemctl disable`, `apt purge`, dan `sysctl -w` di terminal. Masalahnya, kalau 10 menit kemudian salah satu *service* gagal menyala atau jaringan melambat, kita panik karena lupa berapa angka `sysctl` sebelumnya atau *flag* apa yang ada di *unit file* asli.

Sebelum mengeksekusi satu baris pun dari rencana optimasi di atas, saya menerapkan tiga langkah disiplin:
1. **Snapshot Konfigurasi Pra-Eksekusi**: Menyimpan nilai penuh `sysctl -a`, daftar *enabled unit*, dan salinan asli `/etc/systemd/journald.conf` serta `~/.config/systemd/user/*.service`.
2. **Menulis Dokumen Execution & Rollback Plan di Git (`second-brain`)**: Setiap fase eksekusi wajib memiliki pasangan blok perintah *Rollback* yang eksplisit.
3. **Menyiapkan Satu Skrip `rollback.sh` Mandiri**: Jika terjadi anomali ("*if shit happens*"), cukup jalankan satu perintah `bash rollback.sh` untuk mengembalikan seluruh parameter kernel, batas *journald*, dan *systemd unit* ke kondisi awal dalam hitungan detik.

Optimasi infrastruktur yang baik bukan tentang seberapa agresif kita memangkas *resource*, melainkan seberapa **terukur, teramati, dan mudah dikembalikan (*reversible*)** setiap perubahan yang kita lakukan.
