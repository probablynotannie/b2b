import { FaPlane } from "react-icons/fa";
import formatearFecha from "../../../estructura/FormatearFecha";
import Detalles from "../reserva/Detalles";
function Seguro({ seguro }) {
  return (
    <article className="mt-10 shadow-lg hover:shadow-xl transition duration-300 border dark:bg-slate-800 bg-slate-50 p-5 border-slate-200 dark:border-slate-700  rounded-lg">
      <section className="flex justify-between items-center border-b-2 border-slate-100 dark:border-slate-700 pb-2 mb-5">
        <div>
          <h3 className="text-lg font-bold dark:text-white">{seguro.titulo}</h3>
          <p className="text-slate-500 dark:text-slate-300 flex gap-2 items-center">
            {formatearFecha(seguro.inicio)} - {formatearFecha(seguro.fin)}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <FaPlane className="text-xl tw-text-secondary dark:tw-text-secondary" />
          <span className="tw-text-secondary dark:tw-text-secondary font-bold">
            {parseFloat(seguro.precio).toFixed(2)}€
          </span>
        </div>
      </section>
      <Detalles seguro={seguro} />
    </article>
  );
}
export default Seguro;