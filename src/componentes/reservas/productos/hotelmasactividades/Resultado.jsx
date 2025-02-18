import { useState, useEffect } from "react";
import Aside from "../hotel/filtros/Aside";
import Resultado from "../hotel/HotelMas";
import Entradas from "../tickets/TicketsMas";
import Buscador from "./Buscador";
import { FaHotel } from "react-icons/fa";
import { PiMaskHappyFill } from "react-icons/pi";
import Cesta from "./Cesta";
import entradas from "./Tickets.json";
import hoteles from "./Hoteles.json";
import { BsFillBasket2Fill } from "react-icons/bs";
import PlaceHolder from "../../estructura/skeleton_placeholders/Hoteles";
import { FaCheck } from "react-icons/fa";
function Productos() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  const [habitacion, setHabitacion] = useState();
  const [activeTab, setActiveTab] = useState("Resultados");
  const [selectedHotel, setHotel] = useState();
  const [actividades, setActividades] = useState([]);
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
        <div className="flex items-center space-x-4 mb-6 col-span-9 container mt-10">
          <div className="flex items-center relative">
            <button
              className={`px-4 py-2 border-b-2 flex items-center ${
                activeTab === "Resultados"
                  ? "border-secondary tw-text-secondary font-bold "
                  : " text-slate-700 dark:text-slate-200 border-none"
              }`}
              onClick={() => setActiveTab("Resultados")}
            >
              <FaHotel className="mr-1" /> Hoteles
            </button>
            {selectedHotel && (
              <FaCheck className="text-xs text-green-500 animate-bounce dark:tw-text-secondary absolute -top-1 left-5" />
            )}
          </div>
          <div className="flex items-center relative">
            <button
              className={`px-4 py-2 border-b-2 flex items-center ${
                activeTab === "actividades"
                  ? "border-secondary tw-text-secondary font-bold "
                  : " text-slate-700 dark:text-slate-200 border-none"
              }`}
              onClick={() => setActiveTab("actividades")}
            >
              <PiMaskHappyFill className="mr-1" /> Actividades
            </button>
            {actividades.length > 0 && (
              <FaCheck className="text-xs text-green-500 animate-bounce dark:tw-text-secondary absolute -top-1 left-5" />
            )}
          </div>
          <div className="flex items-center relative">
            {(selectedHotel || actividades.length > 0) && (
              <>
                <span className="-mt-1 ml-1 p-[10px] tw-bg-secondary rounded-full flex items-center justify-center text-white font-bold absolute top-0 left-2 text-xs  w-[2px] h-[2px]">
                  {selectedHotel ? 1 + actividades.length : actividades.length}
                </span>
              </>
            )}
            <button
              className={`px-4 py-2 border-b-2 flex items-center ${
                activeTab === "Cesta"
                  ? "border-secondary tw-text-secondary font-bold "
                  : " text-slate-700 dark:text-slate-200 border-none"
              }`}
              onClick={() => setActiveTab("Cesta")}
            >
              <BsFillBasket2Fill className="mr-1 text-lg" /> Cesta
            </button>
          </div>
        </div>
        <article className="grid grid-cols-9 lg:gap-8 xs:gap-28 container">
          {activeTab === "Resultados" && (
            <>
              <aside className="hidden lg:block col-span-9 lg:col-span-3 h-fit lg:sticky  top-5 lg:bg-slate-100 lg:dark:bg-slate-800 lg:border-2 border-slate-200  dark:border-slate-800 rounded-lg lg:shadow-xl hover:lg:shadow-2xl transition px-3 lg:p-3 lg:pb-10">
                <Aside />
              </aside>
              <section className="col-span-9 lg:col-span-6 p-3">
                {loading ? (
                  <PlaceHolder />
                ) : (
                  <Resultado
                    hoteles={hoteles}
                    selectedHotel={selectedHotel}
                    setHotel={setHotel}
                    setHabitacion={setHabitacion}
                  />
                )}
              </section>
            </>
          )}
        </article>
        <div className="container">
          {activeTab === "actividades" && (
            <Entradas
              tickets={entradas}
              actividades={actividades}
              setActividades={setActividades}
            />
          )}
        </div>
        <div className="container">
          {activeTab === "Cesta" && (
            <Cesta
              habitacion={habitacion}
              hotel={selectedHotel}
              actividades={actividades}
              reserva={reserva}
              setHotel={setHotel}
              setActividades={setActividades}
            />
          )}
        </div>
      </div>
    </main>
  );
}
export default Productos;
