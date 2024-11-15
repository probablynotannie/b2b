import { useState } from "react";
import Aside from "./filtros/Aside";
import Resultado from "./Resultado";
import Vuelos from "./vuelos/VueloSeleccionados";
import MasVUelos from "./vuelos/Vuelos";
import Buscador from "./filtros/Buscador";

function Productos() {
  // State to track the active component
  const [activeTab, setActiveTab] = useState("Hoteles");

  return (
    <main className="flex justify-center flex-col items-center container my-10">
      <div className="w-full">
        {/* Tab buttons */}
        <div className="flex space-x-4 mb-6">
          <button
            className={`px-4 py-2 border-b-2 ${
              activeTab === "Hoteles"
                ? "border-secondary text-secondary font-bold "
                : " text-slate-700 dark:text-slate-200 border-none"
            }`}
            onClick={() => setActiveTab("Hoteles")}
          >
            Hoteles
          </button>
          <button
            className={`px-4 py-2 border-b-2 ${
              activeTab === "Vuelos"
                ? "border-secondary text-secondary font-bold "
                : " text-slate-700 dark:text-slate-200 border-none"
            }`}
            onClick={() => setActiveTab("Vuelos")}
          >
            Cambiar Vuelos
          </button>
        </div>

        {/* Conditionally render content based on the activeTab value */}
        {activeTab === "Hoteles" && (
          <article className="grid grid-cols-9 lg:gap-24 xs:gap-28">
            <div className="col-span-7 md:col-span-8 lg:col-span-9 mx-3 md:mx-0">
              <Buscador />
            </div>
            <aside className="col-span-1 lg:col-span-3 lg:bg-slate-100 lg:dark:bg-slate-800 lg:border-2 border-slate-200 dark:border-slate-800 rounded-lg lg:shadow-xl hover:lg:shadow-2xl transition px-3 lg:p-3 lg:pb-10">
              <Aside />
            </aside>
            <section className="col-span-9 lg:col-span-6 p-3">
              <Vuelos />
              <Resultado />
            </section>
          </article>
        )}

        {activeTab === "Vuelos" && (
          <div>
            <MasVUelos />
          </div>
        )}
      </div>
    </main>
  );
}

export default Productos;
