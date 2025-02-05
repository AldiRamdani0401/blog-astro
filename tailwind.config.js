/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Pastikan dark mode menggunakan class
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx,astro}", // Pastikan semua file Astro terdeteksi
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
