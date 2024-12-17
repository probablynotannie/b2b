import { useState, useEffect } from "react";
import Aside from "../hotel/filtros/Aside";
import Resultado from "../hotel/Hoteles";
import MasFerris from "./Ferris";
import Ferrys from "./FerrySeleccionado";
import Buscador from "./Buscador";
import { FaHotel } from "react-icons/fa";
import { FaShip } from "react-icons/fa";
import ferris from "./Ferris.json";
import hoteles from "./Hoteles.json";
function Productos() {
  const [activeTab, setActiveTab] = useState("Resultados");
  const [ida, setIda] = useState(null);
  const [vuelta, setVuelta] = useState(null);
  useEffect(() => {
    if (ferris.length > 0) {
      let cheapestSet = null;
      let minTotalPrice = Infinity;
      ferris.forEach((ferrySet) => {
        const minIda = ferrySet.ida.precios.reduce((min, option) =>
          option.precio < min.precio ? option : min
        );
        const minVuelta = ferrySet.vuelta
          ? ferrySet.vuelta.precios.reduce((min, option) =>
              option.precio < min.precio ? option : min
            )
          : null;
        const totalPrice = minIda.precio + (minVuelta ? minVuelta.precio : 0);
        if (totalPrice < minTotalPrice) {
          cheapestSet = {
            id: ferrySet.id,
            ida: minIda,
            vuelta: minVuelta,
          };
          minTotalPrice = totalPrice;
        }
      });

      if (cheapestSet) {
        setIda({ ferryId: cheapestSet.id, ...cheapestSet.ida });
        if (cheapestSet.vuelta) {
          setVuelta({ ferryId: cheapestSet.id, ...cheapestSet.vuelta });
        } else {
          setVuelta(null);
        }
      }
    }
  }, [ferris]);

  return (
    <main className=" flex justify-center flex-col items-center  mb-10">
      <div className="w-full">
        <div
          className="w-full bg-cover bg-center p-8 relative shadow-md"
          style={{
            backgroundImage: "url('/banner_avion.jpg')",
          }}
        >
          <div className="bg-indigo-300 dark:bg-black text-pink-600 bg-opacity-55 dark:bg-opacity-45 absolute top-0 left-0 w-full h-full pointer-events-none"></div>
          <div className="flex">
            <div className="container relative">
              <Buscador />
            </div>
            <aside className="lg:hidden col-span-9 lg:col-span-3 h-fit lg:sticky top-5 lg:bg-slate-100 lg:dark:bg-slate-800 lg:border-2 border-slate-200  dark:border-slate-800 rounded-lg lg:shadow-xl hover:lg:shadow-2xl transition px-3 lg:p-3 lg:pb-10">
              <Aside />
            </aside>
          </div>
        </div>
        <div className="flex space-x-4 mb-6 col-span-9 container mt-10">
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
            <FaShip className="mr-1" /> Cambiar Ferry
          </button>
        </div>
        <article className="grid grid-cols-9 lg:gap-8 xs:gap-28 container">
          {activeTab === "Resultados" && (
            <>
              <aside className="hidden lg:block col-span-9 lg:col-span-3 h-fit lg:sticky  top-5 lg:bg-slate-100 lg:dark:bg-slate-800 lg:border-2 border-slate-200  dark:border-slate-800 rounded-lg lg:shadow-xl hover:lg:shadow-2xl transition px-3 lg:p-3 lg:pb-10">
                <Aside />
              </aside>
              <section className="col-span-9 lg:col-span-6 p-3">
                <Ferrys ida={ida} vuelta={vuelta} />
                <Resultado hoteles={hoteles} />
              </section>
            </>
          )}
          {activeTab === "Vuelos" && (
            <MasFerris
              ferris={ferris}
              ida={ida}
              setIda={setIda}
              vuelta={vuelta}
              setVuelta={setVuelta}
            />
          )}
        </article>
      </div>
    </main>
  );
}
export default Productos;
