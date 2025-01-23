import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
import { Link } from "react-router-dom";

function Vuelos({ ida, vuelta, cesta }) {
  if (!ida) {
    return (
      <div className="flex justify-center items-center h-[10vh]">
        <p className="text-lg text-gray-500">Cargando...</p>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    return date.toLocaleDateString("es-ES", options);
  };

  const duracion = (horaSalida, horaLlegada) => {
    const fechaReferencia = new Date("2024-11-01");
    const [salidaHours, salidaMinutes] = horaSalida.split(":").map(Number);
    const [llegadaHours, llegadaMinutes] = horaLlegada.split(":").map(Number);
    const salidaDate = new Date(
      fechaReferencia.setHours(salidaHours, salidaMinutes, 0, 0)
    );
    const llegadaDate = new Date(
      fechaReferencia.setHours(llegadaHours, llegadaMinutes, 0, 0)
    );
    if (llegadaDate < salidaDate) {
      llegadaDate.setDate(llegadaDate.getDate() + 1);
    }
    const duration = llegadaDate - salidaDate;
    const hours = Math.floor(duration / (1000 * 60 * 60));
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  };

  const vueloIda = formatDate(ida.flight.outboundDate);
  const vueloVuelta = vuelta ? formatDate(vuelta.flight.returnDate) : null;

  return (
    <div className="mb-5">
      {cesta !== true && (
        <div className="flex justify-between">
          <h3 className="text-secondary font-semibold text-lg mb-3">
            Vuelo seleccionado
            <span>
              ({ida.flight.precio + (vuelta ? vuelta.flight.precio : 0)}€)
            </span>
          </h3>
          <Link to={"/datosVuelo"} state={{ ida, vuelta }}>
            <button className="bg-slate-500 font-bold text-white px-2 p-1 rounded-lg">
              Reservar
            </button>
          </Link>
        </div>
      )}
      <div className="mt-10 sm:block grid grid-cols-2 shadow rounded-xl border-2 border-slate-100 dark:border-slate-700">
        <div className="border-slate-100 rounded-t-xl dark:bg-slate-800">
          <div
            className={`grid grid-cols-1 md:grid-cols-4 gap-5 p-2 md:p-5 bg-white dark:bg-slate-800 hover:bg-slate-100 sm:rounded-t-xl dark:hover:bg-slate-900 transition relative  border-r-2 sm:border-r-0 sm:border-b-2 border-slate-100 dark:border-slate-600 `}
          >
            <span className="absolute -top-5 left-3 p-2 text-2xl bg-white dark:bg-slate-800 border-2 border-slate-700 dark:border-slate-500 text-slate-700 dark:text-slate-500 rounded-full">
              <FaPlaneDeparture />
            </span>
            <div className="flex flex-col items-center justify-center dark:text-slate-400">
              <img
                src={ida.flight.logo}
                alt="logo aerolinea"
                className="w-[50px] h-[30px]"
              />
              <span className="text-sm">{ida.flight.aerolinea}</span>
              <span className="text-green-700 dark:text-green-400 font-bold">
                {ida.flight.precio} €
              </span>
            </div>
            <div className="flex flex-col items-center dark:text-slate-200">
              <h4 className="font-semibold">
                {ida.flight.departure} - {ida.flight.arrival}
              </h4>
              <span className="text-xs sm:text-sm text-center">{vueloIda}</span>
            </div>
            <div className="flex flex-col items-center dark:text-slate-200">
              <h4 className="font-semibold">Duración</h4>
              <span className="text-sm">
                {duracion(ida.flight.departure, ida.flight.arrival)}
              </span>
            </div>
            <div className="text-sm flex flex-row justify-between items-center ">
              <div className="text-center flex flex-col items-center w-full ">
                <span className="font-bold text-green-700 dark:text-green-400">
                  {ida.flight.escalas > 0
                    ? `${ida.flight.escalas} ${
                        ida.flight.escalas > 1 ? "Escalas" : "Escala"
                      }`
                    : "Directo"}
                </span>
              </div>
            </div>
          </div>
        </div>
        {vuelta && (
          <div className="rounded-b-xl dark:bg-slate-800">
            <div className="grid  grid-cols-1 md:grid-cols-4 gap-5 p-2 md:p-5 bg-white dark:bg-slate-800 hover:bg-slate-100  sm:rounded-b-xl dark:hover:bg-slate-900 transition relative">
              <span className="absolute -bottom-5 right-3 p-2 text-2xl bg-white dark:bg-slate-800 border-2 border-slate-700 dark:border-slate-500 text-slate-700 dark:text-slate-500 rounded-full">
                <FaPlaneArrival />
              </span>
              <div className="flex flex-col items-center justify-center dark:text-slate-400">
                <img
                  src={vuelta.flight.logo}
                  alt="logo aerolinea"
                  className="w-[50px] h-[30px]"
                />
                <span className="text-sm">{vuelta.flight.aerolinea}</span>
                <span className="text-green-700 dark:text-green-400 font-bold">
                  {vuelta.flight.precio} €
                </span>
              </div>
              <div className="flex flex-col items-center dark:text-slate-200">
                <h4 className="font-semibold">
                  {vuelta.flight.departure} - {vuelta.flight.arrival}
                </h4>
                <span className="text-xs sm:text-sm text-center">
                  {vueloVuelta}
                </span>
              </div>
              <div className="flex flex-col items-center dark:text-slate-200">
                <h4 className="font-semibold">Duración</h4>
                <span className="text-sm">
                  {duracion(vuelta.flight.departure, vuelta.flight.arrival)}
                </span>
              </div>
              <div className="text-sm flex flex-row justify-between items-center ">
                <div className="text-center flex flex-col items-center w-full ">
                  <span className="font-bold text-green-700 dark:text-green-400">
                    {vuelta.flight.escalas > 0
                      ? `${vuelta.flight.escalas} ${
                          vuelta.flight.escalas > 1 ? "Escalas" : "Escala"
                        }`
                      : "Directo"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Vuelos;
