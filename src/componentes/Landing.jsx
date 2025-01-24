import { useNavigate } from "react-router-dom";
function Landing() {
  const navigate = useNavigate();
  const imagenes = [
    {
      url: "/banner_hoteles.jpg",
      texto: "Hoteles",
      inner: "Hoteles",
      route: "/hoteles",
    },
    {
      url: "/banner_avion.jpg",
      texto: "Hotel + vuelo",
      inner: "Hotel + Vuelo",
      route: "/vuelohotel",
    },
    {
      url: "/banners/banner_loros.jpg",
      texto: "Hotel + actividades",
      inner: "Hotel + actividades",
      route: "/hotelmasactividades",
    },
    {
      url: "/banners/ferry.webp",
      texto: "Hotel + Ferry",
      inner: "Hotel + Ferry",
      route: "/hotelmasferris",
    },
    {
      url: "/banner_coches.jpg",
      texto: "Coches",
      inner: "Coches",
      route: "/coches",
    },
    {
      url: "/banner_ferris.jpg",
      texto: "Ferris",
      inner: "Ferris",
      route: "/ferris",
    },
    {
      url: "/banner_trenes.jpeg",
      texto: "Trenes",
      inner: "Trenes",
      route: "/trenes",
    },
    {
      url: "/banner_avion.jpg",
      texto: "Vuelos",
      inner: "Vuelos",
      route: "/vuelos",
    },
    {
      url: "/banner_entradas.jpg",
      texto: "Entradas",
      inner: "Entradas",
      route: "/entradas",
    },
    {
      url: "/banners/banner_loros.jpg",
      texto: "Tickets",
      inner: "Tickets",
      route: "/tickets",
    },
    {
      url: "/banner_destinos.jpg",
      texto: "Destinos",
      inner: "Destinos",
      route: "/destinos",
    },
    {
      url: "/banner_circuitos.jpg",
      texto: "Circuitos",
      inner: "Circuitos",
      route: "/circuitos",
    },
    {
      url: "/banner_seguros.jpg",
      texto: "Seguros",
      inner: "Seguros",
      route: "/seguros",
    },
    {
      url: "/banner_cruise.jfif",
      texto: "Cruceros",
      inner: "Cruceros",
      route: "/cruceros",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-0.5 flex-grow lg:-mb-16">
      {imagenes.map((img, index) => (
        <div
          key={index}
          className={`relative transition bg-cover border-1 border-slate-100 bg-center cursor-pointer flex items-center justify-center text-white font-semibold text-lg ${
            index >= imagenes.length - (imagenes.length % 4) && "md:col-span-2"
          }`}
          style={{ backgroundImage: `url(${img.url})` }}
          onClick={() => navigate(img.route)}
        >
          <div className="absolute inset-0 bg-black dark:bg-opacity-25  dark:bg-black bg-opacity-20 hover:bg-opacity-50 transition duration-300"></div>
          <span className="relative z-10 text-xl">{img.inner}</span>
        </div>
      ))}
    </div>
  );
}
export default Landing;
