import { useState } from "react";
import Itinerario from "./Itinerario";
import Imagenes from "../../../estructura/hoteles/Imgs";
import { FaCheck } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

function Detalles({ actividad }) {
  const [activeTab, setActiveTab] = useState("itinerario");

  const tabContent = {
    itinerario: (
      <div className="p-6 bg-slate-50 text-medium text-slate-500 dark:text-slate-400 dark:bg-slate-800 rounded-lg w-full">
        <Itinerario actividad={actividad} />
      </div>
    ),
    incluye: (
      <div className="p-6 bg-slate-50 text-medium text-slate-500 dark:text-slate-400 dark:bg-slate-800 rounded-lg w-full">
        <h3 className="text-lg font-bold text-green-600 dark:text-green-400 mb-2 flex items-center gap-2">
          <FaCheck className="text-sm" />
          Servicios incluidos en el precio
        </h3>
        <ul>
          {actividad.incluido.map((incluido, index) => (
            <li key={index}>{incluido}</li>
          ))}
        </ul>
        <div className="mt-2">
          <h3 className="text-lg font-bold text-red-600 dark:text-red-400 mb-2  flex items-center gap-2">
            <span className="text-red-500">X</span>
            Servicios no incluidos en el precio
          </h3>
          <ul>
            {actividad.no_incluido.map((incluido, index) => (
              <li key={index}>{incluido}</li>
            ))}
          </ul>
        </div>
      </div>
    ),
    excursiones: (
      <div className="p-6 bg-slate-50 text-medium text-slate-500 dark:text-slate-400 dark:bg-slate-800 rounded-lg w-full">
        <h3 className="text-lg font-bold text-green-600 dark:text-green-400 mb-2 flex items-center gap-2">
          <FaCheck className="text-sm" />
          Excursiones incluidos en el precio
        </h3>
        <ul>
          {actividad.excursiones_incluidos.map((incluido, index) => (
            <li key={index}>{incluido}</li>
          ))}
        </ul>
        <div className="mt-2">
          <h3 className="text-lg font-bold text-red-600 dark:text-red-400 mb-2  flex items-center gap-2">
            <span className="text-red-500">X</span>
            Excursiones no incluidos en el precio
          </h3>
          <ul>
            {actividad.excursiones_no_incluidos.map((incluido, index) => (
              <li key={index}>{incluido}</li>
            ))}
          </ul>
        </div>
      </div>
    ),
    notas: (
      <div className="p-6 bg-slate-50 text-medium text-slate-500 dark:text-slate-400 dark:bg-slate-800 rounded-lg w-full">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
          notas
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
      <div className="relative h-[30vh]  top-0">
        <img
          src={actividad.img}
          className="opacity-90 rounded h-full shadow mb-4 w-full object-cover"
          alt="Reserva ferry"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center p-4">
          <h4 className="text-white text-3xl font-semibold text-center">
            {actividad.titulo}
          </h4>
        </div>
      </div>
      <div className="md:flex mt-9">
        <ul className="flex-column space-y-4 text-sm font-medium text-slate-500 dark:text-slate-400 md:me-4 mb-4 md:mb-0">
          {["itinerario", "incluye", "excursiones", "notas"].map((tab) => (
            <li key={tab}>
              <button
                onClick={() => setActiveTab(tab)}
                className={`inline-flex items-center px-4 py-3 rounded-lg w-full ${
                  activeTab === tab
                    ? "text-white bg-secondary dark:bg-secondaryDark"
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
      <section className=" mt-5">
        <h4 className="font-bold mb-2">Imagenes</h4>

        <Imagenes imagenes={actividad.imagenes} />
      </section>
    </div>
  );
}

export default Detalles;
