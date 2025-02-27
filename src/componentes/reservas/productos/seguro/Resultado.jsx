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
    <div className="grid lg:grid-cols-3 gap-y-10 lg:gap-16 container my-10 min-h-[70vh] overflow-visible mt-10">
      <section className="shadow-lg h-fit hover:shadow-xl transition dark:bg-slate-800 rounded-xl border-2 dark:tw-border-slate-700 border-slate-100 col-span-2 p-3">
        <h1 className="text-xl font-semibold mb-5 dark:tw-text-white">
          {seguro.titulo}
        </h1>
        <Pdfs />
        <Precios
          precios={seguro.preciosEquipajes}
          icono={<BsFillLuggageFill className="text-slate-700 dark:tw-text-slate-300" />}
          titulo={"Equipajes"}
        />
        <Precios
          precios={seguro.precioDemoraViaje}
          icono={<FaClock className="text-blue-400" />}
          titulo={"Demora de viaje"}
        />
        <Precios
          precios={seguro.precioAsistenciaPersonas}
          icono={<FaBriefcaseMedical className="text-red-400" />}
          titulo={"Asistencia personas"}
        />
        <Precios
          precios={seguro.responsabilidadCivil}
          icono={<FaHands className="text-green-400" />}
          titulo={"Responsabilidad civil"}
        />
        <Precios
          precios={seguro.anulacion}
          icono={<MdCancel className="text-indigo-400" />}
          titulo={"Anulación"}
        />
        <Precios
          precios={seguro.reembolsoDeVacaciones}
          icono={<FaMoneyBillTransfer className="text-cyan-400" />}
          titulo={"Reembolso de vacaciones"}
        />
      </section>
      <aside className="w-full flex flex-col gap-10">
        <section className="p-3 shadow-lg hover:shadow-xl transition rounded-xl border-2 dark:tw-border-slate-700 dark:bg-slate-800 border-slate-100 pb-3">
          <Aside seguro={seguro} />
        </section>
      </aside>
    </div>
  );
}

export default Resultado;
