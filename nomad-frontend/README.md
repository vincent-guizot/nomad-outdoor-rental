# Nomad Frontend

Frontend Nomad — Outdoor Gear Rental & Shop. Dibangun dengan Next.js App
Router, dikonsumsi bersama `json-server` sebagai API sementara di fase
development.

## Tech Stack

- **Next.js 16 (App Router)** — framework, SSR disiapkan untuk fase SEO nanti.
  Butuh **React 19** (bukan React 18) dan **Node.js 20+** (tested jalan di Node 24).
- **Tailwind CSS** — styling, palette brand di `tailwind.config.ts`
- **shadcn/ui pattern** — komponen UI custom di `src/components/ui`
- **TanStack Query** — data fetching client-side (cart, interaksi)
- **Zustand** — state global client (cart counter, dll)
- **React Hook Form + Zod** — form & validasi (login, register, checkout)
- **Lucide React** — icon set UI umum

## Setup

> **Penting**: kalau sebelumnya sempat `npm install` pakai `next@14` + React 18,
> hapus dulu `node_modules`, `package-lock.json`, dan `.next` sebelum install
> ulang — supaya tidak ada sisa React 18 yang konflik dengan React 19.
> ```bash
> rm -rf node_modules package-lock.json .next
> ```

### 1. Install dependencies

```bash
npm install
```

### 2. Jalankan json-server (API sementara)

Di folder terpisah tempat `data.json` berada:

```bash
npx json-server --watch data.json --port 3001
```

Port bisa berapa saja — sesuaikan saja dengan langkah berikutnya.

### 3. Konfigurasi `.env.local`

File `.env.local` sudah ada dengan default:

```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

**Ganti port sesuai port json-server kamu di step 2.**

### 4. Jalankan dev server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Struktur Folder

```
src/
  app/                  → routes (App Router), tiap folder = 1 halaman
    layout.tsx           → root layout (sidebar + header shell)
    page.tsx              → homepage (Server Component, fetch products)
    providers.tsx          → React Query + theme provider (Client Component)
    globals.css             → Tailwind + CSS variables
  components/
    layout/               → Sidebar, Header (persisten di semua halaman)
    ui/                    → primitives custom (Button, dst — pola shadcn/ui)
  hooks/                  → React Query hooks (use-products, use-cart)
  lib/
    api.ts                 → fetch wrapper client-side ke json-server
    utils.ts                → helper cn() untuk Tailwind
  store/
    cart-store.ts           → Zustand store cart
  types/
    index.ts                 → TypeScript types (Product, User, Order, dst)
                                 mengikuti schema data.json
```

## Catatan Penting

- **Server Component vs Client Component**: halaman yang butuh SEO nanti
  (product detail, homepage, journal) fetch data langsung di Server
  Component pakai `fetch()` biasa (lihat `src/app/page.tsx`). Halaman/
  interaksi yang sifatnya dinamis (cart, checkout, filter) pakai React
  Query hooks di Client Component.
- **SEO ditunda**: metadata per halaman, sitemap, robots.txt, OG image,
  dll sengaja belum digarap. Struktur Server Component sudah siap
  menampungnya nanti tanpa perlu restrukturisasi besar.
- **Auth belum ada**: `userId` untuk cart/order masih hardcode manual
  sampai flow login/register dibangun.
- **Migrasi dari json-server**: karena semua fetch lewat `lib/api.ts`
  (client) atau `fetch()` langsung dengan `NEXT_PUBLIC_API_URL` (server),
  ganti backend nanti cukup ganti base URL — tidak perlu ubah struktur
  komponen.

## Icon Custom

Icon dari `nomad-icons.zip` sudah dipasang di:

- `public/icons/categories/` — 8 icon kategori (Tents, Backpacks, Sleeping,
  Cooking, Clothing, Footwear, Accessories, Tools), dipakai di komponen
  `CategoryGrid` (`src/components/layout/category-grid.tsx`)
- `public/icons/trust/` — 4 icon trust bar (Free Shipping, Easy Returns,
  Support 24/7, Secure Payment), dipakai di komponen `TrustBar`
  (`src/components/layout/trust-bar.tsx`)

Field `icon` di `categories` (data.json) berisi nama file tanpa ekstensi,
misal `"tents_and_shelters"` → di-resolve ke
`/icons/categories/tents_and_shelters.png`.

Sisa icon di `nomad-icons.zip` (Outdoor Feature: Waterproof, Windproof,
dll — dan Activities: Hiking, Kayaking, dst) belum dipasang, tinggal
ditaruh manual di `public/icons/` kalau dibutuhkan di halaman product
detail (specs) atau journal (topic tags).

## Belum Termasuk (Next Steps)

- Halaman Shop, Categories, Product Detail, Cart, Checkout, Rent, Journal,
  Login/Register, Transactions
- shadcn/ui components lain (Dialog, Dropdown, dst) — tinggal tambah sesuai
  kebutuhan halaman
- Auth flow & session
