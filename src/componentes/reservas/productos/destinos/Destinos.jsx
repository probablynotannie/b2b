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
    <section className="tw-pb-12">
      <div className="tw-flex tw-flex-col lg:tw-flex-row lg:tw-justify-between tw-shadow-xl lg:tw-shadow-none tw-p-3 tw-rounded-xl tw-border-2 lg:tw-border-0 tw-border-slate-200 dark:tw-bg-slate-800 dark:md:tw-bg-inherit dark:md:tw-border-0 dark:md:tw-shadow-none dark:tw-border-slate-600 lg:tw-mt-0">
        <h3 className="tw-text-secondary tw-font-semibold tw-text-lg">
          Resultados ({destinos.length})
        </h3>
      </div>
      {destinos.map((destino, index) => (
        <article
          key={index}
          className="tw-cursor-pointer tw-bg-white tw-flex dark:tw-bg-slate-800 tw-shadow-xl lg:tw-shadow-lg hover:tw-shadow-xl tw-border-2 tw-border-slate-100 dark:tw-border-slate-800 tw-rounded-xl tw-transition tw-mt-10 lg:tw-mt-10 lg:tw-flex tw-flex-col tw-relative min-lg:h-[25vh]"
        >
          <div className="tw-relative tw-w-full">
            {activeMap === destino.id ? (
              <div className="tw-h-[25vh] tw-rounded-t-lg tw-flex tw-items-center tw-justify-center">
                <MapWithJourney destino={destino} />
              </div>
            ) : (
              <div className="tw-relative tw-h-[25vh] tw-rounded-t-lg">
                <div className="tw-bg-indigo-700 tw-bg-opacity-40 tw-w-full tw-h-full tw-rounded-t-lg tw-absolute" />
                <img
                  src={destino.img}
                  alt="destino"
                  className="tw-w-full tw-object-cover tw-h-full tw-border-y-2 tw-border-secondary tw-rounded-t-lg dark:tw-border-slate-800"
                />
              </div>
            )}
            <button
              onClick={() => toggleMap(destino.id)}
              className="tw-flex tw-items-center tw-font-semibold tw-bg-secondary tw-text-white tw-px-2 tw-p-1 tw-rounded-bl-lg tw-absolute tw-top-0 tw-right-0"
            >
              {activeMap === destino.id ? "Ocultar mapa" : "Mostrar mapa"}
              <FaMapPin className="tw-text-white tw-ml-2" />
            </button>
            <span className="tw-text-xl tw-font-bold tw-bg-secondary tw-text-white tw-px-2 tw-p-1 tw-rounded-br-lg tw-absolute tw-top-0">
              {destino.precio}€
            </span>
          </div>
          <Link to="/destino" state={destino}>
            <div className="tw-px-5 tw-py-3 dark:tw-text-slate-300">
              <div className="tw-flex tw-justify-between tw-items-center">
                <h4 className="dark:tw-text-secondaryDark tw-font-semibold tw-text-secondary">
                  {destino.titulo}
                </h4>
              </div>
              <div className="tw-flex tw-flex-wrap tw-gap-5 tw-border-b-2 tw-border-slate-100 dark:tw-border-slate-700 tw-pb-5">
                <div className="tw-flex tw-flex-wrap">
                  <span className="tw-font-semibold tw-flex tw-items-center">
                    Noches en:
                  </span>
                  <div>
                    {destino.noches_en.map((noche, i) => (
                      <span key={i} className="tw-ml-1">
                        {noche}
                        {i < destino.noches_en.length - 1 && ","}{" "}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="tw-flex tw-flex-wrap">
                  <span className="tw-font-semibold tw-flex tw-items-center">
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
                <p className="tw-flex tw-items-center tw-font-semibold tw-px-2 tw-p-1 tw-rounded-tr-lg tw-bottom-0 tw-left-0">
                  <span className="tw-mr-2 tw-flex tw-flex-wrap tw-items-center">
                    <FaClock className="tw-mr-2" />
                    {destino.dias} días
                  </span>
                  <span className="tw-mr-2 tw-flex tw-items-center">
                    <FaBed className="tw-mr-2" />
                    {destino.categorias}
                  </span>
                  <span className="tw-mr-2 tw-flex tw-items-center">
                    <MdRestaurant className="tw-mr-2" />
                    {destino.comidas}
                  </span>
                </p>
              </div>
              <p className="tw-text-sm tw-text-secondary tw-text-center tw-font-bold">
                {destino.id}
              </p>
              <p className="tw-text-slate-400 dark:tw-text-slate-500 tw-text-sm tw-text-center">
                Por
                <span className="tw-ml-1 tw-font-semibold tw-text-slate-700 dark:tw-text-slate-400">
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
