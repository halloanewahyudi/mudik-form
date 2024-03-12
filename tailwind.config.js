/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        brand:{
          1:'#415f5b',
          2:'#9cadaa',
          3:'#f6faf8',
          4:'#b682dd',
          5:'#750ac2'
        }
      }
    },
  },
  plugins: [],
}

