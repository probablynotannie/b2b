import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import flightSets from "./Vuelos.json";

function FlightSelectionPage({
  selectedOutboundFlight,
  setSelectedOutboundFlight,
  selectedReturnFlight,
  setSelectedReturnFlight,
}) {
  return (
    <div className="mx-auto space-y-8 mt-10">
      <h3 className="text-secondary font-semibold text-lg mb-10 hidden md:block">
        Resultados
      </h3>
      {flightSets.map((flightSet) => (
        <FlightSelection
          key={flightSet.id}
          flightSetId={flightSet.id}
          aerolinea={flightSet.aerolinea}
          outboundDate={flightSet.outboundDate}
          returnDate={flightSet.returnDate}
          outboundFlights={flightSet.outboundFlights}
          returnFlights={flightSet.returnFlights}
          selectedOutboundFlight={selectedOutboundFlight}
          selectedReturnFlight={selectedReturnFlight}
          setSelectedOutboundFlight={setSelectedOutboundFlight}
          setSelectedReturnFlight={setSelectedReturnFlight}
          flightSets={flightSets}
        />
      ))}
    </div>
  );
}

function FlightSelection({
  flightSetId,
  outboundDate,
  returnDate,
  outboundFlights,
  returnFlights,
  selectedOutboundFlight,
  selectedReturnFlight,
  setSelectedOutboundFlight,
  setSelectedReturnFlight,
  flightSets,
}) {
  const totalPrice =
    (selectedOutboundFlight?.flightSetId === flightSetId
      ? selectedOutboundFlight.flight.precio
      : 0) +
    (selectedReturnFlight?.flightSetId === flightSetId
      ? selectedReturnFlight.flight.precio
      : 0);

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
          <span className="text-xs ml-2 font-semibold text-green-500 dark:text-green-400">
            ({flight.precio}€)
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
    const selectedFlightSet = flightSets.find((set) => set.id === flightSetId);
    const selectedFlight = selectedFlightSet.outboundFlights.find(
      (flight) => flight.id === flightId
    );

    if (
      selectedReturnFlight &&
      selectedReturnFlight.flightSetId !== flightSetId
    ) {
      setSelectedReturnFlight(null);
    }

    setSelectedOutboundFlight({
      flightSetId,
      flightId,
      flight: selectedFlight,
      flightSet: selectedFlightSet,
    });
  };

  const handleReturnSelection = (flightSetId, flightId) => {
    const selectedFlightSet = flightSets.find((set) => set.id === flightSetId);
    const selectedFlight = selectedFlightSet.returnFlights.find(
      (flight) => flight.id === flightId
    );

    if (
      selectedOutboundFlight &&
      selectedOutboundFlight.flightSetId !== flightSetId
    ) {
      setSelectedOutboundFlight(null);
    }

    setSelectedReturnFlight({
      flightSetId,
      flightId,
      flight: selectedFlight,
      flightSet: selectedFlightSet,
    });
  };

  return (
    <div>
      <div className="p-4 dark:bg-slate-800 dark:border-slate-700 mx-auto border rounded-xl shadow-lg">
        <div>
          <h4 className="text-2xl text-end font-bold text-orange-400 dark:text-green-400 rounded-lg shadow-l w-fit p-2">
            Total: {totalPrice}€
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
          <div className="bg-slate-200 dark:bg-slate-900 p-4 mt-4 rounded-t-lg">
            <span className="text-slate-600 dark:text-slate-300 text-sm flex items-center gap-2">
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
