import { FaCalendar } from "react-icons/fa";
import FormatearFecha from "../../../../../assets/scripts/formatearFecha";
import { TiWorld } from "react-icons/ti";
import { MdCancel } from "react-icons/md";
import { FaBriefcaseMedical } from "react-icons/fa";
import { LuLuggage } from "react-icons/lu";
import { FaFilePdf, FaPerson } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Modal } from "flowbite-react";
function Aside({ seguro }) {
  const [modalMargen, setModalMargen] = useState(false);
  return (
    <div>
      <h2 className="tw-text-xl tw-font-semibold dark:tw-text-white tw-border-b-2 tw-border-slate-100 dark:tw-border-slate-700 tw-pb-1 tw-mb-1">
        Resumen de coberturas
      </h2>
      <div>
        <ul className="tw-text-slate-500 dark:tw-text-slate-300">
          <li className="tw-flex tw-items-center tw-gap-1">
            <FaPerson className="tw-text-secondary dark:tw-text-secondaryDark" />
            Personas aseguradas: {seguro.personas}x
          </li>
          <li className="tw-flex tw-items-center tw-gap-1">
            <FaCalendar className="tw-text-secondary dark:tw-text-secondaryDark" />
            {FormatearFecha(seguro.inicio)}
          </li>
          <li className="tw-flex tw-items-center tw-gap-1">
            <FaCalendar className="tw-text-secondary dark:tw-text-secondaryDark" />
            {FormatearFecha(seguro.fin)}
          </li>
          <li className="tw-flex tw-items-center tw-gap-1">
            <TiWorld className="tw-text-secondary dark:tw-text-secondaryDark" />
            {seguro.destino}
          </li>
        </ul>
        <ul className="tw-border tw-border-slate-100 dark:tw-border-slate-700 tw-p-3 dark:tw-text-slate-300 tw-text-slate-500 tw-text-sm">
          <li className="tw-flex tw-items-center tw-gap-1">
            <MdCancel className="tw-text-secondary dark:tw-text-secondaryDark" />
            Cancelaciónes hasta {seguro.cancelación.toFixed(2)}€
          </li>
          <li className="tw-flex tw-items-center tw-gap-1">
            <LuLuggage className="tw-text-secondary dark:tw-text-secondaryDark" />
            Equipaje hasta {seguro.equipaje.toFixed(2)}€
          </li>
          <li className="tw-flex tw-items-center tw-gap-1">
            <FaBriefcaseMedical className="tw-text-secondary dark:tw-text-secondaryDark" />
            Asistencia médica hasta {seguro.asistenciaMedica.toFixed(2)}€
          </li>
        </ul>
        <div className="tw-flex tw-justify-end tw-mt-1">
          <button className="tw-flex tw-items-center dark:tw-text-white tw-gap-1">
            Descargar
            <FaFilePdf />
          </button>
        </div>
        <button
          onClick={() => setModalMargen(true)}
          className="tw-p-3 tw-bg-slate-400 dark:tw-bg-slate-600 tw-rounded-lg tw-w-full tw-text-white tw-font-bold tw-mt-3"
        >
          Cambiar Margen
        </button>
        <Link to={"/datosSeguro"} state={seguro}>
          <button className="tw-btn_accesorios tw-btn_primario tw-w-full tw-mt-3">
            {seguro.precio.toFixed(2)}€
          </button>
        </Link>
        <p className="tw-text-center tw-text-red-400 tw-text-xs tw-mt-2">
          A partir de {FormatearFecha(seguro.penalizacion)} penalización de 100%{" "}
        </p>
      </div>
      <Modal
        className="tw-bg-black tw-bg-opacity-40"
        show={modalMargen}
        onClose={() => setModalMargen(false)}
      >
        <Modal.Header>Cambiar margen</Modal.Header>
        <Modal.Body>
          <div className="tw-space-y-6"></div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="tw-bg-slate-400 dark:tw-bg-slate-800 tw-p-3 tw-rounded tw-shadow texxt-white tw-font-bold tw-text-white"
            color="gray"
            onClick={() => setModalMargen(false)}
          >
            cerrar
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default Aside;
