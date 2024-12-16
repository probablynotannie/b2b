import Aside from "./filtros/Aside_Vuelo";
import MasVuelos from "./Vuelos";
import VueloSeleccionado from "./VueloSeleccionados";
import { useEffect, useState } from "react";
import flightSets from "./Vuelos.json";
import Buscador from "./filtros/Buscador";
function Vuelos() {
  const [selectedOutboundFlight, setSelectedOutboundFlight] = useState(null);
  const [selectedReturnFlight, setSelectedReturnFlight] = useState(null);
  useEffect(() => {
    const cheapestFlights = flightSets.map((flightSet) => {
      const cheapestOutbound = flightSet.outboundFlights.reduce((prev, curr) =>
        prev.plazasDisponibles < curr.plazasDisponibles ? prev : curr
      );
      const cheapestReturn = flightSet.returnFlights.reduce((prev, curr) =>
        prev.plazasDisponibles < curr.plazasDisponibles ? prev : curr
      );
      return { flightSetId: flightSet.id, cheapestOutbound, cheapestReturn };
    });
    const cheapestFlightSet = cheapestFlights.reduce((prev, curr) =>
      prev.cheapestOutbound.plazasDisponibles +
        prev.cheapestReturn.plazasDisponibles <
      curr.cheapestOutbound.plazasDisponibles +
        curr.cheapestReturn.plazasDisponibles
        ? prev
        : curr
    );
    const selectedOutboundFlight = {
      flightSetId: cheapestFlightSet.flightSetId,
      flightId: cheapestFlightSet.cheapestOutbound.id,
      flight: cheapestFlightSet.cheapestOutbound,
      flightSet: flightSets.find(
        (set) => set.id === cheapestFlightSet.flightSetId
      ),
    };
    const selectedReturnFlight = {
      flightSetId: cheapestFlightSet.flightSetId,
      flightId: cheapestFlightSet.cheapestReturn.id,
      flight: cheapestFlightSet.cheapestReturn,
      flightSet: flightSets.find(
        (set) => set.id === cheapestFlightSet.flightSetId
      ),
    };
    setSelectedOutboundFlight(selectedOutboundFlight);
    setSelectedReturnFlight(selectedReturnFlight);
  }, []);
  return (
    <main className=" flex justify-center flex-col items-center  mb-10">
      <div
        className="w-full bg-cover bg-center p-8 relative shadow-md"
        style={{
          backgroundImage: "url('/banner_avion.jpg')",
        }}
      >
        <div className="bg-blue-300 dark:bg-black text-pink-600 bg-opacity-45 dark:bg-opacity-45 absolute top-0 left-0 w-full h-full pointer-events-none"></div>
        <div className="flex">
          <div className="container relative">
            <Buscador />
          </div>
          <aside className=" lg:hidden col-span-9 lg:col-span-3 h-fit lg:sticky  top-5 lg:bg-slate-100 lg:dark:bg-slate-800 lg:border-2 border-slate-200  dark:border-slate-800 rounded-lg lg:shadow-xl hover:lg:shadow-2xl transition px-3 lg:p-3 lg:pb-10">
            <Aside />
          </aside>
        </div>
      </div>
      <article className="grid grid-cols-9 lg:gap-10 xs:gap-28 w-full container mt-10">
        <aside className="hidden lg:block col-span-9 lg:col-span-3 h-fit lg:sticky  top-24 lg:bg-slate-100 lg:dark:bg-slate-800 lg:border-2 border-slate-200  dark:border-slate-800 rounded-lg lg:shadow-xl hover:lg:shadow-2xl transition px-3 lg:p-3 lg:pb-10">
          <Aside />
        </aside>
        <section className="col-span-9 lg:col-span-6 p-3">
          <VueloSeleccionado
            selectedOutboundFlight={selectedOutboundFlight}
            setSelectedOutboundFlight={setSelectedOutboundFlight}
            selectedReturnFlight={selectedReturnFlight}
            setSelectedReturnFlight={setSelectedReturnFlight}
          />
          <MasVuelos
            selectedOutboundFlight={selectedOutboundFlight}
            setSelectedOutboundFlight={setSelectedOutboundFlight}
            selectedReturnFlight={selectedReturnFlight}
            setSelectedReturnFlight={setSelectedReturnFlight}
          />
        </section>
      </article>
    </main>
  );
}
export default Vuelos;
