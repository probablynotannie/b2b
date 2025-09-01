import { useLocation } from "react-router-dom";
import Detalles from "../ticket/contenidoPrincipal/Detalles";
import Reserva from "../../../../../helpers/visuales/ReservaFinal/Reserva";
import { FaTicket } from "react-icons/fa6";
function ResumenFinal() {
  const location = useLocation();
  const calculateTotalPrice = () => {
    return tickets.reduce((total, ticket) => {
      const pricePerTicket = ticket.price;
      return total + pricePerTicket * ticket.quantity;
    }, 0);
  };
  const { producto, tickets, data } = location.state || {};
  const numReserva = "HGALIUHJ198AJK";
  return (
    <Reserva
      Icono={FaTicket}
      finalizada={true}
      numReserva={numReserva}
      titulo={producto.name}
      precio={calculateTotalPrice().toFixed(2)}
      main={<Detalles producto={producto} tickets={tickets} cesta={true} />}
      datosContacto={data}
    />
  );
}

export default ResumenFinal;
