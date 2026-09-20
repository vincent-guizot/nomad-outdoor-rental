import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api";
import type { Product } from "@/types";

/**
 * Contoh hook client-side pakai React Query. Dipakai di halaman/komponen
 * yang butuh interaktivitas (filter, refetch) — bukan di Server Component
 * (itu langsung fetch() biasa, lihat src/app/page.tsx).
 */
export function useProducts(params?: { category?: string; featured?: boolean }) {
  const query = new URLSearchParams();
  if (params?.category) query.set("category", params.category);
  if (params?.featured) query.set("featured", "true");
  const qs = query.toString();

  return useQuery({
    queryKey: ["products", params],
    queryFn: () => apiClient<Product[]>(`/products${qs ? `?${qs}` : ""}`),
  });
}

export function useProduct(id: number) {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => apiClient<Product>(`/products/${id}`),
    enabled: !!id,
  });
}
