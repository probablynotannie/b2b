import { useState } from "react";
import Buscador from "../../../motores/buscadores/hoteles/Buscador_Hoteles";
import Aside from "./filtros/Aside";
import Hoteles from "./Hoteles";
import PlaceHolder from "../../estructura/skeleton_placeholders_listado/Hoteles";
import Cargando from "../../estructura/skeleton_placeholders_listado/Cargando";
import { FaEye, FaList, FaMapMarkedAlt } from "react-icons/fa";
import Resultado from "../../Resultado";
import MapaHoteles from "./mapa/MapaHoteles";
import PaginacionFooter from "../../../../helpers/visuales/pagination/PaginacionFooter";
import Paginacion from "../../../../helpers/visuales/pagination/Corto";
import useNetoStore from "./scripts/zustand/useNetoStore";
import getHoteles from "./scripts/getHoteles";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Error from "./filtros/Error";
function Productos() {
  const { codearea, codcity, fecini, noc, numper } = useParams();

  const reserva = {
    codearea: codearea ? Number(codearea) : null,
    codcity: codcity ? Number(codcity) : null,
    fecini: fecini || null,
    noc: noc ? Number(noc) : null,
    numper: numper || null,
  };

  const isReservaIncomplete = Object.values(reserva).some(
    (val) => val === null || val === ""
  );

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["hoteles", reserva],
    queryFn: getHoteles,
    enabled: !isReservaIncomplete, // <-- important

    keepPreviousData: true,
  });
  const [viewMode, setViewMode] = useState("list");
  const [hoteles, setHoteles] = useState(data);
  const [page, setPage] = useState(1);
  const { neto, setNeto } = useNetoStore();
  const [values, setValues] = useState([0, 5000]);
  const [minMax, setMinMax] = useState([0, 5000]);
  const hotelesPorPagina = 10;
  const indexUltimoHotel = page * hotelesPorPagina;
  const indexPrimerHotel = indexUltimoHotel - hotelesPorPagina;
  const hotelesAMostrar = hoteles?.slice(indexPrimerHotel, indexUltimoHotel);
  const paginasTotales = Math.ceil(hoteles?.length / hotelesPorPagina);
  return (
    <Resultado
      background={"url('/banners/banner_hoteles.webp')"}
      position={"center"}
      color={"tw-bg-orange-300/45"}
      buscador={<Buscador listado={true} />}
      wideContent={!isReservaIncomplete && viewMode === "list" ? false : true}
      ocultarAside={!isReservaIncomplete && viewMode === "list" ? false : true}
      aside={
        <>
          {!isReservaIncomplete && (
            <Aside
              isLoading={isLoading}
              isFetching={isFetching}
              setPage={setPage}
              setHoteles={setHoteles}
              hoteles={data ? data : []}
              values={values}
              setValues={setValues}
              minMax={minMax}
              setMinMax={setMinMax}
            />
          )}
        </>
      }
      listado={
        <>
          {isReservaIncomplete || hoteles.length === 0 ? (
            <div className="tw-flex tw-justify-center tw-w-full">
              <Error
                tipo={isReservaIncomplete ? 1 : 2}
                enlace={"/hoteles"}
                error={
                  isReservaIncomplete
                    ? "Faltan algunos datos para extraer hoteles."
                    : "No hay hoteles con estos parametros."
                }
              />
            </div>
          ) : (
            <section
              className={`
            ${viewMode === "list" ? "lg:tw-col-span-6" : "lg:tw-col-span-9"}

          tw-col-span-9 tw-p-3 
          `}
            >
              {isLoading || isFetching ? (
                <>
                  <Cargando />
                  <PlaceHolder />
                </>
              ) : (
                <>
                  <div className="tw-flex tw-items-center tw-justify-between tw-col-span-9">
                    <h3
                      className={`tw-text-secondary
                 tw-font-semibold tw-text-lg tw-flex tw-items-center`}
                    >
                      Resultados ({hoteles?.length})
                    </h3>
                    <div className="tw-flex tw-gap-2">
                      <button
                        className={`tw-flex tw-items-center tw-gap-2 tw-p-2 tw-rounded-md ${
                          neto !== true
                            ? "tw-bg-secondary dark:tw-bg-secondaryDark tw-text-white"
                            : "tw-bg-slate-200 dark:tw-bg-slate-800 dark:tw-text-slate-200"
                        }`}
                        onClick={() => setNeto(!neto)}
                      >
                        <FaEye />
                      </button>
                      <button
                        className={`tw-flex tw-items-center tw-gap-2 tw-p-2 tw-rounded-md ${
                          viewMode === "list"
                            ? "tw-bg-secondary dark:tw-bg-secondaryDark tw-text-white"
                            : "tw-bg-slate-200 dark:tw-bg-slate-800 dark:tw-text-slate-200"
                        }`}
                        onClick={() => setViewMode("list")}
                      >
                        <FaList /> Lista
                      </button>
                      <button
                        className={`tw-flex tw-items-center tw-gap-2 tw-p-2 tw-rounded-md ${
                          viewMode === "map"
                            ? "tw-bg-secondary dark:tw-bg-secondaryDark tw-text-white"
                            : "tw-bg-slate-200 dark:tw-bg-slate-800 dark:tw-text-slate-200"
                        }`}
                        onClick={() => setViewMode("map")}
                      >
                        <FaMapMarkedAlt /> Mapa
                      </button>
                    </div>
                  </div>
                  {viewMode === "list" ? (
                    <div>
                      {hotelesAMostrar && (
                        <>
                          <div className="tw-flex tw-justify-start">
                            <Paginacion
                              totalPages={paginasTotales}
                              page={page}
                              setPage={setPage}
                            />
                          </div>
                          <Hoteles
                            reserva={reserva}
                            neto={neto}
                            hoteles={hotelesAMostrar}
                            page={page}
                            setPage={setPage}
                          />
                          <div className="tw-flex tw-justify-end tw-mt-4">
                            <PaginacionFooter
                              totalPages={paginasTotales}
                              page={page}
                              setPage={setPage}
                            />
                          </div>
                        </>
                      )}
                    </div>
                  ) : (
                    <>
                      <MapaHoteles
                        setHoteles={setHoteles}
                        hotelesSinFiltrar={data}
                        neto={neto}
                        hoteles={hoteles}
                        values={values}
                        setValues={setValues}
                        minMax={minMax}
                        setMinMax={setMinMax}
                      />
                    </>
                  )}
                </>
              )}
            </section>
          )}
        </>
      }
    />
  );
}

export default Productos;
