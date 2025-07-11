import Sidebar from "./sidebar/Sidebar";
import { useState } from "react";
import Destacados from "./buscadores/cruceros/destacados/Cruceros";
import Zonas from "./buscadores/cruceros/destacados/Zonas";
import Puertos from "./buscadores/cruceros/destacados/Puertos";
import Buscador_Cruceros from "./buscadores/cruceros/Buscador_Cruceros";
import { useQuery } from "@tanstack/react-query";
import fetchCrucero from "./buscadores/cruceros/destacados/hook/fetch";
import Zonas_Puertos_Placeholder from "./buscadores/cruceros/destacados/placeholders/Zonas_Puertos_Placeholder";
import { MdCancel } from "react-icons/md";

function Cruceros() {
  const [duracion, setDuracion] = useState(2);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["destacados"],
    queryFn: fetchCrucero,
    refetchInterval: 10_000,
    refetchIntervalInBackground: true,
    refetchOnWindowFocus: false,
  });
  const [requestData, setRequestData] = useState({
    idZona: 0,
    fechSal: 0,
    duracion: 0,
    idPuerto: 0,
    idNav: 0,
  });
  return ( 
    <article className="lg:tw-grid tw-grid-cols-10 tw-gap-10 lg:tw-px-20 lg:tw-py-10">
      <Sidebar />
      <div className="tw-col-span-10 lg:tw-col-span-7 xl:tw-col-span-8 tw-flex-col">
        <div
          className="tw-relative tw-h-fit md:tw-min-h-[25vh] lg:tw-rounded-lg lg:tw-shadow tw-flex"
          style={{
            backgroundImage: `url(/banners/banner_cruise.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="tw-w-full tw-bg-indigo-500 dark:tw-bg-indigo-900 dark:tw-bg-opacity-60 tw-rounded tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-bg-opacity-40 tw-p-5 tw-flex tw-items-center tw-justify-center">
            <Buscador_Cruceros setDuracion={setDuracion} duracion={duracion} />
          </div>
        </div>

        {isLoading ? (
          <div className="tw-px-5 tw-grid tw-grid-cols-1 xl:tw-grid-cols-3 tw-gap-10 tw-mt-8 tw-container">
            <Zonas_Puertos_Placeholder />
          </div>
        ) : !isError ? (
          <div className="tw-px-5 tw-grid tw-grid-cols-1 xl:tw-grid-cols-3 tw-gap-10 tw-mt-8 tw-container">
            <div className="xl:tw-col-span-1">
              <Zonas
                data={data?.zonas}
                isLoading={isLoading}
                setRequestData={setRequestData}
                requestData={requestData}
              />
            </div>
            <div className="xl:tw-col-span-2">
              <Puertos
                data={data?.puertos}
                isLoading={isLoading}
                setRequestData={setRequestData}
                requestData={requestData}
              />
            </div>
          </div>
        ) : (
          <span className="tw-flex tw-justify-center tw-items-center tw-flex-col tw-mt-8 tw-h-[30vh]">
            <MdCancel className="tw-text-red-500 tw-text-3xl" />
            No se han podido cargar los datos para cruceros destacados
          </span>
        )}
      </div>
      <section className="tw-col-span-10 tw-mt-5">
        <Destacados
          data={data}
          isLoading={isLoading}
          setRequestData={setRequestData}
          columnas={4}
          filas={2}
        />
      </section>
    </article>
  );
}

export default Cruceros;
