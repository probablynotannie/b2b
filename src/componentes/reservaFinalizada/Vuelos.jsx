import { IoAirplaneSharp } from "react-icons/io5";
import { FaTicket } from "react-icons/fa6";
import { FaChild } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";

function Vuelos({ vuelos }) {
  const formatFullMonth = (date) => {
    return date.toLocaleDateString("es-ES", { month: "long" });
  };
  const formatShortDate = (date) => {
    return date.toLocaleDateString("es-ES", {
      weekday: "short",
      day: "2-digit",
      month: "short",
    });
  };
  const getTotalPax = (pax) => {
    return (pax.adultos || 0) + (pax.ninio || 0);
  };
  const calculateDuration = (horaSalida, horaLlegada) => {
    const referenceDate = new Date("2024-11-01");
    const [salidaHours, salidaMinutes] = horaSalida.split(":").map(Number);
    const [llegadaHours, llegadaMinutes] = horaLlegada.split(":").map(Number);
    const salidaDate = new Date(
      referenceDate.setHours(salidaHours, salidaMinutes, 0, 0)
    ); // Set hours and minutes
    const llegadaDate = new Date(
      referenceDate.setHours(llegadaHours, llegadaMinutes, 0, 0)
    );

    if (llegadaDate < salidaDate) {
      llegadaDate.setDate(llegadaDate.getDate() + 1);
    }
    const duration = llegadaDate - salidaDate;
    const hours = Math.floor(duration / (1000 * 60 * 60));
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  };
  return (
    <div className="mt-10">
      <h3 className="text-lg font-bold dark:text-slate-300">Vuelos</h3>
      <div className="grid md:grid-cols-7 grid-cols-5 gap-5 mt-2">
        <div className="md:order-first order-last col-span-5 border-y-2 border-slate-100 shadow-lg border-2 rounded-xl dark:border-slate-700 dark:bg-slate-800">
          {vuelos.map((vuelo, index) => (
            <div
              key={vuelo.id}
              className={`grid grid-cols-1 md:grid-cols-4 gap-5 p-2 md:p-5 hover:bg-slate-100 dark:hover:bg-slate-800 transition ${
                index === 0 &&
                "border-b-2 border-slate-100 dark:border-slate-600"
              }`}
            >
              {/* Airline Logo */}
              <div className="flex flex-col items-center justify-center dark:text-slate-400">
                <img
                  src={vuelo.logo}
                  alt="logo de la aerolinea"
                  className="w-12"
                />
                <span>{vuelo.compania}</span>
              </div>
              {/* Flight Times */}
              <div className="flex items-center justify-center flex-col">
                <p className="font-semibold dark:text-slate-200">
                  {vuelo.horaSalida} - {vuelo.horaLlegada}
                </p>
                <p className="text-slate-400">
                  {vuelo.fecha.toLocaleDateString("es-ES", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="flex flex-col items-center dark:text-slate-200">
                <h4 className="font-semibold">Duración</h4>
                <span className="text-sm">
                  {calculateDuration(vuelo.horaSalida, vuelo.horaLlegada)}
                </span>
              </div>
              <div className="text-sm flex flex-row justify-between items-center ">
                <div className="text-center flex flex-col items-center w-full ">
                  {vuelo.escala > 0 ? (
                    <>
                      <p className="bg-secondary text-white w-fit px-2 font-semibold rounded-full">
                        {vuelo.escala} Escala
                      </p>
                      <p className="text-slate-500 dark:text-slate-400">
                        {vuelo.tiempoEscala} en {vuelo.sitioEscala}
                      </p>
                    </>
                  ) : (
                    <p className="bg-green-600 text-white w-fit px-2 font-semibold rounded-full">
                      Directo
                    </p>
                  )}
                </div>
                <div></div>
              </div>
            </div>
          ))}
        </div>

        {/* Flight Resumen */}
        <aside className="col-span-5 md:col-span-2">
          <div className=" border-2 border-slate-100 dark:border-slate-700 dark:bg-slate-800 shadow-lg rounded-lg flex flex-col justify-around p-3">
            <div>
              <h4 className="font-semibold flex items-center gap-2 dark:text-slate-200">
                <IoAirplaneSharp className="text-2xl bg-secondary rounded-full text-white p-1" />
                Vuelo de ida {vuelos.length > 1 && "y vuelta"}
              </h4>
              <div className="text-sm text-slate-500">
                <p>
                  {vuelos[0].salida} - {vuelos[0].llegada}
                </p>
              </div>
              {/*  <span>
          {formatFullMonth(vuelos[0].fecha)} {vuelos[0].fecha.getFullYear()}
        </span> */}
            </div>
            <div className="border-t mt-2 pt-2">
              <p className="text-sm dark:text-white">
                {formatShortDate(vuelos[0].fecha)} -{" "}
                {formatShortDate(vuelos[1]?.fecha)}
              </p>
              <p className="flex gap-1 text-xs tw-text-secondary font-bold">
                <>
                  <FaTicket className="text-lg" />
                  <span className="text-slate-600 dark:text-slate-300">
                    {getTotalPax(vuelos[0].pax)} billetes
                  </span>
                </>
                {vuelos[0].pax.adultos !== 0 && (
                  <>
                    <FaPerson className="text-lg" />
                    <span className="text-slate-600 dark:text-slate-300">
                      {vuelos[0].pax.adultos}{" "}
                      {vuelos[0].pax.adultos === 1 ? "adulto" : "adultos"}
                    </span>
                  </>
                )}
                {vuelos[0].pax.ninio !== 0 && (
                  <>
                    <FaChild className="text-lg" />
                    <span className="text-slate-600 dark:text-slate-300">
                      {vuelos[0].pax.ninio}{" "}
                      {vuelos[0].pax.ninio === 1 ? "niño" : "niños"}
                    </span>
                  </>
                )}
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Vuelos;
