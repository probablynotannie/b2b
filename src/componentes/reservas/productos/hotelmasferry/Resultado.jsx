import { useState, useEffect } from "react";
import Aside from "../hotel/filtros/Aside";
import Resultado from "../hotel/HotelMas";
import MasFerris from "./Ferris";
import Buscador from "./Buscador";
import { FaHotel } from "react-icons/fa";
import { FaShip } from "react-icons/fa";
import ferris from "./Ferris.json";
import hoteles from "./Hoteles.json";
import { BsFillBasket2Fill } from "react-icons/bs";
import Cesta from "./Cesta";
import PlaceHolder from "../../estructura/skeleton_placeholders/Hoteles";
import Cargando from "../../estructura/skeleton_placeholders/Cargando";
function Productos() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  const [activeTab, setActiveTab] = useState("Resultados");
  const [selectedHotel, setHotel] = useState();
  const [habitacion, setHabitacion] = useState();
  const [ida, setIda] = useState(null);
  const [vuelta, setVuelta] = useState(null);
  const [ferry, setFerry] = useState({});
  const reserva = {
    pax: 2,
    pax_ninios: 1,
    habitaciones: 2,
    noches: 7,
  };
  return (
    <main className=" flex justify-center flex-col items-center  mb-10">
      <div className="w-full">
        <div
          className="w-full bg-cover bg-center p-8 relative shadow-md"
          style={{
            backgroundImage: "url('/banner_avion.jpg')",
          }}
        >
          <div className="bg-indigo-300 dark:bg-black text-pink-600  tw-bg-opacity-55 dark:bg-opacity-45 absolute top-0 left-0 w-full h-full pointer-events-none"></div>
          <div className="flex">
            <div className="container relative">
              <Buscador />
            </div>
            <aside className="lg:hidden col-span-9 lg:col-span-3 h-fit lg:sticky top-5 lg:bg-slate-100 lg:dark:bg-slate-800 lg:border-2 border-slate-200  dark:tw-border-slate-800 rounded-lg lg:shadow-xl hover:lg:shadow-2xl transition px-3 lg:p-3 lg:pb-10">
              <Aside />
            </aside>
          </div>
        </div>
        <div className="flex space-x-4 mb-6 col-span-9 container mt-10">
          <button
            className={`px-4 py-2 border-b-2 flex items-center ${
              activeTab === "Resultados"
                ? "border-secondary tw-text-secondary font-bold "
                : " text-slate-700 dark:tw-text-slate-200 border-none"
            }`}
            onClick={() => setActiveTab("Resultados")}
          >
            <FaHotel className="mr-1" /> Resultados
          </button>
          <button
            className={`px-4 py-2 border-b-2 flex items-center ${
              activeTab === "Vuelos"
                ? "border-secondary tw-text-secondary font-bold "
                : " text-slate-700 dark:tw-text-slate-200 border-none"
            }`}
            onClick={() => setActiveTab("Vuelos")}
          >
            <FaShip className="mr-1" /> Cambiar Ferry
          </button>
          <button
            className={`px-4 py-2 border-b-2 flex items-center ${
              activeTab === "Cesta"
                ? "border-secondary tw-text-secondary font-bold "
                : " text-slate-700 dark:tw-text-slate-200 border-none"
            }`}
            onClick={() => setActiveTab("Cesta")}
          >
            <BsFillBasket2Fill className="mr-1" /> Cesta
          </button>
        </div>
        <article className="grid grid-cols-9 lg:gap-8 xs:gap-28 container">
          {activeTab === "Resultados" && (
            <>
              <aside className="hidden lg:block col-span-9 lg:col-span-3 h-fit lg:sticky  top-5 lg:bg-slate-100 lg:dark:bg-slate-800 lg:border-2 border-slate-200  dark:tw-border-slate-800 rounded-lg lg:shadow-xl hover:lg:shadow-2xl transition px-3 lg:p-3 lg:pb-10">
                <Aside />
              </aside>
              <section className="col-span-9 lg:col-span-6 p-3">
                {loading ? (
                  <>
                    <Cargando />
                    <PlaceHolder />
                  </>
                ) : (
                  <Resultado
                    setHabitacion={setHabitacion}
                    hoteles={hoteles}
                    selectedHotel={selectedHotel}
                    setHotel={setHotel}
                  />
                )}
              </section>
            </>
          )}
          {activeTab === "Vuelos" && (
            <MasFerris
              seleccion={true}
              ferris={ferris}
              ferry={ferry}
              setFerry={setFerry}
              ida={ida}
              setIda={setIda}
              vuelta={vuelta}
              setVuelta={setVuelta}
            />
          )}
          {activeTab === "Cesta" && (
            <Cesta
              habitacion={habitacion}
              ferry={ferry}
              hotel={selectedHotel}
              reserva={reserva}
              setHotel={setHotel}
            />
          )}
        </article>
      </div>
    </main>
  );
}
export default Productos;
