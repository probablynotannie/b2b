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
  return (
    <main className="flex justify-center flex-col items-center mb-10">
      <div
        className="w-full bg-cover bg-center p-8 relative shadow-md"
        style={{
          backgroundImage: "url('/banner_trenes.jpeg')",
        }}
      >
        <div className="bg-indigo-400 dark:bg-black text-pink-600 bg-opacity-45 dark:bg-opacity-45 absolute top-0 left-0 w-full h-full pointer-events-none"></div>
        <div className="flex">
          <div className="container relative">
            <Buscador />
          </div>
          <aside className="lg:hidden col-span-9 lg:col-span-3 h-fit lg:sticky top-5 lg:bg-slate-100 lg:dark:bg-slate-800 lg:border-2 border-slate-200 dark:border-slate-800 rounded-lg lg:shadow-xl hover:lg:shadow-2xl transition px-3 lg:p-3 lg:pb-10">
            <Aside />
          </aside>
        </div>
      </div>
      <article className="grid grid-cols-9 lg:gap-10 xs:gap-28 w-full container mt-10">
        <aside className="hidden lg:block col-span-9 lg:col-span-3 h-fit lg:sticky top-24 lg:bg-slate-100 lg:dark:bg-slate-800 lg:border-2 border-slate-200 dark:border-slate-800 rounded-lg lg:shadow-xl hover:lg:shadow-2xl transition px-3 lg:p-3 lg:pb-10">
          <Aside />
        </aside>
        <section className="col-span-9 lg:col-span-6 p-3 min-h-[35vh]">
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
                    <div className="flex flex-col lg:flex-row lg:justify-between shadow-md lg:shadow-none p-3 rounded-xl border-2 lg:border-0 border-slate-200 dark:bg-slate-800 dark:md:bg-inherit dark:md:border-0 dark:md:shadow-none dark:border-slate-600 lg:mt-0">
                      <h3 className="text-secondary font-semibold text-lg ">
                        Confirmar ida
                      </h3>
                    </div>
                    <Seleccion tren={ida} />
                    <Link to={"/tren"}>
                      <button className="mt-10 w-full tw-bg-secondary p-3 rounded-lg shadow-xl text-white font-bold">
                        Total: {ida.price}€
                      </button>
                    </Link>
                  </div>
                )
              ) : (
                <div>
                  <div className="flex items-center justify-between flex-row ">
                    <h3 className="text-secondary font-semibold text-lg ">
                      Confirmar ida y vuelta
                    </h3>
                    <Link to={"/tren"} state={seleccion}>
                      <button className=" tw-bg-secondary p-3 rounded-lg  text-white font-bold">
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
