import { useLocation } from "react-router-dom";
import DatosContacto from "../../../estructura/DatosContacto";
import Detalles from "../entrada/contenidoPrincipal/Detalles";
import Aside from "../entrada/contenidoSecundario/Aside";
import PaginaDetalles from "../../../../../helpers/visuales/PaginaDetalles";
import { Link } from "react-router-dom";
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
  return (
    <>
      <PaginaDetalles
        titulo={producto.titulo}
        contenidoPrincipal={
          <>
            <DatosContacto
              nombre={data.nombre}
              apellidos={data.apellido}
              numero={data.email}
              email={data.numero}
            />
            <Detalles
              tickets={tickets}
              producto={producto}
              cesta={true}
              data={data}
            />
          </>
        }
        contenidoSecundario={
          <Aside
            tickets={tickets}
            producto={producto}
            link={
              <Link to={"/resumenEntradas"} state={{ producto, tickets, data }}>
                <button className=" tw-btn_accesorios tw-btn_primario tw-w-full tw-mt-5">
                  Total: €{calculateTotalPrice().toFixed(2)}
                </button>
              </Link>
            }
          />
        }
      />
    </>
  );
}

export default ReservaFinal;
