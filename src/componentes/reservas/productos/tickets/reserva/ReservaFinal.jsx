import { useLocation } from "react-router-dom";
import DatosContacto from "../../../../../helpers/visuales/ReservaFinal/DatosContacto";
import Detalles from "../ticket/contenidoPrincipal/Detalles";
import { Link } from "react-router-dom";
import PaginaDetalles from "../../../../../helpers/visuales/PaginaDetalles";
import Aside from "../ticket/contenidoSecundario/Aside";
function ReservaFinal() {
  const location = useLocation();
  const calculateTotalPrice = () => {
    return tickets.reduce((total, ticket) => {
      const pricePerTicket =
        ticket.type === "adulto"
          ? producto.reserva.tiposEntradas.adulto.precio
          : producto.reserva.tiposEntradas.niño.precio;

      return total + pricePerTicket * ticket.quantity;
    }, 0);
  };
  const { data, producto, tickets } = location.state || {};
  console.log(tickets);
  return (
    <PaginaDetalles
      titulo={"Reservando Ticket"}
      contenidoPrincipal={
        <>
          <DatosContacto
            nombre={data.nombre}
            apellidos={data.apellido}
            numero={data.email}
            email={data.numero}
          />
          <Detalles tickets={tickets} producto={producto} cesta={true} />
        </>
      }
      contenidoSecundario={
        <>
          {/*   <Aside
            tickets={tickets}
            producto={producto}
            link={
              <Link to={"/resumenTickets"} state={{ producto, tickets, data }}>
                <button className=" tw-btn_accesorios tw-btn_primario tw-w-full tw-mt-5">
                  Total: €{calculateTotalPrice().toFixed(2)}
                </button>
              </Link>
            }
          /> */}
        </>
      }
    />
  );
}

export default ReservaFinal;
