/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        '0': '0',
      },
      fontFamily:{
        Montserrat:["Montserrat", "sans-serif"],
        Satisfy:["Satisfy", "cursive"]
      },
      container:{
        'link':''
      },
      screens: {
        'small': {'max': '639px'},
      }
    },
  },
  
  plugins: [],
}

