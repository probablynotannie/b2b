const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',

  content: [
    // ...
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        inputIcon: '#ff8c4c', // Naranja
        CajaForms: '#1e293b', // Gris oscuro
        primary: '#1e293b', // Gris oscuro de navbar 
        secondary: "#ff8c4c", // Naranja
        secondaryDark: "#cf500c", // Naranja
        muted: "#e8ecf4", // Gris apagado
      },
      keyframes: {
        colorChange: {
          '0%': { backgroundColor: 'black' }, // Start with primary color
          '50%': { backgroundColor: 'lightgray' }, // Midway with secondary color
          '100%': { backgroundColor: 'black' }, // End with tertiary color
        },
      },
      animation: {
        colorChange: 'colorChange 5s infinite alternate',
      },
      container: {
        center: true,
        padding: '2vw',
      }
    },
  },
  plugins: [
    // ...
    flowbite.plugin(),
  ],
};