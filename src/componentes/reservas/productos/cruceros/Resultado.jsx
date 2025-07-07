import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Buscador from "../../../motores/buscadores/cruceros/Buscador_Cruceros";
import Cruceros from "./Listado";
import PlaceHolder from "../../estructura/skeleton_placeholders_listado/Cruceros";
import Cargando from "../../estructura/skeleton_placeholders_listado/Cargando";
import PaginaError from "./filtros/Error";
const fetchData = async (datosForm, page = 1) => {
  if (
    !datosForm ||
    (!datosForm.idZona &&
      !datosForm.idPuerto &&
      !datosForm.idNav &&
      !datosForm.fechSal &&
      !datosForm.duracion)
  ) {
    console.warn("No se han proporcionado los datos.");
    return [];
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

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Error cargando datos");
    const data = await response.json();
    return {
      items: data.items || [],
      total: data.totalresults || 0,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
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

  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);
  const [cruceros, setCruceros] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    setPage(1);
    setCruceros([]);
    setHasMore(true);
  }, [JSON.stringify(datosFormNormalized)]);

  useEffect(() => {
    if (isDatosFormEmpty(datosFormNormalized)) {
      setCruceros([]);
      setHasMore(false);
      setIsFetching(false);
      setFetchError(null);
      return;
    }

    const loadData = async () => {
      setIsFetching(true);
      setFetchError(null);
      try {
        const { items, total } = await fetchData(datosFormNormalized, page);
        setCruceros((prev) => {
          const newCruceros = page === 1 ? items : [...prev, ...items];
          setHasMore(newCruceros.length < total);
          return newCruceros;
        });
        setTotalResults(total);
      } catch (error) {
        setFetchError(error.message || "Error desconocido");
      } finally {
        setIsFetching(false);
      }
    };

    loadData();
  }, [page, JSON.stringify(datosFormNormalized)]);

  return (
    <main className="tw-flex tw-justify-center tw-flex-col tw-items-center tw-mb-20">
      <div
        className="tw-w-full tw-bg-cover tw-bg-center tw-p-8 tw-relative tw-shadow-md"
        style={{ backgroundImage: "url('/banners/banner_cruise.webp')" }}
      >
        <div className="tw-bg-indigo-200 dark:tw-bg-black tw-text-pink-600 tw-bg-opacity-50 dark:tw-bg-opacity-45 tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-pointer-events-none"></div>
        <div className="tw-flex">
          <div className="tw-container tw-relative">
            <Buscador listado={true} />
          </div>
        </div>
      </div>

      <article className="lg:tw-gap-10 xs:gap-28 tw-w-full tw-container tw-mt-10 tw-min-h-[55vh] lg:tw-min-h-[40vh]">
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

        <section className="tw-col-span-9 lg:tw-col-span-6">
          {fetchError ? (
            <>
              <PaginaError error={fetchError} />
            </>
          ) : isDatosFormEmpty(datosFormNormalized) && !isFetching ? (
            <div className="tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center tw-text-slate-400 tw-text-lg tw-flex-col tw-gap-3">
              <PaginaError
                tipo={2}
                error="No se han proporcionado los datos para filtrar"
              />
            </div>
          ) : cruceros.length === 0 && !isFetching ? (
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

                  {!isFetching && hasMore && (
                    <div className="tw-text-center tw-mt-6">
                      <button
                        onClick={() => setPage((prev) => prev + 1)}
                        className="tw-bg-secondary hover:tw-bg-secondary/90 tw-text-white tw-px-4 tw-py-2 tw-rounded tw-font-semibold"
                        disabled={isFetching}
                      >
                        {!isFetching && "Cargar más"}
                      </button>
                    </div>
                  )}
                  {isFetching && (
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
