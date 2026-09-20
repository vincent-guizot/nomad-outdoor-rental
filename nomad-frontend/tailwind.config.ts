import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette diambil dari mockup: sidebar hijau tua, aksen army green, background krem.
        // Sesuaikan lagi kalau ada brand guideline final dari logo.
        nomad: {
          950: "#101c14", // sidebar / dark background
          900: "#16241c",
          800: "#1f3326",
          700: "#2c4530",
          600: "#3d5c3f", // primary button green
          500: "#4f7052",
          400: "#7b9a7d",
          200: "#c7d4c3",
          100: "#eef1e9",
          50: "#f7f5ef", // page background (cream)
        },
        accent: {
          DEFAULT: "#c9a876", // tan / gold accent
          light: "#e2d3b2",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "0.875rem",
      },
    },
  },
  plugins: [],
};

export default config;
