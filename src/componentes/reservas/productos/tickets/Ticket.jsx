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
    <main className="grid lg:grid-cols-3 min-h-[55vh] items-start container gap-y-10 my-10 lg:gap-12">
      <section className="col-span-2 shadow-lg hover:shadow-xl transition duration-300 rounded-lg min-h-[15vh] border border-slate-200 dark:border-slate-700 dark:bg-slate-900 p-5">
        <Detalles
          tickets={tickets}
          setTickets={setTickets}
          producto={producto}
        />
      </section>
      <article className="col-span-2 lg:col-span-1 shadow-lg hover:shadow-xl transition duration-300 rounded-lg min-h-[15vh] border border-slate-100  dark:border-slate-800 dark:bg-slate-900 p-5">
        <section>
          {tickets.length > 0 ? (
            <div>
              <h2 className="font-semibold">Resumen compra</h2>

              {tickets.map((ticket, index) => (
                <div
                  className="text-sm border-l-2 border-secondary mt-3 pl-2"
                  key={index}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-slate-700 text-sm">
                      {FormatearFecha(ticket.date)}
                    </h3>
                    <span className="block">{ticket.time}</span>
                  </div>
                  {ticket.quantity}x {ticket.type}
                </div>
              ))}
              <Link to={"/datosTickets"} state={{ producto, tickets }}>
                <button className="w-full mt-5 bg-secondary p-3 text-white font-bold rounded shadow hover:shadow-lg transition duration-300">
                  Total: €{calculateTotalPrice().toFixed(2)}
                </button>
              </Link>
            </div>
          ) : (
            <div className="flex justify-center items-center flex-col">
              <FaInfoCircle className="text-3xl text-red-500 animate-pulse" />
              <p className="text-red-500 font-semibold text-center">
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
