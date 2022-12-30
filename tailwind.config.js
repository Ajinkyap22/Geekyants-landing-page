const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-display)", ...fontFamily.sans],
      },
      colors: {
        primary: "#CA0515",
      },
      keyframes: {
        // text should fade in like a typewriter
        slideIn: {
          "0%": { width: "0%", color: "#d1d5db", opacity: 1 },
          "5%": { width: "100%", color: "#000" },
          "16%": { opacity: 0, color: "#d1d5db" },
        },
      },
      animation: {
        slideIn: "slideIn 14s linear infinite",
        "slideIn-fast": "slideIn 14s linear 2s infinite",
        "slideIn-normal": "slideIn 14s linear 4.4s infinite",
        "slideIn-slow": "slideIn 14s linear 6.9s infinite",
        "slideIn-slower": "slideIn 14s linear 9.2s infinite",
        "slideIn-slowest": "slideIn 14s linear 11.6s infinite",
      },
    },
  },
  plugins: [],
};
