import React from "react";
import Desglose from "../destino/reserva/contenidoSecundario/Desglose";
import { FaPerson, FaClock } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";
import { MdMeetingRoom } from "react-icons/md";
function Info({ reserva }) {
  return (
    <div>
      <div className="tw-flex tw-justify-between tw-gap-3 tw-flex-wrap tw-text-slate-600 tw-mt-3 dark:tw-text-slate-100">
        <div className="tw-flex tw-items-center tw-gap-1">
          <FaPerson className="tw-text-secondary dark:tw-text-secondaryDark" />
          <span>{reserva.pax}x</span>
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
      <section className="tw-border-t tw-mt-3 tw-border-slate-200 dark:tw-border-slate-700">
        <Desglose precio={reserva.precio} />
      </section>
    </div>
  );
}

export default Info;
