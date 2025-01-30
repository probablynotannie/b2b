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
  const newRequestData = location.state || {};
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  console.log(newRequestData);
  const filteredDestinos = destinos.filter((destino) => {
    const selectedMonth = newRequestData.mes; // Expected format: "12" or "Diciembre"
    const matchesPuerto =
      !newRequestData.puerto || destino.puerto.includes(newRequestData.puerto);
    const matchesDestino =
      !newRequestData.destino ||
      destino.destino.includes(newRequestData.destino);
    const allMonths = destino.precios.flatMap((precio) =>
      precio.preciosConFechas
        .map((p) => p.fecha.split("/")[1])
        .concat(
          precio.subPrecios?.flatMap((sub) =>
            sub.preciosConFechas.map((p) => p.fecha.split("/")[1])
          ) || []
        )
    );
    const matchesMonth = !selectedMonth || allMonths.includes(selectedMonth);
    return matchesPuerto && matchesDestino && matchesMonth;
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
      <article className="lg:tw-gap-10 xs:gap-28 tw-w-full tw-container tw-mt-10 tw-px-32 tw-min-h-[40vh]">
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
                  <MdCancel className="tw-text-4xl tw-text-red-500" />
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
