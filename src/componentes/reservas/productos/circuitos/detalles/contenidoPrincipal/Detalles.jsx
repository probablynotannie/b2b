import { useState } from "react";
import Itinerario from "./Itinerario";
import { Fotos } from "../../../../estructura/SlideFotos";
import { FaInfoCircle } from "react-icons/fa";
import Incluye from "./Incluye";
function Detalles({ actividad, cesta }) {
  const [activeTab, setActiveTab] = useState("itinerario");

  const tabContent = {
    itinerario: (
      <div className="tw-p-6 tw-bg-slate-50 text-medium tw-text-slate-500 dark:tw-text-slate-400 dark:tw-bg-slate-800 tw-rounded-lg tw-w-full">
        <Itinerario actividad={actividad} />
      </div>
    ),
    incluye: (
      <div className="tw-p-6 tw-bg-slate-50 text-medium tw-text-slate-500 dark:tw-text-slate-400 dark:tw-bg-slate-800 tw-rounded-lg tw-w-full">
        <Incluye
          incluido={actividad.incluido}
          no_incluido={actividad.no_incluido}
        />
      </div>
    ),
    excursiones: (
      <div className="tw-p-6 tw-bg-slate-50 text-medium tw-text-slate-500 dark:tw-text-slate-400 dark:tw-bg-slate-800 tw-rounded-lg tw-w-full">
        <Incluye
          incluido={actividad.excursiones_incluidos}
          no_incluido={actividad.excursiones_no_incluidos}
        />
      </div>
    ),
    notas: (
      <div className="tw-p-6 tw-bg-slate-50 text-medium tw-text-slate-500 dark:tw-text-slate-400 dark:tw-bg-slate-800 tw-rounded-lg tw-w-full">
        <h3 className="tw-text-lg tw-font-bold tw-text-slate-900 dark:tw-text-white tw-mb-2">
          Notas
        </h3>
        <ul>
          {actividad.notas.map((nota, index) => (
            <li
              className="tw-text-sm tw-mt-5 tw-flex tw-gap-2 itesm-center"
              key={index}
            >
              <FaInfoCircle className="tw-w-5 tw-h-5 tw-flex-shrink-0 tw-text-orange-400" />
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
      <div className="md:tw-flex tw-mt-9">
        <ul className="tw-flex-column tw-space-y-4 tw-text-sm tw-font-medium tw-text-slate-500 dark:tw-text-slate-400 md:tw-me-4 tw-mb-4 md:tw-mb-0">
          {["itinerario", "incluye", "excursiones", "notas"].map((tab) => (
            <li key={tab}>
              <button
                onClick={() => setActiveTab(tab)}
                className={`tw-inline-flex tw-items-center tw-px-4 tw-py-3 tw-rounded-lg tw-w-full ${
                  activeTab === tab
                    ? "tw-text-white tw-bg-secondary dark:tw-bg-secondaryDark"
                    : "hover:tw-text-slate-700 dark:hover:tw-text-slate-300 tw-bg-slate-50 hover:bg-slate-100 dark:tw-bg-slate-800 dark:tw-hover:bg-slate-700 dark:tw-hover:text-white"
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
