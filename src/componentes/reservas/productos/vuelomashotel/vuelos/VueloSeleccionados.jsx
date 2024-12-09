import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";

function Vuelos({ selectedOutboundFlight, selectedReturnFlight }) {
  if (!selectedOutboundFlight || !selectedReturnFlight) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-500">Cargando...</p>
      </div>
    );
  }
  const formatDate = (dateString) => {
    const date = new Date(dateString); // Create a Date object from the date string
    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };

    // Format the date in Spanish locale
    return date.toLocaleDateString("es-ES", options);
  };

  // Example usage
  const salida = formatDate(selectedOutboundFlight.flight.outboundDate);
  const vuelta = formatDate(selectedReturnFlight.flight.returnDate);
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
    <div>
      <h3 className="text-secondary font-semibold text-lg mb-3">
        Vuelo seleccionado{" "}
        <span>
          (
          {selectedOutboundFlight.flight.precio +
            selectedReturnFlight.flight.precio}
          € )
        </span>
      </h3>
      <div className="mt-10 shadow-lg rounded-xl border-2 border-slate-100 dark:border-slate-700">
        <div className=" border-slate-100  rounded-t-xl  dark:bg-slate-800">
          <div
            className={`grid grid-cols-1 md:grid-cols-4 gap-5 p-2 md:p-5 hover:bg-slate-100 dark:hover:bg-slate-800 transition relative ${"border-b-2 border-slate-100 dark:border-slate-600 "}`}
          >
            <span className="absolute -top-5 left-3 p-2 text-2xl bg-white dark:bg-slate-800 border-2 border-slate-700 dark:border-slate-500 text-slate-700 dark:text-slate-500 rounded-full">
              <FaPlaneDeparture />
            </span>

            <div className="flex flex-col items-center justify-center dark:text-slate-400">
              <img
                src={selectedOutboundFlight.flight.logo}
                alt="logo aerolinea"
                className="w-[50px] h-[30px]"
              />
              <span className="text-sm">
                {selectedOutboundFlight.flight.aerolinea}
              </span>
              <span className="text-green-700 dark:text-green-400 font-bold">
                {selectedOutboundFlight.flight.precio} €
              </span>
            </div>

            <div className="flex flex-col items-center dark:text-slate-200">
              <h4 className="font-semibold">
                {selectedOutboundFlight.flight.departure} -{" "}
                {selectedOutboundFlight.flight.arrival}
              </h4>
              <span className="text-sm">{salida}</span>
            </div>
            <div className="flex flex-col items-center dark:text-slate-200">
              <h4 className="font-semibold">Duración</h4>
              <span className="text-sm">
                {calculateDuration(
                  selectedOutboundFlight.flight.departure,
                  selectedOutboundFlight.flight.arrival
                )}
              </span>
            </div>
            <div className="text-sm flex flex-row justify-between items-center ">
              <div className="text-center flex flex-col items-center w-full ">
                {selectedOutboundFlight.flight.escalas > 0 ? (
                  <span className="font-semibold bg-orange-400 px-2 p-1 rounded-full text-white dark:text-green-100">
                    {selectedOutboundFlight.flight.escalas} Escala
                  </span>
                ) : (
                  <span className="font-semibold bg-green-500 px-2 p-1 rounded-full text-white dark:text-green-100">
                    {" "}
                    Directo
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className=" dark:bg-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 p-2 md:p-5 hover:bg-slate-100 dark:hover:bg-slate-800 transition relative">
            <span className="absolute -bottom-5 right-3 p-2 text-2xl bg-white dark:bg-slate-800 border-2 border-slate-700 dark:border-slate-500 text-slate-700 dark:text-slate-500 rounded-full">
              <FaPlaneArrival />
            </span>

            <div className="flex flex-col items-center justify-center dark:text-slate-400">
              <img
                src={selectedReturnFlight.flight.logo}
                alt="logo aerolinea"
                className="w-[50px] h-[30px]"
              />
              <span className="text-sm">
                {selectedReturnFlight.flight.aerolinea}
              </span>
              <span className="text-green-700 dark:text-green-400 font-bold">
                {selectedReturnFlight.flight.precio} €
              </span>
            </div>

            <div className="flex flex-col items-center dark:text-slate-200">
              <h4 className="font-semibold">
                {selectedReturnFlight.flight.departure} -
                {selectedReturnFlight.flight.arrival}
              </h4>
              <span className="text-sm">{vuelta}</span>
            </div>
            <div className="flex flex-col items-center dark:text-slate-200">
              <h4 className="font-semibold">Duración</h4>
              <span className="text-sm">
                {calculateDuration(
                  selectedReturnFlight.flight.departure,
                  selectedReturnFlight.flight.arrival
                )}
              </span>
            </div>
            <div className="text-sm flex flex-row justify-between items-center ">
              <div className="text-center flex flex-col items-center w-full ">
                {selectedReturnFlight.flight.escalas > 0 ? (
                  <span className="font-semibold bg-orange-400 px-2 p-1 rounded-full text-white dark:text-green-100">
                    {selectedReturnFlight.flight.escalas} Escala
                  </span>
                ) : (
                  <span className="font-semibold bg-green-500 px-2 p-1 rounded-full text-white dark:text-green-100">
                    {" "}
                    Directo
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vuelos;
