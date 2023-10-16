/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red': '#ce0033',
        'gray': '#f0f0f0'
      },
    },
  },
  plugins: [],
}

