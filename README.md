# Nomad Outdoor Rental

Nomad adalah proyek prototype aplikasi rental & e-commerce peralatan outdoor yang dibangun dengan Next.js. Aplikasi ini menampilkan pengalaman belanja produk outdoor seperti tenda, backpack, sleeping bag, perlengkapan masak, dan aksesoris outdoor dengan konsep modern yang siap dikembangkan lebih lanjut.

Proyek ini dibuat sebagai studi kasus frontend modern yang menggabungkan App Router Next.js, Tailwind CSS, state management, dan integrasi API sementara berbasis json-server.

## Fitur utama

- Pencarian dan browsing produk outdoor
- Layout modern dan responsive
- Cart / keranjang belanja dengan state management
- Flow checkout dan rental-oriented UI
- Struktur frontend siap dikembangkan ke backend real atau fitur autentikasi
- Arsitektur component-based dengan pola reusable UI

## Tech stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui pattern
- TanStack Query
- Zustand
- React Hook Form + Zod
- json-server (API sementara)

## Struktur repository

```bash
nomad-outdoor-rental/
├─ README.md
├─ nomad-frontend/                  # aplikasi frontend utama
│  ├─ app/
│  ├─ components/
│  ├─ hooks/
│  ├─ lib/
│  ├─ public/
│  ├─ store/
│  ├─ types/
│  ├─ data.json
│  ├─ package.json
│  └─ README.md
└─ ...
```

## Quick start

### 1. Masuk ke folder frontend

```bash
cd nomad-frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Jalankan API sementara dengan json-server

```bash
npx json-server --watch data.json --port 3001
```

### 4. Siapkan environment variable

Buat file `.env.local` dengan isi berikut:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### 5. Jalankan aplikasi

```bash
npm run dev
```

Buka: http://localhost:3000

## Catatan penting

- Proyek ini masih dalam tahap prototype / development.
- Auth dan flow user belum sepenuhnya dibuat.
- API saat ini masih menggunakan `json-server` sebagai simulasi backend.
- Jika ingin migrasi ke backend nyata, cukup ganti base URL API dan tetap gunakan struktur frontend yang sudah dibuat.

## Roadmap

- Produk detail page
- Shop / category page
- Cart dan checkout flow
- Login / register
- Transaksi dan order history
- Integrasi backend produksi
- SEO dan metadata halaman

## Lisensi

Belum ditentukan. Tambahkan file `LICENSE` jika proyek akan dipublikasikan secara formal.

## Referensi tambahan

- Frontend documentation: `nomad-frontend/README.md`
