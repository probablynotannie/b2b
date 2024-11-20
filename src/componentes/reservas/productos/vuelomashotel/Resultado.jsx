import { useState } from "react";
import Aside from "./filtros/Aside";
import Resultado from "./Hoteles";
import Vuelos from "./vuelos/VueloSeleccionados";
import MasVUelos from "./vuelos/Vuelos";
import Buscador from "./filtros/Buscador";
import { FaHotel } from "react-icons/fa";
import { FaPlane } from "react-icons/fa";

function Productos() {
  // State to track the active component
  const [activeTab, setActiveTab] = useState("Resultados");

  return (
    <main className="flex justify-center flex-col items-center container my-10">
      <div className="w-full">
        <article className="grid grid-cols-9 lg:gap-8 xs:gap-28">
          <div className="col-span-7 md:col-span-8 lg:col-span-9 mx-3 md:mx-0">
            <Buscador />
          </div>
          {/* Tab buttons */}
          <div className="flex space-x-4 mb-6 col-span-9">
            <button
              className={`px-4 py-2 border-b-2 flex items-center ${
                activeTab === "Resultados"
                  ? "border-secondary text-secondary font-bold "
                  : " text-slate-700 dark:text-slate-200 border-none"
              }`}
              onClick={() => setActiveTab("Resultados")}
            >
              <FaHotel className="mr-1" /> Resultados
            </button>
            <button
              className={`px-4 py-2 border-b-2 flex items-center ${
                activeTab === "Vuelos"
                  ? "border-secondary text-secondary font-bold "
                  : " text-slate-700 dark:text-slate-200 border-none"
              }`}
              onClick={() => setActiveTab("Vuelos")}
            >
              <FaPlane className="mr-1" /> Cambiar Vuelos
            </button>
          </div>
          {activeTab === "Resultados" && (
            <>
              <aside className="col-span-1 lg:col-span-3 lg:bg-slate-100 lg:dark:bg-slate-800 lg:border-2 border-slate-200 dark:border-slate-800 rounded-lg lg:shadow-xl hover:lg:shadow-2xl transition px-3 lg:p-3 lg:pb-10">
                <Aside />
              </aside>
              <section className="col-span-9 lg:col-span-6 p-3">
                <Vuelos />
                <Resultado />
              </section>
            </>
          )}

          {activeTab === "Vuelos" && (
            <>
              <MasVUelos />
            </>
          )}
        </article>
      </div>
    </main>
  );
}

export default Productos;
