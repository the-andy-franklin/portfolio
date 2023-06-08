/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontWeight: {
        thin: 100,
        light: 300,
      },
      margin: {
        '0': '0'
      },
      colors: {
        primary: "#030C12",
        secondary: "#A7D3EF",
        tertiary: "#0D3249",
        "black-100": "#071924",
        "black-200": "#0A2536",
        "white-100": "#f3f3f3",
        "purple3": "#217DB6",
        "purple2": "#2A95D8"
      },
      boxShadow: {
        card: "0px 35px 120px -15px #144B6D",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.jpg')",
      },
    },
  },
  plugins: [],
};
