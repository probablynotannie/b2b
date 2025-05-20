import { useState, useEffect } from "react";
import { FaInfoCircle } from "react-icons/fa";

function SeleccionHoteles() {
  const [seleccion, setSeleccion] = useState(null);
  const [modalHotel, setModalHotel] = useState(null);
  const [paginaActual, setPaginaActual] = useState(1);
  const hotelesPorPagina = 5;
  const hoteles = [
    {
      id: 1,
      nombre: "Hotel Barceló Raval",
      descripcion:
        "Un hotel moderno en el corazón de Barcelona con vistas panorámicas.",
      imagenes: ["/hotel1.jpg", "/hotel1b.jpg"],
      imagenMiniatura: "/hotel1.jpg",
      regimenes: [{ nombre: "Desayuno", extra: 15 }],
    },
    {
      id: 2,
      nombre: "Meliá Madrid Princesa",
      descripcion:
        "Hotel de lujo con habitaciones amplias y servicios exclusivos.",
      imagenes: ["/hotel2.jpg", "/hotel2b.jpg"],
      imagenMiniatura: "/hotel2.jpg",
      regimenes: [
        { nombre: "Todo incluido", extra: 50 },
        { nombre: "Media pensión", extra: 35 },
        { nombre: "Desayuno", extra: 18 },
      ],
    },
    {
      id: 3,
      nombre: "NH Collection Sevilla",
      descripcion: "Perfecto para negocios o escapadas urbanas en Sevilla.",
      imagenes: ["/hotel3.jpg", "/hotel3b.jpg"],
      imagenMiniatura: "/hotel3.jpg",
      regimenes: [
        { nombre: "Todo incluido", extra: 40 },
        { nombre: "Media pensión", extra: 25 },
        { nombre: "Desayuno", extra: 12 },
      ],
    },
    {
      id: 4,
      nombre: "Hotel Eurostars Málaga",
      descripcion: "Ubicación estratégica y diseño vanguardista.",
      imagenes: ["/hotel4.jpg", "/hotel4b.jpg"],
      imagenMiniatura: "/hotel4.jpg",
      regimenes: [
        { nombre: "Todo incluido", extra: 38 },
        { nombre: "Desayuno", extra: 10 },
      ],
    },
    {
      id: 5,
      nombre: "Hotel Ilunion Valencia",
      descripcion: "Cercano a la Ciudad de las Artes y las Ciencias.",
      imagenes: ["/hote3.jpg", "/hotel3.jpg"],
      imagenMiniatura: "/hotel1.jpg",
      regimenes: [
        { nombre: "Todo incluido", extra: 35 },
        { nombre: "Media pensión", extra: 20 },
        { nombre: "Desayuno", extra: 8 },
      ],
    },
    {
      id: 6,
      nombre: "Hotel Hesperia Bilbao",
      descripcion: "Colores vibrantes frente al museo Guggenheim.",
      imagenes: ["/hotel1.jpg", "/hotel1.jpg"],
      imagenMiniatura: "/hotel3.jpg",
      regimenes: [
        { nombre: "Todo incluido", extra: 48 },
        { nombre: "Media pensión", extra: 28 },
        { nombre: "Desayuno", extra: 14 },
      ],
    },
    {
      id: 7,
      nombre: "Silken Puerta América",
      descripcion: "Hotel de diseño único en Madrid.",
      imagenes: ["/hotel2.jpg", "/hotel2.jpg"],
      imagenMiniatura: "/hotel2.jpg",
      regimenes: [
        { nombre: "Todo incluido", extra: 55 },
        { nombre: "Media pensión", extra: 36 },
        { nombre: "Desayuno", extra: 20 },
      ],
    },
    {
      id: 8,
      nombre: "Catalonia Santa Justa",
      descripcion: "Con piscina en la azotea y fácil acceso al AVE.",
      imagenes: ["/hotel1.jpg", "/hotel2.jpg"],
      imagenMiniatura: "/hotel4.jpg",
      regimenes: [
        { nombre: "Todo incluido", extra: 42 },
        { nombre: "Media pensión", extra: 26 },
        { nombre: "Desayuno", extra: 13 },
      ],
    },
    {
      id: 9,
      nombre: "Hotel Las Arenas Valencia",
      descripcion: "Lujo frente a la playa de la Malvarrosa.",
      imagenes: ["/hotel2.jpg", "/hotel3.jpg"],
      imagenMiniatura: "/hotel1.jpg",
      regimenes: [
        { nombre: "Todo incluido", extra: 60 },
        { nombre: "Media pensión", extra: 40 },
        { nombre: "Desayuno", extra: 25 },
      ],
    },
    {
      id: 10,
      nombre: "Hotel Donostia San Sebastián",
      descripcion: "Elegancia en la costa norte.",
      imagenes: ["/hotel1.jpg", "/hotel2.jpg"],
      imagenMiniatura: "/hotel2.jpg",
      regimenes: [
        { nombre: "Todo incluido", extra: 52 },
        { nombre: "Media pensión", extra: 32 },
        { nombre: "Desayuno", extra: 18 },
      ],
    },
  ];

  const hotelesPagina = hoteles.slice(
    (paginaActual - 1) * hotelesPorPagina,
    paginaActual * hotelesPorPagina
  );

  const handleSelect = (hotelId, regimen) => {
    setSeleccion({ hotelId, regimen });
  };

  useEffect(() => {
    if (modalHotel) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalHotel]);

  return (
    <div className="tw-overflow-x-auto tw-my-4 tw-bg-slate-100 dark:tw-bg-slate-800 tw-rounded-lg tw-shadow tw-p-2 tw-pb-5">
      <div className="tw-font-bold tw-text-slate-600 dark:tw-bg-slate-900 dark:tw-text-slate-200 tw-p-2 tw-rounded-t-lg tw-flex tw-justify-between tw-items-center tw-border-secondary dark:tw-border-secondaryDark tw-border-b-2">
        Seleccion de hotel
      </div>
      <table className="tw-w-full tw-text-sm tw-text-left tw-text-white">
        <tbody>
          {hotelesPagina.map((hotel) => (
            <tr
              key={hotel.id}
              className={`tw-border-b  ${
                seleccion?.hotelId === hotel.id
                  ? "tw-bg-elegido dark:tw-bg-slate-900 tw-border-secondary dark:tw-border-green-500"
                  : "tw-border-slate-200 dark:tw-border-slate-600"
              }`}
            >
              <td className="tw-px-4 tw-py-4">
                <div className="tw-flex tw-items-center tw-gap-4">
                  <img
                    src={hotel.imagenMiniatura}
                    alt={hotel.nombre}
                    className="tw-w-28 tw-h-20 tw-object-cover tw-rounded-lg tw-shadow"
                  />
                  <div className="tw-flex-1">
                    <h3 className="tw-text-base tw-font-semibold tw-text-slate-800 dark:tw-text-slate-200">
                      {hotel.nombre}
                    </h3>
                    <p className="tw-text-xs tw-text-slate-500 dark:tw-text-slate-400">
                      {hotel.regimenes.length}{" "}
                      {hotel.regimenes.length === 1 ? "Regimen" : "Regimenes"}{" "}
                      disponible →
                    </p>
                  </div>
                </div>
              </td>

              <td className="tw-px-4 tw-py-2">
                <div className="tw-flex tw-gap-2 tw-flex-wrap">
                  {hotel.regimenes.map((regimen) => {
                    const isSelected =
                      seleccion?.hotelId === hotel.id &&
                      seleccion?.regimen === regimen.nombre;
                    return (
                      <button
                        key={regimen.nombre}
                        onClick={() => handleSelect(hotel.id, regimen.nombre)}
                        className={`tw-px-2 tw-py-1 tw-rounded tw-text-xs ${
                          isSelected
                            ? "tw-bg-secondary dark:tw-bg-secondaryDark tw-text-white tw-font-bold"
                            : "tw-bg-slate-400 dark:tw-bg-slate-600 dark:hover:tw-bg-slate-500"
                        }`}
                      >
                        {regimen.nombre} +{regimen.extra}€
                      </button>
                    );
                  })}
                </div>
              </td>
              <td className="tw-px-4 tw-py-2">
                <button
                  onClick={() => setModalHotel(hotel)}
                  className="tw-text-secondary hover:tw-scale-105 tw-text-2xl tw-smooth"
                >
                  <FaInfoCircle />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="tw-flex tw-justify-center tw-gap-2 tw-mt-4">
        {Array.from({
          length: Math.ceil(hoteles.length / hotelesPorPagina),
        }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setPaginaActual(idx + 1)}
            className={`tw-px-3 tw-py-1 tw-rounded ${
              paginaActual === idx + 1
                ? "tw-bg-secondary dark:tw-bg-secondaryDark tw-text-white"
                : "tw-bg-slate-200 hover:tw-bg-slate-300 dark:tw-bg-slate-600 dark:hover:tw-bg-slate-500 tw-smooth"
            }`}
          >
            {idx + 1}
          </button>
        ))}
      </div>
      {modalHotel && (
        <div className="tw-fixed tw-inset-0 tw-bg-black/70 tw-flex tw-pt-16 tw-items-start tw-justify-center tw-z-50">
          <div className="tw-bg-white tw-w-[60vw] tw-rounded-xl tw-max-w-lg tw-p-6 tw-relative">
            <button
              onClick={() => setModalHotel(null)}
              className="tw-absolute tw-top-3 tw-right-3 tw-text-slate-500 hover:tw-text-red-500 tw-text-lg"
            >
              ✕
            </button>
            <h2 className="tw-text-xl tw-font-bold tw-mb-2">
              {modalHotel.nombre}
            </h2>
            <p className="tw-text-slate-700 tw-mb-4">
              {modalHotel.descripcion}
            </p>
            <div className="tw-grid tw-grid-cols-2 tw-gap-2">Weeeeeeee</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SeleccionHoteles;
