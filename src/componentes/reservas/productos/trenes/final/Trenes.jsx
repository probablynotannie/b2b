import { FaTrain } from "react-icons/fa";
import Tren from "../detalles/Tren";
import Map from "../Mapa";
import formatearFecha from "../../../estructura/FormatearFecha";
function Trenes({ tren }) {
  const ida = tren.ida;
  const vuelta = tren.vuelta ? tren.vuelta : null;
  return (
    <section className="mt-10 shadow-lg  hover:shadow-xl transition duration-300 border dark:bg-slate-800 bg-slate-50 p-5 border-slate-200 dark:tw-border-slate-700  rounded-lg">
      <section className="flex justify-between items-center border-b-2 border-slate-100 dark:tw-border-slate-700 pb-2 mb-5">
        <div>
          <h3 className="text-lg font-bold dark:tw-text-white">
            Tren de ida {vuelta && "y vuelta"}
          </h3>
          <p className="text-slate-500 dark:tw-text-slate-300 flex gap-2 items-center">
            {formatearFecha(ida.searchSummary.depDate)} -{" "}
            {formatearFecha(ida.searchSummary.retDate)}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <FaTrain className="text-xl tw-text-secondary dark:tw-text-secondary" />
          <span className="tw-text-secondary dark:tw-text-secondary font-bold">
            {parseFloat(ida.price + (vuelta ? vuelta.price : 0)).toFixed(2)}€
          </span>
        </div>
      </section>
      <section className="grid lg:grid-cols-2 gap-10">
        <section className="flex flex-col gap-4 border-2 border-slate-200 dark:tw-border-slate-800 bg-slate-100 dark:bg-slate-900 rounded shadow p-3">
          <Tren tren={ida} tipo="ida" cesta={true} />
          <Map tren={ida} />
        </section>
        {vuelta && (
          <section className="flex flex-col gap-4 border-2 border-slate-200 dark:tw-border-slate-800 bg-slate-100 dark:bg-slate-900 rounded shadow p-3">
            <Tren tren={vuelta} tipo="vuelta" cesta={true} />
            <Map tren={vuelta} />
          </section>
        )}
      </section>
    </section>
  );
}

export default Trenes;
