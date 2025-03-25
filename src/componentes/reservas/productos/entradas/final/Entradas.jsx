import React from "react";
import { FaTicket } from "react-icons/fa6";
import Detalles from "../Detalles";
function Entradas({ producto, tickets }) {
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
    <section className="tw-mt-10 tw-shadow-lg hover:tw-shadow-xl tw-transition tw-duration-300 tw-border dark:tw-bg-slate-800 tw-bg-slate-50 tw-p-5 tw-border-slate-200 dark:tw-border-slate-700 tw-rounded-lg">
      <section className="tw-flex tw-justify-between tw-items-center tw-border-b-2 tw-border-slate-100 dark:tw-border-slate-700 tw-pb-2 tw-mb-5">
        <div>
          <h3 className="tw-text-lg tw-font-bold dark:tw-text-white">
            {producto.titulo}
          </h3>
        </div>
        <div className="tw-flex tw-flex-col tw-justify-center tw-items-center">
          <FaTicket className="tw-text-xl tw-text-secondary dark:tw-text-secondaryDark" />
          <span className="tw-text-secondary dark:tw-text-secondaryDark tw-font-bold">
            {calculateTotalPrice().toFixed(2)}€
          </span>
        </div>
      </section>
      <section>
        <Detalles producto={producto} tickets={tickets} cesta={true} />
      </section>
    </section>
  );
}

export default Entradas;
