const { palette } = require("./src/app/(config)/palette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...palette,
      transparent: "transparent",
      black: "#000",
      white: "#fff",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-ubuntu)"],
      },
    },
  },
  plugins: [],
};
