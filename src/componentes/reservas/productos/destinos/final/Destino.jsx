import { FaGlobe } from "react-icons/fa";
import Detalles from "../destino/Detalles";
import Desglose from "../destino/reserva/Desglose";
import { FaPerson, FaClock } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";
import { MdMeetingRoom } from "react-icons/md";
function Destino({ reserva }) {
  return (
    <section className="mt-10 shadow-lg hover:shadow-xl transition duration-300 border dark:bg-slate-800 bg-slate-50 p-5 border-slate-200 dark:tw-border-slate-700  rounded-lg">
      <section className="flex justify-between items-center border-b-2 border-slate-100 dark:tw-border-slate-700 pb-2 mb-5">
        <div>
          <div>
            <h3 className="text-lg font-bold dark:tw-text-white">
              {reserva.nombre}
            </h3>
            <span className="text-sm dark:tw-text-slate-400">
              {reserva.fechaIda} - {reserva.fechaVuelta}
            </span>
          </div>
          <div className="flex justify-between gap-3 flex-wrap text-slate-600 dark:tw-text-slate-100">
            <div className="flex items-center gap-1">
              <FaPerson className="tw-text-secondary dark:tw-text-secondary" />
              <span>{reserva.pax}x</span>
            </div>
            <div className="flex items-center gap-1">
              <MdMeetingRoom className="tw-text-secondary dark:tw-text-secondary" />

              <span>{reserva.habitaciones.length + 1}x hab</span>
            </div>
            <div className="flex items-center gap-1">
              <FaClock className="tw-text-secondary dark:tw-text-secondary" />
              <span>{reserva.dias} días</span>
            </div>
            <div className="flex items-center gap-1">
              <ImSpoonKnife className="tw-text-secondary dark:tw-text-secondary" />
              <span> {reserva.desayunos}x Desayunos</span>
            </div>
          </div>
        </div>
        <FaGlobe className="text-xl tw-text-secondary dark:tw-text-secondary" />
      </section>
      <section>
        <Desglose precio={reserva.precio} />
        <Detalles producto={reserva} cesta={true} />
      </section>
    </section>
  );
}

export default Destino;
