/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gabarito: ["Gabarito", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        marker: ["Permanent Marker", "cursive"],
        paytone: ["Paytone One", "sans-serif"],
      },
    },
  },

  plugins: [require("daisyui")],
};
