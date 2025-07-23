import Pdfs from "./Pdfs";
import Precios from "./Precios";

import { BsFillLuggageFill } from "react-icons/bs";
import { FaBriefcaseMedical } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaHands } from "react-icons/fa";
function Seguro({ seguro }) {
  return (
    <div>
      <Pdfs />
      <Precios
        precios={seguro.preciosEquipajes}
        icono={
          <BsFillLuggageFill className="tw-text-slate-700 dark:tw-text-slate-300" />
        }
        titulo={"Equipajes"}
      />
      <Precios
        precios={seguro.precioDemoraViaje}
        icono={<FaClock className="tw-text-blue-400" />}
        titulo={"Demora de viaje"}
      />
      <Precios
        precios={seguro.precioAsistenciaPersonas}
        icono={<FaBriefcaseMedical className="tw-text-red-400" />}
        titulo={"Asistencia personas"}
      />
      <Precios
        precios={seguro.responsabilidadCivil}
        icono={<FaHands className="tw-text-green-400" />}
        titulo={"Responsabilidad civil"}
      />
      <Precios
        precios={seguro.anulacion}
        icono={<MdCancel className="tw-text-indigo-400" />}
        titulo={"Anulación"}
      />
      <Precios
        precios={seguro.reembolsoDeVacaciones}
        icono={<FaMoneyBillTransfer className="tw-text-cyan-400" />}
        titulo={"Reembolso de vacaciones"}
      />
    </div>
  );
}

export default Seguro;
