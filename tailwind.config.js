/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "600px",
        md: "900px",
        lg: "1200px",
        xl: "1536px",
      },
      backgroundColor: {
        dark: "#181818",
        light: "#F9F6EE",
        alabaster: "#ffffff",
        pewter: "#333333",
      },
      textColor: {
        light: "#36454F",
        dark: "#F9F6EE",
      },
      borderColor: {
        light: "#36454F",
        dark: "#F9F6EE",
      },
      colors: {
        light: "#36454F",
        dark: "#F9F6EE",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
};
