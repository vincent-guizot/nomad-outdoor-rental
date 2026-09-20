import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/types";

/**
 * Icon di sini berasal dari public/icons/categories/*.png
 * (hasil crop manual, bukan generated icon library).
 * Field `category.icon` dari data.json harus match nama file
 * tanpa ekstensi, misal "tents_and_shelters" -> tents_and_shelters.png
 */
export function CategoryGrid({ categories }: { categories: Category[] }) {
  return (
    <section>
      <h2 className="text-sm font-semibold tracking-wide text-nomad-700 mb-4">
        SHOP BY CATEGORY
      </h2>
      <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/categories/${category.slug}`}
            className="flex flex-col items-center gap-2 rounded-xl border border-nomad-100 bg-white p-4 hover:border-nomad-400 hover:shadow-sm transition-all"
          >
            <div className="relative h-10 w-10">
              <Image
                src={`/icons/${category.icon}.png`}
                alt={category.name}
                fill
                className="object-contain"
                sizes="40px"
              />
            </div>
            <span className="text-xs font-medium text-nomad-900 text-center">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
