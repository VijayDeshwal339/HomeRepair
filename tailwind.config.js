/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        'scale-up-and-down': 'scaleUpAndDown 2s infinite'
      }
    },
  },
  plugins: [],
}