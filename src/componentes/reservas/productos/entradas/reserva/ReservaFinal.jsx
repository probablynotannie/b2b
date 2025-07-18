import { useLocation } from "react-router-dom";

import DatosContacto from "../../../estructura/DatosContacto";
import Detalles from "../entrada/contenidoPrincipal/Detalles";
import FormatearFecha from "../../../../../helpers/FormatearFecha";

import Reserva from "../../../estructura/reserva/Resumen";
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
          <>
            <Reserva img={producto.img} txt={producto.titulo} />
            {tickets.map((ticket, index) => (
              <div
                className="tw-text-sm tw-border-l-2 tw-border-secondary tw-mt-3 tw-pl-2"
                key={index}
              >
                <div className="tw-flex tw-justify-between tw-items-center dark:tw-text-slate-200">
                  <h3 className="tw-font-semibold tw-text-slate-700 dark:tw-text-slate-200 tw-text-sm">
                    {FormatearFecha(ticket.date)}
                  </h3>
                  <span className="tw-block">{ticket.time}</span>
                </div>
                <span className="dark:tw-text-slate-300">
                  {ticket.quantity}x {ticket.type}
                </span>
              </div>
            ))}
            <Link to={"/resumenEntradas"} state={{ producto, tickets, data }}>
              <button className=" tw-btn_accesorios tw-btn_primario tw-w-full tw-mt-5">
                Total: €{calculateTotalPrice().toFixed(2)}
              </button>
            </Link>
          </>
        }
      />
    </>
  );
}

export default ReservaFinal;
