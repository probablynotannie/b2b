import { useLocation } from "react-router-dom";
import Crucero from "./Crucero";
import Reserva from "../../../../../helpers/visuales/ReservaFinal/Reserva";
import { FaShip } from "react-icons/fa";
import FormatearFecha from "../../../../../helpers/FormatearFecha";

function ResumenFinal() {
  const location = useLocation();
  const { data, producto, precioSeleccionado } = location.state || {};
  const numReserva = "AUYGJEAOGPOI153";

  return (
    <Reserva
      titulo={producto.barco.nombre.texto}
      descripcionTitulo={FormatearFecha(precioSeleccionado.date)}
      Icono={FaShip}
      precio={precioSeleccionado.price.toFixed(2)}
      numReserva={numReserva}
      datosContacto={data}
      main={
        <Crucero
          producto={producto}
          pasajeros={data.pasajeros}
          selectedPrice={precioSeleccionado}
        />
      }
      finalizada={true}
    />
  );
}

export default ResumenFinal;
