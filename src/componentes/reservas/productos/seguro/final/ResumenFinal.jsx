import { useLocation } from "react-router-dom";
import Reserva from "../../../../../helpers/visuales/ReservaFinal/Reserva";
import formatearFecha from "../../../../../scripts/FormatearFecha";
import { FaKitMedical } from "react-icons/fa6";
import Detalles from "../reserva/contenidoPrincipal/Detalles";

function ResumenFinal() {
  const location = useLocation();
  const { seguro, data } = location.state || {};
  const numReserva = "OAIUGJ515LG";
  return (
    <Reserva
      finalizada={true}
      datosContacto={data}
      numReserva={numReserva}
      Icono={FaKitMedical}
      titulo={"Seguro de viaje"}
      descripcionTitulo={
        <span>
          {formatearFecha(seguro.inicio)} - {formatearFecha(seguro.fin)}
        </span>
      }
      precio={seguro.precio.toFixed(2)}
      main={<Detalles seguro={seguro} />}
    />
  );
}

export default ResumenFinal;
