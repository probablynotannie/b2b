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
  const [values, setValues] = useState([0, 5000]);
  const [minMax, setMinMax] = useState([0, 5000]);
  return (
    <main className="tw-flex tw-justify-center tw-flex-col tw-items-center tw-mb-10">
      <div className="tw-w-full">
        <div
          className="tw-w-full tw-bg-cover tw-bg-center tw-p-8 tw-relative tw-shadow-md"
          style={{
            backgroundImage: "url('/banner_avion.jpg')",
          }}
        >
          <div className="tw-bg-indigo-300 dark:tw-bg-black tw-text-pink-600 tw-bg-opacity-55 dark:bg-opacity-45 tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-pointer-events-none"></div>
          <div className="tw-flex">
            <div className="tw-container tw-relative">
              <Buscador />
            </div>
            <aside className="lg:tw-hidden tw-col-span-9 lg:tw-col-span-3 tw-h-fit lg:tw-sticky tw-top-5 lg:tw-bg-slate-100 lg:dark:tw-bg-slate-800 lg:tw-border-2 tw-border-slate-200 dark:tw-border-slate-800 tw-rounded-lg lg:tw-shadow-xl hover:lg:tw-shadow-2xl tw-transition tw-px-3 lg:tw-p-3 lg:tw-pb-10">
              <Aside values={values} setValues={setValues} minMax={minMax} />
            </aside>
          </div>
        </div>
        <div className="tw-flex tw-items-center tw-space-x-4 tw-mb-6 tw-col-span-9 tw-container tw-mt-10">
          <div className="tw-flex tw-items-center tw-relative">
            <button
              className={`tw-px-4 tw-py-2 tw-border-b-2 tw-flex tw-items-center ${
                activeTab === "Resultados"
                  ? "tw-border-secondary tw-text-secondary tw-font-bold "
                  : "tw-text-slate-700 dark:tw-text-slate-200 tw-border-none"
              }`}
              onClick={() => setActiveTab("Resultados")}
            >
              <FaHotel className="tw-mr-1" /> Hoteles
            </button>
            {selectedHotel && (
              <FaCheck className="tw-text-xs tw-text-green-500 tw-animate-bounce dark:tw-text-secondary tw-absolute -tw-top-1 tw-left-5" />
            )}
          </div>
          <div className="tw-flex tw-items-center tw-relative">
            <button
              className={`tw-px-4 tw-py-2 tw-border-b-2 tw-flex tw-items-center ${
                activeTab === "actividades"
                  ? "tw-border-secondary tw-text-secondary font-bold"
                  : "tw-text-slate-700 dark:tw-text-slate-200 tw-border-none"
              }`}
              onClick={() => setActiveTab("actividades")}
            >
              <PiMaskHappyFill className="tw-mr-1" /> Actividades
            </button>
            {actividades.length > 0 && (
              <FaCheck className="tw-text-xs tw-text-green-500 tw-animate-bounce dark:tw-text-secondary tw-absolute -tw-top-1 tw-left-5" />
            )}
          </div>
          <div className="tw-flex tw-items-center tw-relative">
            {(selectedHotel || actividades.length > 0) && (
              <>
                <span className="-tw-mt-1 tw-ml-1 tw-p-[10px] tw-bg-secondary tw-rounded-full tw-flex tw-items-center tw-justify-center tw-text-white tw-font-bold tw-absolute tw-top-0 tw-left-2 tw-text-xs tw-w-[2px] tw-h-[2px]">
                  {selectedHotel ? 1 + actividades.length : actividades.length}
                </span>
              </>
            )}
            <button
              className={`tw-px-4 tw-py-2 tw-border-b-2 tw-flex tw-items-center ${
                activeTab === "Cesta"
                  ? "tw-border-secondary tw-text-secondary tw-font-bold "
                  : "tw-text-slate-700 dark:tw-text-slate-200 tw-border-none"
              }`}
              onClick={() => setActiveTab("Cesta")}
            >
              <BsFillBasket2Fill className="tw-mr-1 tw-text-lg" /> Cesta
            </button>
          </div>
        </div>
        <article className="tw-grid tw-grid-cols-9 lg:tw-gap-8 xs:gap-28 tw-container">
          {activeTab === "Resultados" && (
            <>
              <aside className="tw-hidden lg:tw-block tw-col-span-9 lg:tw-col-span-3 tw-h-fit lg:tw-sticky tw-top-5 lg:tw-bg-slate-100 lg:dark:tw-bg-slate-800 lg:tw-border-2 tw-border-slate-200 dark:tw-border-slate-800 tw-rounded-lg lg:tw-shadow-xl hover:lg:tw-shadow-2xl tw-transition tw-px-3 lg:tw-p-3 lg:tw-pb-10">
                <Aside values={values} setValues={setValues} minMax={minMax} />
              </aside>
              <section className="tw-col-span-9 lg:tw-col-span-6 tw-p-3">
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
        <div className="tw-container">
          {activeTab === "actividades" && (
            <Entradas
              tickets={entradas}
              actividades={actividades}
              setActividades={setActividades}
            />
          )}
        </div>
        <div className="tw-container">
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
