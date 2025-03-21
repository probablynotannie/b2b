import { FaTrain } from "react-icons/fa";
import Tren from "../detalles/Tren";
import Map from "../Mapa";
import FormatearFecha from "../../../../../helpers/FormatearFecha";

function Trenes({ tren }) {
  const ida = tren.ida;
  const vuelta = tren.vuelta ? tren.vuelta : null;
  return (
    <section className="tw-mt-10 tw-shadow-lg hover:tw-shadow-xl tw-transition tw-duration-300 tw-border dark:tw-bg-slate-800 tw-bg-slate-50 tw-p-5 tw-border-slate-200 dark:tw-border-slate-700 tw-rounded-lg">
      <section className="tw-flex tw-justify-between tw-items-center tw-border-b-2 tw-border-slate-100 dark:tw-border-slate-700 tw-pb-2 tw-mb-5">
        <div>
          <h3 className="tw-text-lg tw-font-bold dark:tw-text-white">
            Tren de ida {vuelta && "y vuelta"}
          </h3>
          <p className="tw-text-slate-500 dark:tw-text-slate-300 tw-flex tw-gap-2 tw-items-center">
            {FormatearFecha(ida.searchSummary.depDate)} -{" "}
            {FormatearFecha(ida.searchSummary.retDate)}
          </p>
        </div>
        <div className="tw-flex tw-flex-col tw-justify-center tw-items-center">
          <FaTrain className="tw-text-xl tw-text-secondary dark:tw-text-secondaryDark" />
          <span className="tw-text-secondary dark:tw-text-secondaryDark tw-font-bold">
            {parseFloat(ida.price + (vuelta ? vuelta.price : 0)).toFixed(2)}€
          </span>
        </div>
      </section>
      <section className="tw-grid lg:tw-grid-cols-2 tw-gap-10">
        <section className="tw-flex tw-flex-col tw-gap-4 tw-border-2 tw-border-slate-200 dark:tw-border-slate-800 tw-bg-slate-100 dark:tw-bg-slate-900 tw-rounded tw-shadow tw-p-3">
          <Tren tren={ida} tipo="ida" cesta={true} />
          <Map tren={ida} />
        </section>
        {vuelta && (
          <section className="tw-flex tw-flex-col tw-gap-4 tw-border-2 tw-border-slate-200 dark:tw-border-slate-800 tw-bg-slate-100 dark:tw-bg-slate-900 tw-rounded tw-shadow tw-p-3">
            <Tren tren={vuelta} tipo="vuelta" cesta={true} />
            <Map tren={vuelta} />
          </section>
        )}
      </section>
    </section>
  );
}

export default Trenes;
