import Buscador from "./filtros/Buscador";
import Aside from "./filtros/Aside";
import Hoteles from "./Destinos";

function Productos() {
  return (
    <main className="tw-flex tw-justify-center tw-flex-col tw-items-center tw-mb-10">
      <div
        className="tw-w-full tw-bg-cover tw-bg-center tw-p-8 tw-relative tw-shadow-md"
        style={{
          backgroundImage: "url('/banner_cruise.jfif')",
        }}
      >
        <div className="tw-bg-black tw-text-pink-600 tw-bg-opacity-10 tw-dark:bg-opacity-45 tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-pointer-events-none"></div>
        <div className="tw-container tw-relative tw-z-10">
          <Buscador />
        </div>
      </div>
      <article className="tw-grid tw-grid-cols-9 tw-lg:gap-10 tw-xs:gap-28 tw-w-full tw-container tw-mt-10">
        <aside className="tw-col-span-9 tw-lg:col-span-3 tw-h-fit tw-lg:sticky tw-top-5 tw-lg:bg-slate-100 tw-lg:dark:bg-slate-800 tw-lg:border-2 tw-border-slate-200 tw-dark:border-slate-800 tw-rounded-lg tw-lg:shadow-xl tw-hover:lg:shadow-2xl tw-transition tw-px-3 tw-lg:p-3 tw-lg:pb-10">
          <Aside />
        </aside>
        <section className="tw-col-span-9 tw-lg:col-span-6 tw-p-3">
          <Hoteles />
        </section>
      </article>
    </main>
  );
}

export default Productos;
