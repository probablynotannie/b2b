import { useState, useEffect } from "react";
import Aside from "../hotel/filtros/Aside";
import Resultado from "../hotel/HotelMas";
import Vuelos from "../vuelos/VueloSeleccionados";
import MasVuelos from "./Vuelos";
import Buscador from "../../../motores/buscadores/hotelmasvuelo/Buscador_HotVuelo";
import { FaHotel } from "react-icons/fa";
import { FaPlane } from "react-icons/fa";
import vuelos from "./Vuelos.json";
import hoteles from "./Hoteles.json";
import { Link } from "react-router-dom";
import Placeholder from "../../estructura/skeleton_placeholders_listado/Hotelmasvuelo";
import Cargando from "../../estructura/skeleton_placeholders_listado/Cargando";
function Productos() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  const [activeTab, setActiveTab] = useState("Resultados");
  const [ida, setIda] = useState(null);
  const [vuelta, setVuelta] = useState(null);
  const [selectedHotel, setHotel] = useState();
  const [habitacion, setHabitacion] = useState();

  useEffect(() => {
    const findCheapestCombination = () => {
      let cheapestCombination = null;
      vuelos.forEach((flightSet) => {
        flightSet.outboundFlights.forEach((outboundFlight) => {
          flightSet.returnFlights.forEach((returnFlight) => {
            const totalPrice = outboundFlight.precio + returnFlight.precio;
            if (
              !cheapestCombination ||
              totalPrice < cheapestCombination.totalPric
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
        flightSet: vuelos.find(
          (set) => set.id === cheapestFlightSet.flightSetId
        ),
      };
      const vuelta = {
        flightSetId: cheapestFlightSet.flightSetId,
        flightId: cheapestFlightSet.return.flightId,
        flight: cheapestFlightSet.return.flight,
        flightSet: vuelos.find(
          (set) => set.id === cheapestFlightSet.flightSetId
        ),
      };
      setIda(ida);
      setVuelta(vuelta);
    }
  }, []);
  const [values, setValues] = useState([0, 5000]);
  const [minMax, setMinMax] = useState([0, 5000]);
  return (
    <main className="tw-flex tw-justify-center tw-flex-col tw-items-center tw-mb-20">
      <div className="tw-w-full">
        <div
          className="tw-w-full tw-bg-cover tw-bg-center tw-p-8 tw-relative tw-shadow-md"
          style={{
            backgroundImage: "url('/banners/banner_avion.webp')",
          }}
        >
          <div className="tw-bg-indigo-300 dark:tw-bg-black tw-text-pink-600 tw-bg-opacity-55 dark:tw-bg-opacity-45 tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-pointer-events-none"></div>
          <div className="tw-flex">
            <div className="tw-container tw-relative">
              <Buscador listado={true} />
            </div>
            <aside className="lg:tw-hidden tw-col-span-9 lg:tw-col-span-3 tw-h-fit lg:tw-sticky tw-top-10 lg:tw-bg-slate-100 lg:dark:tw-bg-slate-800 lg:tw-border-2 tw-border-slate-200 dark:tw-border-slate-800 tw-rounded-lg lg:tw-shadow-xl hover:lg:tw-shadow-2xl tw-transition tw-px-3 lg:tw-p-3 lg:tw-pb-10">
              <Aside values={values} setValues={setValues} minMax={minMax} />
            </aside>
          </div>
        </div>
        <div className="tw-flex tw-space-x-4 tw-mb-6 tw-col-span-9 tw-container tw-mt-10">
          <button
            className={`tw-px-4 tw-py-2 tw-border-b-2 tw-flex tw-items-center ${
              activeTab === "Resultados"
                ? "tw-border-secondary tw-text-secondary tw-font-bold "
                : "tw-text-slate-700 dark:tw-text-slate-200 tw-border-none"
            }`}
            onClick={() => setActiveTab("Resultados")}
          >
            <FaHotel className="tw-mr-1" /> Resultados
          </button>
          <button
            className={`tw-px-4 tw-py-2 tw-border-b-2 tw-flex tw-items-center ${
              activeTab === "Vuelos"
                ? "tw-border-secondary tw-text-secondary tw-font-bold "
                : "tw-text-slate-700 dark:tw-text-slate-200 tw-border-none"
            }`}
            onClick={() => setActiveTab("Vuelos")}
          >
            <FaPlane className="tw-mr-1" /> Cambiar Vuelos
          </button>
        </div>
        <article className="tw-grid tw-grid-cols-9 lg:tw-gap-8 xs:gap-28 tw-container">
          {activeTab === "Resultados" && (
            <>
              <aside className="tw-hidden lg:tw-block tw-col-span-9 lg:tw-col-span-3 tw-h-fit lg:tw-sticky tw-top-16 lg:tw-bg-slate-100 lg:dark:tw-bg-slate-800 lg:tw-border-2 tw-border-slate-200 dark:tw-border-slate-800 tw-rounded-lg lg:tw-shadow-xl hover:lg:tw-shadow-2xl tw-transition tw-px-3 lg:tw-p-3 lg:tw-pb-10">
                <Aside values={values} setValues={setValues} minMax={minMax} />
              </aside>
              <section className="tw-col-span-9 lg:tw-col-span-6 tw-p-3">
                <div className="tw-flex tw-justify-end">
                  {selectedHotel && (
                    <Link
                      className="tw-w-full sm:tw-w-fit"
                      to={"/hotelMasVuelo"}
                      state={{ ida, vuelta, selectedHotel, habitacion }}
                    >
                      <button className="tw-bg-slate-600 dark:tw-bg-slate-800 tw-text-white tw-font-semibold tw-p-3 tw-rounded-lg tw-shadow-md hover:tw-shadow-xl tw-smooth tw-w-full">
                        Reservar
                      </button>
                    </Link>
                  )}
                </div>
                {loading ? (
                  <>
                    <Cargando />
                    <Placeholder />
                  </>
                ) : (
                  <>
                    <Vuelos ida={ida} vuelta={vuelta} cesta={true} />
                    <Resultado
                      setActiveTab={setActiveTab}
                      hoteles={hoteles}
                      selectedHotel={selectedHotel}
                      setHotel={setHotel}
                      setHabitacion={setHabitacion}
                    />
                  </>
                )}
              </section>
            </>
          )}
          {activeTab === "Vuelos" && (
            <MasVuelos
              vuelos={vuelos}
              ida={ida}
              setIda={setIda}
              vuelta={vuelta}
              setVuelta={setVuelta}
            />
          )}
        </article>
      </div>
    </main>
  );
}
export default Productos;
