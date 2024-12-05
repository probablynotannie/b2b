import { FaMapPin } from "react-icons/fa";
import { useState } from "react";
import MapWithJourney from "./filtros/MapWithJourney";
import Destinos from "./Destinos.json";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

function Resultado() {
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
      // Recorremos los precios principales
      cabina.preciosConFechas.forEach((precio) => {
        if (precio.price < precioMasBajo) {
          precioMasBajo = precio.price;
        }
      });

      // Recorremos los subPrecios si existen
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

    // Helper function to parse dates
    const parseDate = (dateStr) => {
      const [day, month] = dateStr.split("/").map(Number);
      return new Date(today.getFullYear(), month - 1, day);
    };

    // Collect all dates
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

    // Find the closest future date
    const nextDate = allDates
      .filter((date) => date >= today)
      .sort((a, b) => a - b)[0];

    // Format the date as "9 de noviembre de 2024"
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
  function getBackgroundColorClass(precios) {
    const today = new Date();
    const nextDepartureDate = getNextDeparture(precios);
    if (nextDepartureDate === "No upcoming departures") return "bg-gray-400";

    const nextDate = new Date(
      nextDepartureDate.split(" ")[2], // Year
      new Date(nextDepartureDate).getMonth(), // Month
      parseInt(nextDepartureDate.split(" ")[0]) // Day
    );

    const daysLeft = Math.ceil((nextDate - today) / (1000 * 60 * 60 * 24));

    if (daysLeft <= 3) return "bg-red-700";
    if (daysLeft <= 7) return "bg-yellow-500";
    return "bg-green-500";
  }
  return (
    <section className="pb-12 mt-5">
      <div className="flex flex-col lg:flex-row lg:justify-between shadow-xl lg:shadow-none p-3 rounded-xl border-2 lg:border-0 border-slate-200 dark:bg-slate-800 dark:md:bg-inherit dark:md:border-0 dark:md:shadow-none dark:border-slate-600 mt-4 lg:mt-0">
        <h3 className="text-secondary font-semibold text-lg">
          Resultados ({Destinos.length})
        </h3>
      </div>
      {Destinos.map((destino, index) => {
        const precioMasBajo = encontrarPrecioMasBajo(destino.precios);
        return (
          <article
            key={index}
            className="cursor-pointer bg-slate-100 flex dark:bg-slate-800 shadow-xl lg:shadow-lg hover:shadow-xl border-2 border-slate-100 dark:border-slate-700 rounded-xl transition mt-10 lg:flex flex-col relative min-lg:h-[25vh]"
          >
            <div className="relative w-full">
              {activeMap[destino.id] ? (
                <div className="h-[25vh] border-t-2 rounded-t-lg border-secondary flex flex-col items-center justify-center">
                  <MapWithJourney destino={destino} />
                </div>
              ) : (
                <div className="min-h-[25vh] border-t-2 border-secondary rounded-tr-xl rounded-tl-xl max-h-[45vh] flex relative">
                  <div
                    className="transition-all rounded-tl-xl duration-300 w-[33.33%] sm:w-[20%] hover:w-[35%] min-h-[20vh] border-lg max-h-[45vh] bg-cover bg-center flex justify-center items-center"
                    style={{
                      backgroundImage: `url('${destino.crucero}')`,
                    }}
                  >
                    <div className="md:text-xl font-semibold text-white bg-slate-800 bg-opacity-45 rounded-tl-xl p-2 w-full h-full flex justify-center items-center flex-col">
                      {destino.nombreCrucero}
                    </div>
                  </div>
                  {destino.itinerario
                    .slice(0, 4)
                    .map((destination, index, array) => (
                      <div
                        key={destination.id}
                        className={`transition-all duration-300 
                                w-[33.33%] sm:w-[25%] hover:w-[35%] 
                                min-h-[20vh] border-lg max-h-[45vh] 
                                bg-cover bg-center 
                                flex justify-center items-center 
                                ${index >= 2 ? "hidden sm:flex" : ""} 
                           ${
                             index === array.length - 3
                               ? " rounded-tr-xl sm:rounded-tr-none"
                               : ""
                           }

                                ${
                                  index === array.length - 1
                                    ? "rounded-tr-xl"
                                    : ""
                                }`}
                        style={{
                          backgroundImage: `url('${destination.img}')`,
                        }}
                      >
                        <div
                          className={`md:text-xl text-white ${
                            index === array.length - 1 ? "rounded-tr-xl" : ""
                          } 
                           ${
                             index === array.length - 3
                               ? " rounded-tr-xl sm:rounded-tr-none"
                               : ""
                           }
                          bg-slate-800 bg-opacity-45 p-2 w-full h-full flex justify-center items-center flex-col font-semibold text-center`}
                        >
                          {destination.destino}
                        </div>
                      </div>
                    ))}
                  <div className="absolute bottom-0 w-full bg-red-700 dark:bg-red-900 bg-opacity-90 text-white font-bold px-5">
                    Proxima salida: {getNextDeparture(destino.precios)}
                  </div>
                </div>
              )}

              <button
                onClick={() => toggleMap(destino.id)}
                className={`flex items-center font-semibold ${
                  activeMap[destino.id]
                    ? "bg-slate-700 text-white"
                    : "bg-white text-slate-700"
                } px-2 p-1 rounded-full absolute top-5 right-5`}
              >
                {activeMap[destino.id] ? "Ocultar" : "Mapa"}
                <FaMapPin className="ml-2" />
              </button>
            </div>
            <Link to="/crucero" state={destino}>
              <div className="px-5 py-3 dark:text-white pb-5 md:pb-0">
                <h4 className="font-semibold text-lg">{destino.recorrido}</h4>
                <p className="text-sm dark:text-slate-400">{destino.titulo}</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm my-3 line-clamp-3">
                  {destino.descripcion}
                </p>
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-5">
                  {destino.precios.map((cabina) => {
                    const nextDateEntry = getNextAvailableDatesByCabin(
                      cabina.preciosConFechas
                    );
                    const nextDate = nextDateEntry?.fecha || "No disponible";
                    const nextPrice = nextDateEntry?.price || "No disponible";

                    return (
                      <div
                        className="flex flex-col justify-center items-center"
                        key={cabina.id}
                      >
                        <h5 className="text-slate-700 font-bold dark:text-slate-300 text-center text-sm">
                          {cabina.title}
                        </h5>

                        <div className="text-sm bg-slate-200 w-fit px-12 md:px-16 dark:bg-slate-900 dark:border-slate-800 flex justify-center items-center flex-col border border-slate-200 rounded-lg">
                          <span className="font-bold text-xs">{nextDate}</span>

                          <p className="text-center text-green-700 flex-col dark:text-green-500 font-bold">
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
            <div className="hidden md:flex justify-end">
              <Link to="/crucero" state={destino}>
                <button className="text-center w-full md:w-fit flex flex-col items-center justify-center font-bold bg-slate-700 dark:bg-slate-900 text-white p-2 px-4 rounded-br-lg rounded-tl-xl">
                  Desde{" "}
                  {typeof precioMasBajo === "number"
                    ? `${precioMasBajo}€`
                    : precioMasBajo}
                  <span className="text-xs flex items-center gap-1">
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
