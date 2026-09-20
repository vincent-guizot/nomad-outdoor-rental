const API_URL = process.env.NEXT_PUBLIC_API_URL;

/**
 * Fetch wrapper untuk dipakai di CLIENT COMPONENT (via React Query hooks).
 * Untuk SERVER COMPONENT, tetap pakai fetch() langsung di dalam komponennya
 * (lihat src/app/page.tsx) supaya Next.js bisa kontrol caching per-request.
 */
export async function apiClient<T>(
  path: string,
  options?: RequestInit,
): Promise<T> {
  if (!API_URL) {
    throw new Error(
      "NEXT_PUBLIC_API_URL belum di-set. Isi di .env.local, contoh: http://localhost:3775",
    );
  }

  const res = await fetch(`${API_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  if (!res.ok) {
    throw new Error(`API error ${res.status}: ${path}`);
  }

  return res.json();
}
