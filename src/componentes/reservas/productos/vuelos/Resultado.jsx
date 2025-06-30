import Aside from "./filtros/Aside_Vuelo";
import MasVuelos from "./Vuelos";
import VueloSeleccionado from "./VueloSeleccionados";
import { useEffect, useState } from "react";
import flightSets from "./Vuelos.json";
import Buscador from "./filtros/Buscador";
import vuelos from "./Vuelos.json";
import PlaceHolder from "../../estructura/skeleton_placeholders_listado/Vuelos";
import Cargando from "../../estructura/skeleton_placeholders_listado/Cargando";
function Vuelos() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const [ida, setIda] = useState(null);
  const [vuelta, setVuelta] = useState(null);
  useEffect(() => {
    const findCheapestCombination = () => {
      let cheapestCombination = null;
      flightSets.forEach((flightSet) => {
        flightSet.outboundFlights.forEach((outboundFlight) => {
          flightSet.returnFlights.forEach((returnFlight) => {
            const totalPrice = outboundFlight.precio + returnFlight.precio;

            if (
              !cheapestCombination ||
              totalPrice < cheapestCombination.totalPrice
            ) {
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
    <main className="tw-flex tw-justify-center tw-flex-col tw-items-center tw-mb-20">
      <div
        className="tw-w-full tw-bg-cover tw-bg-center tw-p-8 tw-relative tw-shadow-md"
        style={{
          backgroundImage: "url('/banners/banner_avion.webp')",
        }}
      >
        <div className="tw-bg-blue-300 dark:tw-bg-black tw-text-pink-600 tw-bg-opacity-45 dark:tw-bg-opacity-45 tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-pointer-events-none"></div>
        <div className="tw-flex">
          <div className="tw-container tw-relative">
            <Buscador />
          </div>
          <aside className="lg:tw-hidden tw-col-span-9 lg:tw-col-span-3 tw-h-fit lg:tw-sticky tw-top-10 lg:tw-bg-slate-100 lg:dark:tw-bg-slate-800 lg:tw-border-2 tw-border-slate-200 dark:tw-border-slate-800 tw-rounded-lg lg:tw-shadow-xl lg:tw-p-3 lg:tw-pb-10">
            <Aside />
          </aside>
        </div>
      </div>
      <article className="tw-grid tw-grid-cols-9 lg:tw-gap-10 xs:gap-28 tw-w-full tw-container tw-mt-10">
        <aside className="tw-hidden lg:tw-block tw-col-span-9 lg:tw-col-span-3 tw-h-fit lg:tw-sticky tw-top-10 lg:tw-bg-slate-100 lg:dark:tw-bg-slate-800 lg:tw-border-2 tw-border-slate-200 dark:tw-border-slate-800 tw-rounded-lg lg:tw-shadow-xl lg:tw-p-3 lg:tw-pb-10">
          <Aside />
        </aside>
        <section className="tw-col-span-9 lg:tw-col-span-6 tw-p-3">
          {loading ? (
            <>
              <Cargando />
              <PlaceHolder />
            </>
          ) : (
            <>
              <VueloSeleccionado ida={ida} vuelta={vuelta} />
              <MasVuelos
                vuelos={vuelos}
                ida={ida}
                setIda={setIda}
                vuelta={vuelta}
                setVuelta={setVuelta}
              />
            </>
          )}
        </section>
      </article>
    </main>
  );
}
export default Vuelos;
