import { useLocation } from "react-router-dom";

import Coche from "./Coche";
import { FaCarAlt } from "react-icons/fa";
import Reserva from "../../../../../helpers/visuales/ReservaFinal/Reserva";
import FormatearFecha from "../../../../../helpers/FormatearFecha";
function ResumenFinal() {
  const location = useLocation();
  const { producto, selectedExtras, precio, data, conductor } =
    location.state || {};
  const numReserva = "HGALIUHJ198AJK";
  return (
    <Reserva
      finalizada={true}
      datosContacto={data}
      numReserva={numReserva}
      Icono={FaCarAlt}
      titulo={producto.nombre}
      descripcionTitulo={
        <>
          {FormatearFecha(producto.recogida.fecha)} -{" "}
          {FormatearFecha(producto.devolucion.fecha)}
        </>
      }
      precio={precio.toFixed(2)}
      main={
        <Coche
          producto={producto}
          extras={selectedExtras}
          conductor={conductor}
          precio={precio}
        />
      }
    />
  );
}

export default ResumenFinal;
