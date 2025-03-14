import { useState, useEffect } from "react";
import Buscador from "./filtros/Buscador";
import Aside from "./filtros/Aside";
import Hoteles from "./Hoteles";
import hoteles from "./Hoteles.json";
import PlaceHolder from "../../estructura/skeleton_placeholders/Hoteles";
import Cargando from "../../estructura/skeleton_placeholders/Cargando";
import MapaHoteles from "./MapaHoteles"; // New map component
import { FaList, FaMapMarkedAlt } from "react-icons/fa";

function Productos() {
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState("list"); // "list" or "map"

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const [values, setValues] = useState([0, 5000]);
  const [minMax, setMinMax] = useState([0, 5000]);

  return (
    <main className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-mb-10">
      <div
        className="tw-relative tw-w-full tw-p-8 tw-bg-center tw-bg-cover tw-shadow-md"
        style={{ backgroundImage: "url('/banner_hoteles.jpg')" }}
      >
        <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-text-pink-600 tw-bg-orange-200 tw-pointer-events-none dark:tw-bg-black tw-bg-opacity-35 dark:tw-bg-opacity-45"></div>
        <div className="tw-flex">
          <div className="tw-container tw-relative">
            <Buscador />
          </div>
          <aside className="tw-col-span-9 tw-px-3 lg:tw-hidden lg:tw-col-span-3">
            <Aside
              values={values}
              setValues={setValues}
              minMax={minMax}
              setMinMax={setMinMax}
            />
          </aside>
        </div>
      </div>

      <article
        className={`lg:tw-px-28 tw-px-5 tw-grid tw-w-full tw-grid-cols-9 tw-mt-10 lg:tw-gap-10 xs:gap-28`}
      >
        <aside
          className={`
            ${viewMode === "list" ? "lg:tw-col-span-3" : "lg:tw-col-span-2"}
            tw-hidden lg:tw-block tw-col-span-9  tw-h-fit lg:tw-sticky tw-top-24 lg:tw-bg-slate-100 lg:dark:tw-bg-slate-800 lg:tw-border-2 tw-border-slate-200 dark:tw-border-slate-800 tw-rounded-lg lg:tw-shadow-xl hover:lg:tw-shadow-2xl tw-transition tw-px-3 lg:tw-p-3 lg:tw-pb-10`}
        >
          <Aside values={values} setValues={setValues} minMax={minMax} />
        </aside>
        <section
          className={`
            ${viewMode === "list" ? "lg:tw-col-span-6" : "lg:tw-col-span-7"}

          tw-col-span-9 tw-p-3 
          `}
        >
          {loading ? (
            <>
              <Cargando />
              <PlaceHolder />
            </>
          ) : (
            <>
              <div className="tw-flex tw-items-center tw-justify-between tw-col-span-9">
                <h3 className="tw-text-secondary tw-font-semibold tw-text-lg tw-flex tw-items-center">
                  Resultados ({hoteles.length})
                </h3>
                <div className="tw-flex ">
                  <button
                    className={`tw-flex tw-items-center tw-gap-2 tw-p-2 tw-rounded-md ${
                      viewMode === "list"
                        ? "tw-bg-blue-400 tw-text-white"
                        : "tw-bg-gray-200"
                    }`}
                    onClick={() => setViewMode("list")}
                  >
                    <FaList /> Lista
                  </button>
                  <button
                    className={`tw-flex tw-items-center tw-gap-2 tw-p-2 tw-ml-2 tw-rounded-md ${
                      viewMode === "map"
                        ? "tw-bg-blue-400 tw-text-white"
                        : "tw-bg-gray-200"
                    }`}
                    onClick={() => setViewMode("map")}
                  >
                    <FaMapMarkedAlt /> Mapa
                  </button>
                </div>
              </div>
              {viewMode === "list" ? (
                <Hoteles hoteles={hoteles} />
              ) : (
                <MapaHoteles hoteles={hoteles} />
              )}
            </>
          )}
        </section>
      </article>
    </main>
  );
}

export default Productos;
