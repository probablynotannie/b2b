import { FaArrowRight } from "react-icons/fa";

function Ticket({ tren, tipo }) {
  return (
    <div className="tw-bg-white dark:tw-bg-slate-900 tw-rounded-lg  tw-shadow tw-smooth tw-border tw-border-slate-100 dark:tw-border-slate-700 tw-p-5">
      <div className="tw-flex tw-justify-between tw-items-center tw-pb-2 tw-border-b tw-border-slate-100 dark:tw-border-slate-700">
        <div>
          <h3 className="tw-font-bold dark:tw-text-white tw-text-lg tw-text-slate-700">
            {tren.recorrido}
          </h3>
          <div className="tw-text-slate-500 dark:tw-text-slate-400 tw-text-sm tw-gap-2 tw-flex tw-items-center">
            <span>
              {tren.salida} {tren.horaSalida}
            </span>
            <FaArrowRight className="tw-text-slate-500 dark:tw-text-slate-400 tw-text-xs" />
            <span>
              {tren.llegada} {tren.horaSalida}
            </span>
          </div>
        </div>
        <span className="tw-bg-green-500 tw-h-fit tw-p-1 tw-px-3 tw-text-xs tw-rounded-lg tw-text-white tw-font-bold">
          {tipo}
        </span>
      </div>
      <div>
        <ul>
          {tren.pasajeros.map((pasajero, index) => (
            <li
              key={index}
              className="tw-flex tw-justify-between tw-items-center tw-py-2 tw-border-b tw-border-slate-100 dark:tw-border-slate-700 dark:tw-text-slate-200"
            >
              <span className="dark:tw-text-secondaryDark tw-font-bold">
                {pasajero.nombre} {pasajero.apellido}
              </span>
              <span>
                Vagón: {pasajero.vagon} Butaca: {pasajero.butaca}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Ticket;
