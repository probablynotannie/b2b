import { FaPlane } from "react-icons/fa";
import VueloSeleccionados from "../VueloSeleccionados";
import Pasajeros from "../reserva/Pasajeros";
function Vuelos({ ida, vuelta, pasajeros }) {
  console.log(ida);
  return (
    <article className="mt-10 shadow-lg hover:shadow-xl transition duration-300 border dark:bg-slate-800 bg-slate-50 p-5 border-slate-200 dark:border-slate-700  rounded-lg">
      <section className="flex justify-between items-center border-b-2 border-slate-100 dark:border-slate-700 pb-2 mb-5">
        <div>
          <h3 className="text-lg font-bold dark:text-white">
            Vuelo de ida {vuelta ? "y vuelta" : ""}
          </h3>
          <p className="text-slate-500 dark:text-slate-300 flex gap-2 items-center">
            {ida.flight.salida} - {ida.flight.llegada}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <FaPlane className="text-xl text-secondary dark:text-secondaryDark" />

          <span className="text-secondary dark:text-secondaryDark font-bold">
            {(ida.flight.precio + (vuelta?.flight.precio || 0)).toFixed(2)}€
          </span>
        </div>
      </section>
      <VueloSeleccionados ida={ida} vuelta={vuelta} cesta={true} />
      <Pasajeros pasajeros={pasajeros} />
    </article>
  );
}

export default Vuelos;
