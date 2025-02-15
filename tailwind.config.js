const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
const {join} = require("path");
module.exports = {
  darkMode: ['class'],
  safelist: ['dark'],
  prefix: '',

  content: [
    join(__dirname, 'index.html'),
    join(__dirname, 'src/**/*!(*.stories|*.spec).{vue,ts,tsx,js,jsx}')
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.slate['950'],
        secondary: colors.slate['100'],
      },
    },
  },
  plugins: [],
}
