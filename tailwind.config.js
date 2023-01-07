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
        "sans-light": ["var(--font-display-light)", ...fontFamily.sans],
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
        fade: {
          "0%": {
            "-webkit-text-fill-color": "transparent",
            background:
              "linear-gradient(90deg, rgba(230,10,10,1) 0%, rgba(242,5,233,1) 50%)",
            "-webkit-background-clip": "text",
            opacity: 0.75,
          },
          "15%": {
            opacity: 1,
          },
          "44%": {
            "-webkit-text-fill-color": "transparent",
            background:
              "linear-gradient(90deg, rgb(255 40 40) 0%, rgb(52 5 50) 50%)",
            "-webkit-background-clip": "text",
            opacity: 0.75,
          },
          "45%": {
            "-webkit-text-fill-color": "#000",
            background: "transparent",
          },
        },
        "fade-slow": {
          "0%": {
            "-webkit-text-fill-color": "transparent",
            background:
              "linear-gradient(90deg, rgba(110,194,244,1) 0%, rgba(112,64,255,1) 50%)",
            "-webkit-background-clip": "text",
            opacity: 0.75,
          },
          "15%": {
            "-webkit-text-fill-color": "transparent",
            background:
              "linear-gradient(90deg, rgba(110,194,244,1) 0%, rgba(112,64,255,1) 50%)",
            "-webkit-background-clip": "text",
            opacity: 1,
          },
          "44%": {
            "-webkit-text-fill-color": "transparent",
            background:
              "linear-gradient(90deg, rgb(0 28 44) 0%, rgba(112,64,255,1) 50%)",
            "-webkit-background-clip": "text",
            opacity: 0.75,
          },
          "45%": {
            "-webkit-text-fill-color": "#000",
            background: "transparent",
          },
        },
        "fade-slower": {
          "0%": {
            "-webkit-text-fill-color": "transparent",
            background:
              "linear-gradient(90deg, rgba(112,65,255,1) 0%, rgba(225,26,164,1) 50%)",
            "-webkit-background-clip": "text",
            opacity: 0.75,
          },
          "15%": {
            "-webkit-text-fill-color": "transparent",
            background:
              "linear-gradient(90deg, rgba(112,65,255,1) 0%, rgba(225,26,164,1) 50%)",
            "-webkit-background-clip": "text",
            opacity: 1,
          },
          "44%": {
            "-webkit-text-fill-color": "transparent",
            background:
              "linear-gradient(90deg, rgb(38 0 156) 0%, rgba(225,26,164,1) 50%)",
            "-webkit-background-clip": "text",
            opacity: 0.75,
          },
          "45%": {
            "-webkit-text-fill-color": "#000",
            background: "transparent",
          },
        },
      },
      animation: {
        // slide
        slideIn: "slideIn 14s linear infinite",
        "slideIn-fast": "slideIn 14s linear 2s infinite",
        "slideIn-normal": "slideIn 14s linear 4.4s infinite",
        "slideIn-slow": "slideIn 14s linear 6.9s infinite",
        "slideIn-slower": "slideIn 14s linear 9.2s infinite",
        "slideIn-slowest": "slideIn 14s linear 11.6s infinite",
        // fade
        fade: "fade 12s infinite ease !important",
        "fade-slow": "fade-slow 12s 3.75s infinite ease !important",
        "fade-slower": "fade-slower 12s 7.75s infinite ease !important",
      },
      boxShadow: {
        card: "0 10px 30px #0000000f",
        "card-hover":
          "0 2px 2px rgb(45 45 45 / 5%), 0 4px 4px rgb(49 49 49 / 5%), 0 8px 8px rgb(42 42 42 / 5%), 0 16px 16px rgb(32 32 32 / 5%), 0 32px 32px rgb(49 49 49 / 5%), 0 64px 64px rgb(35 35 35 / 5%);",
        navbar:
          "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px",
      },
      textColor: {
        "nav-link": "#34333a",
        light: "#C0C0C4",
      },
      backgroundColor: {
        dark: "#222323",
        darkBlue: "#2A2B3B",
      },
    },
  },
  plugins: [],
};
