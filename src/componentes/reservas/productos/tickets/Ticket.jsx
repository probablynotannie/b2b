import { useLocation } from "react-router-dom";
import { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import Detalles from "./Detalles";
import { Link } from "react-router-dom";
import FormatearFecha from "../../estructura/FormatearFecha";

function Producto() {
  const location = useLocation();
  const producto = location.state;
  const [tickets, setTickets] = useState([]);
  const calculateTotalPrice = () => {
    return tickets.reduce((total, ticket) => {
      const pricePerTicket =
        ticket.type === "adulto"
          ? producto.reserva.tiposEntradas.adulto.precio
          : producto.reserva.tiposEntradas.niño.precio;

      return total + pricePerTicket * ticket.quantity;
    }, 0);
  };

  return (
    <main className="tw-grid lg:tw-grid-cols-3 tw-min-h-[55vh] tw-items-start tw-container tw-gap-y-10 tw-my-10 tw-mb-20 lg:tw-gap-12">
      <section className="tw-col-span-2 tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-200 
tw-bg-white dark:tw-border-slate-700 dark:tw-bg-slate-900 tw-p-5">
        <Detalles
          tickets={tickets}
          setTickets={setTickets}
          producto={producto}
        />
      </section>
      <article className="tw-sticky tw-top-10 tw-col-span-2 lg:tw-col-span-1 tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-100 dark:tw-border-slate-800 tw-bg-white dark:tw-bg-slate-900 tw-p-5">
        <section>
          {tickets.length > 0 ? (
            <div className="dark:tw-text-slate-400">
              <h2 className="tw-font-semibold dark:tw-text-white">Resumen compra</h2>

              {tickets.map((ticket, index) => (
                <div
                  className="tw-text-sm tw-border-l-2 tw-border-secondary tw-mt-3 tw-pl-2"
                  key={index}
                >
                  <div className="tw-flex tw-justify-between tw-items-center">
                    <h3 className="tw-font-semibold tw-text-slate-700 dark:tw-text-slate-200 tw-text-sm">
                      {FormatearFecha(ticket.date)}
                    </h3>
                    <span className="tw-block">{ticket.time}</span>
                  </div>
                  {ticket.quantity}x {ticket.type}
                </div>
              ))}
              <Link to={"/datosTickets"} state={{ producto, tickets }}>
                <button className=" tw-btn_accesorios tw-btn_primario tw-w-full tw-mt-5">
                  Total: €{calculateTotalPrice().toFixed(2)}
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
      </article>
    </main>
  );
}
export default Producto;
