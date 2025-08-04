import { useState, useEffect } from "react";
import Buscador from "../../../motores/buscadores/hoteles/Buscador_Hoteles";
import Aside from "./filtros/Aside";
import Hoteles from "./Hoteles";
import PlaceHolder from "../../estructura/skeleton_placeholders_listado/Hoteles";
import Cargando from "../../estructura/skeleton_placeholders_listado/Cargando";
import { FaList, FaMapMarkedAlt } from "react-icons/fa";
import Resultado from "../../Resultado";
import hotelesReales from "./hotelesReaeles.json";
import MapaHoteles from "./mapa/MapaHoteles";

function Productos() {
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState("list");
  const [hoteles, setHoteles] = useState(hotelesReales);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const [values, setValues] = useState([0, 5000]);
  const [minMax, setMinMax] = useState([0, 5000]);

  return (
    <Resultado
      background={"url('/banners/banner_hoteles.webp')"}
      position={"center"}
      color={"tw-bg-orange-300/45"}
      buscador={<Buscador listado={true} />}
      wideContent={viewMode === "list" ? false : true}
      ocultarAside={viewMode === "list" ? false : true}
      aside={
        <Aside
          setPage={setPage}
          setHoteles={setHoteles}
          hoteles={hotelesReales}
          values={values}
          setValues={setValues}
          minMax={minMax}
          setMinMax={setMinMax}
        />
      }
      listado={
        <>
          <section
            className={`
            ${viewMode === "list" ? "lg:tw-col-span-6" : "lg:tw-col-span-9"}

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
                          ? "tw-bg-secondary dark:tw-bg-secondaryDark tw-text-white"
                          : "tw-bg-slate-200 dark:tw-bg-slate-800 dark:tw-text-slate-200"
                      }`}
                      onClick={() => setViewMode("list")}
                    >
                      <FaList /> Lista
                    </button>
                    <button
                      className={`tw-flex tw-items-center tw-gap-2 tw-p-2 tw-ml-2 tw-rounded-md ${
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
                  <Hoteles hoteles={hoteles} page={page} setPage={setPage} />
                ) : (
                  <>
                    <MapaHoteles
                      setHoteles={setHoteles}
                      hotelesSinFiltrar={hotelesReales}
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
        </>
      }
    />
  );
}

export default Productos;
