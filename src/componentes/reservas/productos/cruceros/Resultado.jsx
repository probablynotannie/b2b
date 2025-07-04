import { useLocation, useParams } from "react-router-dom";
import { useMemo } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import Buscador from "./filtros/Buscador";
import Cruceros from "./Listado";
import PlaceHolder from "../../estructura/skeleton_placeholders_listado/Cruceros";
import Cargando from "../../estructura/skeleton_placeholders_listado/Cargando";
import PaginaError from "./filtros/Error";

const fetchCruceros = async ({ pageParam = 1, queryKey }) => {
  const [_key, form] = queryKey;
  if (
    !form ||
    (!form.idZona &&
      !form.idPuerto &&
      !form.idNav &&
      !form.fechSal &&
      !form.duracion)
  )
    return { items: [], total: 0 };

  const params = new URLSearchParams({
    destino: form.idZona || "",
    puertos: form.idPuerto || "",
    naviera: form.idNav || "",
    fechSal: form.fechSal || "",
    duracion: form.duracion || "",
    idv: "207",
    p: String(pageParam),
    json: "1",
  });

  const url = `https://devxml-2.vpackage.net/FrontCruceros/cruceros/?${params.toString()}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Error cargando datos");
  const data = await res.json();

  return {
    items: data.items || [],
    total: data.totalresults || 0,
    nextPage: pageParam + 1,
  };
};

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
      case "fechSal": {
        const [month, year] = val.split("-");
        form.fechSal = `${year}-${month}`;
        break;
      }
    }
  }
  return form;
};

const isEmptyForm = (f) =>
  !f?.idZona && !f?.idPuerto && !f?.idNav && !f?.fechSal && !f?.duracion;

function Productos() {
  const location = useLocation();
  const params = useParams();

  const { newRequestData = {}, datosForm: datosFormFromState } =
    location.state || {};

  const datosForm = useMemo(
    () => datosFormFromState || buildFormFromParams(params) || {},
    [datosFormFromState, params]
  );

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["cruceros", datosForm],
    queryFn: fetchCruceros,
    enabled: !isEmptyForm(datosForm),
    getNextPageParam: (last) =>
      last.items.length + 0 < last.total ? last.nextPage : undefined,
    staleTime: 60 * 1000,
  });

  const cruceros = data ? data.pages.flatMap((page) => page.items) : [];
  const totalResults = data?.pages?.[0]?.total ?? 0;

  return (
    <main className="tw-flex tw-justify-center tw-flex-col tw-items-center tw-mb-20">
      <div
        className="tw-w-full tw-bg-cover tw-bg-center tw-p-8 tw-relative tw-shadow-md"
        style={{ backgroundImage: "url('/banners/banner_cruise.webp')" }}
      >
        <div className="tw-bg-indigo-200 dark:tw-bg-black tw-text-pink-600 tw-bg-opacity-50 dark:tw-bg-opacity-45 tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-pointer-events-none" />
        <div className="tw-container tw-relative">
          <Buscador datos={datosForm} />
        </div>
      </div>

      <article className="lg:tw-gap-10 xs:gap-28 tw-w-full tw-container tw-mt-10 tw-min-h-[55vh] lg:tw-min-h-[40vh]">
        {newRequestData.img && (
          <section className="tw-mb-10">
            <h1 className="tw-text-2xl tw-text-secondary tw-font-extrabold tw-mb-5">
              {newRequestData.titulo}
            </h1>
            <div
              className="tw-relative tw-min-h-[30vh] tw-w-full tw-bg-cover tw-bg-center tw-rounded-lg tw-shadow-lg tw-animate-fade-left"
              style={{ backgroundImage: `url(${newRequestData.img})` }}
            >
              <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-blue-700 tw-bg-opacity-20 tw-flex tw-flex-col tw-justify-between tw-p-6 tw-rounded-lg hover:tw-bg-opacity-30 tw-transition-all">
                <div className="tw-flex-1" />
                <div className="tw-min-h-[10vh] tw-bg-black tw-bg-opacity-35 tw-text-slate-100 tw-font-medium tw-text-sm tw-p-4 tw-rounded-lg shadow-md hover:tw-bg-opacity-50 tw-transition-all">
                  {newRequestData.desc}
                </div>
              </div>
            </div>
          </section>
        )}
        <section className="tw-col-span-9 lg:tw-col-span-6">
          {status === "error" ? (
            <PaginaError error={error.message} />
          ) : isEmptyForm(datosForm) ? (
            <PaginaError
              tipo={2}
              error="No se han proporcionado los datos para filtrar"
            />
          ) : cruceros.length === 0 && !isFetching ? (
            <PaginaError error="No hay cruceros con estos datos :(" />
          ) : (
            <div className="px-4 tw-p-5 lg:tw-px-10">
              {isFetching && cruceros.length === 0 ? (
                <>
                  <Cargando />
                  <PlaceHolder />
                </>
              ) : (
                <>
                  <h3 className="tw-text-secondary tw-font-semibold tw-text-lg">
                    Resultados ({totalResults})
                  </h3>

                  <Cruceros destinos={cruceros} />

                  {hasNextPage && (
                    <div className="tw-text-center tw-mt-6">
                      <button
                        onClick={() => fetchNextPage()}
                        className="tw-bg-secondary hover:tw-bg-secondary/90 tw-text-white tw-px-4 tw-py-2 tw-rounded tw-font-semibold"
                        disabled={isFetchingNextPage}
                      >
                        {isFetchingNextPage ? "Cargando…" : "Cargar más"}
                      </button>
                    </div>
                  )}

                  {isFetchingNextPage && (
                    <>
                      <Cargando />
                      <PlaceHolder />
                    </>
                  )}
                </>
              )}
            </div>
          )}
        </section>
      </article>
    </main>
  );
}

export default Productos;
