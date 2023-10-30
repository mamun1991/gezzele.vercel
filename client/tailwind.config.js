/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      transitionProperty: {
        height: "height",
      },
      animation: {
        fade: "fade .5s ease-in-out 1",
        fade1: "fade1 .5s ease-in-out 1",
      },
      keyframes: {
        fade: {
          "0%": {
            opacity: 0.1,
          },
          "100%": {
            opacity: 1,
          },
        },
        fade1: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
