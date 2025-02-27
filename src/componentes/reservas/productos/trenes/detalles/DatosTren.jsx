import FormateadFecha from "../../../estructura/FormatearFecha";

function DatosTren({ tren, tipo }) {
  function duration(e) {
    let hours = Math.floor(e / 60);
    let minutes = e % 60;
    return `${hours}h ${minutes}min`;
  }
  return (
    <div className=" p-2 mt-3 rounded border border-slate-100 dark:tw-border-slate-700">
      <div className="flex justify-between items-center border-b border-slate-100 dark:tw-border-slate-700 mb-2">
        <h3 className="font-semibold tw-text-secondary dark:tw-text-secondary">
          Tren {tipo}
        </h3>
        <img className="h-5" src={tren.carrier[0].logo} alt="logo" />
      </div>
      <div className="grid grid-cols-3 dark:tw-text-slate-100">
        <div className="flex flex-col justify-center items-center">
          {tren.price.toFixed(2)}
          <span className="text-sm">Precio Base</span>
        </div>
        <div className="flex flex-col justify-center items-center">
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
        <div className="flex flex-col justify-center items-center">
          <span>
            {(tren.claseElegida.precioExtra + tren.price).toFixed(2)}€
          </span>

          <span className="text-sm font-bold">TOTAL</span>
        </div>
      </div>
      <div className="bg-slate-50 border-t-2 mt-2 border-slate-100 dark:tw-border-slate-700 dark:bg-slate-800 p-3 text-sm text-slate-500 dark:tw-text-slate-400">
        <ul className="text-sm">
          <li>
            <span className="mr-1 font-semibold text-slate-800 dark:tw-text-slate-100">
              Salida:
            </span>{" "}
            {FormateadFecha(tren.searchSummary.depDate)}
          </li>
          <li>
            <span className="mr-1 font-semibold text-slate-800 dark:tw-text-slate-100">
              Duración:{" "}
            </span>{" "}
            {duration(tren.duration)}
          </li>
          <li>
            <span className="mr-1 font-semibold text-slate-800 dark:tw-text-slate-100">
              Origen:
            </span>
            {tren.departureStationName}
          </li>
          <li>
            <span className="mr-1 font-semibold text-slate-800 dark:tw-text-slate-100">
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
