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
      backgroundImage: {
        grid: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e)",
      },
    },
  },
  plugins: [],
};
