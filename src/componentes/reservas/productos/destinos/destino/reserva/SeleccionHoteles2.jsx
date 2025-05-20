import { useState, useEffect } from "react";
import { FaArrowRight, FaInfoCircle } from "react-icons/fa";

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
        { nombre: "Desayuno", extra: 18 },
        { nombre: "Media pensión", extra: 35 },
        { nombre: "Todo incluido", extra: 50 },
        { nombre: "Regimen Especial", extra: 102 },
        { nombre: "Segun programa", extra: 86 },
        { nombre: "Pension completa", extra: 70 },
        { nombre: "HM", extra: 20 },
        { nombre: "Regimen raro", extra: 60 },
        { nombre: "Especial verano", extra: 85 },
        { nombre: "Especial Invierno", extra: 75 },
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
              <td className="tw-px-4 tw-py-4 tw-align-top tw-min-w-[300px]">
                <div className="tw-flex tw-gap-4">
                  <img
                    src={hotel.imagenMiniatura}
                    alt={hotel.nombre}
                    className="tw-w-28 tw-h-20 tw-object-cover tw-rounded-lg tw-shadow"
                  />
                  <div className="tw-flex flex-col tw-justify-start">
                    <div className="tw-flex tw-gap-1 tw-items-center">
                      <button
                        onClick={() => setModalHotel(hotel)}
                        className="tw-text-secondary hover:tw-scale-110 tw-text-lg tw-smooth"
                      >
                        <FaInfoCircle />
                      </button>
                      <h3 className="tw-text-base tw-font-semibold tw-text-slate-800 dark:tw-text-slate-200">
                        {hotel.nombre}
                      </h3>
                    </div>
                    <p className="tw-text-xs tw-text-slate-500 dark:tw-text-slate-400">
                      {hotel.regimenes.length}{" "}
                      {hotel.regimenes.length === 1 ? "Regimen" : "Regimenes"}{" "}
                      disponible{" "}
                      <FaArrowRight className="tw-inline tw-text-slate-500 dark:tw-text-slate-400" />
                    </p>
                  </div>
                </div>
              </td>
              <td className="tw-px-4 tw-py-4 tw-align-top">
                <span className="tw-text-slate-700 dark:tw-text-slate-100 tw-block tw-mb-2">
                  Elegir régimen
                </span>
                <div className="tw-grid tw-grid-cols-2 tw-gap-3 ">
                  {hotel.regimenes.map((regimen) => {
                    const isSelected =
                      seleccion?.hotelId === hotel.id &&
                      seleccion?.regimen === regimen.nombre;
                    return (
                      <label
                        key={regimen.nombre}
                        className={`tw-cursor-pointer tw-p-3 tw-rounded-lg tw-border tw-flex tw-justify-between tw-items-center tw-text-xs tw-select-none ${
                          isSelected
                            ? "tw-border-secondary tw-bg-secondary dark:tw-bg-secondaryDark/30 tw-font-semibold"
                            : "tw-bg-slate-200 hover:tw-bg-slate-300 dark:tw-bg-slate-700 dark:tw-text-slate-300 tw-text-black  tw-border-slate-300 dark:tw-border-slate-600 dark:hover:tw-bg-slate-900 tw-smooth"
                        }`}
                      >
                        <input
                          type="radio"
                          name={`regimen-${hotel.id}`}
                          className="tw-hidden"
                          checked={isSelected}
                          onChange={() =>
                            handleSelect(hotel.id, regimen.nombre)
                          }
                        />
                        <span>{regimen.nombre}</span>
                        <span className="tw-font-bold">+{regimen.extra}€</span>
                      </label>
                    );
                  })}
                </div>
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
                : "tw-bg-slate-200 hover:tw-bg-slate-300 dark:tw-bg-slate-600 dark:hover:tw-bg-slate-500 dark:tw-text-slate-300 tw-smooth"
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
