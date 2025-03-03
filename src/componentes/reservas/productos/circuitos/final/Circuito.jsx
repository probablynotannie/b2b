import Itinerario from "../detalles/Itinerario";
import Incluye from "../detalles/Incluye";
import { FaInfoCircle } from "react-icons/fa";
import { MdMeetingRoom } from "react-icons/md";
import { FaPerson, FaChild } from "react-icons/fa6";
import { IoMdFunnel } from "react-icons/io";

function Circuito({ actividad, fechaIda, adultos, ninios, habitacion }) {
  return (
    <section className="tw-mt-10 tw-shadow-lg hover:tw-shadow-xl tw-transition tw-duration-300 tw-border dark:tw-bg-slate-800 tw-bg-slate-50 tw-p-5 tw-border-slate-200 dark:tw-border-slate-700 tw-rounded-lg">
      <section className="tw-flex tw-justify-between tw-items-center tw-border-b-2 tw-border-slate-100 dark:tw-border-slate-700 tw-pb-2 tw-mb-5">
        <div>
          <h3 className="tw-text-lg tw-font-bold dark:tw-text-white">
            {actividad.titulo}
          </h3>
          <p className="tw-text-slate-500 dark:tw-text-slate-300 tw-flex tw-gap-2 tw-items-center">
            {fechaIda}
          </p>
        </div>
        <div className="tw-flex tw-flex-col tw-justify-center tw-items-center">
          <IoMdFunnel className="tw-text-xl tw-text-secondary dark:tw-text-secondary" />
          <span className="tw-text-secondary dark:tw-text-secondary tw-font-bold">
            {actividad.precio.toFixed(2)}€
          </span>
        </div>
      </section>
      <div className="tw-flex tw-justify-around tw-flex-wrap tw-gap-5">
        <div className="tw-w-[150px] tw-h-[150px] tw-shadow-md hover:tw-shadow-lg tw-transition tw-duration-300 tw-border-2 tw-border-orange-400 tw-bg-orange-100 dark:tw-bg-orange-400 dark:tw-text-white tw-text-orange-400 tw-font-bold tw-rounded-full tw-flex tw-items-center tw-justify-center">
          <div className="tw-flex tw-items-center tw-flex-col">
            <MdMeetingRoom className="tw-text-4xl tw-text-orange-400 dark:tw-text-white" />
            {habitacion} Habitaciones
          </div>
        </div>
        <div className="tw-w-[150px] tw-h-[150px] tw-shadow-md hover:tw-shadow-lg tw-transition tw-duration-300 tw-border-2 tw-border-pink-400 tw-bg-pink-100 tw-text-pink-400 dark:tw-bg-pink-700 dark:tw-border-pink-700 dark:tw-text-white tw-font-bold tw-rounded-full tw-flex tw-items-center tw-justify-center">
          <div className="tw-flex tw-items-center tw-flex-col">
            <FaPerson className="tw-text-4xl tw-text-pink-400 dark:tw-text-white" />{" "}
            {adultos} Adultos
          </div>
        </div>
        <div className="tw-w-[150px] tw-h-[150px] tw-shadow-md hover:tw-shadow-lg tw-transition tw-duration-300 tw-border-2 tw-border-indigo-500 tw-bg-indigo-100 tw-text-indigo-500 dark:tw-bg-indigo-700 dark:tw-border-indigo-700 dark:tw-text-white tw-font-bold tw-rounded-full tw-flex tw-items-center tw-justify-center">
          <div className="tw-flex tw-items-center tw-flex-col">
            <FaChild className="tw-text-4xl tw-text-indigo-500 dark:tw-text-white" />
            {ninios} Niños
          </div>
        </div>
      </div>
      <Itinerario actividad={actividad} cesta={true} />
      <div className="tw-px-5 tw-flex tw-flex-col tw-gap-7 tw-mt-10">
        <div className="tw-bg-slate-100  dark:tw-bg-slate-900 tw-border-2 dark:tw-border-slate-700 tw-border-slate-200 tw-rounded-lg tw-p-3">
          <Incluye
            incluido={actividad.incluido}
            no_incluido={actividad.no_incluido}
            final={true}
          />
        </div>
        <div className="tw-bg-slate-100 dark:tw-bg-slate-900 tw-border-2 dark:tw-border-slate-700 tw-border-slate-200 tw-rounded-lg tw-p-3">
          <h4 className="tw-font-bold tw-text-lg dark:tw-text-white">
            Excursiones
          </h4>
          <Incluye
            incluido={actividad.excursiones_incluidos}
            no_incluido={actividad.excursiones_no_incluidos}
            final={true}
          />
        </div>
        <div>
          <h4 className="tw-font-bold tw-text-lg tw-text-secondary dark:tw-text-secondary">
            Notas
          </h4>
          <ul>
            {actividad.notas.map((nota, index) => (
              <li
                className="tw-text-sm tw-mt-5 tw-flex tw-gap-2 itesm-center dark:tw-text-slate-300"
                key={index}
              >
                <FaInfoCircle className="tw-w-5 tw-h-5 tw-flex-shrink-0 tw-text-orange-400" />
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
