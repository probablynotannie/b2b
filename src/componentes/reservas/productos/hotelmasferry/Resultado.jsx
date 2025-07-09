import { useState, useEffect } from "react";
import Aside from "../hotel/filtros/Aside";
import Resultado from "../hotel/HotelMas";
import MasFerris from "./Ferris";
import Buscador from "../../../motores/buscadores/hotelmasferri/Buscador_hotelferry";
import { FaHotel } from "react-icons/fa";
import { FaShip } from "react-icons/fa";
import ferris from "./Ferris.json";
import hoteles from "./Hoteles.json";
import { BsFillBasket2Fill } from "react-icons/bs";
import Cesta from "./Cesta";
import PlaceHolder from "../../estructura/skeleton_placeholders_listado/Hoteles";
import Cargando from "../../estructura/skeleton_placeholders_listado/Cargando";
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
  const [values, setValues] = useState([0, 5000]);
  const [minMax, setMinMax] = useState([0, 5000]);
  return (
    <main className="tw-flex tw-justify-center tw-flex-col tw-items-center tw-mb-20">
      <div className="tw-w-full">
        <div
          className="tw-w-full tw-bg-cover tw-bg-center tw-p-8 tw-relative tw-shadow-md"
          style={{
            backgroundImage: "url('/banners/banner_avion.webp')",
          }}
        >
          <div className="tw-bg-indigo-300 dark:tw-bg-black tw-text-pink-600 tw-bg-opacity-55 dark:tw-bg-opacity-45 tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-pointer-events-none"></div>
          <div className="tw-flex">
            <div className="tw-container tw-relative">
              <Buscador listado={true} />
            </div>
            <aside className="lg:tw-hidden tw-col-span-9 lg:tw-col-span-3 tw-h-fit lg:tw-sticky tw-top-5 lg:tw-bg-slate-100 lg:dark:tw-bg-slate-800 lg:tw-border-2 tw-border-slate-200 dark:tw-border-slate-800 tw-rounded-lg lg:tw-shadow-xl hover:lg:tw-shadow-2xl tw-transition tw-px-3 lg:tw-p-3 lg:tw-pb-10">
              <Aside values={values} setValues={setValues} minMax={minMax} />
            </aside>
          </div>
        </div>
        <div className="tw-flex tw-space-x-4 tw-mb-6 tw-col-span-9 tw-container tw-mt-10">
          <button
            className={`tw-px-4 tw-py-2 tw-border-b-2 tw-flex tw-items-center ${
              activeTab === "Resultados"
                ? "tw-border-secondary tw-text-secondary tw-font-bold "
                : " tw-text-slate-700 dark:tw-text-slate-200 tw-border-none"
            }`}
            onClick={() => setActiveTab("Resultados")}
          >
            <FaHotel className="tw-mr-1" /> Resultados
          </button>
          <button
            className={`tw-px-4 tw-py-2 tw-border-b-2 tw-flex tw-items-center ${
              activeTab === "Ferris"
                ? "tw-border-secondary tw-text-secondary tw-font-bold "
                : " tw-text-slate-700 dark:tw-text-slate-200 tw-border-none"
            }`}
            onClick={() => setActiveTab("Ferris")}
          >
            <FaShip className="tw-mr-1" /> Cambiar Ferry
          </button>
          <button
            className={`tw-px-4 tw-py-2 tw-border-b-2 tw-flex tw-items-center ${
              activeTab === "Cesta"
                ? "tw-border-secondary tw-text-secondary tw-font-bold "
                : " tw-text-slate-700 dark:tw-text-slate-200 tw-border-none"
            }`}
            onClick={() => setActiveTab("Cesta")}
          >
            <BsFillBasket2Fill className="tw-mr-1" /> Cesta
          </button>
        </div>
        <article className="tw-grid tw-grid-cols-9 lg:tw-gap-8 xs:gap-28 tw-container">
          {activeTab === "Resultados" && (
            <>
              <aside className="tw-hidden lg:tw-block tw-col-span-9 lg:tw-col-span-3 tw-h-fit lg:tw-sticky tw-top-5 lg:tw-bg-slate-100 lg:dark:tw-bg-slate-800 lg:tw-border-2 tw-border-slate-200 dark:tw-border-slate-800 tw-rounded-lg lg:tw-shadow-xl hover:lg:tw-shadow-2xl tw-transition tw-px-3 lg:tw-p-3 lg:tw-pb-10">
                <Aside values={values} setValues={setValues} minMax={minMax} />
              </aside>
              <section className="tw-col-span-9 lg:tw-col-span-6 tw-p-3">
                {loading ? (
                  <>
                    <Cargando />
                    <PlaceHolder />
                  </>
                ) : (
                  <Resultado
                    setActiveTab={setActiveTab}
                    tab={"Ferris"}
                    setHabitacion={setHabitacion}
                    hoteles={hoteles}
                    selectedHotel={selectedHotel}
                    setHotel={setHotel}
                  />
                )}
              </section>
            </>
          )}
          {activeTab === "Ferris" && (
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
