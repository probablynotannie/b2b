import { useState, useEffect } from "react";
import Aside from "../hotel/filtros/Aside";
import Hoteles from "../hotel/Hoteles";
import Vuelos from "../vuelos/VueloSeleccionados";
import MasVuelos from "./Vuelos";
import Buscador from "../../motores/buscadores/hotelmasvuelo/Buscador_HotVuelo";
import { FaHotel } from "react-icons/fa";
import { FaPlane } from "react-icons/fa";
import vuelos from "./Vuelos.json";
import hoteles from "./Hoteles.json";
import { Link } from "react-router-dom";
import Placeholder from "../../../placeholders/listados/Hotelmasvuelo";
import Cargando from "../../../placeholders/listados/Cargando";
import Resultado from "../../../helpers/Resultado";
import Aside_Vuelo from "../vuelos/filtros/Aside_Vuelo";

function Productos() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  const [activeTab, setActiveTab] = useState("Hoteles");
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
  const [values, setValues] = useState([0, 5000]);
  const [minMax, setMinMax] = useState([0, 5000]);
  return (
    <Resultado
      background={"url('/banners/banner_avion.webp')"}
      position={"center"}
      buscador={<Buscador listado={true} />}
      aside={
        <>
          {activeTab === "Hoteles" ? (
            <Aside values={values} setValues={setValues} minMax={minMax} />
          ) : (
            <Aside_Vuelo
              values={values}
              setValues={setValues}
              minMax={minMax}
            />
          )}
        </>
      }
      extraInfo={
        <div className="tw-flex tw-space-x-4 tw-mb-6 tw-col-span-9 tw-container tw-mt-10">
          <button
            className={`tw-px-4 tw-py-2 tw-border-b-2 tw-flex tw-items-center ${
              activeTab === "Hoteles"
                ? "tw-border-secondary tw-text-secondary tw-font-bold "
                : "tw-text-slate-700 dark:tw-text-slate-200 tw-border-none"
            }`}
            onClick={() => setActiveTab("Hoteles")}
          >
            <FaHotel className="tw-mr-1" /> Hoteles
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
      }
      listado={
        <>
          {activeTab === "Hoteles" && (
            <>
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
                  <Hoteles
                    setActiveTab={setActiveTab}
                    hoteles={hoteles}
                    selectedHotel={selectedHotel}
                    setHotel={setHotel}
                    setHabitacion={setHabitacion}
                  />
                </>
              )}
            </>
          )}
          {activeTab === "Vuelos" && (
            <>
              <MasVuelos
                vuelos={vuelos}
                ida={ida}
                setIda={setIda}
                vuelta={vuelta}
                setVuelta={setVuelta}
              />
            </>
          )}
        </>
      }
    />
  );
}
export default Productos;
