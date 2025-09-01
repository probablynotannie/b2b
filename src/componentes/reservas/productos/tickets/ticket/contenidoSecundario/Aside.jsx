import { FaInfoCircle, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import Reserva from "../../../../../../helpers/visuales/ReservaFinal/Resumen";

function Aside({ tickets, producto, link }) {
  const calcularPrecio = () => {
    return tickets.reduce((total, ticket) => {
      return total + ticket.price * ticket.quantity;
    }, 0);
  };
  return (
    <section>
      {tickets.length > 0 ? (
        <div className="dark:tw-text-slate-400">
          <Reserva img={producto.img[0].L} txt={producto.name} />
          {tickets.map((ticket, index) => (
            <div
              key={index}
              className="tw-border tw-rounded-xl tw-bg-slate-100/70 dark:tw-bg-slate-800 dark:tw-border-slate-700 tw-shadow-sm tw-p-3 tw-mt-3 tw-transition hover:tw-shadow-md"
            >
              <div className="tw-flex tw-justify-between tw-items-center">
                <h3 className="tw-font-medium tw-text-slate-800 dark:tw-text-slate-200 tw-text-base">
                  {ticket.modalName}
                </h3>
                <span className="tw-text-slate-600 dark:tw-text-slate-300 tw-font-semibold">
                  €{ticket.price}
                </span>
              </div>
              <div className="tw-flex tw-justify-between tw-items-center tw-mt-2">
                <span className="tw-text-slate-800 dark:tw-text-slate-400 tw-flex tw-items-center tw-gap-1">
                  <FaUserAlt /> - {ticket.quantity}x
                </span>
                <span className="tw-font-bold tw-text-slate-700 dark:tw-text-slate-100">
                  €{(ticket.quantity * ticket.price).toFixed(2)}
                </span>
              </div>
            </div>
          ))}

          {link ? (
            link
          ) : (
            <Link to={"/datosTickets"} state={{ producto, tickets }}>
              <button className="tw-btn_accesorios tw-btn_primario tw-w-full tw-mt-5">
                Total: €{calcularPrecio().toFixed(2)}
              </button>
            </Link>
          )}
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
