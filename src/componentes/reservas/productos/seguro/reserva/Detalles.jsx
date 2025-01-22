import { FaPerson } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { FaBriefcaseMedical } from "react-icons/fa";
import { MdLuggage } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";

function Detalles({ seguro }) {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-5 gap-10 mt-3 place-items-center">
      <div className="flex flex-col justify-center items-center text-slate-500 dark:text-slate-400 font-bold w-32 h-32 rounded-full ">
        <span className="rounded-full flex items-center justify-center text-4xl w-16 h-16">
          <FaGlobe />
        </span>
        <span>{seguro.destino}</span>
      </div>
      <div className="flex flex-col justify-center items-center text-slate-500 dark:text-slate-400 font-bold w-32 h-32 rounded-full ">
        <span className="rounded-full flex items-center justify-center text-4xl w-16 h-16">
          <FaPerson />
        </span>
        <span>{seguro.personas}x</span>
      </div>
      <div className="flex flex-col justify-center items-center text-slate-500 dark:text-slate-400 font-bold w-32 h-32 rounded-full ">
        <span className="rounded-full flex items-center justify-center text-4xl w-16 h-16">
          <MdLuggage />
        </span>
        <span className="text-sm">Hasta</span>
        <span>{seguro.equipaje.toFixed(2)}€</span>
      </div>
      <div className="flex flex-col justify-center items-center text-slate-500 dark:text-slate-400 font-bold w-32 h-32 rounded-full ">
        <span className="rounded-full flex items-center justify-center text-4xl w-16 h-16">
          <FaBriefcaseMedical />
        </span>
        <span className="text-sm">Hasta</span>
        <span>{seguro.asistenciaMedica.toFixed(2)}€</span>
      </div>
      <div className="flex flex-col justify-center items-center text-slate-500 dark:text-slate-400 font-bold w-32 h-32 rounded-full ">
        <span className="rounded-full flex items-center justify-center text-4xl w-16 h-16">
          <MdCancel />
        </span>
        <span className="text-sm">Hasta</span>
        <span>{seguro.cancelación.toFixed(2)}€</span>
      </div>
    </div>
  );
}

export default Detalles;
