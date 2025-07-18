import { GiCruiser } from "react-icons/gi";
import FormatearFecha from "../../../../../helpers/FormatearFecha";
import Detalles from "./Detalles";
import Pasajeros from "../reserva/Pasajeros";

function Crucero({ producto, pasajeros, selectedPrice }) {
  return (
    <section className="tw-mt-10 tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-border dark:tw-bg-slate-800 tw-bg-slate-50 tw-p-5 tw-border-slate-200 dark:tw-border-slate-700 tw-rounded-lg">
      <section className="tw-flex tw-justify-between tw-items-center tw-border-b-2 tw-border-slate-100 dark:tw-border-slate-700 tw-pb-2 tw-mb-5">
        <div>
          <h3 className="tw-text-lg tw-font-bold dark:tw-text-white">
            {producto.barco.nombre.texto}
          </h3>
          <p className="tw-text-slate-500 dark:tw-text-slate-300 tw-flex tw-gap-2 tw-items-center">
            {FormatearFecha(selectedPrice.date)}
          </p>
        </div>
        <div className="tw-flex tw-flex-col tw-justify-center tw-items-center">
          <GiCruiser className="tw-text-xl tw-text-secondary dark:tw-text-secondaryDark" />
          <span className="tw-text-secondary dark:tw-text-secondaryDark tw-font-bold">
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
