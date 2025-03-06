import Buscador from "./filtros/Buscador";
import Cruceros from "./Destinos2";
import { useLocation } from "react-router-dom";
import PlaceHolder from "../../estructura/skeleton_placeholders/Cruceros";
import Cargando from "../../estructura/skeleton_placeholders/Cargando";
import { MdCancel } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";

const fetchData = async (newRequestData) => {
  const response = await fetch(
    "https://devxml-2.vpackage.net/FrontCruceros//cruceros/duracion/7-8d/puertos/Barcelona(Espa%C3%B1a)/?destino=&puertos=4&naviera=&fechSal=&duracion=2&idv=207&p=1&json=1"
  );

  if (!response.ok) {
    throw new Error("Error cargando datos");
  }
  const data = await response.json();

  return data.items;
};

function Productos() {
  const location = useLocation();
  const { newRequestData = {} } = location.state || {};
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["crucerosData", newRequestData],
    queryFn: () => fetchData(newRequestData),
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
        </div>
      </div>
      <article className="lg:tw-gap-10 xs:gap-28 tw-w-full tw-container tw-mt-10 tw-min-h-[55vh] lg:tw-min-h-[40vh]">
        {newRequestData.img && (
          <section className="tw-mb-10">
            <h1 className="tw-text-2xl tw-text-secondary tw-font-extrabold tw-mb-5 ">
              {newRequestData.titulo}
            </h1>
            <div
              className={`tw-relative tw-min-h-[30vh] tw-w-full tw-bg-cover tw-bg-center tw-rounded-lg tw-shadow-lg tw-animate-fade-left`}
              style={{ backgroundImage: `url(${newRequestData.img})` }}
            >
              <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-blue-700 tw-bg-opacity-20 tw-flex tw-flex-col tw-justify-between tw-p-6 tw-rounded-lg hover:tw-bg-opacity-30 tw-transition-all">
                <div className="tw-flex-1"></div>
                <div className="tw-min-h-[10vh] tw-w-full tw-bg-black tw-bg-opacity-35 tw-text-slate-100 tw-font-medium tw-text-sm tw-p-4 tw-rounded-lg shadow-md hover:tw-bg-opacity-50 tw-transition-all">
                  {newRequestData.desc}
                </div>
              </div>
            </div>
          </section>
        )}
        <section className="tw-col-span-9 lg:tw-col-span-6 ">
          {isLoading ? (
            <>
              <Cargando />
              <PlaceHolder />
            </>
          ) : isError ? (
            <div className="tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center tw-text-red-500">
              <p>Error: {error.message}</p>
            </div>
          ) : data === null ? (
            <div className="tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center tw-text-slate-400 tw-text-lg tw-flex-col">
              <MdCancel className="tw-text-4xl tw-text-red-500 tw-animate-bounce" />
              <p>No hay cruceros con estos datos :(</p>
            </div>
          ) : (
            <>
              {data && (
                <>
                  <div className="px-4 tw-p-5 lg:tw-px-10">
                    <h3 className="tw-text-secondary tw-font-semibold tw-text-lg">
                      Resultados ({data.length})
                    </h3>
                    <Cruceros destinos={data} />
                  </div>
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
