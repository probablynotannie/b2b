import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
function Resultado({ entradas }) {
  return (
    <section className="tw-pb-12 md:tw-mt-5 tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-4">
      {entradas.map((actividad, index) => (
        <Link
          to={"/circuito"}
          state={actividad}
          className="tw-border-2 tw-bg-white dark:tw-bg-slate-800 tw-relative tw-border-slate-100 dark:tw-border-slate-700 tw-h-auto tw-max-w-full tw-rounded-lg tw-rounded-t-lg tw-shadow-lg hover:tw-shadow-xl hover:tw-scale-105 tw-duration-300 tw-transition tw-cursor-pointer"
          key={index}
        >
          <div className="tw-relative">
            <img
              className="tw-h-[25vh] tw-w-full tw-object-cover tw-object-top tw-rounded-t-lg"
              src={actividad.img}
              alt={actividad.titulo}
            />
            <div className="tw-bg-emerald-500 tw-bg-opacity-15 tw-absolute tw-top-0 tw-w-full tw-h-full" />
          </div>
          <div className="tw-p-5">
            <h1 className="tw-font-semibold tw-text-slate-600 dark:tw-text-slate-300">
              {actividad.titulo}
            </h1>
            <ul className="tw-text-xs tw-pl-5">
              {actividad.incluido.slice(0, 5).map((incluido, index) => (
                <li
                  key={index}
                  className="tw-flex tw-items-center tw-gap-2 dark:tw-text-slate-300"
                >
                  <FaCheckCircle className="tw-text-green-800 dark:tw-text-green-400" />
                  <span>{incluido}</span>
                </li>
              ))}
            </ul>
            <p className="tw-mt-3 tw-text-lg">
              <span className="tw-text-slate-400 tw-text-sm tw-mr-1">Desde:</span>
              <span className="tw-font-bold tw-text-green-600 dark:tw-text-green-400">
                {actividad.precio}€
              </span>
            </p>
          </div>
        </Link>
      ))}
    </section>
  );
}
export default Resultado;
