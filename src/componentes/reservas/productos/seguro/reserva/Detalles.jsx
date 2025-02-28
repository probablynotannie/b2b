import { FaPerson } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { FaBriefcaseMedical } from "react-icons/fa";
import { MdLuggage } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";

function Detalles({ seguro }) {
  return (
    <div className="tw-grid tw-grid-cols-2 xl:tw-grid-cols-5 tw-gap-10 tw-mt-3 tw-place-items-center">
      <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-text-slate-500 dark:tw-text-slate-400 tw-font-bold tw-w-32 tw-h-32 tw-rounded-full">
        <span className="tw-rounded-full tw-flex tw-items-center tw-justify-center tw-text-4xl tw-w-16 tw-h-16">
          <FaGlobe />
        </span>
        <span>{seguro.destino}</span>
      </div>
      <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-text-slate-500 dark:tw-text-slate-400 tw-font-bold tw-w-32 tw-h-32 tw-rounded-full">
        <span className="tw-rounded-full tw-flex tw-items-center tw-justify-center tw-text-4xl tw-w-16 tw-h-16">
          <FaPerson />
        </span>
        <span>{seguro.personas}x</span>
      </div>
      <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-text-slate-500 dark:tw-text-slate-400 tw-font-bold tw-w-32 tw-h-32 tw-rounded-full">
        <span className="tw-rounded-full tw-flex tw-items-center tw-justify-center tw-text-4xl tw-w-16 tw-h-16">
          <MdLuggage />
        </span>
        <span className="tw-text-sm">Hasta</span>
        <span>{seguro.equipaje.toFixed(2)}€</span>
      </div>
      <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-text-slate-500 dark:tw-text-slate-400 tw-font-bold tw-w-32 tw-h-32 tw-rounded-full">
        <span className="tw-rounded-full tw-flex tw-items-center tw-justify-center tw-text-4xl tw-w-16 tw-h-16">
          <FaBriefcaseMedical />
        </span>
        <span className="tw-text-sm">Hasta</span>
        <span>{seguro.asistenciaMedica.toFixed(2)}€</span>
      </div>
      <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-text-slate-500 dark:tw-text-slate-400 tw-font-bold tw-w-32 tw-h-32 tw-rounded-full">
        <span className="tw-rounded-full tw-flex tw-items-center tw-justify-center tw-text-4xl tw-w-16 tw-h-16">
          <MdCancel />
        </span>
        <span className="tw-text-sm">Hasta</span>
        <span>{seguro.cancelación.toFixed(2)}€</span>
      </div>
    </div>
  );
}

export default Detalles;
