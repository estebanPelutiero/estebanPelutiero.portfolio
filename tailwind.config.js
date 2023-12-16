const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */

export default withMT({

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {

    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'mulish': ['Mulish', 'sans-serif']
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'purple': '#B809C3',
    },

    extend: {},
  },
  plugins: [],
});