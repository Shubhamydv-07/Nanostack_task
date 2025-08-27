/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      screens: {
        'tablet': { 'max': '1040px' }, // applies when width <= 1040px
      }
    },
  },
  plugins: [],
}