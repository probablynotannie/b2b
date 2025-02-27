import { useLocation } from "react-router-dom";

import DatosContacto from "../../../estructura/DatosContacto";
import Detalles from "../Detalles";
import FormatearFecha from "../../../estructura/FormatearFecha";
import Reserva from "../../../estructura/reserva/Resumen";
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
  console.log(data);
  return (
    <main className="tw-grid lg:tw-grid-cols-3 tw-min-h-[55vh] tw-items-start tw-container tw-gap-y-10 tw-my-10 lg:tw-gap-12">
      <section className="tw-col-span-2 tw-shadow-lg hover:tw-shadow-xl tw-transition tw-duration-300 tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-200 dark:tw-border-slate-700 dark:tw-bg-slate-900 tw-p-5">
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
      </section>
      <article className="tw-sticky tw-top-10 tw-col-span-2 lg:tw-col-span-1 tw-shadow-lg hover:tw-shadow-xl tw-transition tw-duration-300 tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-100 dark:tw-border-slate-800 dark:tw-bg-slate-900 tw-p-5">
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
        <Link to={"/resumenTickets"} state={{ producto, tickets, data }}>
          <button className="tw-w-full tw-mt-5 tw-bg-secondary tw-p-3 tw-text-white tw-font-bold tw-rounded tw-shadow hover:tw-shadow-lg tw-transition tw-duration-300">
            Total: €{calculateTotalPrice().toFixed(2)}
          </button>
        </Link>
      </article>
    </main>
  );
}

export default ReservaFinal;
