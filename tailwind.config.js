/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'], // Example for Google Font
        custom: ['MyCustomFont', 'sans-serif'], // Example for Local Font
        display: ['Playwrite_ES', 'sans-serif'],
        playwright: ['Playwright', 'serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
      },
    },
  },
  plugins: [],
}

