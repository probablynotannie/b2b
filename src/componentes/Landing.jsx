import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
function Landing() {
  const navigate = useNavigate();
  const imagenes = [
    {
      url: "/banners/banner_hoteles.webp",
      texto: "Hoteles",
      route: "/hoteles",
    },
    {
      url: "/banners/banner_avion.webp",
      texto: "Hotel + vuelo",
      route: "/vuelohotel",
    },
    {
      url: "/banners/banner_loros.webp",
      texto: "Hotel + actividades",
      route: "/hotelmasactividades",
    },
    {
      url: "/banners/ferry.webp",
      texto: "Hotel + Ferry",
      route: "/hotelmasferris",
    },
    { url: "/banners/banner_coches.webp", texto: "Coches", route: "/coches" },
    { url: "transfers/transfer.webp", texto: "Transfers", route: "/transfers" },
    { url: "/banners/banner_ferris.webp", texto: "Ferris", route: "/ferris" },
    { url: "/banners/banner_trenes.webp", texto: "Trenes", route: "/trenes" },
    { url: "/banners/banner_avion.webp", texto: "Vuelos", route: "/vuelos" },
    {
      url: "/banners/banner_entradas.webp",
      texto: "Entradas",
      route: "/entradas",
    },
    { url: "/banners/banner_loros.webp", texto: "Tickets", route: "/tickets" },
    {
      url: "/banners/banner_destinos.webp",
      texto: "Destinos",
      route: "/destinos",
    },
    {
      url: "/banners/banner_circuitos.webp",
      texto: "Circuitos",
      route: "/circuitos",
    },
    {
      url: "/banners/banner_seguros.webp",
      texto: "Seguros",
      route: "/seguros",
    },
    {
      url: "/banners/banner_cruise.webp",
      texto: "Cruceros",
      route: "/cruceros",
    },
  ];

  const [loaded, setLoaded] = useState(Array(imagenes.length).fill(false));

  useEffect(() => {
    imagenes.forEach((img, index) => {
      const image = new Image();
      image.src = img.url;
      image.onload = () => {
        setLoaded((prev) => {
          const updated = [...prev];
          updated[index] = true;
          return updated;
        });
      };
    });
  }, []);

  return (
    <div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-3 tw-w-full tw-gap-0.5 tw-flex-grow">
      {imagenes.map((img, index) => (
        <div
          key={index}
          className={`tw-relative tw-smooth tw-bg-cover tw-border-1 tw-border-slate-100 tw-bg-center tw-cursor-pointer tw-flex tw-items-end tw-justify-start tw-p-2 tw-text-white tw-font-semibold tw-text-lg tw-h-[120px] sm:tw-h-[160px] md:tw-h-[150px] ${
            index + 1 === imagenes.length && " tw-col-span-2 md:tw-col-span-1"
          }`}
          style={{
            backgroundImage: loaded[index] ? `url(${img.url})` : "none",
          }}
          onClick={() => navigate(img.route)}
        >
          {!loaded[index] && (
            <div className="tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center tw-bg-slate-200">
              <FaSpinner className="tw-animate-spin tw-text-slate-600 tw-text-2xl" />
            </div>
          )}
          <div className="tw-absolute tw-inset-0 tw-bg-black tw-dark:tw-bg-opacity-25 tw-dark:tw-bg-black tw-bg-opacity-20 hover:tw-bg-opacity-50 tw-smooth"></div>
          <span className="tw-relative tw-z-10 tw-text-xl">{img.texto}</span>
        </div>
      ))}
    </div>
  );
}

export default Landing;
