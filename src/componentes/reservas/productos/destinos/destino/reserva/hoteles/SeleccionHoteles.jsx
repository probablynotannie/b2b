import { useState, useEffect } from "react";
import { FaArrowRight, FaInfoCircle } from "react-icons/fa";
function SeleccionHoteles({ hoteles, seleccion, setSeleccion, titulo }) {
  const [modalHotel, setModalHotel] = useState(null);
  const [paginaActual, setPaginaActual] = useState(1);
  const hotelesPorPagina = 5;
  const hotelesPagina = hoteles.slice(
    (paginaActual - 1) * hotelesPorPagina,
    paginaActual * hotelesPorPagina
  );

  const handleSelect = (hotelId, regimen, hotelNombre) => {
    setSeleccion({ hotelId, regimen, hotelNombre });
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
        Selección de hotel de {titulo} 
      </div>
      <table className="tw-w-full tw-text-sm tw-text-left tw-text-white tw-hidden md:tw-table">
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
                    className="tw-w-32 tw-h-24 tw-object-cover tw-rounded-lg tw-shadow hover:tw-scale-110 tw-smooth"
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
                      {hotel.regimenes.length === 1 ? "Régimen" : "Régimenes"}{" "}
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
                <div className="tw-grid xl:tw-grid-cols-2 tw-gap-3 ">
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
                            handleSelect(hotel.id, regimen.nombre, hotel.nombre)
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
      <div className="md:tw-hidden tw-flex tw-flex-col tw-gap-4 tw-p-2">
        {hotelesPagina.map((hotel) => {
          const isSelectedHotel = seleccion?.hotelId === hotel.id;
          return (
            <div
              key={hotel.id}
              className={`tw-bg-white dark:tw-bg-slate-900 tw-rounded-lg tw-shadow tw-p-4 tw-flex tw-flex-col tw-gap-3 ${
                isSelectedHotel ? "tw-border-2 tw-border-secondary" : ""
              }`}
            >
              <div className="tw-flex tw-gap-4">
                <img
                  src={hotel.imagenMiniatura}
                  alt={hotel.nombre}
                  className="tw-w-32 tw-h-20 tw-object-cover tw-rounded-lg"
                />
                <div className="tw-flex-1">
                  <div className="tw-flex tw-justify-between tw-items-center tw-mb-1">
                    <h3 className="tw-text-base tw-font-semibold tw-text-slate-800 dark:tw-text-slate-200">
                      {hotel.nombre}
                    </h3>
                    <button
                      onClick={() => setModalHotel(hotel)}
                      className="tw-text-secondary hover:tw-scale-110 tw-text-lg tw-smooth"
                    >
                      <FaInfoCircle />
                    </button>
                  </div>
                  <p className="tw-text-xs tw-text-slate-500 dark:tw-text-slate-400 tw-mb-1">
                    {hotel.descripcion}
                  </p>
                  <p className="tw-text-xs tw-text-slate-500 dark:tw-text-slate-400">
                    {hotel.regimenes.length}{" "}
                    {hotel.regimenes.length === 1 ? "Régimen" : "Régimenes"}{" "}
                    disponible
                  </p>
                </div>
              </div>

              <div>
                <span className="tw-text-slate-700 dark:tw-text-slate-100 tw-block tw-mb-1">
                  Elegir régimen
                </span>
                <div className="tw-flex tw-flex-wrap tw-gap-2">
                  {hotel.regimenes.map((regimen) => {
                    const isSelected =
                      seleccion?.hotelId === hotel.id &&
                      seleccion?.regimen === regimen.nombre;
                    return (
                      <button
                        key={regimen.nombre}
                        onClick={() =>
                          handleSelect(hotel.id, regimen.nombre, hotel.nombre)
                        }
                        className={`tw-p-3 tw-rounded tw-text-xs tw-whitespace-nowrap ${
                          isSelected
                            ? "tw-bg-secondary dark:tw-bg-secondaryDark tw-text-white tw-font-bold"
                            : "tw-bg-slate-200 hover:tw-bg-slate-300 dark:tw-bg-slate-700 dark:tw-text-slate-300"
                        }`}
                        title={`Costo extra: +${regimen.extra}€`}
                      >
                        {regimen.nombre} +{regimen.extra}€
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

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
