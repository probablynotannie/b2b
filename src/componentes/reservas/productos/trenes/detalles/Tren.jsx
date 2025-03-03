import Clases from "../Clases";
import formatearMinutos from "../../../../../helpers/FormatearMinutos";
function Tren({ tren, tipo, classSeat, setClassSeat, cesta }) {
  return (
    <div>
      <div className="tw-w-full tw-relative tw-mt-5">
        <div className="tw-flex tw-justify-between tw-items-center">
          <div className="tw-flex tw-flex-col">
            <h2 className="tw-font-bold tw-text-lg dark:tw-text-white">
              Tren {tipo}
            </h2>
            <p className="tw-text-xs tw-text-slate-600 dark:tw-text-slate-400 tw-font-bold">
              Clase:{tren.claseElegida.nombre}
            </p>
          </div>
          <div className="tw-flex tw-items-center tw-gap-2 tw-h-fit">
            <div
              className={`tw-text-sm ${
                tren.stops === 0
                  ? "tw-bg-green-700 dark:tw-bg-green-900"
                  : "tw-bg-orange-400 dark:tw-bg-orange-600"
              } tw-rounded tw-text-white tw-p-2`}
            >
              {tren.stops} parada{tren.stops < 1 && "s"}
            </div>
            <div className="tw-p-2 tw-text-sm tw-text-white tw-bg-red-400 tw-rounded dark:tw-bg-red-800">
              {tren.segments[0].companyName}
            </div>
            <div className="tw-p-2 tw-text-sm tw-text-white tw-bg-indigo-500 tw-rounded dark:tw-bg-indigo-700">
              {(tren.price + tren.claseElegida.precioExtra).toFixed(2)}€
            </div>
          </div>
        </div>
      </div>
      <div className="tw-pl-4 tw-border-l-2 tw-mt-4 tw-border-slate-400 dark:tw-border-slate-700 dark:tw-text-slate-300">
        <div className="tw-text-sm">{tren.departureStationName}</div>
        <div className="tw-text-sm">{formatearMinutos(tren.duration)}</div>
        <div className="tw-text-sm">{tren.arrivalStationName}</div>
      </div>
      <img
        className="tw-w-[70px] tw-object-cover tw-mt-2"
        src={tren.carrier[0].logo}
        alt="logo"
      />
      {cesta !== true && (
        <div className="tw-border-t-2 tw-border-slate-100 dark:tw-border-slate-700 tw-mt-5">
          <span className="dark:tw-text-secondary tw-mt-4 tw-font-bold tw-mb-5 tw-block">
            Cambiar clase
          </span>
          <Clases
            clases={tren.clasesDeAsiento}
            tren={tren}
            classSeat={classSeat}
            setClassSeat={setClassSeat}
          />
        </div>
      )}
    </div>
  );
}

export default Tren;
