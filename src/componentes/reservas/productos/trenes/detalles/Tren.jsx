import Clases from "../Clases";
function Tren({ tren, tipo, classSeat, setClassSeat, cesta }) {
  function duration(e) {
    let hours = Math.floor(e / 60);
    let minutes = e % 60;
    return `${hours}h ${minutes}min`;
  }

  return (
    <div>
      <div className="w-full relative mt-5">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h2 className="font-bold text-lg dark:text-white">Tren {tipo}</h2>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-bold">
              Clase:{tren.claseElegida.nombre}
            </p>
          </div>
          <div className="flex items-center gap-2 h-fit ">
            <div
              className={`text-sm ${
                tren.stops === 0
                  ? "bg-green-700 dark:bg-green-900"
                  : "bg-orange-400 dark:bg-orange-600"
              } rounded text-white p-2`}
            >
              {tren.stops} parada{tren.stops < 1 && "s"}
            </div>
            <div className="p-2 text-sm text-white bg-red-400 rounded dark:bg-red-800">
              {tren.segments[0].companyName}
            </div>
            <div className="p-2 text-sm text-white bg-indigo-500 rounded dark:bg-indigo-700">
              {(tren.price + tren.claseElegida.precioExtra).toFixed(2)}€
            </div>
          </div>
        </div>
      </div>
      <div className="pl-4 border-l-2 mt-4 border-slate-400 dark:border-slate-700 dark:text-slate-300">
        <div className="text-sm">{tren.departureStationName}</div>
        <div className="text-sm">{duration(tren.duration)}</div>
        <div className="text-sm">{tren.arrivalStationName}</div>
      </div>
      <img
        className="w-[70px] object-cover mt-2"
        src={tren.carrier[0].logo}
        alt="logo"
      />

      {cesta !== true && (
        <div className="border-t-2 border-slate-100 dark:border-slate-700 mt-5">
          <span
            className="dark:tw-text-secondary mt-4 font-bold mb-5 block"
          >
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
