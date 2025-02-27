import { FaPlane } from "react-icons/fa";
import VueloSeleccionados from "../VueloSeleccionados";
import Pasajeros from "../reserva/Pasajeros";
function Vuelos({ ida, vuelta, pasajeros }) {
  return (
    <article className="tw-mt-10 tw-shadow-lg hover:tw-shadow-xl tw-transition tw-duration-300 tw-border dark:tw-bg-slate-900 tw-bg-slate-50 tw-p-5 tw-border-slate-200 dark:tw-border-slate-700 tw-rounded-lg">
      <section className="tw-flex tw-justify-between tw-items-center tw-border-b-2 tw-border-slate-100 dark:tw-border-slate-700 tw-pb-2 tw-mb-5">
        <div>
          <h3 className="tw-text-lg tw-font-bold dark:tw-text-white">
            Vuelo de ida {vuelta ? "y vuelta" : ""}
          </h3>
          <p className="tw-text-slate-500 dark:tw-text-slate-300 tw-flex tw-gap-2 tw-items-center">
            {ida.flight.salida} - {ida.flight.llegada}
          </p>
        </div>
        <div className="tw-flex tw-flex-col tw-justify-center tw-items-center">
          <FaPlane className="tw-text-xl tw-text-secondary dark:tw-text-secondary" />

          <span className="tw-text-secondary dark:tw-text-secondary tw-font-bold">
            {(ida.flight.precio + (vuelta?.flight.precio || 0)).toFixed(2)}€
          </span>
        </div>
      </section>
      <VueloSeleccionados ida={ida} vuelta={vuelta} cesta={true} />
      <Pasajeros pasajeros={pasajeros} />
    </article>
  );
}

export default Vuelos;
