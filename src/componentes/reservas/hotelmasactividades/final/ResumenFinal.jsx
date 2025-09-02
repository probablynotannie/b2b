import { useLocation } from "react-router-dom";
import Hotel from "../../hotel/final/Hotel";
import Actividades from "./Actividades";
import Reserva from "../../../../helpers/visuales/ReservaFinal/Reserva";
import { FaHotel } from "react-icons/fa6";
function ResumenFinal() {
  const location = useLocation();
  const numReserva = "AOIUHKÑ264IUG";
  const { data, hotel, actividades, habitacion } = location.state || {};
  const calculateTotalPrice = () => {
    const actividadesTotal = actividades.reduce((sum, actividad) => {
      const precioActividad = Number(actividad.precioTotal);
      return sum + precioActividad;
    }, 0);
    const total = Number(actividadesTotal) + Number(hotel.precio);
    return total;
  };
  return (
    <Reserva
      finalizada={true}
      numReserva={numReserva}
      Icono={FaHotel}
      datosContacto={data}
      titulo={hotel.nombre}
      descripcionTitulo={
        <span>
          {actividades.length}x actividad{actividades.length > 1 && "es"}
        </span>
      }
      precio={calculateTotalPrice()}
      main={
        <>
          <Hotel hotel={hotel} habitacion={habitacion} />
          <Actividades actividades={actividades} />
        </>
      }
    />
  );
}

export default ResumenFinal;
