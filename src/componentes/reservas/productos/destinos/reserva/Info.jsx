import React from "react";
import Desglose from "../destino/reserva/Desglose";
import { FaPerson, FaClock } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";
import { MdMeetingRoom } from "react-icons/md";
function Info({ reserva }) {
  return (
    <div>
      <div className="flex justify-between gap-3 flex-wrap text-slate-600 mt-3 dark:text-slate-100">
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
      <section className="border-t mt-3 border-slate-200 dark:border-slate-700">
        <Desglose precio={reserva.precio} />
      </section>
    </div>
  );
}

export default Info;
