import { FaPlaneDeparture } from "react-icons/fa";
import { FaPlaneArrival } from "react-icons/fa";

function Vuelos() {
  const vuelos = [
    {
      id: 0,
      precio: 78,
      salida: "Bilbao, España",
      llegada: "Barcelona (Todos los aeropuertos), España",
      salida_corto: "BIO",
      llegada_corto: "BCN",
      compania: "Air Europa",
      logo: "./logo.png",
      escala: 1,
      pax: {
        adultos: 2,
        ninio: 1,
      },
      tiempoEscala: "7h 25m",
      sitioEscala: "MAD",
      horaSalida: "21:05",
      horaLlegada: "02:53",
      fecha: new Date(2024, 10, 21),
    },
    {
      id: 1,
      precio: 95,
      salida: "Barcelona (Todos los aeropuertos), España",
      llegada: "Bilbao, España",
      salida_corto: "BCN",
      llegada_corto: "BIL",
      compania: "Air Europa",
      logo: "./logo.png",
      escala: 0,
      pax: {
        adultos: 2,
        ninio: 1,
      },
      tiempoEscala: "",
      sitioEscala: "",
      horaSalida: "13:25",
      horaLlegada: "17:30",
      fecha: new Date(2024, 10, 28),
    },
  ];

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
        Vuelo seleccionado
      </h3>
      <div className="mt-10">
        <div className="border-y-2 border-slate-100 shadow-lg border-2 rounded-xl dark:border-slate-700  dark:bg-slate-800">
          {vuelos.map((vuelo, index) => (
            <div
              key={vuelo.id}
              className={`grid grid-cols-1 md:grid-cols-4 gap-5 p-2 md:p-5 hover:bg-slate-100 dark:hover:bg-slate-800 transition relative ${
                index === 0 &&
                "border-b-2 border-slate-100 dark:border-slate-600 "
              }`}
            >
              {index === 0 ? (
                <span className="absolute -top-5 left-3 p-2 text-2xl bg-white dark:bg-slate-800 border-2 border-slate-700 dark:border-slate-500 text-slate-700 dark:text-slate-500 rounded-full">
                  <FaPlaneDeparture />
                </span>
              ) : (
                index === 1 && (
                  <span className="absolute -bottom-5 right-3 p-2 text-2xl bg-white dark:bg-slate-800 border-2 border-slate-700 dark:border-slate-500 text-slate-700 dark:text-slate-500 rounded-full">
                    <FaPlaneArrival />
                  </span>
                )
              )}
              {/* Airline Logo */}
              <div className="flex flex-col items-center justify-center dark:text-slate-400">
                <img
                  src={vuelo.logo}
                  alt="logo de la aerolinea"
                  className="w-12"
                />
                <span className="text-sm">{vuelo.compania}</span>
                <span className="text-green-700 dark:text-green-400 font-bold">
                  {vuelo.precio}€
                </span>
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
      </div>
    </div>
  );
}

export default Vuelos;
