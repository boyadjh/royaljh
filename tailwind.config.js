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
        dark: colors.stone['900'],
        light: colors.stone['100']
      },
    },
  },
  plugins: [],
}
