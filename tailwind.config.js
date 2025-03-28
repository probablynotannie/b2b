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
        header: '#1e293b', // Gris oscuro de navbar 
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
        '.btn_accesorios': {
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
        '.btn_primario': {
          backgroundColor: '#ff8c4c',
        },
        '.btn_primario:hover': {
          backgroundColor: '#f16b23',
        },
        '.btn_oscuro': {
          backgroundColor: '#384454',
        },
        '.btn_oscuro:hover': {
          backgroundColor: '#404d5f',
        },
        '.btn_muted': {
          backgroundColor: '#98a4bc',
        },
        '.btn_muted:hover': {
          backgroundColor: '#8792aa',
        },
        '.btn_muted_dark': {
          backgroundColor: '#435163',
        },
        '.btn_muted_dark:hover': {
          backgroundColor: '#384454',
        },
        '.btn_buscador_con_icono_accesorios': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0.75rem 1.5rem',
          height: '40px',
          fontWeight: '700',
          borderRadius: '0.5rem',
          color: 'white',
          textAlign: 'center',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
        '.btn_buscador_con_icono': {
          backgroundColor: '#1e293b',
        },
        '.btn_buscador_con_icono_dark': {
          backgroundColor: '#10142c',
        },
        '.btn_buscador_con_icono:hover': {
          backgroundColor: '#10142c',
        },
      })
    },
    require('flowbite/plugin'),
    flowbite.plugin(),
    require('tailwindcss-animated')
  ],
};