/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Domain gambar dummy (picsum.photos) untuk dev.
    // Tambahkan domain lain di sini kalau sumber gambar produk berubah.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
};

export default nextConfig;
