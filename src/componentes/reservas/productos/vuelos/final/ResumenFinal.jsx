import { useLocation } from "react-router-dom";
import Vuelos from "./Vuelos";
import Reserva from "../../../../../helpers/visuales/ReservaFinal/Reserva";
import { FaPlane } from "react-icons/fa";
function ResumenFinal() {
  const location = useLocation();
  const { ida, vuelta, data } = location.state || {};
  const numReserva = "HGALIUHJ198AJK";
  return (
    <Reserva
      titulo={"Vuelo de ida" + (vuelta ? " y vuelta" : "")}
      precio={(ida.flight.precio + (vuelta?.flight.precio || 0)).toFixed(2)}
      descripcionTitulo={ida.flight.salida + " - " + ida.flight.llegada}
      Icono={FaPlane}
      datosContacto={data}
      numReserva={numReserva}
      main={<Vuelos ida={ida} vuelta={vuelta} pasajeros={data.pasajeros} />}
      finalizada={true}
    />
  );
}

export default ResumenFinal;
