import { GiCruiser } from "react-icons/gi";
import formatearFecha from "../../../estructura/FormatearFecha";
import Detalles from "../reserva/Detalles";
import { FaUser } from "react-icons/fa6";
import Pasajeros from "../reserva/Pasajeros";

function Crucero({ producto, pasajeros, selectedPrice }) {
  return (
    <section className="tw-mt-10 tw-shadow-lg hover:tw-shadow-xl tw-transition tw-duration-300 tw-border dark:tw-bg-slate-800 tw-bg-slate-50 tw-p-5 tw-border-slate-200 dark:tw-border-slate-700 tw-rounded-lg">
      <section className="tw-flex tw-justify-between tw-items-center tw-border-b-2 tw-border-slate-100 dark:tw-border-slate-700 tw-pb-2 tw-mb-5">
        <div>
          <h3 className="tw-text-lg tw-font-bold dark:tw-text-white">
            {producto.barco.nombre.texto}
          </h3>
          <p className="tw-text-slate-500 dark:tw-text-slate-300 tw-flex tw-gap-2 tw-items-center">
            {formatearFecha(selectedPrice.date)}
          </p>
        </div>
        <div className="tw-flex tw-flex-col tw-justify-center tw-items-center">
          <GiCruiser className="tw-text-xl text-secondary dark:tw-text-secondary" />
          <span className="text-secondary dark:tw-text-secondary tw-font-bold">
            {selectedPrice.price.toFixed(2)}€
          </span>
        </div>
      </section>
      <Pasajeros pasajeros={pasajeros} />

      <Detalles producto={producto} />
    </section>
  );
}
export default Crucero;
