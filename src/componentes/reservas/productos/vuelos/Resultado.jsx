import Aside from "./filtros/Aside_Vuelo";
import MasVuelos from "./Vuelos";
import VueloSeleccionado from "./VueloSeleccionados";
import { useEffect, useState } from "react";
import flightSets from "./Vuelos.json";
import Buscador from "./filtros/Buscador";
function Vuelos() {
  const [ida, setIda] = useState(null);
  const [vuelta, setVuelta] = useState(null);
  useEffect(() => {
    const findCheapestCombination = () => {
      let cheapestCombination = null;

      // Iterar por todos los conjuntos de vuelos
      flightSets.forEach((flightSet) => {
        // Iterar todas las combinaciones de vuelos de ida y vuelta
        flightSet.outboundFlights.forEach((outboundFlight) => {
          flightSet.returnFlights.forEach((returnFlight) => {
            const totalPrice = outboundFlight.precio + returnFlight.precio;

            if (
              !cheapestCombination ||
              totalPrice < cheapestCombination.totalPrice
            ) {
              // Guardar la combinación más barata encontrada
              cheapestCombination = {
                flightSetId: flightSet.id,
                totalPrice,
                outbound: {
                  flightId: outboundFlight.id,
                  flight: outboundFlight,
                },
                return: {
                  flightId: returnFlight.id,
                  flight: returnFlight,
                },
              };
            }
          });
        });
      });

      return cheapestCombination;
    };

    const cheapestFlightSet = findCheapestCombination();

    // Configurar los vuelos seleccionados
    if (cheapestFlightSet) {
      const ida = {
        flightSetId: cheapestFlightSet.flightSetId,
        flightId: cheapestFlightSet.outbound.flightId,
        flight: cheapestFlightSet.outbound.flight,
        flightSet: flightSets.find(
          (set) => set.id === cheapestFlightSet.flightSetId
        ),
      };
      const vuelta = {
        flightSetId: cheapestFlightSet.flightSetId,
        flightId: cheapestFlightSet.return.flightId,
        flight: cheapestFlightSet.return.flight,
        flightSet: flightSets.find(
          (set) => set.id === cheapestFlightSet.flightSetId
        ),
      };

      setIda(ida);
      setVuelta(vuelta);
    }
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
          <VueloSeleccionado ida={ida} vuelta={vuelta} />
          <MasVuelos
            ida={ida}
            setIda={setIda}
            vuelta={vuelta}
            setVuelta={setVuelta}
          />
        </section>
      </article>
    </main>
  );
}
export default Vuelos;
