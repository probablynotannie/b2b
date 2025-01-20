import { useLocation } from "react-router-dom";
import Detalles from "./Detalles";
import Reserva from "../../../estructura/reserva/Resumen";
import Desglose from "../destino/reserva/Desglose";
import { FaPerson, FaClock } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";
import { MdMeetingRoom } from "react-icons/md";
import { Link } from "react-router-dom";
function ReservaFinal() {
  const location = useLocation();
  const { reserva, datosContacto } = location.state || {};
  return (
    <main className="grid lg:grid-cols-3 min-h-[55vh] items-start container gap-y-10 my-10 lg:gap-12">
      <section className="col-span-2 shadow-lg hover:shadow-xl transition duration-300 rounded-lg min-h-[15vh] border border-slate-200 dark:border-slate-700 dark:bg-slate-900 p-5">
        <h1 className="font-bold border-b-2 border-slate-100 dark:text-slate-200 dark:border-slate-800 pb-2">
          Reservando destino
        </h1>
        <Detalles reserva={reserva} datosContacto={datosContacto} />
      </section>
      <article className="sticky top-24 col-span-2 lg:col-span-1 shadow-lg hover:shadow-xl transition duration-300 rounded-lg min-h-[15vh] border border-slate-100  dark:border-slate-800 dark:bg-slate-900 p-5">
        <h2 className="font-semibold border-b-2 border-slate-100 dark:text-slate-200 dark:border-slate-700 pb-2">
          Resumen
        </h2>
        <Reserva
          img={reserva.img}
          txt={reserva.dias + " Días en " + reserva.ubicacion}
        />
        <div className="flex justify-between gap-3 flex-wrap text-slate-600 mt-3 dark:text-slate-100">
          <div className="flex items-center gap-1">
            <FaPerson className="text-secondary dark:text-secondary" />
            <span>{reserva.pax}x</span>
          </div>
          <div className="flex items-center gap-1">
            <MdMeetingRoom className="text-secondary dark:text-secondary" />

            <span>{reserva.habitaciones.length + 1}x hab</span>
          </div>
          <div className="flex items-center gap-1">
            <FaClock className="text-secondary dark:text-secondaryDark" />
            <span>{reserva.dias} días</span>
          </div>
          <div className="flex items-center gap-1">
            <ImSpoonKnife className="text-secondary dark:text-secondaryDark" />
            <span> {reserva.desayunos}x Desayunos</span>
          </div>
        </div>
        <section className="border-t mt-3 border-slate-200 dark:border-slate-700">
          <Desglose precio={reserva.precio} />
        </section>
        <Link to={"/resumenDestino"} state={{ reserva, datosContacto }}>
          <button className="w-full bg-secondary dark:bg-green-600 rounded-lg  hover:shadow-lg transition duration-300 text-white p-3 font-semibold mt-2">
            {reserva.precio} €
          </button>
        </Link>
      </article>
    </main>
  );
}
export default ReservaFinal;
