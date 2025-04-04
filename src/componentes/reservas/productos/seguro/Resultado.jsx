import Pdfs from "./Pdfs";
import Precios from "./Precios";
import { BsFillLuggageFill } from "react-icons/bs";
import Aside from "./Aside";
import { FaBriefcaseMedical } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaHands } from "react-icons/fa";
import seguro from "./Seguro.json";
  
function Resultado() {
  return (
    <div className="tw-grid lg:tw-grid-cols-3 tw-gap-y-10 lg:tw-gap-16 tw-container tw-my-10 tw-min-h-[70vh] tw-overflow-visible tw-mt-10">
      <section className="tw-shadow-lg tw-h-fit hover:tw-shadow-xl tw-transition dark:tw-bg-slate-800 tw-rounded-xl tw-border-2 dark:tw-border-slate-700 tw-border-slate-100 tw-col-span-2 tw-p-3">
        <h1 className="tw-text-xl tw-font-semibold tw-mb-5 dark:tw-text-white">
          {seguro.titulo}
        </h1>
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
      </section>
      <aside className="tw-w-full tw-flex tw-flex-col tw-gap-10">
        <section className="tw-p-3 tw-shadow-lg hover:tw-shadow-xl tw-transition tw-rounded-xl tw-border-2 dark:tw-border-slate-700 dark:tw-bg-slate-800 tw-border-slate-100 tw-pb-3">
          <Aside seguro={seguro} />
        </section>
      </aside>
    </div>
  );
}

export default Resultado;
