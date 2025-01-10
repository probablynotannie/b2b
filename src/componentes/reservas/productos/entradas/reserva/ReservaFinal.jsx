import { useLocation } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdEmail, MdPhoneAndroid } from "react-icons/md";
import Detalles from "../Detalles";
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
  const { producto, tickets, datosContacto } = location.state || {};
  return (
    <main className="grid lg:grid-cols-3 min-h-[55vh] items-start container gap-y-10 my-10 lg:gap-12">
      <section className="col-span-2 shadow-lg hover:shadow-xl transition duration-300 rounded-lg min-h-[15vh] border border-slate-200 dark:border-slate-700 dark:bg-slate-900 p-5">
        <Detalles tickets={tickets} producto={producto} cesta={true} />
      </section>
      <article className="sticky top-24 col-span-2 lg:col-span-1 shadow-lg hover:shadow-xl transition duration-300 rounded-lg min-h-[15vh] border border-slate-100  dark:border-slate-800 dark:bg-slate-900 p-5">
        <img
          src={producto.img}
          className="opacity-90 rounded shadow mb-4 h-[20vh] w-full object-top object-cover "
          alt="Reserva vuelo"
        />
        <h2 className="font-semibold border-b-2 border-slate-100 dark:text-slate-200 dark:border-slate-700 pb-2">
          Datos de contacto
        </h2>
        <div className="flex flex-nowrap gap-2 mt-2 items-center text-slate-500 dark:text-slate-400">
          <FaUser className="text-slate-700 dark:text-slate-200" />
          <span>{datosContacto.nombre}</span>
          <span>{datosContacto.apellido}</span>
        </div>
        <div className="flex flex-nowrap gap-2 mt-2 items-center text-slate-500 dark:text-slate-400">
          <MdEmail className="text-slate-700 dark:text-slate-200" />
          <span>{datosContacto.email}</span>
        </div>
        <div className="flex flex-nowrap gap-2 mt-2 items-center text-slate-500 dark:text-slate-400">
          <MdPhoneAndroid className="text-slate-700 dark:text-slate-200" />
          <span>{datosContacto.numero}</span>
        </div>
        <button className="w-full mt-5 bg-secondary p-3 text-white font-bold rounded shadow hover:shadow-lg transition duration-300">
          Total: €{calculateTotalPrice().toFixed(2)}
        </button>
      </article>
    </main>
  );
}

export default ReservaFinal;
