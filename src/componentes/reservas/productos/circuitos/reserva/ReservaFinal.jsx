import { useLocation } from "react-router-dom";
import Reserva from "../../../estructura/reserva/Resumen";
import DatosContacto from "../../../estructura/DatosContacto";
import Detalles from "../detalles/Detalles";
import { MdCalendarMonth } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaPerson } from "react-icons/fa6";
import { FaChild } from "react-icons/fa";
import { MdMeetingRoom } from "react-icons/md";

function ReservaFinal() {
  const location = useLocation();
  const { data, fechaIda, actividad, habitacion, roomData } =
    location.state || {};
  const adultos = roomData.reduce((acc, room) => acc + room.adultos, 0);
  const ninios = roomData.reduce((acc, room) => acc + room.ninios, 0);

  return (
    <main className="tw-grid lg:tw-grid-cols-3 tw-min-h-[55vh] tw-items-start tw-container tw-gap-y-10 tw-my-10 tw-mb-20 lg:tw-gap-12">
      <section className="tw-col-span-2 tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-200 
tw-bg-white dark:tw-border-slate-700 dark:tw-bg-slate-900 tw-p-5">
        <h1 className="tw-font-bold tw-border-b-2 tw-border-slate-100 dark:tw-text-slate-200 dark:tw-border-slate-800 tw-pb-2">
          Reservando coche
        </h1>
        <DatosContacto
          nombre={data.nombre}
          apellidos={data.apellido}
          email={data.email}
          numero={data.numero}
        />
        <Detalles actividad={actividad} cesta={true} />
      </section>
      <article className="tw-sticky tw-top-10 tw-col-span-2 lg:tw-col-span-1 tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-100 dark:tw-border-slate-800 tw-bg-white dark:tw-bg-slate-900 tw-p-5">
        <h2 className="tw-font-semibold tw-border-b-2 tw-border-slate-100 dark:tw-text-slate-200 dark:tw-border-slate-700 tw-pb-2">
          Resumen
        </h2>
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
      </article>
    </main>
  );
}
export default ReservaFinal;
