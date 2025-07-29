import { useLocation, useParams } from "react-router-dom";
import { useState, useMemo, useRef, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Buscador from "../../../motores/buscadores/cruceros/Buscador_Cruceros";
import Cruceros from "./Listado";
import PlaceHolder from "../../estructura/skeleton_placeholders_listado/Cruceros";
import Cargando from "../../estructura/skeleton_placeholders_listado/Cargando";
import PaginaError from "./filtros/Error";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import Resultado from "../../Resultado";
const fetchCruceros = async ({ queryKey }) => {
  const [, datosForm, page] = queryKey;
  if (
    !datosForm ||
    (!datosForm.idZona &&
      !datosForm.idPuerto &&
      !datosForm.idNav &&
      !datosForm.fechSal &&
      !datosForm.duracion)
  ) {
    return { items: [], total: 0 };
  }
  const baseUrl = "https://devxml-2.vpackage.net/FrontCruceros/cruceros/";
  const params = new URLSearchParams({
    destino: datosForm.idZona || "",
    puertos: datosForm.idPuerto || "",
    naviera: datosForm.idNav || "",
    fechSal: datosForm.fechSal || "",
    duracion: datosForm.duracion || "",
    idv: "207",
    p: page.toString(),
    json: "1",
  });
  const url = `${baseUrl}?${params.toString()}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Error cargando datos");
  const data = await response.json();
  return {
    items: data.items || [],
    total: data.totalresults || 0,
  };
};
function Productos() {
  const location = useLocation();
  const params = useParams();
  const { newRequestData = {}, datosForm: datosFormFromState } =
    location.state || {};
  const buildFormFromParams = (params) => {
    const form = {};
    const entries = Object.entries(params);
    for (let i = 0; i < entries.length; i += 2) {
      const [key, val] = [entries[i][1], entries[i + 1]?.[1]];
      if (!key || !val) continue;
      switch (key) {
        case "idZona":
        case "idPuerto":
        case "idNav":
        case "duracion":
          form[key] = val;
          break;
        case "fechSal":
          if (val.includes("-")) {
            const [month, year] = val.split("-");
            form.fechSal = `${year}-${month}`;
          }
          break;
      }
    }
    return form;
  };
  const datosFormNormalized =
    datosFormFromState || buildFormFromParams(params) || {};
  const isDatosFormEmpty = (form) => {
    if (!form) return true;
    return !(
      form.idZona ||
      form.idPuerto ||
      form.idNav ||
      form.fechSal ||
      form.duracion
    );
  };

  const [page, setPage] = useState(1);

  const { data, isLoading, isError, error, refetch, isFetching } = useQuery({
    queryKey: ["cruceros", datosFormNormalized, page],
    queryFn: fetchCruceros,
    enabled: !isDatosFormEmpty(datosFormNormalized),
    keepPreviousData: true,
  });

  const cruceros = useMemo(() => data?.items || [], [data?.items]);

  const totalResults = data?.total || 0;
  const pageSize = 20;
  const totalPages = Math.ceil(totalResults / pageSize);
  useMemo(() => {
    setPage(1);
  }, []);
  const resultadosRef = useRef(null);

  useEffect(() => {
    if (!isFetching) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [cruceros, isFetching]);

  return (
    <Resultado
      background={"url('/banners/banner_cruise.webp')"}
      position={"center"}
      color={"tw-bg-blue-500/50"}
      buscador={<Buscador listado={true} />}
      aside={false}
      listado={
        <>
          {newRequestData.img && (
            <section className="tw-mb-10">
              <h1 className="tw-text-2xl tw-text-secondary tw-font-extrabold tw-mb-5">
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
          <section className="tw-col-span-9 lg:tw-col-span-6 tw-overflow-visible">
            {isError ? (
              <PaginaError
                error={
                  error?.message ||
                  "No se pudieron cargar los datos. Por favor, inténtalo de nuevo más tarde."
                }
                onRetry={refetch}
              />
            ) : isDatosFormEmpty(datosFormNormalized) && !isLoading ? (
              <div className="tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center tw-text-slate-400 tw-text-lg tw-flex-col tw-gap-3">
                <PaginaError
                  tipo={2}
                  error="No se han proporcionado los datos para filtrar"
                />
              </div>
            ) : cruceros.length === 0 && !isLoading ? (
              <div className="tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center tw-text-slate-400 tw-text-lg tw-flex-col tw-gap-3">
                {datosFormNormalized &&
                  (datosFormNormalized.idZona ||
                    datosFormNormalized.idPuerto ||
                    datosFormNormalized.idNav ||
                    datosFormNormalized.fechSal ||
                    datosFormNormalized.duracion) && (
                    <PaginaError error={"No hay cruceros con estos datos :("} />
                  )}
              </div>
            ) : (
              <div className="px-4 tw-p-5 lg:tw-px-10">
                {isLoading || isFetching ? (
                  <>
                    <Cargando />
                    <PlaceHolder />
                  </>
                ) : (
                  <div ref={resultadosRef}>
                    <div className="tw-sticky tw-top-0 tw-bg-white/90 dark:tw-bg-slate-700/80 tw-p-3 tw-z-10 tw-flex tw-justify-between tw-items-center">
                      <h3 className="tw-font-semibold tw-text-lg tw-text-secondary dark:tw-text-secondaryDark">
                        Resultados ({totalResults})
                      </h3>
                      {totalPages > 1 && (
                        <div className="tw-flex tw-flex-wrap tw-justify-center tw-items-center tw-gap-2">
                          <button
                            onClick={() => setPage((p) => Math.max(1, p - 1))}
                            disabled={page === 1}
                            className="tw-text-xl tw-text-secondary hover:tw-text-secondary/90 tw-smooth tw-px-3 tw-py-1 tw-rounded disabled:tw-text-slate-400"
                          >
                            <FaAnglesLeft />
                          </button>
                          <span className="tw-text-slate-500 dark:tw-text-slate-300">
                            {" "}
                            {page}
                          </span>
                          <button
                            onClick={() => setPage((p) => Math.max(1, p + 1))}
                            disabled={page === totalPages}
                            className="tw-text-xl tw-text-secondary hover:tw-text-secondary/90 tw-smooth tw-px-3 tw-py-1 tw-rounded disabled:tw-text-slate-400"
                          >
                            <FaAnglesRight />
                          </button>
                        </div>
                      )}
                    </div>
                    <Cruceros destinos={cruceros} />
                    {totalPages > 1 && (
                      <div className="tw-flex tw-flex-wrap tw-justify-center tw-items-center tw-gap-2 tw-mt-6">
                        {[...Array(totalPages)].map((_, idx) => (
                          <button
                            key={idx + 1}
                            onClick={() => setPage(idx + 1)}
                            className={`tw-px-3 tw-py-1 tw-rounded ${
                              page === idx + 1
                                ? "tw-bg-secondary tw-text-white"
                                : "tw-bg-slate-200 dark:tw-bg-slate-800 dark:tw-text-white hover:tw-bg-slate-400 tw-smooth"
                            }`}
                          >
                            {idx + 1}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </section>
        </>
      }
    />
  );
}

export default Productos;
