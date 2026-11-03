# SMP Plus Al-Imamah — Portal Guru & Tenaga Kependidikan (GTK)

Aplikasi web portal resmi Guru dan Tenaga Kependidikan (GTK) SMP Plus Al-Imamah berbasis Pesantren (Pondok Pesantren Tadribuddu'aat, Dusun Oray, Pamoroh, Kadur, Pamekasan).

Aplikasi ini dibangun menggunakan **React 19**, **Vite**, **TypeScript**, dan **Tailwind CSS**, serta telah dioptimasi penuh agar dapat dipublikasikan ke **GitHub** dan dideploy ke **Vercel**, **Netlify**, atau platform hosting lainnya tanpa error.

---

## 🚀 Persiapan & Instalasi Lokal

```bash
# 1. Install seluruh dependensi
npm install

# 2. Jalankan server pengembangan lokal (port 3000)
npm run dev

# 3. Uji build produksi
npm run build

# 4. Preview hasil build produksi
npm run preview
```

---

## 📦 Panduan Publish ke GitHub

Jika Anda mengunduh (download) source code aplikasi ini ke komputer Anda, ikuti langkah berikut untuk mengunggah ke GitHub:

1. Buka terminal di folder project aplikasi ini.
2. Inisialisasi Git:
   ```bash
   git init
   git add .
   git commit -m "feat: Portal GTK SMP Plus Al-Imamah siap deploy"
   ```
3. Buat repositori baru di [GitHub](https://github.com/new) (misalnya diberi nama `smp-plus-al-imamah`).
4. Sambungkan dan push ke GitHub:
   ```bash
   git branch -M main
   git remote add origin https://github.com/USERNAME-ANDA/smp-plus-al-imamah.git
   git push -u origin main
   ```

---

## ⚡ Panduan Deploy ke Vercel (Otomatis & Gratis)

Aplikasi ini sudah dilengkapi file konfigurasi `vercel.json` sehingga langsung siap dideploy di Vercel:

1. Buka [Vercel](https://vercel.com) dan login menggunakan akun GitHub Anda.
2. Klik tombol **"Add New..."** lalu pilih **"Project"**.
3. Pilih repositori GitHub Anda (`smp-plus-al-imamah`) dan klik **"Import"**.
4. Pada bagian **Configure Project**:
   - **Framework Preset**: `Vite` *(terdeteksi otomatis)*
   - **Root Directory**: `./` *(default)*
   - **Build Command**: `npm run build` *(terdeteksi otomatis)*
   - **Output Directory**: `dist` *(terdeteksi otomatis)*
   - **Install Command**: `npm install` *(terdeteksi otomatis)*
5. Klik **"Deploy"**.
6. Dalam hitungan detik, aplikasi Anda sudah live dengan URL publik dari Vercel (misal: `https://smp-plus-al-imamah.vercel.app`).

### Keunggulan Konfigurasi Vercel yang Disediakan:
- Dilengkapi **SPA Rewrites**: Halaman yang di-refresh tidak akan mengalami error *404 Not Found*.
- Semua aset gambar, foto dewan guru, foto pimpinan pesantren, dan ikon otomatis disalin ke folder `dist` saat proses build.

---

## 🌐 Alternatif Hosting Lainnya

### A. Netlify
1. Hubungkan akun GitHub Anda ke [Netlify](https://app.netlify.com).
2. Set Build Command: `npm run build` dan Publish Directory: `dist`.
3. File `public/_redirects` yang sudah disediakan akan otomatis menangani routing SPA.
4. *Atau* langsung drag and drop folder `dist` hasil `npm run build` ke dashboard Netlify Drop.

### B. Cloudflare Pages
1. Hubungkan repositori GitHub Anda di Cloudflare Pages.
2. Pilih framework preset: `Vite`.
3. Build command: `npm run build`, Output directory: `dist`.

---

## 📁 Struktur Penting Proyek
- `src/` — Komponen aplikasi, navigasi, data sekolah, dan dewan guru.
- `public/` — Berkas publik statis, logo yayasan, foto resmi dewan guru, dan aset gambar.
- `vercel.json` — Konfigurasi build dan SPA routing untuk Vercel.
- `public/_redirects` — Konfigurasi routing rewrite untuk Netlify dan Cloudflare Pages.
- `vite.config.ts` — Konfigurasi Vite & Tailwind CSS.
