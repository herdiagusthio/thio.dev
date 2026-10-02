---
title: "Dari Monolith ke Microservices: Kenapa \"Arsitektur Membosankan\" Seringkali Lebih Scalable"
date: "2026-09-25"
category: "blog"
status: "published"
tags: ["software-architecture", "microservices", "backend-engineering", "golang", "software-engineering"]
summary: "Scalability bukan cuma soal throughput. Sistem juga harus scalable secara operasional dan organisasional. Terkadang, desain yang membosankan justru yang paling tangguh saat insiden jam 3 pagi."
---

# Dari Monolith ke Microservices: Kenapa "Arsitektur Membosankan" Seringkali Lebih Scalable


Sebagai software engineer, kita sering banget tergoda sama hal-hal yang *shiny*.

Waktu awal-awal berhadapan dengan migrasi dari Monolith ke Microservices, rasanya tangan gatal pengen pakai semua *tech stack* terbaru. *Event-driven*, gRPC, Kafka, *service mesh* yang kompleks—kalau bisa dimasukin semua, rasanya arsitektur jadi makin "keren".

Tapi setelah hampir sedekade bekerja sebagai software engineer, menghadapi berbagai sistem dengan trafik dan kompleksitas yang berbeda-beda, saya mulai menyadari satu kenyataan pahit:

**Arsitektur yang terlihat sangat canggih di atas kertas, ujung-ujungnya bisa menjadi mimpi buruk ketika insiden *downtime* terjadi jam 3 pagi.**

Dari situ saya belajar bahwa *scalable* itu maknanya jauh lebih luas dari sekadar seberapa banyak *request* yang bisa ditangani server.

Buat saya, *scalability* punya setidaknya tiga dimensi:

1. **Technical Scalability** — sistem mampu menangani peningkatan *traffic* dan *throughput*.
2. **Organizational Scalability** — semakin banyak engineer bisa bekerja bersama tanpa terlalu banyak saling mengganggu.
3. **Operational Scalability** — sistem tetap *manageable*, mudah diobservasi, di-*debug*, dan di-*recover* ketika jumlah *service*, *deployment*, dan insiden bertambah.

Dan di sinilah banyak diskusi tentang *scalability* menjadi bias: kita terlalu fokus pada kemampuan sistem menambah server, tapi lupa bahwa sistem juga harus bisa dipahami dan dioperasikan oleh manusia.

Untuk mencapai ketiga hal tersebut, kita nggak selalu membutuhkan teknologi yang paling mutakhir.

Kita membutuhkan arsitektur yang **predictable**.

Atau, dengan kata lain: **arsitektur yang membosankan.**

Membangun sistem *backend* itu mirip banget dengan membangun rumah kost-kostan. Kost yang baik bukanlah yang punya teknologi paling futuristik, tetapi yang punya *layout* jelas, instalasi standar, dan mudah diperbaiki.

Berikut empat prinsip sederhana yang menurut saya membuat arsitektur lebih *predictable*.

## 📝 1. Pipa Standar — *Standardize the Inside*

Bayangkan rumah kost dengan sistem pipa air *custom* yang cuma dipahami satu tukang.

Pas bocor tengah malam, kita bakal panik.

Sama halnya dengan *codebase*. Menggunakan pola arsitektur yang familiar seperti *Hexagonal Architecture* atau *Clean Architecture*, ditambah konvensi *database access* dan *API contract* yang seragam, akan sangat membantu.

*Pattern* yang familiar membuat engineer baru lebih cepat *onboarding*, dan yang paling penting: mempermudah *debugging* ketika terjadi masalah.

Kita tidak ingin setiap service punya "cara sendiri" untuk melakukan hal yang sebenarnya sama.

**Boring is good when it makes behavior predictable.**

## 📝 2. Ruangan dengan Batas yang Jelas — *Define Boundaries*

Di kost-kostan, dapur dan kamar tidur pasti dipisah agar asap dapur tidak masuk ke kamar.

Dalam arsitektur, salah satu cara berpikirnya adalah melalui **Bounded Context**.

Jangan biarkan domain *Payment* bocor dan mencampuri logika bisnis *User Profile*. Boundary domain yang jelas membantu mengurangi *coupling* dan membuat ownership setiap bagian sistem lebih mudah dipahami.

Namun ada *nuance* penting:

**Membatasi domain tidak otomatis mengisolasi failure.**

Agar "kebakaran" di satu service tidak ikut merambat ke service lain, kita tetap membutuhkan mekanisme *resilience* di level *runtime* seperti *timeout*, *circuit breaker*, *retry policy*, *bulkhead*, atau *graceful degradation*.

Boundary yang bagus mengurangi *coupling*.

Resilience yang bagus membatasi *blast radius*.

Keduanya menyelesaikan masalah yang berbeda.

## 📝 3. Jangan Semua Orang Berteriak — *Control Communication*

Kalau setiap penghuni kost butuh sesuatu lalu saling teriak dari kamar ke kamar, rumah akan chaos.

Hal yang sama bisa terjadi ketika microservices terlalu bergantung pada rangkaian *synchronous API calls*.

Service A memanggil B, B memanggil C, C memanggil D.

Ketika satu bagian lambat, latency bisa ikut merambat ke seluruh *request chain*.

Di sinilah *asynchronous communication* bisa berguna. Misalnya menggunakan *message broker* seperti NSQ atau Kafka, ketika sebuah proses memang tidak membutuhkan *immediate response*, kita bisa memisahkan producer dan consumer.

Tapi ingat:

**Asynchronous communication bukan peluru ajaib.**

Menggunakan *async* membawa kompleksitas baru: *eventual consistency*, *duplicate messages*, *retry*, *dead-letter handling*, *ordering*, dan observability yang lebih sulit.

Sebaliknya, *synchronous communication* seperti HTTP atau gRPC tidak otomatis buruk.

Untuk flow yang sederhana dan membutuhkan *immediate response*, synchronous call justru sering menjadi pilihan yang paling mudah dipahami dan dioperasikan.

**Jangan menggunakan async hanya karena "microservices butuh scalability". Gunakan async ketika kebutuhan bisnis dan karakteristik prosesnya memang membutuhkan decoupling.**

## 📝 4. Rumah Harus Mudah Diperbaiki — *Optimize for Operability*

Inilah yang paling sering dilupakan, tapi paling kita cari saat insiden jam 3 pagi.

Rumah kost butuh akses yang jelas ke panel listrik dan saluran air.

Sistem yang kita bangun juga membutuhkan hal yang sama: *logging*, *metrics*, *tracing*, *alerting*, serta proses *deployment* dan *rollback* yang sederhana dan transparan.

*Operability* adalah bagian penting dari *operational scalability*.

Arsitektur secanggih apa pun nggak banyak membantu kalau ketika sistem *down*, kita tidak tahu:

**Error-nya di mana?
Service mana yang bermasalah?
Deployment mana yang menyebabkannya?
Dan bagaimana cara rollback-nya?**

Sistem yang mudah diperbaiki sering kali lebih valuable daripada sistem yang terlihat canggih.

## 💡 My Takeaway

Pada akhirnya, *scalable architecture* bukan tentang berapa banyak logo teknologi yang bisa kita jejalkan ke dalam satu diagram infrastruktur.

**Scalable architecture adalah arsitektur yang tetap bisa dipahami ketika traffic meningkat, jumlah engineer bertambah, dan insiden datang bersamaan.**

Kalau sebuah desain membutuhkan lima orang engineer untuk sekadar menjelaskan cara kerjanya, mungkin masalahnya bukan kurang dokumentasi.

Mungkin desainnya memang terlalu kompleks.

Arsitektur yang membosankan adalah arsitektur yang *predictable*.

Dan di dunia *software engineering*, **predictability sering kali lebih berharga daripada kecanggihan.**

Bagaimana dengan kalian?

Apa keputusan arsitektur paling "terlalu canggih" yang pernah kalian sesali?

💬 Yuk cerita dan diskusi di kolom komentar!

#TulisanSiThio #SoftwareArchitecture #Microservices #BackendEngineering #GoLang #SoftwareEngineering
