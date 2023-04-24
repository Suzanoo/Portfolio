/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Orbitron",
      secondary: "Rajdhani",
      tertiary: "Aldrich",
      aries: "American Typewriter",
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#0a0a0a",
        accent: "#B809C3",
        acmilan: "#fb090b",
      },
      backgroundImage: {
        lg: "url('../img/bg.jpg')",
      },
    },
  },
  plugins: [],
};
