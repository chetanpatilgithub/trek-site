/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0b1d26",   // deep mountain
          light: "#1b2d36",
          accent: "#ff7849", // sunrise
          text: "#e5e7eb",
        },
      },
    },
  },
  plugins: [],
};
