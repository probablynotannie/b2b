import flowbite from "flowbite-react/tailwind";

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
    function ({ addComponents }) {
      addComponents({
        '.smooth': {
          transition: 'all 0.3s ease',
        },
        '.btn': {
          backgroundColor: '#ff8c4c',
          padding: '0.75rem 1.5rem',
          fontWeight: '700',
          borderRadius: '0.5rem',
          color: 'white',
          textAlign: 'center',
          cursor: 'pointer',
          display: 'inline-block',
          transition: 'background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
        '.btn:hover': {
          backgroundColor: '#f16b23',
        },
      })
    },
    require('flowbite/plugin'),
    flowbite.plugin(),
    require('tailwindcss-animated')
  ],
};