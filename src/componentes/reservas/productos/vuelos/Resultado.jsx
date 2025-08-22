import Aside from "./filtros/Aside_Vuelo";
import MasVuelos from "./Vuelos";
import VueloSeleccionado from "./VueloSeleccionados";
import { useEffect, useState } from "react";
import flightSets from "./Vuelos.json";
import Buscador from "../../../motores/buscadores/vuelos/Buscador_Vuelos";
import vuelos from "./Vuelos.json";
import PlaceHolder from "../../estructura/skeleton_placeholders_listado/Vuelos";
import Cargando from "../../estructura/skeleton_placeholders_listado/Cargando";
import Resultado from "../../../../helpers/Resultado";
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
    <Resultado
      background={"url('/banners/banner_avion.webp')"}
      position={"center"}
      color={"tw-bg-blue-300/45"}
      buscador={<Buscador listado={true} />}
      aside={<Aside />}
      listado={
        <>
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
        </>
      }
    />
  );
}
export default Vuelos;
