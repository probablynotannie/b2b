import Reserva from "../../../../../../helpers/visuales/ReservaFinal/Resumen";
import { MdCalendarMonth } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaPerson } from "react-icons/fa6";
import { FaChild } from "react-icons/fa";
import { MdMeetingRoom } from "react-icons/md";
function Aside({ fechaIda, habitacion, adultos, ninios, data, actividad }) {
  return (
    <>
      <Reserva img={actividad?.img} txt={actividad?.titulo} />
      <ul className="tw-mt-3">
        <li className="tw-flex tw-items-center tw-gap-2 tw-text-slate-500 dark:tw-text-slate-300">
          <MdCalendarMonth className="tw-text-lg tw-text-secondary dark:tw-text-secondaryDark" />
          {fechaIda}
        </li>
        <li className="tw-flex tw-flex-wrap tw-items-center tw-gap-2 tw-text-slate-500 dark:tw-text-slate-300">
          <MdMeetingRoom className="tw-text-lg tw-text-secondary dark:tw-text-secondaryDark" />
          {habitacion} Habitaciones
          <FaPerson className="tw-text-secondary" /> {adultos} Adultos
          <FaChild className="tw-text-secondary" /> {ninios} Niños
        </li>
      </ul>

      <Link
        to={"/resumenCircuito"}
        state={{
          data,
          fechaIda,
          actividad,
          habitacion,
          adultos,
          ninios,
        }}
      >
        <button className="tw-btn_accesorios tw-btn_primario tw-w-full tw-mt-3">
          {actividad?.precio?.toFixed(2)}€
        </button>
      </Link>
    </>
  );
}

export default Aside;
