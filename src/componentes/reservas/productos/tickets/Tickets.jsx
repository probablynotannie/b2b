import { Link } from "react-router-dom";

/* Los que tienen uqe estar pvp: 19 */

function Resultado({ entradas }) {
  const idTicket = "E-E10-A1AANO1056";
  const idOp = 5;
  return (
    <section className="tw-pb-12 md:tw-mt-5 tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-4">
      {entradas.map((actividad) => {
        const neto = actividad.idOp === "19" ? true : false;
        return (
          <Link
            to={`/ticket/${idTicket}/${idOp}`}
            state={actividad}
            className="tw-overflow-hidden tw-border-2 tw-bg-white hover:tw-scale-[102%] tw-duration-300 dark:tw-bg-slate-800 tw-relative tw-border-slate-100 dark:tw-border-slate-700 tw-h-auto tw-max-w-full tw-rounded-lg tw-rounded-t-lg tw-shadow-lg hover:tw-shadow-xl tw-transition tw-cursor-pointer"
            key={actividad.code}
          >
            <span
              className={`tw-absolute tw-top-8 -tw-right-10 tw-rotate-45 tw-w-[170px] tw-text-center tw-bg-blue-500 tw-rounded-lg tw-px-2 tw-p-1 tw-font-bold tw-text-sm tw-z-10 tw-shadow-lg ${
                neto
                  ? "tw-bg-green-300/70 tw-text-green-900"
                  : "tw-bg-blue-500/70 tw-text-blue-100"
              }`}
            >
              {neto ? "Bruto" : "Neto"}
            </span>
            <div className="tw-relative">
              <img
                className="tw-h-[25vh] tw-w-full tw-object-cover tw-object-top tw-rounded-t-lg"
                src={actividad.img[0].L}
                alt={actividad.name}
              />
              <div className="tw-bg-emerald-500 tw-bg-opacity-15 tw-absolute tw-top-0 tw-w-full tw-h-full" />
            </div>

            <div className="tw-p-5">
              <h1 className="tw-font-semibold tw-text-xl tw-text-slate-600 dark:tw-text-slate-300">
                {actividad.name}
              </h1>
              <p
                className="tw-text-sm tw-text-slate-600 dark:tw-text-slate-400 tw-line-clamp-3"
                dangerouslySetInnerHTML={{
                  __html: actividad.shortDesc,
                }}
              />

              <p className="tw-mt-3 tw-text-lg">
                <span className="tw-text-slate-400 tw-text-sm tw-mr-1">
                  Desde:
                </span>
                <span className="tw-font-bold tw-text-green-600 dark:tw-text-green-400">
                  {actividad.ListaOpciones[0].precio}€
                </span>
              </p>
            </div>
          </Link>
        );
      })}
    </section>
  );
}
export default Resultado;
