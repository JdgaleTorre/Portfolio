/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563EB", // blue-600
          dark: "#1E40AF", // blue-800
        },
        accent: {
          DEFAULT: "#F59E0B", // amber-500
          dark: "#B45309", // amber-700
        },
        background: "#F9FAFB", // gray-50
        surface: "#FFFFFF", // white cards
        text: "#111827", // gray-900
      },
    },
  },
  plugins: [],
};
