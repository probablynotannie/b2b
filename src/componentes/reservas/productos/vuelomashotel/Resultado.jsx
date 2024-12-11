import { useState, useEffect } from "react";
import Aside from "./filtros/Aside";
import Resultado from "./Hoteles";
import Vuelos from "./vuelos/VueloSeleccionados";
import MasVUelos from "./vuelos/Vuelos";
import Buscador from "./filtros/Buscador";
import { FaHotel } from "react-icons/fa";
import { FaPlane } from "react-icons/fa";
import flightSets from "./vuelos/Vuelos.json";
function Productos() {
  const [activeTab, setActiveTab] = useState("Resultados");
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

    // Set the selected flights
    setSelectedOutboundFlight(selectedOutboundFlight);
    setSelectedReturnFlight(selectedReturnFlight);
  }, []);

  return (
    <main className=" flex justify-center flex-col items-center  mb-10">
      <div className="w-full">
        <div
          className="w-full bg-cover bg-center p-8 relative shadow-xl"
          style={{
            backgroundImage: "url('/banner_avion.jpg')",
          }}
        >
          <div className="bg-indigo-300 dark:bg-black text-pink-600 bg-opacity-55 dark:bg-opacity-45 absolute top-0 left-0 w-full h-full pointer-events-none"></div>
          <div className="flex">
            <div className="container relative">
              <Buscador />
            </div>
            <aside className="lg:hidden col-span-9 lg:col-span-3 h-fit lg:sticky top-5 lg:bg-slate-100 lg:dark:bg-slate-800 lg:border-2 border-slate-200  dark:border-slate-800 rounded-lg lg:shadow-xl hover:lg:shadow-2xl transition px-3 lg:p-3 lg:pb-10">
              <Aside />
            </aside>
          </div>
        </div>
        <div className="flex space-x-4 mb-6 col-span-9 container mt-10">
          <button
            className={`px-4 py-2 border-b-2 flex items-center ${
              activeTab === "Resultados"
                ? "border-secondary text-secondary font-bold "
                : " text-slate-700 dark:text-slate-200 border-none"
            }`}
            onClick={() => setActiveTab("Resultados")}
          >
            <FaHotel className="mr-1" /> Resultados
          </button>
          <button
            className={`px-4 py-2 border-b-2 flex items-center ${
              activeTab === "Vuelos"
                ? "border-secondary text-secondary font-bold "
                : " text-slate-700 dark:text-slate-200 border-none"
            }`}
            onClick={() => setActiveTab("Vuelos")}
          >
            <FaPlane className="mr-1" /> Cambiar Vuelos
          </button>
        </div>
        <article className="grid grid-cols-9 lg:gap-8 xs:gap-28 container">
          {activeTab === "Resultados" && (
            <>
              <aside className="hidden lg:block col-span-9 lg:col-span-3 h-fit lg:sticky  top-5 lg:bg-slate-100 lg:dark:bg-slate-800 lg:border-2 border-slate-200  dark:border-slate-800 rounded-lg lg:shadow-xl hover:lg:shadow-2xl transition px-3 lg:p-3 lg:pb-10">
                <Aside />
              </aside>
              <section className="col-span-9 lg:col-span-6 p-3">
                <Vuelos
                  selectedOutboundFlight={selectedOutboundFlight}
                  selectedReturnFlight={selectedReturnFlight}
                />
                <Resultado />
              </section>
            </>
          )}

          {activeTab === "Vuelos" && (
            <MasVUelos
              texto={"holi"}
              selectedOutboundFlight={selectedOutboundFlight}
              setSelectedOutboundFlight={setSelectedOutboundFlight}
              selectedReturnFlight={selectedReturnFlight}
              setSelectedReturnFlight={setSelectedReturnFlight}
            />
          )}
        </article>
      </div>
    </main>
  );
}

export default Productos;
