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
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
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