import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  prefix: 'tw-',
  content: [
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
        elegido: '#ffecdc', // Gris oscuro de navbar 
        secondary: "#ff8c4c", // Naranja
        secondaryDark: "#ff8c4c", // Naranja
        danger: "#f84048", // texto rojo fondo
        danger_text: "#ea756f", //texto rojo
        success: "",
        text: "",
        text_dark: "",
        muted: "#e8ecf4", // Gris apagado
      },
      keyframes: {
        colorChange: {
          '0%': { backgroundColor: 'black' },
          '50%': { backgroundColor: 'lightgray' },
          '100%': { backgroundColor: 'black' },
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
    require('flowbite/plugin'),
    flowbite.plugin(),
    require('tailwindcss-animated')
  ],
};