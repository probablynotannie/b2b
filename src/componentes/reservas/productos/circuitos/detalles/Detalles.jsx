import { useState } from "react";
import Itinerario from "./Itinerario";
import { Fotos } from "../../../estructura/SlideFotos";
import { FaInfoCircle } from "react-icons/fa";
import Incluye from "./Incluye";
function Detalles({ actividad, cesta }) {
  const [activeTab, setActiveTab] = useState("itinerario");

  const tabContent = {
    itinerario: (
      <div className="p-6 bg-slate-50 text-medium text-slate-500 dark:text-slate-400 dark:bg-slate-800 rounded-lg w-full">
        <Itinerario actividad={actividad} />
      </div>
    ),
    incluye: (
      <div className="p-6 bg-slate-50 text-medium text-slate-500 dark:text-slate-400 dark:bg-slate-800 rounded-lg w-full">
        <Incluye
          incluido={actividad.incluido}
          no_incluido={actividad.no_incluido}
        />
      </div>
    ),
    excursiones: (
      <div className="p-6 bg-slate-50 text-medium text-slate-500 dark:text-slate-400 dark:bg-slate-800 rounded-lg w-full">
        <Incluye
          incluido={actividad.excursiones_incluidos}
          no_incluido={actividad.excursiones_no_incluidos}
        />
      </div>
    ),
    notas: (
      <div className="p-6 bg-slate-50 text-medium text-slate-500 dark:text-slate-400 dark:bg-slate-800 rounded-lg w-full">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
          Notas
        </h3>
        <ul>
          {actividad.notas.map((nota, index) => (
            <li className="text-sm mt-5 flex gap-2 itesm-center" key={index}>
              <FaInfoCircle className="w-5 h-5 flex-shrink-0 text-orange-400" />
              {nota}
            </li>
          ))}
        </ul>
      </div>
    ),
  };

  return (
    <div>
      {!cesta && <Fotos fotos={actividad.imagenes} />}
      <div className="md:flex mt-9">
        <ul className="flex-column space-y-4 text-sm font-medium text-slate-500 dark:text-slate-400 md:me-4 mb-4 md:mb-0">
          {["itinerario", "incluye", "excursiones", "notas"].map((tab) => (
            <li key={tab}>
              <button
                onClick={() => setActiveTab(tab)}
                className={`inline-flex items-center px-4 py-3 rounded-lg w-full ${
                  activeTab === tab
                    ? "text-white tw-bg-secondary dark:tw-bg-secondary"
                    : "hover:text-slate-900 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 dark:hover:text-white"
                }`}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
        {tabContent[activeTab]}
      </div>
    </div>
  );
}
export default Detalles;
