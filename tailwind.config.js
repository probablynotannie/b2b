const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    flowbite.content(),
  ],
  theme: { // defaults to these values
    extend: {
      colors: {
        primary: '#1e293b', //gris oscuro de navbar 
        secondary: "#ff8c4c", //naranja
        muted: "#e8ecf4", //gris apagado
      },
    },
  },
  plugins: [
    // ...
    flowbite.plugin(),
  ],
};