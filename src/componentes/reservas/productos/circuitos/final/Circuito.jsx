import Itinerario from "../detalles/Itinerario";
import Incluye from "../detalles/Incluye";
import { FaInfoCircle } from "react-icons/fa";
import { MdMeetingRoom } from "react-icons/md";
import { FaPerson, FaChild } from "react-icons/fa6";
import { IoMdFunnel } from "react-icons/io";

function Circuito({ actividad, fechaIda, adultos, ninios, habitacion }) {
  return (
    <section className="mt-10 shadow-lg hover:shadow-xl transition duration-300 border dark:bg-slate-800 bg-slate-50 p-5 border-slate-200 dark:border-slate-700  rounded-lg">
      <section className="flex justify-between items-center border-b-2 border-slate-100 dark:border-slate-700 pb-2 mb-5">
        <div>
          <h3 className="text-lg font-bold dark:text-white">
            {actividad.titulo}
          </h3>
          <p className="text-slate-500 dark:text-slate-300 flex gap-2 items-center">
            {fechaIda}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <IoMdFunnel className="text-xl tw-text-secondary dark:tw-text-secondary" />
          <span className="tw-text-secondary dark:tw-text-secondary font-bold">
            {actividad.precio.toFixed(2)}€
          </span>
        </div>
      </section>
      <div className="flex justify-around flex-wrap gap-5">
        <div className="w-[150px] h-[150px] shadow-md hover:shadow-lg transition duration-300 border-2 border-orange-400 bg-orange-100 dark:bg-orange-400 dark:text-white text-orange-400 font-bold rounded-full flex items-center justify-center">
          <div className="flex items-center flex-col">
            <MdMeetingRoom className="text-4xl text-orange-400 dark:text-white" />
            {habitacion} Habitaciones
          </div>
        </div>
        <div className="w-[150px] h-[150px] shadow-md hover:shadow-lg transition duration-300 border-2 border-pink-400 bg-pink-100 text-pink-400 dark:bg-pink-700 dark:border-pink-700 dark:text-white font-bold rounded-full flex items-center justify-center">
          <div className="flex items-center flex-col">
            <FaPerson className="text-4xl text-pink-400 dark:text-white" />{" "}
            {adultos} Adultos
          </div>
        </div>
        <div className="w-[150px] h-[150px] shadow-md hover:shadow-lg transition duration-300 border-2 border-indigo-500 bg-indigo-100 text-indigo-500 dark:bg-indigo-700 dark:border-indigo-700 dark:text-white font-bold rounded-full flex items-center justify-center">
          <div className="flex items-center flex-col">
            <FaChild className="text-4xl text-indigo-500 dark:text-white" />
            {ninios} Niños
          </div>
        </div>
      </div>
      <Itinerario actividad={actividad} cesta={true} />
      <div className="px-5 flex flex-col gap-7">
        <div className="bg-slate-100 dark:bg-slate-900 border-2 dark:border-slate-700 border-slate-200 rounded-lg p-3">
          <Incluye
            incluido={actividad.incluido}
            no_incluido={actividad.no_incluido}
            final={true}
          />
        </div>
        <div className="bg-slate-100 dark:bg-slate-900 border-2 dark:border-slate-700 border-slate-200 rounded-lg p-3">
          <h4 className="font-bold text-lg  dark:text-white">Excursiones</h4>
          <Incluye
            incluido={actividad.excursiones_incluidos}
            no_incluido={actividad.excursiones_no_incluidos}
            final={true}
          />
        </div>
        <div>
          <h4 className="font-bold text-lg tw-text-secondary dark:tw-text-secondary">
            Notas
          </h4>
          <ul>
            {actividad.notas.map((nota, index) => (
              <li
                className="text-sm mt-5 flex gap-2 itesm-center dark:text-slate-300"
                key={index}
              >
                <FaInfoCircle className="w-5 h-5 flex-shrink-0 text-orange-400" />
                {nota}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Circuito;
