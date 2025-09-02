import Buscador from "../../motores/buscadores/trenes/Buscador_Trenes";
import Aside from "./filtros/Aside";
import Trenes from "./Trenes";
import trenes from "./Trenes.json";
import { useState, useEffect } from "react";
import Seleccion from "./Seleccion";
import { Link } from "react-router-dom";
import Cargando from "../../../placeholders/listados/Cargando";
import PlaceHolder from "../../../placeholders/listados/Trenes";
import Resultado from "../../../helpers/Resultado";
function Productos() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const [ida, setIda] = useState(null);
  const [vuelta, setVuelta] = useState(null);
  const hasVueltas = trenes.vueltas && trenes.vueltas.length > 0;
  const seleccion = vuelta ? [ida, vuelta] : [ida];
  /* filtros */
  const [values, setValues] = useState([0, 5000]);
  const [minMax, setMinMax] = useState([0, 5000]);
  const [soloDirectos, setSoloDirectos] = useState(false);

  useEffect(() => {
    const allTrenes = [...(trenes.idas || []), ...(trenes.vueltas || [])];

    if (allTrenes.length > 0) {
      const prices = allTrenes
        .map((tren) => tren.price)
        .filter((p) => typeof p === "number");

      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);

      setMinMax([minPrice, maxPrice]);
      setValues([minPrice, maxPrice]);
    }
  }, [trenes]);
  const filterTrenes = (listado) =>
    listado.filter((tren) => {
      const precioMatch = tren.price >= values[0] && tren.price <= values[1];
      const directoMatch = !soloDirectos || tren.stops === 0;
      return precioMatch && directoMatch;
    });

  const idasFiltradas = filterTrenes(trenes.idas || []);
  const vueltasFiltradas = filterTrenes(trenes.vueltas || []);

  return (
    <Resultado
      background={"url('/banners/banner_trenes.webp')"}
      position={"center"}
      color={"tw-bg-indigo-400/40"}
      buscador={<Buscador listado={true} />}
      aside={
        <Aside
          soloDirectos={soloDirectos}
          setSoloDirectos={setSoloDirectos}
          values={values}
          setValues={setValues}
          minMax={minMax}
        />
      }
      listado={
        <>
          {loading ? (
            <>
              <Cargando /> <PlaceHolder />
            </>
          ) : (
            <>
              {!ida || (!vuelta && hasVueltas) ? (
                !ida ? (
                  <div>
                    <Trenes
                      setTren={setIda}
                      trenes={idasFiltradas}
                      tipo={"idas"}
                    />
                  </div>
                ) : hasVueltas ? (
                  <div>
                    <Trenes
                      setTren={setVuelta}
                      trenes={vueltasFiltradas}
                      tipo={"vueltas"}
                    />
                  </div>
                ) : (
                  <div>
                    <div className="tw-flex tw-flex-col lg:tw-flex-row lg:tw-justify-between tw-shadow-md lg:tw-shadow-none tw-p-3 tw-rounded-xl tw-border-2 lg:tw-border-0 tw-border-slate-200 dark:tw-bg-slate-800 dark:md:tw-bg-inherit dark:md:tw-border-0 dark:md:tw-shadow-none dark:tw-border-slate-600 lg:tw-mt-0">
                      <h3 className="tw-text-secondary tw-font-semibold tw-text-lg">
                        Confirmar ida
                      </h3>
                    </div>
                    <Seleccion tren={ida} />
                    <Link to={"/tren"}>
                      <button className="tw-mt-10 tw-w-full tw-bg-secondary tw-btn_primario tw-btn_accesorios">
                        Total: {ida.price}€
                      </button>
                    </Link>
                  </div>
                )
              ) : (
                <div>
                  <div className="tw-flex tw-items-center tw-justify-between tw-flex-row">
                    <h3 className="tw-text-secondary tw-font-semibold tw-text-lg">
                      Confirmar ida y vuelta
                    </h3>
                    <Link to={"/tren"} state={seleccion}>
                      <button className="tw-btn_primario tw-btn_accesorios">
                        Total:{" "}
                        {parseFloat(
                          ida.price + (vuelta ? vuelta.price : 0)
                        ).toFixed(2)}
                        €
                      </button>
                    </Link>
                  </div>
                  <Seleccion tren={ida} />
                  {vuelta && <Seleccion tren={vuelta} />}
                </div>
              )}
            </>
          )}
        </>
      }
    />
  );
}

export default Productos;
