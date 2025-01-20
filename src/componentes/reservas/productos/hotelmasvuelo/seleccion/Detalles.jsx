import Vuelos from "../../vuelos/VueloSeleccionados";
import HotelDetalles from "../../hotel/reserva/HotelDetalles";
function Detalles({ hotel, ida, vuelta }) {
  return (
    <>
      <HotelDetalles hotel={hotel} />
      <Vuelos ida={ida} vuelta={vuelta} cesta={true} />
    </>
  );
}
export default Detalles;
