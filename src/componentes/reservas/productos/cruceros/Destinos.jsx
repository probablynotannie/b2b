import { FaMapPin } from "react-icons/fa";
import { useState } from "react";
import MapWithJourney from "./filtros/MapWithJourney";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

function Resultado({ destinos }) {
  const [activeMap, setActiveMap] = useState({});
  const toggleMap = (id) => {
    setActiveMap((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  const getNextAvailableDatesByCabin = (preciosConFechas) => {
    const today = new Date();
    const availableDates = preciosConFechas
      .filter(({ fecha }) => {
        if (fecha === "-") return false;
        const [day, month] = fecha.split("/");
        const date = new Date(today.getFullYear(), month - 1, day);
        return date > today;
      })
      .sort((a, b) => {
        const [dayA, monthA] = a.fecha.split("/");
        const dateA = new Date(today.getFullYear(), monthA - 1, dayA);
        const [dayB, monthB] = b.fecha.split("/");
        const dateB = new Date(today.getFullYear(), monthB - 1, dayB);
        return dateA - dateB;
      });

    return availableDates.length > 0 ? availableDates[0] : null;
  };
  const encontrarPrecioMasBajo = (precios) => {
    let precioMasBajo = Infinity;

    precios.forEach((cabina) => {
      cabina.preciosConFechas.forEach((precio) => {
        if (precio.price < precioMasBajo) {
          precioMasBajo = precio.price;
        }
      });

      cabina.subPrecios?.forEach((subPrecio) => {
        subPrecio.preciosConFechas.forEach((precio) => {
          if (precio.price < precioMasBajo) {
            precioMasBajo = precio.price;
          }
        });
      });
    });

    return precioMasBajo === Infinity ? "No disponible" : precioMasBajo;
  };
  function getNextDeparture(precios) {
    const today = new Date();

    const parseDate = (dateStr) => {
      const [day, month] = dateStr.split("/").map(Number);
      return new Date(today.getFullYear(), month - 1, day);
    };
    const allDates = [];
    precios.forEach((cabin) => {
      cabin.preciosConFechas.forEach(({ fecha }) => {
        allDates.push(parseDate(fecha));
      });
      cabin.subPrecios.forEach((subPrecio) => {
        subPrecio.preciosConFechas.forEach(({ fecha }) => {
          allDates.push(parseDate(fecha));
        });
      });
    });
    const nextDate = allDates
      .filter((date) => date >= today)
      .sort((a, b) => a - b)[0];
    if (nextDate) {
      return new Intl.DateTimeFormat("es-ES", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(nextDate);
    } else {
      return "No upcoming departures";
    }
  }
  return (
    <section className="tw-pb-12 md:tw-mt-5">
      {destinos.map((destino, index) => {
        const precioMasBajo = encontrarPrecioMasBajo(destino.precios);
        return (
          <article
            key={index}
            className="tw-cursor-pointer tw-bg-slate-100 tw-flex dark:tw-bg-slate-800 tw-shadow-xl lg:tw-shadow-lg hover:tw-shadow-xl tw-border-2 tw-border-slate-100 dark:tw-border-slate-700 tw-rounded-xl tw-transition tw-mt-5 lg:tw-mt-10 lg:tw-flex tw-flex-col tw-relative min-lg:tw-h-[25vh]"
          >
            <div className="tw-relative tw-w-full">
              {activeMap[destino.id] ? (
                <div className="tw-h-[25vh] tw-border-t-2 tw-rounded-t-lg tw-border-secondary tw-flex tw-flex-col tw-items-center tw-justify-center">
                  <MapWithJourney destino={destino} />
                </div>
              ) : (
                <div className="tw-min-h-[25vh] tw-border-t-2 tw-border-secondary tw-rounded-tr-xl tw-rounded-tl-xl tw-max-h-[45vh] tw-flex tw-relative">
                  <div
                    className="tw-transition-all tw-rounded-tl-xl tw-duration-300 tw-w-[33.33%] sm:tw-w-[20%] hover:tw-w-[35%] tw-min-h-[20vh] tw-border-lg tw-max-h-[45vh] tw-bg-cover tw-bg-center tw-flex tw-justify-center tw-items-center"
                    style={{
                      backgroundImage: `url('${destino.crucero}')`,
                    }}
                  >
                    <div className="md:tw-text-xl tw-font-semibold tw-text-white tw-bg-slate-800 tw-bg-opacity-45 tw-rounded-tl-xl tw-p-2 tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center tw-flex-col">
                      {destino.nombreCrucero}
                    </div>
                  </div>
                  {destino.itinerario
                    .slice(0, 4)
                    .map((destination, index, array) => (
                      <div
                        key={destination.id}
                        className={`tw-transition-all tw-duration-300 
                                tw-w-[33.33%] sm:tw-w-[25%] hover:tw-w-[35%] 
                                tw-min-h-[20vh] tw-border-lg tw-max-h-[45vh] 
                                tw-bg-cover tw-bg-center 
                                tw-flex tw-justify-center tw-items-center 
                                ${index >= 2 ? "hidden sm:tw-flex" : ""} 
                           ${
                             index === array.length - 3
                               ? " tw-rounded-tr-xl sm:tw-rounded-tr-none"
                               : ""
                           }

                                ${
                                  index === array.length - 1
                                    ? "tw-rounded-tr-xl"
                                    : ""
                                }`}
                        style={{
                          backgroundImage: `url('${destination.img}')`,
                        }}
                      >
                        <div
                          className={`md:tw-text-xl tw-text-white ${
                            index === array.length - 1 ? "tw-rounded-tr-xl" : ""
                          } 
                           ${
                             index === array.length - 3
                               ? " tw-rounded-tr-xl sm:tw-rounded-tr-none"
                               : ""
                           }
                          tw-bg-slate-800 tw-bg-opacity-45 tw-p-2 tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center tw-flex-col tw-font-semibold tw-text-center`}
                        >
                          {destination.destino}
                        </div>
                      </div>
                    ))}
                  <div className="tw-absolute tw-bottom-0 tw-w-full tw-bg-red-700 dark:tw-bg-red-900 tw-bg-opacity-90 tw-text-white tw-font-bold tw-px-5">
                    Proxima salida: {getNextDeparture(destino.precios)}
                  </div>
                </div>
              )}

              <button
                onClick={() => toggleMap(destino.id)}
                className={`tw-flex tw-items-center tw-font-semibold ${
                  activeMap[destino.id]
                    ? "tw-bg-slate-700 tw-text-white"
                    : "tw-bg-white tw-text-slate-700"
                } tw-px-2 tw-p-1 tw-rounded-full tw-absolute tw-top-5 tw-right-5`}
              >
                {activeMap[destino.id] ? "Ocultar" : "Mapa"}
                <FaMapPin className="tw-ml-2" />
              </button>
            </div>
            <Link to="/crucero" state={destino}>
              <div className="tw-px-5 tw-py-3 dark:tw-text-white tw-pb-5 md:tw-pb-0">
                <h4 className="tw-font-semibold tw-text-lg">
                  {destino.recorrido}
                </h4>
                <p className="tw-text-sm dark:tw-text-slate-400">
                  {destino.titulo}
                </p>
                <p className="tw-text-slate-500 dark:tw-text-slate-400 tw-text-sm tw-my-3 tw-line-clamp-3">
                  {destino.descripcion}
                </p>
                <div className="tw-grid tw-grid-cols-2 lg:tw-grid-cols-3 2xl:tw-grid-cols-4 tw-gap-5 tw-mb-3">
                  {destino.precios.map((cabina) => {
                    const nextDateEntry = getNextAvailableDatesByCabin(
                      cabina.preciosConFechas
                    );
                    const nextDate = nextDateEntry?.fecha || "No disponible";
                    const nextPrice = nextDateEntry?.price || "No disponible";

                    return (
                      <div
                        className="tw-flex tw-flex-col tw-justify-center tw-items-center"
                        key={cabina.id}
                      >
                        <h5 className="tw-text-slate-700 tw-font-bold dark:tw-text-slate-300 tw-text-center tw-text-sm">
                          {cabina.title}
                        </h5>

                        <div className="tw-text-sm tw-bg-slate-200 tw-w-fit tw-px-12 md:tw-px-16 dark:tw-bg-slate-900 dark:tw-border-slate-800 tw-flex tw-justify-center tw-items-center tw-flex-col tw-border tw-border-slate-200 tw-rounded-lg">
                          <span className="tw-font-bold tw-text-xs">
                            {nextDate}
                          </span>

                          <p className="tw-text-center tw-text-green-700 tw-flex-col dark:tw-text-green-500 tw-font-bold">
                            {typeof nextPrice === "number"
                              ? `${nextPrice}€`
                              : nextPrice}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Link>
            <div className="hidden md:tw-flex tw-justify-end">
              <Link to="/crucero" state={destino}>
                <button className="tw-text-center tw-w-full md:tw-w-fit tw-flex tw-flex-col tw-items-center tw-justify-center tw-font-bold tw-bg-slate-700 dark:tw-bg-slate-900 tw-text-white tw-p-2 tw-px-4 tw-rounded-br-lg tw-rounded-tl-xl">
                  Desde{" "}
                  {typeof precioMasBajo === "number"
                    ? `${precioMasBajo}€`
                    : precioMasBajo}
                  <span className="tw-text-xs tw-flex tw-items-center tw-gap-1">
                    +{destino.tasas}€ tasas <FaChevronRight />
                  </span>
                </button>
              </Link>
            </div>
          </article>
        );
      })}
    </section>
  );
}

export default Resultado;
