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
    <section className="mt-10 shadow-lg  hover:shadow-xl transition duration-300 border dark:bg-slate-800 bg-slate-50 p-5 border-slate-200 dark:tw-border-slate-700  rounded-lg">
      <section className="flex justify-between items-center border-b-2 border-slate-100 dark:tw-border-slate-700 pb-2 mb-5">
        <div>
          <h3 className="text-lg font-bold dark:tw-text-white">
            {producto.titulo}
          </h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <FaTicket className="text-xl tw-text-secondary dark:tw-text-secondary" />
          <span className="tw-text-secondary dark:tw-text-secondary font-bold">
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
