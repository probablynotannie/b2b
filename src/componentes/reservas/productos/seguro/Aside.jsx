import { FaCalendar } from "react-icons/fa";
import FormatearFecha from "../../estructura/FormatearFecha";
import { TiWorld } from "react-icons/ti";
import { MdCancel } from "react-icons/md";
import { FaBriefcaseMedical } from "react-icons/fa";
import { LuLuggage } from "react-icons/lu";
import { FaPerson } from "react-icons/fa6";
import { Link } from "react-router-dom";
function Aside({ seguro }) {
  return (
    <div>
      <h2 className="text-xl font-semibold dark:text-white border-b-2 border-slate-100 dark:border-slate-700 pb-1 mb-1">
        Resumen de coberturas
      </h2>

      <div>
        <ul className="text-slate-500 dark:text-slate-300">
          <li className="flex items-center gap-1">
            <FaPerson className=" text-secondary dark:text-secondaryDark" />
            Personas aseguradas: {seguro.personas}x
          </li>
          <li className="flex items-center gap-1">
            <FaCalendar className="text-secondary dark:text-secondaryDark" />
            {FormatearFecha(seguro.inicio)}
          </li>
          <li className="flex items-center gap-1">
            <FaCalendar className="text-secondary dark:text-secondaryDark" />
            {FormatearFecha(seguro.fin)}
          </li>
          <li className="flex items-center gap-1">
            <TiWorld className="text-secondary dark:text-secondaryDark" />
            {seguro.destino}
          </li>
          <li className="flex items-center gap-1">
            <MdCancel className="text-secondary dark:text-secondaryDark" />
            Cancelaciónes hasta {seguro.cancelación.toFixed(2)}€
          </li>
          <li className="flex items-center gap-1">
            <LuLuggage className=" text-secondary dark:text-secondaryDark" />
            Equipaje hasta {seguro.equipaje.toFixed(2)}€
          </li>
          <li className="flex items-center gap-1">
            <FaBriefcaseMedical className=" text-secondary dark:text-secondaryDark" />
            Asistencia médica hasta {seguro.asistenciaMedica.toFixed(2)}€
          </li>
        </ul>
        <Link to={"/datosSeguro"} state={seguro}>
          <button className="p-3 bg-secondary dark:bg-secondaryDark rounded-lg w-full text-white font-bold mt-3">
            {seguro.precio.toFixed(2)}€
          </button>
        </Link>
      </div>
    </div>
  );
}
export default Aside;
