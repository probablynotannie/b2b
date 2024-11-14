import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
import { useState } from "react";
import Aside from "./filtros/Aside_Vuelo";

function MasVuelos() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const vuelos = [
    {
      ida: {
        salida: "Bilbao, España",
        llegada: "Barcelona (Todos los aeropuertos), España",
        salida_corto: "BIO",
        llegada_corto: "BCN",
        compania: "Air Europa",
        logo: "./logo.png",
        escala: 2,
        tiempoEscala: ["7h 25m", "1h 50m"],
        sitioEscala: ["MAD", "ESL"],
        horaSalida: "21:05",
        horaLlegada: "02:53",
        fecha: new Date(2024, 10, 21),
      },
      vuelta: {
        salida: "Barcelona (Todos los aeropuertos), España",
        llegada: "Bilbao, España",
        salida_corto: "BCN",
        llegada_corto: "BIL",
        compania: "Air Europa",
        logo: "./logo.png",
        escala: 0,
        tiempoEscala: "",
        sitioEscala: "",
        horaSalida: "13:25",
        horaLlegada: "17:30",
        fecha: new Date(2024, 10, 28),
      },
    },
    {
      id: 2,
      ida: {
        salida: "Bilbao, España",
        llegada: "Barcelona (Todos los aeropuertos), España",
        salida_corto: "BIO",
        llegada_corto: "BCN",
        compania: "Air Europa",
        logo: "./logo.png",
        escala: 1,
        tiempoEscala: ["7h 25m", "1h 50m"],
        sitioEscala: ["MAD", "ESL"],
        horaSalida: "21:05",
        horaLlegada: "02:53",
        fecha: new Date(2024, 10, 21),
      },
      vuelta: {
        salida: "Barcelona (Todos los aeropuertos), España",
        llegada: "Bilbao, España",
        salida_corto: "BCN",
        llegada_corto: "BIL",
        compania: "Air Europa",
        logo: "./logo.png",
        escala: 0,
        tiempoEscala: "",
        sitioEscala: "",
        horaSalida: "13:25",
        horaLlegada: "17:30",
        fecha: new Date(2024, 10, 28),
      },
    },
    {
      id: 3,
      ida: {
        salida: "Bilbao, España",
        llegada: "Barcelona (Todos los aeropuertos), España",
        salida_corto: "BIO",
        llegada_corto: "BCN",
        compania: "Air Europa",
        logo: "./logo.png",
        escala: 1,
        tiempoEscala: "7h 25m",
        sitioEscala: "MAD",
        horaSalida: "21:05",
        horaLlegada: "02:53",
        fecha: new Date(2024, 10, 21),
      },
      vuelta: {
        id: 1,
        salida: "Barcelona (Todos los aeropuertos), España",
        llegada: "Bilbao, España",
        salida_corto: "BCN",
        llegada_corto: "BIL",
        compania: "Air Europa",
        logo: "./logo.png",
        escala: 0,
        tiempoEscala: "",
        sitioEscala: "",
        horaSalida: "13:25",
        horaLlegada: "17:30",
        fecha: new Date(2024, 10, 28),
      },
    },
    {
      id: 4,
      logo: "https://example.com/logo4.png",
      compania: "Airline D",
      ida: {
        id: 0,
        salida: "Bilbao, España",
        llegada: "Barcelona (Todos los aeropuertos), España",
        salida_corto: "BIO",
        llegada_corto: "BCN",
        compania: "Air Europa",
        logo: "./logo.png",
        escala: 1,
        tiempoEscala: "7h 25m",
        sitioEscala: "MAD",
        horaSalida: "21:05",
        horaLlegada: "02:53",
        fecha: new Date(2024, 10, 21),
      },
      vuelta: {
        salida: "Barcelona (Todos los aeropuertos), España",
        llegada: "Bilbao, España",
        salida_corto: "BCN",
        llegada_corto: "BIL",
        compania: "Air Europa",
        logo: "./logo.png",
        escala: 0,
        tiempoEscala: "",
        sitioEscala: "",
        horaSalida: "13:25",
        horaLlegada: "17:30",
        fecha: new Date(2024, 10, 28),
      },
    },
  ];

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
    if (llegadaDate < salidaDate)
      llegadaDate.setDate(llegadaDate.getDate() + 1);
    const duration = llegadaDate - salidaDate;
    const hours = Math.floor(duration / (1000 * 60 * 60));
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  };

  const seleccionarVuelo = (index) => {
    setSelectedIndex(index);
  };

  const VueloInfo = ({ vuelo, isIda }) => {
    const {
      salida,
      llegada,
      compania,
      logo,
      escala,
      tiempoEscala,
      sitioEscala,
      horaSalida,
      horaLlegada,
      fecha,
    } = isIda ? vuelo.ida : vuelo.vuelta;
    const Icon = isIda ? FaPlaneDeparture : FaPlaneArrival;

    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 p-2 md:p-5 transition relative">
        <span
          className={`absolute ${
            isIda ? "-top-5 left-3" : "-bottom-5 right-3"
          } p-2 text-2xl bg-white dark:bg-slate-800 border-2 border-slate-700 dark:border-slate-500 text-slate-700 dark:text-slate-500 rounded-full`}
        >
          <Icon />
        </span>
        <div className="flex flex-col items-center justify-center dark:text-slate-400">
          <img src={logo} alt="logo de la aerolinea" className="w-12" />
          <span>{compania}</span>
        </div>
        <div className="flex items-center justify-center flex-col">
          <p className="font-semibold dark:text-slate-200">
            {horaSalida} - {horaLlegada}
          </p>
          <p className="text-slate-400">
            {fecha.toLocaleDateString("es-ES", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </p>
        </div>
        <div className="flex flex-col items-center dark:text-slate-200">
          <h4 className="font-semibold">Duración</h4>
          <span className="text-sm">
            {calculateDuration(horaSalida, horaLlegada)}
          </span>
        </div>
        <div className="text-center flex flex-col items-center w-full text-sm">
          {escala > 0 ? (
            <>
              <p className="bg-secondary text-white w-fit px-2 font-semibold rounded-full">
                {escala} Escala{escala > 1 && "s"}
              </p>
              {Array.isArray(tiempoEscala) && Array.isArray(sitioEscala) ? (
                tiempoEscala.map((tiempo, idx) => (
                  <p key={idx} className="text-slate-500 dark:text-slate-400">
                    {tiempo} en {sitioEscala[idx]}
                  </p>
                ))
              ) : (
                <p className="text-slate-500 dark:text-slate-400">
                  {tiempoEscala} en {sitioEscala}
                </p>
              )}
            </>
          ) : (
            <p className="bg-green-600 text-white w-fit px-2 font-semibold rounded-full">
              Directo
            </p>
          )}
        </div>
      </div>
    );
  };

  return (
    <article className="grid grid-cols-9 lg:gap-24 xs:gap-28">
      <aside className="col-span-1 lg:col-span-3 lg:bg-slate-100 lg:dark:bg-slate-800 lg:border-2 border-slate-200 dark:border-slate-800 rounded-lg lg:shadow-xl hover:lg:shadow-2xl transition px-3 lg:p-3 lg:pb-10">
        <Aside />
      </aside>
      <section className="col-span-9 lg:col-span-6 p-3">
        <h3 className="text-secondary font-semibold text-lg">
          Resultados ({vuelos.length})
        </h3>
        {vuelos.map((vuelo, index) => (
          <div
            key={index}
            onClick={() => seleccionarVuelo(index)}
            className={`mt-10 border-y-2 cursor-pointer border-slate-100 shadow-lg border-2 rounded-xl dark:border-slate-700 dark:bg-slate-800 relative ${
              selectedIndex === index
                ? "bg-slate-800 dark:bg-slate-900 text-white"
                : ""
            }`}
          >
            <VueloInfo vuelo={vuelo} isIda={true} />
            <VueloInfo vuelo={vuelo} isIda={false} />
          </div>
        ))}
      </section>
    </article>
  );
}

export default MasVuelos;
