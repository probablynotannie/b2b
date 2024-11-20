import { useState } from "react";
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

function FlightSelectionPage() {
  const [selectedOutboundFlight, setSelectedOutboundFlight] = useState(null);
  const [selectedReturnFlight, setSelectedReturnFlight] = useState(null);
  const flightSets = [
    {
      id: 1,
      aerolinea: "Euro Air",
      incrementoPrecio: 1590,
      outboundDate: "2024-11-22",
      returnDate: "2024-11-28",
      outboundFlights: [
        {
          id: 1,
          plazasDisponibles: 5,
          departure: "8:30",
          salida: "BIL",
          llegada: "MAD",
          arrival: "9:35",
          duration: "1h 5m",
          escalas: 1,
          escalaSitio: ["BIL", "BUR"],
          escalaDuracion: ["1h35m", "2h32m"],
        },
        {
          id: 2,
          plazasDisponibles: 8,
          departure: "10:00",
          arrival: "11:05",
          salida: "MAD",
          llegada: "BIL",
          duration: "1h 5m",
          escalas: 0,
          escalaSitio: [],
          escalaDuracion: [],
        },
      ],
      returnFlights: [
        {
          id: 1,
          plazasDisponibles: 10,
          departure: "6:40",
          arrival: "7:40",
          salida: "BIL",
          llegada: "MAD",
          duration: "1h 0m",
          escalas: 2,
          escalaSitio: ["ABC", "DEF"],
          escalaDuracion: ["45m", "1h10m"],
        },
        {
          id: 2,
          plazasDisponibles: "12",
          departure: "8:00",
          arrival: "9:00",
          salida: "MAD",
          llegada: "BIL",
          duration: "1h 0m",
          escalas: 0,
          escalaSitio: [],
          escalaDuracion: [],
        },
      ],
    },
    {
      id: 2,
      aerolinea: "Aerolinea Falso",
      incrementoPrecio: 159,
      outboundDate: "2024-12-01",
      returnDate: "2024-12-07",
      outboundFlights: [
        {
          id: 1,
          plazasDisponibles: 3,
          departure: "9:00",
          arrival: "10:05",
          salida: "BIL",
          llegada: "MAD",
          duration: "1h 5m",
          escalas: 0,
          escalaSitio: [],
          escalaDuracion: [],
        },
        {
          id: 2,
          plazasDisponibles: 3,
          departure: "11:00",
          arrival: "12:05",
          salida: "MAD",
          llegada: "BIL",
          duration: "1h 5m",
          escalas: 0,
          escalaSitio: [],
          escalaDuracion: [],
        },
      ],
      returnFlights: [
        {
          id: 1,
          plazasDisponibles: 8,
          departure: "7:00",
          arrival: "8:00",
          salida: "BIL",
          llegada: "MAD",
          duration: "1h 0m",
          escalas: 1,
          escalaSitio: ["XYZ"],
          escalaDuracion: ["1h30m"],
        },
        {
          id: 2,
          plazasDisponibles: 5,
          departure: "9:00",
          arrival: "10:00",
          salida: "MAD",
          llegada: "BIL",
          duration: "1h 0m",
          escalas: 0,
          escalaSitio: [],
          escalaDuracion: [],
        },
      ],
    },
  ];
  return (
    <div className=" mx-auto space-y-8">
      <h3 className="text-secondary font-semibold text-lg mb-10">Resultados</h3>

      {flightSets.map((flightSet) => (
        <FlightSelection
          key={flightSet.id}
          flightSetId={flightSet.id}
          aerolinea={flightSet.aerolinea}
          outboundDate={flightSet.outboundDate}
          incrementoPrecio={flightSet.incrementoPrecio}
          returnDate={flightSet.returnDate}
          outboundFlights={flightSet.outboundFlights}
          returnFlights={flightSet.returnFlights}
          selectedOutboundFlight={selectedOutboundFlight}
          selectedReturnFlight={selectedReturnFlight}
          setSelectedOutboundFlight={setSelectedOutboundFlight}
          setSelectedReturnFlight={setSelectedReturnFlight}
        />
      ))}
    </div>
  );
}

function FlightSelection({
  flightSetId,
  outboundDate,
  incrementoPrecio,
  returnDate,
  outboundFlights,
  returnFlights,
  selectedOutboundFlight,
  selectedReturnFlight,
  setSelectedOutboundFlight,
  setSelectedReturnFlight,
}) {
  const FlightOption = ({ flight, selected, onSelect }) => (
    <div
      className={`flex items-center justify-between p-4 border-b dark:border-slate-800 ${
        selected ? "bg-slate-100 dark:bg-slate-700" : ""
      }`}
      onClick={() => onSelect(flightSetId, flight.id)}
    >
      <input
        type="radio"
        checked={selected}
        onChange={() => onSelect(flightSetId, flight.id)}
        className="mr-3 text-secondary"
      />
      <img src="./logo.png" alt="Airline logo" className="w-12" />
      <div className="flex-1">
        <p className="text-sm font-semibold flex items-center dark:text-slate-300">
          {flight.departure}{" "}
          <span className="text-slate-400 dark:text-slate-400 ml-1">
            {flight.salida}
          </span>{" "}
          <FaLongArrowAltRight className="mx-1 text-slate-600 dark:text-orange-400" />
          {flight.arrival}{" "}
          <span className="text-slate-400 dark:text-slate-400 ml-1">
            {flight.llegada}
          </span>
        </p>
        <span className="text-sm dark:text-slate-400">{flight.duration}</span>
        {flight.plazasDisponibles <= 5 ? (
          <p className="text-red-500 text-xs"> ¡Últimas plazas! </p>
        ) : (
          flight.plazasDisponibles > 5 &&
          flight.plazasDisponibles <= 8 && (
            <p className="text-orange-400 text-xs">
              Quedan {flight.plazasDisponibles} plazas
            </p>
          )
        )}
      </div>
      <div className="text-sm text-end">
        {flight.escalas > 0 ? (
          <div>
            <span className="dark:text-secondaryDark dark:font-semibold">
              {flight.escalas > 1
                ? `${flight.escalas} Escalas`
                : `${flight.escalas} Escala`}
            </span>
            <div className="text-xs mt-1 text-slate-500 dark:text-slate-400">
              {flight.escalaSitio.map((sitio, index) => (
                <div key={index}>
                  <span>{flight.escalaDuracion[index]}</span> -{" "}
                  <span>{sitio}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <span className="font-bold text-green-700 dark:text-green-400">
            Directo
          </span>
        )}
      </div>
    </div>
  );

  const handleOutboundSelection = (flightSetId, flightId) => {
    if (
      selectedReturnFlight &&
      selectedReturnFlight.flightSetId !== flightSetId
    ) {
      setSelectedReturnFlight(null);
    }
    setSelectedOutboundFlight({ flightSetId, flightId });
  };

  const handleReturnSelection = (flightSetId, flightId) => {
    if (
      selectedOutboundFlight &&
      selectedOutboundFlight.flightSetId !== flightSetId
    ) {
      setSelectedOutboundFlight(null);
    }
    setSelectedReturnFlight({ flightSetId, flightId });
  };

  return (
    <div>
      <div className="p-4 dark:bg-slate-800 dark:border-slate-700 mx-auto border rounded-xl shadow-lg">
        <div>
          <h4 className="text-2xl text-end font-bold text-orange-400 dark:text-green-400 rounded-lg shadow-l w-fit  p-2">
            +{incrementoPrecio}€
          </h4>
          <div className="bg-slate-200 dark:bg-slate-900 p-4 rounded-t-lg mt-3">
            <span className="text-slate-600 dark:text-slate-300 text-sm flex items-center gap-2">
              <FaPlaneDeparture className="text-lg text-slate-600 dark:text-slate-300" />{" "}
              ida {outboundDate}
            </span>
          </div>
          {outboundFlights.map((flight) => (
            <FlightOption
              key={flight.id}
              flight={flight}
              selected={
                selectedOutboundFlight &&
                selectedOutboundFlight.flightSetId === flightSetId &&
                selectedOutboundFlight.flightId === flight.id
              }
              onSelect={handleOutboundSelection}
            />
          ))}
          <div className="bg-slate-200 dark:bg-slate-900  p-4 mt-4 rounded-t-lg">
            <span className="text-slate-600  dark:text-slate-300 text-sm flex items-center gap-2">
              <FaPlaneArrival className="text-lg text-slate-600 dark:text-slate-300" />{" "}
              vuelta {returnDate}
            </span>
          </div>
          {returnFlights.map((flight) => (
            <FlightOption
              key={flight.id}
              flight={flight}
              selected={
                selectedReturnFlight &&
                selectedReturnFlight.flightSetId === flightSetId &&
                selectedReturnFlight.flightId === flight.id
              }
              onSelect={handleReturnSelection}
            />
          ))}
        </div>
        <footer className="mt-4 text-center text-slate-500 text-xs">
          Tasas y gastos de gestión incluidos. El precio incluye gastos de
          gestión y/o descuento, en función del medio de pago seleccionado.
        </footer>
      </div>
    </div>
  );
}

export default FlightSelectionPage;
