/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'black': '#242424',
      'light-grey': '#D3D3D3',
      'grey': '#F3F3F3',
      'dark-grey': '#6B6B6B',
      'red': '#FF4E4E',
      'red-700': '#D62828',
      'green':'#176e5f',
      'dark-green':'#006353',
      'transparent': 'transparent',
      'twitter': '#1DA1F2',
      'purple': '#8B46FF',
      'light-grey':'#CCCCCC',
      'yellow':'#FFBE28'
    },

    fontSize: {
      'sm': '12px',
      'base': '14px',
      'xl': '16px',
      '2xl': '20px',
      '3xl': '28px',
      '4xl': '38px',
      '5xl': '50px',
    },

    extend: {
      screens:{
        'xs': '480px',      
        'sm': '640px',      
        'md': '768px',    
        'lg': '1024px',     
        'xl': '1280px',     
        '2xl': '1536px',  
      },
      fontFamily: {
        'inter': ["Inter", "sans-serif"],
        'gelasio': ["'Gelasio'", "serif"],
        'nhg': ['"Neue Haas Grotesk"', 'sans-serif'],
      },
      fontWeight: {
        'light': 300,
        'normal': 400,
        'lightbold': 500,
        'semibold': 600,
        'bold': 700,
        'extrabold': 800,
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px rgba(0, 0, 0, 0.15)',
        'dark-xl': '0 8px 15px rgba(0, 0, 0, 0.5)', // Custom dark shadow
      },
    },
  },

  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide::-webkit-scrollbar': {
          display: 'none',
        },
        '.scrollbar-show::-webkit-scrollbar': {
          display: 'auto',
        },
        '.scrollbar-show': {
          overflow: 'auto', /* Show scrollbar in Chrome, Edge, and Safari */
        },
      });
    },
  ],
};
