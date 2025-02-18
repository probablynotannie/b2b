import { FaCalendar } from "react-icons/fa";
import FormatearFecha from "../../estructura/FormatearFecha";
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
      <h2 className="text-xl font-semibold dark:text-white border-b-2 border-slate-100 dark:border-slate-700 pb-1 mb-1">
        Resumen de coberturas
      </h2>
      <div>
        <ul className="text-slate-500 dark:text-slate-300">
          <li className="flex items-center gap-1">
            <FaPerson className=" tw-text-secondary dark:tw-text-secondary" />
            Personas aseguradas: {seguro.personas}x
          </li>
          <li className="flex items-center gap-1">
            <FaCalendar className="tw-text-secondary dark:tw-text-secondary" />
            {FormatearFecha(seguro.inicio)}
          </li>
          <li className="flex items-center gap-1">
            <FaCalendar className="tw-text-secondary dark:tw-text-secondary" />
            {FormatearFecha(seguro.fin)}
          </li>
          <li className="flex items-center gap-1">
            <TiWorld className="tw-text-secondary dark:tw-text-secondary" />
            {seguro.destino}
          </li>
        </ul>
        <ul className="border border-slate-100 dark:border-slate-700 p-3 dark:text-slate-300">
          <li className="flex items-center gap-1">
            <MdCancel className="tw-text-secondary dark:tw-text-secondary" />
            Cancelaciónes hasta {seguro.cancelación.toFixed(2)}€
          </li>
          <li className="flex items-center gap-1">
            <LuLuggage className=" tw-text-secondary dark:tw-text-secondary" />
            Equipaje hasta {seguro.equipaje.toFixed(2)}€
          </li>
          <li className="flex items-center gap-1">
            <FaBriefcaseMedical className=" tw-text-secondary dark:tw-text-secondary" />
            Asistencia médica hasta {seguro.asistenciaMedica.toFixed(2)}€
          </li>
        </ul>
        <div className="flex justify-end mt-1">
          <button className="flex items-center dark:text-white gap-1">
            Descargar
            <FaFilePdf />
          </button>
        </div>
        <button
          onClick={() => setModalMargen(true)}
          className="p-3 bg-slate-400 dark:bg-slate-600 rounded-lg w-full text-white font-bold mt-3"
        >
          Cambiar Margen
        </button>
        <Link to={"/datosSeguro"} state={seguro}>
          <button className="p-3 tw-bg-secondary dark:tw-tw-bg-secondary rounded-lg w-full text-white font-bold mt-3">
            {seguro.precio.toFixed(2)}€
          </button>
        </Link>
        <p className="text-center text-red-400 text-xs mt-2">
          A partir de {FormatearFecha(seguro.penalizacion)} penalización de 100%{" "}
        </p>
      </div>
      <Modal show={modalMargen} onClose={() => setModalMargen(false)}>
        <Modal.Header>Cambiar margen</Modal.Header>
        <Modal.Body>
          <div className="space-y-6"></div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="bg-slate-400 dark:bg-slate-800 p-3 rounded shadow texxt-white font-bold text-white"
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
