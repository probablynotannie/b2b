import { FaMapPin } from "react-icons/fa";
import { useState } from "react";
import MapWithJourney from "./filtros/MapWithJourney";
import Destinos from "./Destinos.json";
import { Link } from "react-router-dom";
function Resultado() {
  const [activeMap, setActiveMap] = useState(null);

  const toggleMap = (id) => {
    setActiveMap((prev) => (prev === id ? null : id));
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

  return (
    <section className="pb-12 mt-5">
      <div className="flex flex-col lg:flex-row lg:justify-between shadow-xl lg:shadow-none p-3 rounded-xl border-2 lg:border-0 border-slate-200 dark:bg-slate-800 dark:md:bg-inherit dark:md:border-0 dark:md:shadow-none dark:border-slate-600 mt-4 lg:mt-0">
        <h3 className="text-secondary font-semibold text-lg">
          Resultados ({Destinos.length})
        </h3>
      </div>
      {Destinos.map((destino, index) => {
        // Find the lowest price for the current destino
        const precioMasBajo = encontrarPrecioMasBajo(destino.precios);

        return (
          <article
            key={index}
            className="cursor-pointer bg-slate-100 flex dark:bg-slate-800 shadow-xl lg:shadow-lg hover:shadow-xl border-2 border-slate-100 dark:border-slate-800 rounded-xl transition mt-10 lg:flex flex-col relative min-lg:h-[25vh]"
          >
            <div className="relative w-full">
              {/* Display the image, map button, and price */}
              {activeMap === destino.id ? (
                <div className="h-[25vh] border-t-2 rounded-t-lg border-secondary flex items-center justify-center">
                  <MapWithJourney destino={destino} />
                </div>
              ) : (
                <div className="min-h-[25vh] border-t-2 border-secondary rounded-tr-xl rounded-tl-xl max-h-[45vh] flex">
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

                  {/* Display destinations */}
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
                                  index === array.length - 1
                                    ? "rounded-tr-xl"
                                    : ""
                                }`}
                        style={{
                          backgroundImage: `url('${destination.img}')`,
                        }}
                      >
                        <div className="md:text-xl text-white bg-slate-800 bg-opacity-45 p-2 w-full h-full flex justify-center items-center flex-col font-semibold text-center">
                          {destination.destino}
                        </div>
                      </div>
                    ))}
                </div>
              )}

              {/* Button for toggling the map */}
              <button
                onClick={() => toggleMap(destino.id)}
                className="flex items-center font-semibold bg-secondary text-white px-2 p-1 rounded-bl-lg absolute top-0 right-0"
              >
                {activeMap === destino.id ? "Ocultar mapa" : "Mostrar mapa"}
                <FaMapPin className="text-white ml-2" />
              </button>

              {/* Display the lowest price */}
              <p className="text-center hidden md:flex flex-col font-bold bg-secondary text-white px-2 p-1 rounded-br-lg rounded-tl-xl absolute top-0">
                Desde{" "}
                {typeof precioMasBajo === "number"
                  ? `${precioMasBajo}€`
                  : precioMasBajo}
                <span className="text-xs">+{destino.tasas}€ tasas</span>
              </p>
            </div>

            {/* Additional details */}
            <div className="px-5 py-3 dark:text-slate-300">
              <h4 className="font-semibold text-lg">{destino.recorrido}</h4>
              <p className="text-sm">{destino.titulo}</p>
              <p className="text-slate-500 text-sm my-3 line-clamp-3">
                {destino.descripcion}
              </p>

              {/* Cabins and their next available dates */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
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
                      <h5 className="text-slate-700 font-bold dark:text-white text-center text-sm">
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

              {/* Link to more details */}
              <div className="mt-5 mb-3">
                <Link to="/crucero" state={destino}>
                  <button className="bg-secondary p-3 w-full md:w-fit rounded-lg shadow hover:shadow-md text-white font-semibold">
                    Más detalles
                  </button>
                </Link>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}

export default Resultado;
