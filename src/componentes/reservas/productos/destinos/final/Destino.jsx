import { FaGlobe } from "react-icons/fa";
import Detalles from "../destino/Detalles";
import Desglose from "../destino/reserva/Desglose";
import { FaPerson, FaClock } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";
import { MdMeetingRoom } from "react-icons/md";
function Destino({ reserva }) {
  return (
    <section className="tw-mt-10 tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-border dark:tw-bg-slate-800 tw-bg-slate-50 tw-p-5 tw-border-slate-200 dark:tw-border-slate-700 tw-rounded-lg">
      <section className="tw-flex tw-justify-between tw-items-center tw-border-b-2 tw-border-slate-100 dark:tw-border-slate-700 tw-pb-2 tw-mb-5">
        <div>
          <div>
            <h3 className="tw-text-lg tw-font-bold dark:tw-text-white">
              {reserva.nombre}
            </h3>
            <span className="tw-text-sm dark:tw-text-slate-400">
              {reserva.fechaIda} - {reserva.fechaVuelta}
            </span>
          </div>
          <div className="tw-flex tw-justify-between tw-gap-3 tw-flex-wrap tw-text-slate-600 dark:tw-text-slate-100">
            <div className="tw-flex tw-items-center tw-gap-1">
              <FaPerson className="tw-text-secondary dark:tw-text-secondaryDark" />
              <span>{reserva.pax}x</span>
            </div>
            <div className="tw-flex tw-items-center tw-gap-1">
              <MdMeetingRoom className="tw-text-secondary dark:tw-text-secondaryDark" />

              <span>{reserva.habitaciones.length + 1}x hab</span>
            </div>
            <div className="tw-flex tw-items-center tw-gap-1">
              <FaClock className="tw-text-secondary dark:tw-text-secondaryDark" />
              <span>{reserva.dias} días</span>
            </div>
            <div className="tw-flex tw-items-center tw-gap-1">
              <ImSpoonKnife className="tw-text-secondary dark:tw-text-secondaryDark" />
              <span> {reserva.desayunos}x Desayunos</span>
            </div>
          </div>
        </div>
        <FaGlobe className="tw-text-xl tw-text-secondary dark:tw-text-secondaryDark" />
      </section>
      <section>
        <Desglose precio={reserva.precio} />
        <Detalles producto={reserva} cesta={true} />
      </section>
    </section>
  );
}

export default Destino;
