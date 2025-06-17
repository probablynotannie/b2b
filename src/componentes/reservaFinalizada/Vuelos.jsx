import { IoAirplaneSharp } from "react-icons/io5";
import { FaTicket } from "react-icons/fa6";
import { FaChild } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";

function Vuelos({ vuelos }) {
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
    );
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
    <div className="tw-mt-10">
      <h3 className="tw-text-lg tw-font-bold dark:tw-text-slate-300">Vuelos</h3>
      <div className="tw-grid md:tw-grid-cols-7 tw-grid-cols-5 tw-gap-5 tw-mt-2">
        <div className="md:tw-order-first tw-order-last tw-col-span-5 tw-border-y-2 tw-border-slate-100 tw-shadow-lg tw-border-2 tw-rounded-xl dark:tw-border-slate-700 dark:tw-bg-slate-800">
          {vuelos.map((vuelo, index) => (
            <div
              key={vuelo.id}
              className={`tw-grid tw-grid-cols-1 md:tw-grid-cols-4 tw-gap-5 tw-p-2 md:tw-p-5 hover:tw-bg-slate-100 dark:hover:tw-bg-slate-800 tw-transition ${
                index === 0 &&
                "tw-border-b-2 tw-border-slate-100 dark:tw-border-slate-600"
              }`}
            >
              <div className="tw-flex tw-flex-col tw-items-center tw-justify-center dark:tw-text-slate-400">
                <img
                  src={vuelo.logo}
                  alt="logo de la aerolinea"
                  className="tw-w-12"
                />
                <span>{vuelo.compania}</span>
              </div>
              <div className="tw-flex tw-items-center tw-justify-center tw-flex-col">
                <p className="tw-font-semibold dark:tw-text-slate-200">
                  {vuelo.horaSalida} - {vuelo.horaLlegada}
                </p>
                <p className="tw-text-slate-400">
                  {vuelo.fecha.toLocaleDateString("es-ES", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="tw-flex tw-flex-col tw-items-center dark:tw-text-slate-200">
                <h4 className="tw-font-semibold">Duración</h4>
                <span className="tw-text-sm">
                  {calculateDuration(vuelo.horaSalida, vuelo.horaLlegada)}
                </span>
              </div>
              <div className="tw-text-sm tw-flex tw-flex-row tw-justify-between tw-items-center">
                <div className="tw-text-center tw-flex tw-flex-col tw-items-center tw-w-full">
                  {vuelo.escala > 0 ? (
                    <>
                      <p className="tw-bg-secondary tw-text-white tw-w-fit tw-px-2 tw-font-semibold tw-rounded-full">
                        {vuelo.escala} Escala
                      </p>
                      <p className="tw-text-slate-500 dark:tw-text-slate-400">
                        {vuelo.tiempoEscala} en {vuelo.sitioEscala}
                      </p>
                    </>
                  ) : (
                    <p className="tw-bg-green-600 tw-text-white tw-w-fit tw-px-2 tw-font-semibold tw-rounded-full">
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
        <aside className="tw-col-span-5 md:tw-col-span-2">
          <div className="tw-border-2 tw-border-slate-100 dark:tw-border-slate-700 dark:tw-bg-slate-800 tw-shadow-lg tw-rounded-lg tw-flex tw-flex-col tw-justify-around tw-p-3">
            <div>
              <h4 className="tw-font-semibold tw-flex tw-items-center tw-gap-2 dark:tw-text-slate-200">
                <IoAirplaneSharp className="tw-text-2xl tw-bg-secondary tw-rounded-full tw-text-white tw-p-1" />
                Vuelo de ida {vuelos.length > 1 && "y vuelta"}
              </h4>
              <div className="tw-text-sm tw-text-slate-500">
                <p>
                  {vuelos[0].salida} - {vuelos[0].llegada}
                </p>
              </div>
              {/*  <span>
          {formatFullMonth(vuelos[0].fecha)} {vuelos[0].fecha.getFullYear()}
        </span> */}
            </div>
            <div className="tw-border-t tw-mt-2 tw-pt-2">
              <p className="tw-text-sm dark:tw-text-white">
                {formatShortDate(vuelos[0].fecha)} -{" "}
                {formatShortDate(vuelos[1]?.fecha)}
              </p>
              <p className="tw-flex tw-gap-1 tw-text-xs tw-text-secondary tw-font-bold">
                <>
                  <FaTicket className="tw-text-lg" />
                  <span className="tw-text-slate-600 dark:tw-text-slate-300">
                    {getTotalPax(vuelos[0].pax)} billetes
                  </span>
                </>
                {vuelos[0].pax.adultos !== 0 && (
                  <>
                    <FaPerson className="tw-text-lg" />
                    <span className="tw-text-slate-600 dark:tw-text-slate-300">
                      {vuelos[0].pax.adultos}{" "}
                      {vuelos[0].pax.adultos === 1 ? "adulto" : "adultos"}
                    </span>
                  </>
                )}
                {vuelos[0].pax.ninio !== 0 && (
                  <>
                    <FaChild className="tw-text-lg" />
                    <span className="tw-text-slate-600 dark:tw-text-slate-300">
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
