import Buscador from "./filtros/Buscador";
import Aside from "./filtros/Aside";
import Trenes from "./Trenes";
import trenes from "./Trenes.json";
import { useState, useEffect } from "react";
import Seleccion from "./Seleccion";
import { Link } from "react-router-dom";
import Cargando from "../../estructura/skeleton_placeholders/Cargando";
import PlaceHolder from "../../estructura/skeleton_placeholders/Trenes";
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
  const [values, setValues] = useState([0, 5000]);
  const [minMax, setMinMax] = useState([0, 5000]);

  return (
    <main className="tw-flex tw-justify-center tw-flex-col tw-items-center tw-mb-10">
      <div
        className="tw-w-full tw-bg-cover tw-bg-center tw-p-8 tw-relative tw-shadow-md"
        style={{
          backgroundImage: "url('/banners/banner_trenes.webp')",
        }}
      >
        <div className="tw-bg-indigo-400 dark:tw-bg-black tw-text-pink-600 tw-bg-opacity-45 dark:tw-bg-opacity-45 tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-pointer-events-none"></div>
        <div className="tw-flex">
          <div className="tw-container tw-relative">
            <Buscador />
          </div>
          <aside className="lg:tw-hidden tw-col-span-9 lg:tw-col-span-3 tw-h-fit lg:tw-sticky tw-top-5 lg:tw-bg-slate-100 lg:dark:tw-bg-slate-800 lg:tw-border-2 tw-border-slate-200 dark:tw-border-slate-800 tw-rounded-lg lg:tw-shadow-xl hover:lg:tw-shadow-2xl tw-transition tw-px-3 lg:tw-p-3 lg:tw-pb-10">
            <Aside values={values} setValues={setValues} minMax={minMax} />
          </aside>
        </div>
      </div>
      <article className="tw-grid tw-grid-cols-9 lg:tw-gap-10 xs:gap-28 tw-w-full tw-container tw-mt-10 tw-min-h-[40vh]">
        <aside className="tw-hidden lg:tw-block tw-col-span-9 lg:tw-col-span-3 tw-h-fit lg:tw-sticky tw-top-10 lg:tw-bg-slate-100 lg:dark:tw-bg-slate-800 lg:tw-border-2 tw-border-slate-200 dark:tw-border-slate-800 tw-rounded-lg lg:tw-shadow-xl hover:lg:tw-shadow-2xl tw-transition tw-px-3 lg:tw-p-3 lg:tw-pb-10">
          <Aside values={values} setValues={setValues} minMax={minMax} />
        </aside>
        <section className="tw-col-span-9 lg:tw-col-span-6 tw-p-3 tw-min-h-[55vh] lg:tw-min-h-[35vh]">
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
                      trenes={trenes.idas}
                      tipo={"idas"}
                    />
                  </div>
                ) : hasVueltas ? (
                  <div>
                    <Trenes
                      setTren={setVuelta}
                      trenes={trenes.vueltas}
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
        </section>
      </article>
    </main>
  );
}

export default Productos;
