import { FaMapPin, FaClock } from "react-icons/fa";
import { FaBed } from "react-icons/fa6";
import { MdRestaurant } from "react-icons/md";
import { useState } from "react";
import MapWithJourney from "./filtros/MapWithJourney";
import { Link } from "react-router-dom";
import destinos from "./Destinos.json";
function Resultado() {
  const [activeMap, setActiveMap] = useState(null);
  const toggleMap = (id) => {
    setActiveMap((prev) => (prev === id ? null : id));
  };

  return (
    <section className="pb-12">
      <div className="flex flex-col lg:flex-row lg:justify-between shadow-xl lg:shadow-none p-3 rounded-xl border-2 lg:border-0 border-slate-200 dark:bg-slate-800 dark:md:bg-inherit dark:md:border-0 dark:md:shadow-none dark:border-slate-600 lg:mt-0">
        <h3 className="tw-text-secondary font-semibold text-lg ">
          Resultados ({destinos.length})
        </h3>
      </div>
      {destinos.map((destino, index) => (
        <article
          key={index}
          className="cursor-pointer bg-white flex dark:bg-slate-800 shadow-xl lg:shadow-lg hover:shadow-xl border-2 border-slate-100 dark:border-slate-800 rounded-xl transition mt-10 lg:mt-10 lg:flex flex-col relative min-lg:h-[25vh]"
        >
          <div className="relative w-full">
            {activeMap === destino.id ? (
              <div className="h-[25vh] rounded-t-lg flex items-center justify-center">
                <MapWithJourney destino={destino} />
              </div>
            ) : (
              <div className="relative h-[25vh] rounded-t-lg">
                <div className="bg-indigo-700 bg-opacity-40 w-full h-full rounded-t-lg absolute" />
                <img
                  src={destino.img}
                  alt="destino"
                  className="w-full object-cover h-full border-y-2 border-secondary rounded-t-lg dark:border-slate-800"
                />
              </div>
            )}
            <button
              onClick={() => toggleMap(destino.id)}
              className="flex items-center font-semibold tw-bg-secondary text-white px-2 p-1 rounded-bl-lg absolute top-0 right-0"
            >
              {activeMap === destino.id ? "Ocultar mapa" : "Mostrar mapa"}
              <FaMapPin className="text-white ml-2" />
            </button>
            <span className="text-xl font-bold tw-bg-secondary text-white px-2 p-1 rounded-br-lg absolute top-0">
              {destino.precio}€
            </span>
          </div>
          <Link to="/destino" state={destino}>
            <div className="px-5 py-3 dark:text-slate-300">
              <div className="flex justify-between items-center">
                <h4 className="dark:tw-text-secondary font-semibold tw-text-secondary">
                  {destino.titulo}
                </h4>
              </div>
              <div className="flex flex-wrap gap-5 border-b-2 border-slate-100 pb-5">
                <div className="flex flex-wrap">
                  <span className="font-semibold flex items-center">
                    Noches en:
                  </span>
                  <div>
                    {destino.noches_en.map((noche, i) => (
                      <span key={i} className="ml-1">
                        {noche}
                        {i < destino.noches_en.length - 1 && ","}{" "}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap">
                  <span className="font-semibold flex items-center">
                    Visitando:
                  </span>
                  <div>
                    {destino.sitio_noches.map((noche, i) => (
                      <span key={i}>
                        {noche}
                        {i < destino.noches_en.length - 1 && ","}{" "}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <p className="flex items-center font-semibold px-2 p-1 rounded-tr-lg bottom-0 left-0">
                  <span className="mr-2 flex flex-wrap items-center">
                    <FaClock className="mr-2" />
                    {destino.dias} días
                  </span>
                  <span className="mr-2 flex items-center">
                    <FaBed className="mr-2" />
                    {destino.categorias}
                  </span>
                  <span className="mr-2 flex items-center">
                    <MdRestaurant className="mr-2" />
                    {destino.comidas}
                  </span>
                </p>
              </div>
              <p className="text-sm tw-text-secondary text-center font-bold">
                {destino.id}
              </p>
              <p className="text-slate-400 dark:text-slate-500 text-sm text-center">
                Por
                <span className="ml-1 font-semibold text-slate-700 dark:text-slate-400">
                  {destino.agencia}
                </span>
              </p>
            </div>
          </Link>
        </article>
      ))}
    </section>
  );
}
export default Resultado;
