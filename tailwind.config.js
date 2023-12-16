/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundColor: {
        'purple': '#4c1d95',
        'green':  '#3ab7bf',
      }, 
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#4c1d95',  
        'tahiti': '#3ab7bf',   
        'black':'#030712',
        'green':'#A0F0FA',
      },
    },
  },
  plugins: [],
}

