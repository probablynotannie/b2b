import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";
function Resultado({ tickets }) {
  return (
    <>
      {tickets.length === 0 && (
        <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-w-col-span-3 dark:tw-text-slate-300 tw-min-h-[20vh] tw-text-slate-500">
          <MdCancel className="tw-text-2xl tw-animate-bounce dark:tw-text-danger tw-text-danger" />
          No hay ningun ticket con estos datos
        </div>
      )}
      <section className="tw-pb-12 md:tw-mt-5 tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-4">
        {tickets.map((actividad, index) => (
          <Link
            to={"/ticket"}
            state={actividad}
            className="tw-border-2 tw-bg-white hover:tw-scale-[102%] tw-duration-300 dark:tw-bg-slate-800 tw-relative tw-border-slate-100 dark:tw-border-slate-700 tw-h-auto tw-max-w-full tw-rounded-lg tw-rounded-t-lg tw-shadow-lg hover:tw-shadow-xl tw-transition tw-cursor-pointer"
            key={index}
          >
            <span
              className={`tw-absolute tw-rotate-45 tw-bg-blue-500 tw-rounded-lg tw-px-2 tw-p-1 tw-font-bold tw-text-sm tw-top-5 tw-right-5 tw-z-10 tw-shadow-lg ${
                actividad.tipoPrecio === "Neto"
                  ? "tw-bg-green-300 tw-text-green-800"
                  : "tw-bg-red-500 tw-text-red-200"
              }`}
            >
              {actividad.tipoPrecio}
            </span>
            <div className="tw-relative">
              <img
                className="tw-h-[25vh] tw-w-full tw-rounded-t-lg tw-object-top tw-object-cover"
                src={actividad.img}
                alt={actividad.titulo}
              />
              <div className="tw-bg-emerald-500 tw-bg-opacity-15 tw-absolute tw-top-0 tw-w-full tw-h-full" />
            </div>
            <div className="tw-p-5">
              <h1 className="tw-font-semibold tw-text-slate-600 dark:tw-text-slate-300">
                {actividad.titulo}
              </h1>
              <p className="tw-text-sm dark:tw-text-slate-400">
                {actividad.descripcion_corta}
              </p>
              <p className="tw-mt-3 tw-text-lg">
                <span className="tw-text-slate-400 tw-text-sm tw-mr-1">
                  Desde:
                </span>
                <span className="tw-font-bold tw-text-green-600 dark:tw-text-green-400">
                  {actividad.precio}€
                </span>
              </p>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
export default Resultado;
