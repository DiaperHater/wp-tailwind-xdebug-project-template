/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: [
    "./*.php",
    "./template-parts/**/*.php",
    "./assets/js/*.js",
  ],
  safelist: [],
  theme: {
    extend: {
      fontFamily: {},
      colors: {},
      screens: {},
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
