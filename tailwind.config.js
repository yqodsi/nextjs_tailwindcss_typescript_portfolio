/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#3C3C3C",
        secondary: "#a8f346",
        third: "#F4F4F4",
      },
    },
  },
  plugins: [],
};
