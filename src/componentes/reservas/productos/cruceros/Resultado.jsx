import Buscador from "./filtros/Buscador";
import Aside from "./filtros/Aside";
import Cruceros from "./Destinos";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import PlaceHolder from "../../estructura/skeleton_placeholders/Cruceros";
import Cargando from "../../estructura/skeleton_placeholders/Cargando";
import destinos from "./Destinos.json";
import { MdCancel } from "react-icons/md";

function Productos() {
  const location = useLocation();
  const { newRequestData = {}, producto = null } = location.state || {};
  console.log("Location state:", location);  // Check if state is passed

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  console.log("Datos", newRequestData);

  const filteredDestinos = destinos.filter((destino) => {
    const mesSeleccionado = newRequestData.mes;
    const puertoSeleccionado = newRequestData.puerto?.toLowerCase();
    const destinoSeleccionado = newRequestData.destino?.toLowerCase();
    const navieraSeleccionado = newRequestData.naviera?.toLowerCase();

    const encontrarPuerto =
      !puertoSeleccionado ||
      destino.puerto.toLowerCase().includes(puertoSeleccionado);
    const encontrarDestino =
      !destinoSeleccionado ||
      destino.destino.toLowerCase().includes(destinoSeleccionado);
    const todosLosMeses = destino.precios.flatMap((precio) =>
      precio.preciosConFechas
        .map((p) => p.fecha.split("/")[1])
        .concat(
          precio.subPrecios?.flatMap((sub) =>
            sub.preciosConFechas.map((p) => p.fecha.split("/")[1])
          ) || []
        )
    );
    const encontrarMes =
      !mesSeleccionado || todosLosMeses.includes(mesSeleccionado);
    const encontrarNaviera =
      !navieraSeleccionado ||
      destino.naviera.toLowerCase().includes(navieraSeleccionado);
    return (
      encontrarPuerto && encontrarDestino && encontrarMes && encontrarNaviera
    );
  });

  return (
    <main className="tw-flex tw-justify-center tw-flex-col tw-items-center tw-mb-10">
      <div
        className="tw-w-full tw-bg-cover tw-bg-center tw-p-8 tw-relative tw-shadow-md"
        style={{
          backgroundImage: "url('/banner_cruise.jfif')",
        }}
      >
        <div className="tw-bg-indigo-200 dark:tw-bg-black tw-text-pink-600 tw-bg-opacity-50 dark:tw-bg-opacity-45 tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-pointer-events-none"></div>
        <div className="tw-flex">
          <div className="tw-container tw-relative">
            <Buscador />
          </div>
          <aside className="lg:tw-hidden tw-col-span-9 lg:tw-col-span-3 tw-h-fit lg:tw-sticky tw-top-5 lg:tw-bg-slate-100 lg:dark:tw-bg-slate-800 lg:tw-border-2 tw-border-slate-200 dark:tw-border-slate-800 tw-rounded-lg lg:tw-shadow-xl hover:lg:tw-shadow-2xl tw-transition tw-px-3 lg:tw-p-3 lg:tw-pb-10">
            <Aside />
          </aside>
        </div>
      </div>
      <section className="tw-my-5 tw-container">
        {producto && (
          <>
            <div
              className={`tw-relative tw-h-[40vh] tw-w-full tw-bg-cover tw-bg-center tw-rounded-lg tw-shadow-lg`}
              style={{ backgroundImage: `url(${producto.img})` }}
            >
              <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-blue-950 tw-bg-opacity-40 tw-flex tw-flex-col tw-justify-between tw-p-6 tw-rounded-lg hover:tw-bg-opacity-60 tw-transition-all">
                <div className="tw-flex-1"></div>{" "}
                {/* Spacer div to align content */}
                <h1 className="tw-text-5xl tw-text-white tw-font-extrabold tw-text-center tw-my-6 tw-shadow-lg">
                  {producto.txt}
                </h1>
                <p className="tw-min-h-[10vh] tw-w-full tw-bg-black tw-bg-opacity-35 tw-text-slate-100 tw-font-medium tw-text-sm tw-p-4 tw-rounded-lg shadow-md hover:tw-bg-opacity-50 tw-transition-all">
                  {producto.descripcion}
                </p>
              </div>
            </div>
          </>
        )}
      </section>
      <article className="lg:tw-gap-10 xs:gap-28 tw-w-full tw-container tw-mt-10  tw-min-h-[40vh]">
        <section className="tw-col-span-9 lg:tw-col-span-6 tw-p-3">
          {loading ? (
            <>
              <Cargando />
              <PlaceHolder />
            </>
          ) : (
            <>
              {filteredDestinos.length === 0 ? (
                <div
                  className="tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center tw-text-slate-400 tw-text-lg tw-flex-col 
                "
                >
                  <MdCancel className="tw-text-4xl tw-text-red-500 tw-animate-bounce" />
                  <p>No hay cruceros con estos requerimientos :(</p>
                </div>
              ) : (
                <>
                  <div className="lg:tw-flex tw-flex-col lg:tw-flex-row lg:tw-justify-between tw-shadow-xl lg:tw-shadow-none tw-p-3 tw-rounded-xl tw-border-2 lg:tw-border-0 tw-border-slate-200 dark:tw-bg-slate-800 dark:md:tw-bg-inherit dark:md:tw-border-0 dark:md:tw-shadow-none dark:tw-border-slate-600  lg:tw-mt-0">
                    <h3 className="tw-text-secondary tw-font-semibold tw-text-lg">
                      Resultados ({filteredDestinos.length})
                    </h3>
                  </div>
                  <Cruceros Destinos={filteredDestinos} />
                </>
              )}
            </>
          )}
        </section>
      </article>
    </main>
  );
}

export default Productos;
