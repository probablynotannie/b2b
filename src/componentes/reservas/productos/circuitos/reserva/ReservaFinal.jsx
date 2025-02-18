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
  const { datosContacto, fechaIda, actividad, habitacion, roomData } =
    location.state || {};
  const adultos = roomData.reduce((acc, room) => acc + room.adultos, 0);
  const ninios = roomData.reduce((acc, room) => acc + room.ninios, 0);

  return (
    <main className="grid lg:grid-cols-3 min-h-[55vh] items-start container gap-y-10 my-10 lg:gap-12">
      <section className="col-span-2 shadow-lg hover:shadow-xl transition duration-300 rounded-lg min-h-[15vh] border border-slate-200 dark:border-slate-700 dark:bg-slate-900 p-5">
        <h1 className="font-bold border-b-2 border-slate-100 dark:text-slate-200 dark:border-slate-800 pb-2">
          Reservando coche
        </h1>
        <DatosContacto
          nombre={datosContacto?.nombre}
          apellidos={datosContacto?.apellido}
          email={datosContacto?.email}
          numero={datosContacto?.numero}
        />
        <Detalles actividad={actividad} cesta={true} />
      </section>
      <article className="sticky top-24 col-span-2 lg:col-span-1 shadow-lg hover:shadow-xl transition duration-300 rounded-lg min-h-[15vh] border border-slate-100 dark:border-slate-800 dark:bg-slate-900 p-5">
        <h2 className="font-semibold border-b-2 border-slate-100 dark:text-slate-200 dark:border-slate-700 pb-2">
          Resumen
        </h2>
        <Reserva img={actividad?.img} txt={actividad?.titulo} />
        <ul className="mt-3">
          <li className="flex items-center gap-2 text-slate-500 dark:text-slate-300">
            <MdCalendarMonth className="text-lg tw-text-secondary dark:tw-text-secondary" />
            {fechaIda}
          </li>
          <li className="flex items-center gap-2 text-slate-500 dark:text-slate-300">
            <MdMeetingRoom className="text-lg tw-text-secondary dark:tw-text-secondary" />
            {habitacion} Habitaciones - <FaPerson className="tw-text-secondary" />{" "}
            {adultos} Adultos - <FaChild className="tw-text-secondary" /> {ninios}{" "}
            Niños
          </li>
        </ul>

        <Link
          to={"/resumenCircuito"}
          state={{
            datosContacto,
            fechaIda,
            actividad,
            habitacion,
            adultos,
            ninios,
          }}
        >
          <button className="w-full bg-secondary dark:bg-green-600 rounded-lg  hover:shadow-lg transition duration-300 text-white p-3 font-semibold mt-2">
            {actividad?.precio?.toFixed(2)}€
          </button>
        </Link>
      </article>
    </main>
  );
}
export default ReservaFinal;
