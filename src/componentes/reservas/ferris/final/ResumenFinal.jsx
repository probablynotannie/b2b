import { useLocation } from "react-router-dom";
import Ferry from "./Ferry";
import Reserva from "../../../../helpers/visuales/ReservaFinal/Reserva";
import { FaFerry } from "react-icons/fa6";
function ResumenFinal() {
  const location = useLocation();
  const { ida, vuelta, data } = location.state || {};
  const numReserva = "HGALIUHJ198AJK";
  return (
    <Reserva
      datosContacto={data}
      Icono={FaFerry}
      numReserva={numReserva}
      titulo={"Ferry de ida " + (vuelta ? "y vuelta" : "")}
      descripcionTitulo={
        <span>
          {ida.puerto_origen} - {ida.puerto_destino}
        </span>
      }
      precio={parseFloat(ida.precio + (vuelta ? vuelta.precio : 0)).toFixed(2)}
      finalizada={true}
      main={<Ferry ida={ida} vuelta={vuelta || null} />}
    />
  );
}

export default ResumenFinal;
