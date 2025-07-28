import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

function FlightSelectionPage({ ida, setIda, vuelta, setVuelta, vuelos }) {
  return (
    <div className="tw-mx-auto tw-space-y-8 tw-mt-10">
      <h3 className="tw-text-secondary tw-font-semibold tw-text-lg">
        Resultados
      </h3>
      {vuelos.map((flightSet) => (
        <FlightSelection
          key={flightSet.id}
          flightSetId={flightSet.id}
          aerolinea={flightSet.aerolinea}
          outboundDate={flightSet.outboundDate}
          returnDate={flightSet.returnDate}
          outboundFlights={flightSet.outboundFlights}
          returnFlights={flightSet.returnFlights}
          ida={ida}
          vuelta={vuelta}
          setIda={setIda}
          setVuelta={setVuelta}
          vuelos={vuelos}
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
  ida,
  vuelta,
  setIda,
  setVuelta,
  vuelos,
}) {
  const totalPrice =
    (ida?.flightSetId === flightSetId ? ida.flight.precio : 0) +
    (vuelta?.flightSetId === flightSetId ? vuelta.flight.precio : 0);

  const FlightOption = ({ flight, selected, onSelect }) => (
    <div
      className={`tw-flex tw-items-center tw-justify-between tw-p-4 tw-border-b dark:tw-border-slate-800 ${
        selected ? "bg-slate-100 dark:bg-slate-700" : ""
      }`}
      onClick={() => onSelect(flightSetId, flight.id)}
    >
      <input
        type="radio"
        checked={selected}
        onChange={() => onSelect(flightSetId, flight.id)}
        className="tw-mr-3 tw-text-secondary"
      />
      <img src="./logo.png" alt="Airline logo" className="tw-w-12" />
      <div className="tw-flex-1">
        <p className="tw-text-sm tw-font-semibold tw-flex tw-items-center dark:tw-text-slate-300">
          {flight.departure}{" "}
          <span className="tw-text-slate-400 dark:tw-text-slate-400 tw-ml-1">
            {flight.salida}
          </span>{" "}
          <FaLongArrowAltRight className="tw-mx-1 tw-text-slate-600 dark:tw-text-orange-400" />
          {flight.arrival}{" "}
          <span className="tw-text-slate-400 dark:tw-text-slate-400 tw-ml-1">
            {flight.llegada}
          </span>
          <span className="tw-text-xs tw-ml-2 tw-font-semibold tw-text-green-500 dark:tw-text-green-400">
            ({flight.precio}€)
          </span>
        </p>
        <span className="tw-text-sm dark:tw-text-slate-400">
          {flight.duration}
        </span>
        {flight.plazasDisponibles <= 5 ? (
          <p className="tw-text-danger tw-text-xs"> ¡Últimas plazas! </p>
        ) : (
          flight.plazasDisponibles > 5 &&
          flight.plazasDisponibles <= 8 && (
            <p className="tw-text-orange-400 tw-text-xs">
              Quedan {flight.plazasDisponibles} plazas
            </p>
          )
        )}
      </div>
      <div className="tw-text-sm tw-text-end">
        {flight.escalas > 0 ? (
          <div>
            <span className="dark:tw-text-secondaryDark dark:tw-font-semibold">
              {flight.escalas > 1
                ? `${flight.escalas} Escalas`
                : `${flight.escalas} Escala`}
            </span>
            <div className="tw-text-xs tw-mt-1 tw-text-slate-500 dark:tw-text-slate-400">
              {flight.escalaSitio.map((sitio, index) => (
                <div key={index}>
                  <span>{flight.escalaDuracion[index]}</span> -{" "}
                  <span>{sitio}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <span className="tw-font-bold tw-text-green-700 dark:tw-text-green-400">
            Directo
          </span>
        )}
      </div>
    </div>
  );

  const handleOutboundSelection = (flightSetId, flightId) => {
    const selectedFlightSet = vuelos.find((set) => set.id === flightSetId);
    const selectedFlight = selectedFlightSet.outboundFlights.find(
      (flight) => flight.id === flightId
    );

    if (vuelta && vuelta.flightSetId !== flightSetId) {
      setVuelta(null);
    }

    setIda({
      flightSetId,
      flightId,
      flight: selectedFlight,
      flightSet: selectedFlightSet,
    });
  };

  const handleReturnSelection = (flightSetId, flightId) => {
    const selectedFlightSet = vuelos.find((set) => set.id === flightSetId);
    const selectedFlight = selectedFlightSet.returnFlights.find(
      (flight) => flight.id === flightId
    );

    if (ida && ida.flightSetId !== flightSetId) {
      setIda(null);
    }

    setVuelta({
      flightSetId,
      flightId,
      flight: selectedFlight,
      flightSet: selectedFlightSet,
    });
  };

  return (
    <div>
      <div className="tw-p-4 dark:tw-bg-slate-800 dark:tw-border-slate-700 tw-mx-auto tw-border tw-rounded-xl tw-shadow-lg hover:tw-shadow-xl tw-smooth">
        <div>
          <h4 className="tw-text-2xl tw-text-end tw-font-bold tw-text-orange-400 dark:tw-text-green-400 tw-rounded-lg tw-shadow-l tw-w-fit tw-p-2">
            Total: {totalPrice}€
          </h4>
          <div className="tw-bg-slate-200 dark:tw-bg-slate-900 tw-p-4 tw-rounded-t-lg tw-mt-3">
            <span className="tw-text-slate-600 dark:tw-text-slate-300 tw-text-sm tw-flex tw-items-center tw-gap-2">
              <FaPlaneDeparture className="tw-text-lg tw-text-slate-600 dark:tw-text-slate-300" />{" "}
              ida {outboundDate}
            </span>
          </div>
          {outboundFlights.map((flight) => (
            <FlightOption
              key={flight.id}
              flight={flight}
              selected={
                ida &&
                ida.flightSetId === flightSetId &&
                ida.flightId === flight.id
              }
              onSelect={handleOutboundSelection}
            />
          ))}
          <div className="tw-bg-slate-200 dark:tw-bg-slate-900 tw-p-4 tw-mt-4 tw-rounded-t-lg">
            <span className="tw-text-slate-600 dark:tw-text-slate-300 tw-text-sm tw-flex tw-items-center tw-gap-2">
              <FaPlaneArrival className="tw-text-lg tw-text-slate-600 dark:tw-text-slate-300" />{" "}
              vuelta {returnDate}
            </span>
          </div>
          {returnFlights.map((flight) => (
            <FlightOption
              key={flight.id}
              flight={flight}
              selected={
                vuelta &&
                vuelta.flightSetId === flightSetId &&
                vuelta.flightId === flight.id
              }
              onSelect={handleReturnSelection}
            />
          ))}
        </div>
        <div className="tw-mt-4 tw-text-center tw-text-slate-500 dark:tw-text-slate-400 tw-text-xs">
          Tasas y gastos de gestión incluidos. El precio incluye gastos de
          gestión y/o descuento, en función del medio de pago seleccionado.
        </div>
      </div>
    </div>
  );
}

export default FlightSelectionPage;
