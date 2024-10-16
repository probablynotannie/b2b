const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
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
        muted: "#e8ecf4", // Gris apagado
      },
    },
  },
  plugins: [
    // ...
    flowbite.plugin(),
  ],
};