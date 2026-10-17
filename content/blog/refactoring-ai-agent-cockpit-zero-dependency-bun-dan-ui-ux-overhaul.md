---
title: "Bedah Arsitektur & UI/UX AI Agent Cockpit: Refactoring Dashboard Zero-Dependency Bun di VPS 2GB RAM"
slug: "refactoring-ai-agent-cockpit-zero-dependency-bun-dan-ui-ux-overhaul"
date: "2026-10-17"
author: "Herdi Agusthio"
category: "Systems Engineering & AI Orchestration"
tags: ["bun", "typescript", "ui-ux", "ai-agents", "vps", "observability", "systemd"]
status: "published"
summary: "Studi kasus merombak arsitektur backend dan UI/UX AI Agent Cockpit (vps-dashboard) di atas Bun native server tanpa mengorbankan batas memori >= 500 MB free RAM—mulai dari paralelisasi systemd cgroup telemetry, Command Palette (Cmd+K), Drag-and-Drop Kanban, hingga 52 automated tests."
---

# Bedah Arsitektur & UI/UX AI Agent Cockpit: Refactoring Dashboard Zero-Dependency Bun di VPS 2GB RAM

Ketika membangun organisasi AI Agent otonom (**LEADYA**, **Prime**, **Antigravity**, **Sysca**, **Luna**, **Lexa**, dan **Caren**) di atas satu VPS **1.9 GB RAM**, kita tidak bisa menggunakan *observability stack* berat seperti Grafana + Prometheus + ELK yang memakan ratusan megabyte RAM.

Solusinya: kami membangun **VPS & AI Cockpit (`vps-dashboard`)** menggunakan **Zero-Dependency Native Bun (`Bun.serve()`)** dan Vanilla JS + CSS Glassmorphism yang hanya memakan **~49 MB RAM**.

Namun seiring bertambahnya fitur—mulai dari *2D/3D Virtual AI Office*, *Multi-Agent Kanban*, *Agent Comms*, hingga *9Router Cost Analytics*—kode tumbuh menjadi monolit (`1.683` baris di `server.ts` dan `3.168` baris di `app.js`). Berikut adalah hasil *deep audit* dan *refactoring* menyeluruh dari sisi Backend hingga UI/UX.

---

## 1. Masalah Klasik Dashboard Internal yang Tumbuh Cepat

Dalam audit menyeluruh, kami menemukan 5 *anti-pattern* utama yang sering terjadi pada *internal developer platform*:

1. **Memory Sentinel yang "Buta" terhadap Host RAM:**
   Modul `lib/sentinel.ts` awalnya hanya mengecek `process.memoryUsage().rss` (`~49 MB`) terhadap batas `384 MB`. Akibatnya, saat RAM VPS turun di bawah batas aman `500 MB` karena proses lain, banner peringatan tidak pernah menyala (`alertLevel: "normal"`).
2. **Sequential `systemctl` Spawning (`3.5 Detik` Latency):**
   Endpoint `/api/services` memanggil `systemctl is-active` satu per satu secara sekuensial untuk 7+ service. Mengubahnya menjadi *batched parallel query* (`Promise.all` + `systemctl show`) memangkas waktu respon dari **3.5 detik menjadi < 250ms** sekaligus menampilkan pemakaian memori *cgroup* (`MemoryCurrent` vs `MemoryHigh`/`MemoryMax`).
3. **Roster Drift (Agen Lama Masih Muncul di UI):**
   Ketika organisasi berevolusi dari 9 agen menjadi 7 agen spesialis (menggantikan `Goder` dan `Pixel` dengan `Antigravity` dan `Caren`), kartu statistik dan *filter chip* di *Agent Comms* masih meng-hardcode agen lama.
4. **URL Hash yang Tidak Persist Saat Refresh & Polling Tanpa Henti:**
   Menekan `Cmd + R` saat membuka tab `#kanban` atau `#office` selalu melempar pengguna kembali ke tab pertama (`#system`). Selain itu, `setInterval(loadProcesses, 8000)` terus berjalan di latar belakang meskipun tab tidak sedang dilihat.
5. **Penggunaan Native `window.prompt()` untuk Edit `.env` Secrets:**
   Mengedit *environment variable* menggunakan `window.prompt()` bawaan browser menampilkan *secret* dalam teks biasa (*plain text*) dan merusak estetika *dark glassmorphism*.

---

## 2. Prinsip Refactoring: *Remove, Keep, Improve, Add*

### A. Backend: Cepat, Aman, dan Sadar Infrastruktur
- **Host-Aware Memory Sentinel:** Menggabungkan pembacaan `/proc/meminfo` (`MemAvailable`) dengan RSS proses sehingga peringatan otomatis aktif tepat saat sisa RAM host menyentuh `< 500 MB` (*warning*) atau `< 350 MB` (*critical*).
- **Cgroup & Hardening Telemetry:** Menampilkan progres pemakaian RAM setiap service terhadap batas `MemoryHigh`/`MemoryMax` systemd, status **TCP BBR**, **earlyoom**, dan **Fail2Ban** langsung di dashboard.
- **Strict Localhost Binding (`127.0.0.1:3030`):** Tidak ada port internal yang terekspos ke `0.0.0.0`. Semua trafik publik wajib melewati Caddy reverse proxy dan diverifikasi otomatis oleh `sdlc-scanner.sh`.

### B. UI/UX: Dari "Kumpulan Tab" Menjadi *Mission Control* Sejati
1. **Navigasi Terkategori:** Mengelompokkan 10 menu sidebar menjadi 3 domain kognitif yang jelas: **AI Command Center**, **Platform & Models**, dan **VPS Infrastructure**.
2. **Full URL `#hash` Deep-Linking:** Mendukung *routing* penuh hingga ke *subtab* (`#hermes/comms`, `#hermes/router`, `#kanban`) saat halaman di-*refresh* atau dibagikan.
3. **Context-Aware Refresh & Tab-Aware Polling:** Tombol global **🔄 Refresh** kini memperbarui data pada tab yang sedang aktif, dan *polling* otomatis dijeda saat tab browser tidak aktif (`document.hidden`).
4. **Drag-and-Drop Kanban + Command Palette (`Cmd/Ctrl + K`):** Memindahkan tugas antar kolom cukup dengan *drag-and-drop*, dilengkapi fitur pencarian instan dan *Command Palette* (`Cmd+K`) untuk berpindah tab atau menugaskan agen tanpa menyentuh mouse.

---

## 3. Kesimpulan
Dashboard operasional yang hebat bukan soal seberapa banyak *library* frontend yang dipakai, melainkan **kecepatan respon (`<250ms`)**, **akurasi telemetri (`free -m >= 500 MB`)**, dan **ergonomi operator** (navigasi keyboard `Cmd+K`, *drag-and-drop*, dan *deep-linking*). Dengan arsitektur *Zero-Dependency Bun*, kita mendapatkan ketiganya hanya dengan jejak memori **~49 MB RAM**.
