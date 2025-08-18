import FormateadFecha from "../../../../../../scripts/FormatearFecha";
import formatearMinutos from "../../../../../../scripts/FormatearMinutos";
function DatosTren({ tren, tipo }) {
  return (
    <div className="tw-p-2 tw-mt-3 tw-rounded tw-border tw-border-slate-100 dark:tw-border-slate-700">
      <div className="tw-flex tw-justify-between tw-items-center tw-border-b tw-border-slate-100 dark:tw-border-slate-700 tw-mb-2">
        <h3 className="tw-font-semibold tw-text-secondary dark:tw-text-secondaryDark">
          Tren de {tipo}
        </h3>
        <img className="tw-h-5" src={tren.carrier[0].logo} alt="logo" />
      </div>
      <div className="tw-grid tw-grid-cols-3 dark:tw-text-slate-100">
        <div className="tw-flex tw-flex-col tw-justify-center tw-items-center">
          {tren.price.toFixed(2)}€
          <span className="tw-text-sm">Precio Base</span>
        </div>
        <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-text-center">
          +{tren.claseElegida.precioExtra.toFixed(2)}€
          <span
            className={`${
              tren.claseElegida.precioExtra > 0
                ? "text-red-500 font-bold"
                : "text-green-500 font-bold"
            } text-sm`}
          >
            {tren.claseElegida.nombre}
          </span>
        </div>
        <div className="tw-flex tw-flex-col tw-justify-center tw-items-center">
          <span>
            {(tren.claseElegida.precioExtra + tren.price).toFixed(2)}€
          </span>
          <span className="tw-text-sm tw-font-bold">TOTAL</span>
        </div>
      </div>
      <div className="tw-bg-slate-50 tw-border-t-2 tw-mt-2 tw-border-slate-100 dark:tw-border-slate-700 dark:tw-bg-slate-800 tw-p-3 tw-text-sm tw-text-slate-500 dark:tw-text-slate-400">
        <ul className="tw-text-sm">
          <li>
            <span className="tw-mr-1 tw-font-semibold tw-text-slate-800 dark:tw-text-slate-100">
              Salida:
            </span>
            {FormateadFecha(tren.searchSummary.depDate)}
          </li>
          <li>
            <span className="tw-mr-1 tw-font-semibold tw-text-slate-800 dark:tw-text-slate-100">
              Duración:
            </span>
            {formatearMinutos(tren.duration)}
          </li>
          <li>
            <span className="tw-mr-1 tw-font-semibold tw-text-slate-800 dark:tw-text-slate-100">
              Origen:
            </span>
            {tren.departureStationName}
          </li>
          <li>
            <span className="tw-mr-1 tw-font-semibold tw-text-slate-800 dark:tw-text-slate-100">
              Destino:
            </span>
            {tren.arrivalStationName}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DatosTren;
