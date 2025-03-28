import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();
  const imagenes = [
    {
      url: "/banner_hoteles.jpg",
      texto: "Hoteles",
      route: "/hoteles",
    },
    {
      url: "/banner_avion.jpg",
      texto: "Hotel + vuelo",
      route: "/vuelohotel",
    },
    {
      url: "/banners/banner_loros.jpg",
      texto: "Hotel + actividades",
      route: "/hotelmasactividades",
    },
    {
      url: "/banners/ferry.webp",
      texto: "Hotel + Ferry",
      route: "/hotelmasferris",
    },
    {
      url: "/banner_coches.jpg",
      texto: "Coches",
      route: "/coches",
    },
    {
      url: "/banner_coches.jpg",
      texto: "Transfers",
      route: "/transfers",
    },
    {
      url: "/banner_ferris.jpg",
      texto: "Ferris",
      route: "/ferris",
    },
    {
      url: "/banner_trenes.jpeg",
      texto: "Trenes",
      route: "/trenes",
    },
    {
      url: "/banner_avion.jpg",
      texto: "Vuelos",
      route: "/vuelos",
    },
    {
      url: "/banner_entradas.jpg",
      texto: "Entradas",
      route: "/entradas",
    },
    {
      url: "/banners/banner_loros.jpg",
      texto: "Tickets",
      route: "/tickets",
    },
    {
      url: "/banner_destinos.jpg",
      texto: "Destinos",
      route: "/destinos",
    },
    {
      url: "/banner_circuitos.jpg",
      texto: "Circuitos",
      route: "/circuitos",
    },
    {
      url: "/banner_seguros.jpg",
      texto: "Seguros",
      route: "/seguros",
    },
    {
      url: "/banner_cruise.jfif",
      texto: "Cruceros",
      route: "/cruceros",
    },
  ];

  return (
    <div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-3 tw-w-full tw-gap-0.5 tw-flex-grow lg:-tw-mb-16">
      {imagenes.map((img, index) => (
        <div
          key={index}
          className={`tw-relative tw-transition tw-bg-cover tw-border-1 tw-border-slate-100 tw-bg-center tw-cursor-pointer tw-flex tw-items-center tw-justify-center tw-text-white tw-font-semibold tw-text-lg ${
            index + 1 === imagenes.length && " tw-col-span-2 md:tw-col-span-1"
          }`}
          style={{ backgroundImage: `url(${img.url})` }}
          onClick={() => navigate(img.route)}
        >
          <div className="tw-absolute tw-inset-0 tw-bg-black tw-dark:tw-bg-opacity-25 tw-dark:tw-bg-black tw-bg-opacity-20 hover:tw-bg-opacity-50 tw-transition tw-duration-300"></div>
          <span className="tw-relative tw-z-10 tw-text-xl">{img.texto}</span>
        </div>
      ))}
    </div>
  );
}

export default Landing;
