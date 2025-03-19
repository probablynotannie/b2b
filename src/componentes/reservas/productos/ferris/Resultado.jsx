import Buscador from "./filtros/Buscador";
import Aside from "./filtros/Aside";
import Ferris from "./Ferris";
import ferris from "./Ferris.json";
import { useState, useEffect } from "react";
import Cargando from "../../estructura/skeleton_placeholders/Cargando";
import PlaceHolder from "../../estructura/skeleton_placeholders/Ferris";
function Productos() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  const [ida, setIda] = useState(null);
  const [vuelta, setVuelta] = useState(null);
  const [ferry, setFerry] = useState({});
  const [values, setValues] = useState([0, 5000]);
  const [minMax, setMinMax] = useState([0, 5000]);
  return (
    <main className="tw-flex tw-justify-center tw-flex-col tw-items-center tw-mb-10 tw-min-h-[0vh]">
      <div
        className="tw-w-full tw-bg-cover tw-bg-center tw-p-8 tw-relative tw-shadow-md"
        style={{
          backgroundImage: "url('/banner_cruise.jfif')",
        }}
      >
        <div className="tw-bg-orange-200 dark:tw-bg-black tw-text-pink-600 tw-bg-opacity-45 dark:tw-bg-opacity-45 tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-pointer-events-none"></div>
        <div className="tw-flex">
          <div className="tw-container tw-relative">
            <Buscador />
          </div>
          <aside className="lg:tw-hidden tw-col-span-9 lg:tw-col-span-3 tw-h-fit lg:tw-sticky tw-top-5 lg:tw-bg-slate-100 lg:dark:tw-bg-slate-800 lg:tw-border-2 tw-border-slate-200 dark:tw-border-slate-800 tw-rounded-lg lg:tw-shadow-xl hover:lg:tw-shadow-2xl tw-transition tw-px-3 lg:tw-p-3 lg:tw-pb-10">
            <Aside values={values} setValues={setValues} minMax={minMax} />
          </aside>
        </div>
      </div>
      <article className="tw-grid tw-grid-cols-9 lg:tw-gap-10 xs:gap-28 tw-w-full tw-container tw-mt-10 tw-min-h-[37vh]">
        <aside className="tw-hidden lg:tw-block tw-col-span-9 lg:tw-col-span-3 tw-h-fit lg:tw-sticky tw-top-10 lg:tw-bg-slate-100 lg:dark:tw-bg-slate-800 lg:tw-border-2 tw-border-slate-200 dark:tw-border-slate-800 tw-rounded-lg lg:tw-shadow-xl hover:lg:tw-shadow-2xl tw-transition tw-px-3 lg:tw-p-3 lg:tw-pb-10">
          <Aside values={values} setValues={setValues} minMax={minMax} />
        </aside>
        <section className="tw-col-span-9 lg:tw-col-span-6 tw-p-3">
          {loading ? (
            <>
              <Cargando />
              <PlaceHolder />
            </>
          ) : (
            <Ferris
              ferris={ferris}
              ferry={ferry}
              setFerry={setFerry}
              ida={ida}
              setIda={setIda}
              vuelta={vuelta}
              setVuelta={setVuelta}
            />
          )}
        </section>
      </article>
    </main>
  );
}
export default Productos;
