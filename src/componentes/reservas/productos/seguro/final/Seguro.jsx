import formatearFecha from "../../../../../helpers/FormatearFecha";


import Detalles from "../reserva/Detalles";
import { FaKitMedical } from "react-icons/fa6";
function Seguro({ seguro }) {
  return (
    <article className="tw-mt-10 tw-shadow-lg hover:tw-shadow-xl tw-transition tw-duration-300 tw-border dark:tw-bg-slate-800 tw-bg-slate-50 tw-p-5 tw-border-slate-200 dark:tw-border-slate-700 tw-rounded-lg">
      <section className="tw-flex tw-justify-between tw-items-center tw-border-b-2 tw-border-slate-100 dark:tw-border-slate-700 tw-pb-2 tw-mb-5">
        <div>
          <h3 className="tw-text-lg tw-font-bold dark:tw-text-white">
            {seguro.titulo}
          </h3>
          <p className="tw-text-slate-500 dark:tw-text-slate-300 tw-flex tw-gap-2 tw-items-center">
            {formatearFecha(seguro.inicio)} - {formatearFecha(seguro.fin)}
          </p>
        </div>
        <div className="tw-flex tw-flex-col tw-justify-center tw-items-center">
          <FaKitMedical className="tw-text-xl tw-text-secondary dark:tw-text-secondary" />
          <span className="tw-text-secondary dark:tw-text-secondary tw-font-bold">
            {parseFloat(seguro.precio).toFixed(2)}€
          </span>
        </div>
      </section>
      <Detalles seguro={seguro} />
    </article>
  );
}

export default Seguro;
