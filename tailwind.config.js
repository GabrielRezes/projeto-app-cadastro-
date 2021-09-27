// tailwind.config.js
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      colors: {
        'orange': colors.orange,
        'orangeLight': "#F29843",
        'orangeDark': "#F7540C",
        'white': "#FFF",
        'whiteLight': "#F5F5F5",
        'blueGray': colors.blueGray,
        'coolGray': colors.coolGray,
      },

      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }