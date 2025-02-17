import { useState, useEffect } from "react";
import Buscador from "./filtros/Buscador";
import Aside from "./filtros/Aside";
import Hoteles from "./Hoteles";
import hoteles from "./Hoteles.json";
import { GoDotFill } from "react-icons/go";
import PlaceHolder from "../../estructura/skeleton_placeholders/Hoteles";
import Cargando from "../../estructura/skeleton_placeholders/Cargando";
function Productos() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <main className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-mb-10">
      <div
        className="tw-relative tw-w-full tw-p-8 tw-bg-center tw-bg-cover tw-shadow-md"
        style={{
          backgroundImage: "url('/banner_hoteles.jpg')",
        }}
      >
        <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-text-pink-600 tw-bg-orange-200 tw-pointer-events-none dark:tw-bg-black bg-opacity-45 dark:bg-opacity-45"></div>
        <div className="tw-flex">
          <div className="tw-container tw-relative">
            <Buscador />
          </div>
          <aside className="tw-col-span-9 tw-px-3 tw-transition tw-rounded-lg lg:tw-hidden lg:tw-col-span-3 tw-h-fit  tw-top-5 lg:tw-bg-slate-100 lg:dark:tw-bg-slate-800 lg:tw-border-2 tw-border-slate-200 dark:tw-border-slate-800 lg:tw-shadow-xl hover:lg:tw-shadow-2xl lg:tw-p-3 lg:tw-pb-10">
            <Aside />
          </aside>
        </div>
      </div>

      <article className="tw-container tw-grid tw-w-full tw-grid-cols-9 tw-mt-10 lg:tw-gap-10 xs:gap-28">
        <aside className="tw-hidden tw-col-span-9 tw-px-3 tw-transition tw-rounded-lg lg:tw-block lg:tw-col-span-3 tw-h-fit  tw-top-24 lg:tw-bg-slate-100 lg:dark:tw-bg-slate-800 lg:tw-border-2 tw-border-slate-200 dark:tw-border-slate-800 lg:tw-shadow-xl hover:lg:tw-shadow-2xl lg:tw-p-3 lg:tw-pb-10">
          <Aside />
        </aside>
        <section className="tw-col-span-9 tw-p-3 lg:tw-col-span-6">
          {loading ? (
            <>
              <Cargando />
              <PlaceHolder />
            </>
          ) : (
            <Hoteles hoteles={hoteles} />
          )}
        </section>
      </article>
    </main>
  );
}

export default Productos;
