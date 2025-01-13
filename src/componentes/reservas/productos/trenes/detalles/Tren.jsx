import Clases from "../Clases";
function Tren({ tren, tipo }) {
  function duration(e) {
    let hours = Math.floor(e / 60);
    let minutes = e % 60;
    return `${hours}h ${minutes}min`;
  }
  return (
    <>
      <div className="w-full relative">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-lg">Tren {tipo}</h2>
          <div className="flex gap-2 h-fit ">
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
              {tren.price}€
            </div>
          </div>
        </div>
      </div>
      <div className="pl-4 border-l-2 mt-4 border-slate-400 dark:border-slate-700 dark:text-slate-300">
        <div className="text-sm">{tren.departureStationName}</div>
        <div className="text-sm">{duration(tren.duration)}</div>
        <div className="text-sm">{tren.arrivalStationName}</div>
      </div>
      <div className="flex items-center justify-end dark:bg-slate-100 p-2 rounded-md">
        <img className="h-6" src={tren.carrier[0].logo} alt="logo" />
      </div>
      <div className="mt-2">
        <b>Cambiar clase</b>
        <Clases clases={tren.clasesDeAsiento} tren={tren} />
      </div>
    </>
  );
}

export default Tren;
