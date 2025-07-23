import { FaMapMarked } from "react-icons/fa";
import { useState } from "react";
import { GiCruiser } from "react-icons/gi";
import Tarifas from "./tarifas/Tarifas";
import Pasajeros from "./tarifas/Pasajeros";
import Itinerario from "./Itinerario";
function Tabs({
  producto,
  pasajeros,
  setPasajeros,
  cruiseImage,
  precioSeleccionado,
  setPrecioSeleccionado,
}) {
  const [selectedTab, setSelectedTab] = useState("tarifas");

  return (
    <div>
      <article className="tw-mt-5 tw-rounded-xl tw-shadow">
        <div className="tw-flex tw-gap-5 tw-border-b-2 tw-border-slate-200 dark:tw-border-slate-700 tw-mt-5">
          <button
            className={`tw-p-3 tw-font-semibold tw-text-lg tw-flex tw-gap-2 tw-items-center ${
              selectedTab === "tarifas"
                ? "tw-border-b-4 tw-border-secondary tw-text-secondary"
                : "tw-text-gray-500 hover:tw-text-gray-800 dark:tw-text-gray-400 dark:hover:tw-text-gray-200"
            }`}
            onClick={() => setSelectedTab("tarifas")}
          >
            <GiCruiser className="tw-text-2xl" />
            Tarifas
          </button>
          <button
            className={`tw-p-3 tw-font-semibold tw-text-lg tw-flex tw-gap-2 tw-items-center ${
              selectedTab === "itinerario"
                ? "tw-border-b-4 tw-border-secondary tw-text-secondary"
                : "tw-text-gray-500 hover:tw-text-gray-800 dark:tw-text-gray-400 dark:hover:tw-text-gray-200"
            }`}
            onClick={() => setSelectedTab("itinerario")}
          >
            <FaMapMarked className="tw-text-lg" />
            Itinerario
          </button>
        </div>
        <section className="tw-p-5">
          {selectedTab === "tarifas" ? (
            <>
              <Pasajeros
                pasajeros={pasajeros}
                setPasajeros={setPasajeros}
                restringido={producto?.pax2ADRestrin}
              />
              <Tarifas
                producto={producto}
                cruiseImage={cruiseImage}
                tarifas={producto.tarifas ?? []}
                precioSeleccionado={precioSeleccionado}
                setPrecioSeleccionado={setPrecioSeleccionado}
              />
            </>
          ) : (
            <Itinerario producto={producto?.itin_dias ?? []} />
          )}
        </section>
      </article>
    </div>
  );
}

export default Tabs;
