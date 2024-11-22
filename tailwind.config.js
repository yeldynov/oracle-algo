/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'Nunito', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
