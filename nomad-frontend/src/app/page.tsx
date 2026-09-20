import type { Product, Category } from "@/types";
import { CategoryGrid } from "@/components/layout/category-grid";
import { TrustBar } from "@/components/layout/trust-bar";

// Server Component — fetch langsung di server. Nanti saat SEO digarap,
// ini yang jadi titik utama untuk metadata dinamis per produk/kategori.
async function getData() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!apiUrl) {
    // Guard supaya error-nya jelas kalau .env.local belum diisi,
    // bukan silent fail atau fetch ke "undefined".
    throw new Error(
      "NEXT_PUBLIC_API_URL belum di-set. Isi di .env.local, contoh: http://localhost:3001"
    );
  }

  const [productsRes, categoriesRes] = await Promise.all([
    fetch(`${apiUrl}/products?featured=true`, { cache: "no-store" }),
    fetch(`${apiUrl}/categories`, { cache: "no-store" }),
  ]);

  if (!productsRes.ok || !categoriesRes.ok) {
    throw new Error("Gagal fetch data dari API");
  }

  const products: Product[] = await productsRes.json();
  const categories: Category[] = await categoriesRes.json();

  return { products, categories };
}

export default async function HomePage() {
  const { products, categories } = await getData();

  return (
    <div className="space-y-8">
      <div className="rounded-xl bg-nomad-900 text-nomad-50 p-10">
        <h1 className="text-3xl font-display font-bold">
          Gear You Can Trust, Adventures You&apos;ll Love.
        </h1>
        <p className="mt-2 text-nomad-200">
          Premium outdoor gear for every journey.
        </p>
      </div>

      <CategoryGrid categories={categories} />

      <section>
        <h2 className="text-lg font-semibold mb-4">Recommended For You</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-xl border border-nomad-100 bg-white p-3"
            >
              <div className="aspect-square rounded-lg bg-nomad-100 mb-3" />
              <p className="font-medium text-sm">{product.name}</p>
              <p className="text-nomad-600 text-sm">
                ${product.price.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </section>

      <TrustBar />
    </div>
  );
}
