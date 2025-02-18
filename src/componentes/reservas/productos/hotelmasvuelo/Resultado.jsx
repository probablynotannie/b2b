import { useState, useEffect } from "react";
import Aside from "../hotel/filtros/Aside";
import Resultado from "../hotel/HotelMas";
import Vuelos from "../vuelos/VueloSeleccionados";
import MasVuelos from "./Vuelos";
import Buscador from "./Buscador";
import { FaHotel } from "react-icons/fa";
import { FaPlane } from "react-icons/fa";
import vuelos from "./Vuelos.json";
import hoteles from "./Hoteles.json";
import { Link } from "react-router-dom";
import Placeholder from "../../estructura/skeleton_placeholders/Hotelmasvuelo";
import Cargando from "../../estructura/skeleton_placeholders/Cargando";
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
  return (
    <main className=" flex justify-center flex-col items-center  mb-10">
      <div className="w-full">
        <div
          className="w-full bg-cover bg-center p-8 relative shadow-md"
          style={{
            backgroundImage: "url('/banner_avion.jpg')",
          }}
        >
          <div className="bg-indigo-300 dark:bg-black text-pink-600 bg-opacity-55 dark:bg-opacity-45 absolute top-0 left-0 w-full h-full pointer-events-none"></div>
          <div className="flex">
            <div className="container relative">
              <Buscador />
            </div>
            <aside className="lg:hidden col-span-9 lg:col-span-3 h-fit lg:sticky top-16 lg:bg-slate-100 lg:dark:bg-slate-800 lg:border-2 border-slate-200  dark:border-slate-800 rounded-lg lg:shadow-xl hover:lg:shadow-2xl transition px-3 lg:p-3 lg:pb-10">
              <Aside />
            </aside>
          </div>
        </div>
        <div className="flex space-x-4 mb-6 col-span-9 container mt-10">
          <button
            className={`px-4 py-2 border-b-2 flex items-center ${
              activeTab === "Resultados"
                ? "border-secondary tw-text-secondary font-bold "
                : " text-slate-700 dark:text-slate-200 border-none"
            }`}
            onClick={() => setActiveTab("Resultados")}
          >
            <FaHotel className="mr-1" /> Resultados
          </button>
          <button
            className={`px-4 py-2 border-b-2 flex items-center ${
              activeTab === "Vuelos"
                ? "border-secondary tw-text-secondary font-bold "
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
              <aside className="hidden lg:block col-span-9 lg:col-span-3 h-fit lg:sticky top-16 lg:bg-slate-100 lg:dark:bg-slate-800 lg:border-2 border-slate-200  dark:border-slate-800 rounded-lg lg:shadow-xl hover:lg:shadow-2xl transition px-3 lg:p-3 lg:pb-10">
                <Aside />
              </aside>
              <section className="col-span-9 lg:col-span-6 p-3">
                <div className="flex justify-end ">
                  {selectedHotel && (
                    <Link
                      className="w-full sm:w-fit"
                      to={"/hotelMasVuelo"}
                      state={{ ida, vuelta, selectedHotel, habitacion }}
                    >
                      <button className="bg-slate-600 dark:bg-slate-800 text-white font-semibold p-3 rounded-lg shadow-md hover:shadow-xl transition duration-300 w-full">
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
