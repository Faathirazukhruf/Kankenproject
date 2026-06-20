# Panduan AI (AI Agents Guidelines)

**PENTING UNTUK SEMUA AI AGENT**: Saat membaca dan memodifikasi basis kode ini, Anda **DIWAJIBKAN** untuk mematuhi aturan-aturan berikut agar konsistensi proyek tetap terjaga.

## 1. Gaya Desain: Gen-Z Neobrutalism
Proyek ini menggunakan tema visual **Neobrutalism**. Setiap penambahan elemen UI, komponen, atau halaman baru harus mematuhi aturan berikut:
- **Warna Cerah & Berani**: Gunakan variabel warna yang sudah ada di `:root` dalam file `src/style.css` (seperti `--primary-color` neon green, `--secondary-color` pink, dan `--yellow-color`).
- **Garis Batas Tebal (Thick Borders)**: Semua elemen interaktif (tombol, *card*, navigasi, gambar) harus memiliki *border* hitam solid minimal `3px` (`var(--border-width) solid var(--border-color)`).
- **Hard Shadows (Bayangan Tajam)**: Jangan gunakan `box-shadow` dengan *blur*. Gunakan bayangan *offset* yang tajam (contoh: `6px 6px 0px 0px rgba(0, 0, 0, 1)`). Saat elemen di-*hover*, ubah *offset* bayangan seolah elemen tersebut ditekan.
- **Tipografi Kekinian**: Gunakan *font* **Space Grotesk**. Huruf harus tegas, tebal (*bold* 700/800), dan sering kali menggunakan huruf kapital (*uppercase*) untuk judul.
- **Animasi Simpel**: Gunakan transisi patah atau *micro-interaction* yang asyik (seperti rotasi derajat kecil pada elemen tertentu).

## 2. Responsivitas Mobile (Mobile-First Mindset)
Setiap perubahan atau penambahan fitur **HARUS** responsif dan terlihat bagus di perangkat seluler:
- Periksa *media queries* (`@media (max-width: 768px)`) di `src/style.css`.
- Pastikan teks dapat terbaca, *padding* tidak terlalu sempit, dan elemen *grid/flex* berubah menjadi satu kolom pada layar HP.
- Jika menambahkan navigasi baru, pastikan terintegrasi dengan *hamburger menu* yang sudah ada di `src/main.js` dan `index.html`.

## 3. Identitas Proyek (Kanken Project)
- **Usaha**: Sablon Cetak / Screen Printing.
- **Nada Komunikasi (Tone of Voice)**: Gaul, asyik, santai, dan Gen-Z (gunakan kata-kata seperti "Kece", "Sini kita cetak!", "Pesan Sekarang").
- **Kontak Utama**: Nomor WhatsApp pemesanan adalah `+6282293632467`. Jangan ubah nomor ini tanpa persetujuan eksplisit dari *user*.
- **Lokasi**: Majalengka, Jawa Barat.

## 4. Aturan Kode (Coding Rules)
- **Tidak Pakai Framework CSS**: Proyek ini menggunakan **Vanilla CSS** murni yang ditulis di `src/style.css`. Jangan instal TailwindCSS, Bootstrap, atau kerangka kerja gaya lainnya.
- **Arsitektur Simpel**: Tetap pertahankan struktur Vite + Vanilla. Jangan tiba-tiba mengubah proyek menjadi React/Next.js kecuali *user* secara spesifik memintanya dengan perintah migrasi penuh.
- **Bersih & Ringan**: Jangan tambahkan *library* eksternal yang berat jika bisa diselesaikan dengan JavaScript *native* (Vanilla JS).
