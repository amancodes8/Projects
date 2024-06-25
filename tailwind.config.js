/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'], // Example for Google Font
        custom: ['MyCustomFont', 'sans-serif'], // Example for Local Font
      },
    },
  },
  plugins: [],
}

