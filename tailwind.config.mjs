/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Atkinson Hyperlegible", "sans-serif"],
      },
      fontWeight: {
        bold: 700,
        regular: 400,
      },
      dropShadow: {
        glow: "0 0 16px rgba(255,255,255, 0.25)",
      },
    },
  },
  plugins: [],
};
