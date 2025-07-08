import Buscador from "../../../motores/buscadores/destinos/Buscador_Destinos";
import Aside from "./filtros/Aside";
import Destinos from "./Destinos";
import { useEffect, useState } from "react";
import Cargando from "../../estructura/skeleton_placeholders_listado/Cargando";
import PlaceHolder from "../../estructura/skeleton_placeholders_listado/Destinos";
function Productos() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  const [values, setValues] = useState([0, 5000]);
  const [minMax, setMinMax] = useState([0, 5000]);
  return (
    <main className="tw-flex tw-justify-center tw-flex-col tw-items-center tw-mb-20">
      <div
        className="tw-w-full tw-bg-cover tw-bg-center tw-p-8 tw-relative tw-shadow-md"
        style={{
          backgroundImage: "url('/banners/banner_hoteles.webp')",
        }}
      >
        <div className="tw-bg-indigo-400 dark:tw-bg-black tw-text-pink-600 tw-bg-opacity-50 dark:tw-bg-opacity-45 tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-pointer-events-none"></div>
        <div className="tw-flex">
          <div className="tw-container tw-relative">
            <Buscador listado={true} />
          </div>
          <aside className="lg:tw-hidden tw-col-span-9 lg:tw-col-span-3 tw-h-fit lg:tw-sticky tw-top-5 lg:tw-bg-slate-100 lg:dark:tw-bg-slate-800 lg:tw-border-2 tw-border-slate-200 dark:tw-border-slate-800 tw-rounded-lg lg:tw-shadow-xl hover:lg:tw-shadow-2xl tw-transition tw-px-3 lg:tw-p-3 lg:tw-pb-10">
            <Aside values={values} setValues={setValues} minMax={minMax} />
          </aside>
        </div>
      </div>
      <article className="tw-grid tw-grid-cols-9 lg:tw-gap-10 xs:gap-28 tw-w-full tw-container tw-mt-10">
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
            <Destinos />
          )}
        </section>
      </article>
    </main>
  );
}
export default Productos;
