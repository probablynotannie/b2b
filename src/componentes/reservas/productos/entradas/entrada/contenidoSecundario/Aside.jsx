import { FaInfoCircle } from "react-icons/fa";
import formatearFecha from "../../../../estructura/FormatearFecha";
import { Link } from "react-router-dom";

function Aside({ tickets, producto }) {
  const calcularPrecio = () => {
    return tickets.reduce((total, ticket) => {
      const pricePerTicket =
        ticket.type === "adulto"
          ? producto.reserva.tiposEntradas.adulto.precio
          : producto.reserva.tiposEntradas.niño.precio;

      return total + pricePerTicket * ticket.quantity;
    }, 0);
  };
  return (
    <section>
      {tickets.length > 0 ? (
        <div className="dark:tw-text-slate-400">
          <h2 className="tw-font-semibold dark:tw-text-white">
            Resumen compra
          </h2>

          {tickets.map((ticket, index) => (
            <div
              className="tw-text-sm tw-border-l-2 tw-border-secondary tw-mt-3 tw-pl-2"
              key={index}
            >
              <div className="tw-flex tw-justify-between tw-items-center">
                <h3 className="tw-font-semibold tw-text-slate-700 dark:tw-text-slate-200 tw-text-sm">
                  {formatearFecha(ticket.date)}
                </h3>
                <span className="tw-block">{ticket.time}</span>
              </div>
              {ticket.quantity}x {ticket.type}
            </div>
          ))}
          <Link to={"/datosEntrada"} state={{ producto, tickets }}>
            <button className=" tw-btn_accesorios tw-btn_primario tw-w-full tw-mt-5">
              Total: €{calcularPrecio().toFixed(2)}
            </button>
          </Link>
        </div>
      ) : (
        <div className="tw-flex tw-justify-center tw-items-center tw-flex-col">
          <FaInfoCircle className="tw-text-3xl tw-text-danger tw-animate-pulse" />
          <p className="tw-text-danger tw-font-semibold tw-text-center">
            Por favor, elige las entradas para mostrar resumen corto de la
            elección.
          </p>
        </div>
      )}
    </section>
  );
}

export default Aside;
