import { useState, useEffect } from "react";
import Aside from "../hotel/filtros/Aside";
import Aside_Ferry from "../ferris/filtros/Aside";
import Hoteles from "../hotel/HotelMas";
import MasFerris from "./Ferris";
import Buscador from "../../../motores/buscadores/hotelmasferri/Buscador_hotelferry";
import { FaHotel } from "react-icons/fa";
import { FaShip } from "react-icons/fa";
import ferris from "./Ferris.json";
import hoteles from "./Hoteles.json";
import { BsFillBasket2Fill } from "react-icons/bs";
import Cesta from "./Cesta";
import PlaceHolder from "../../../../placeholders/listados/Hoteles";
import Cargando from "../../../../placeholders/listados/Cargando";
import Resultado from "../../../../helpers/Resultado";
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
  const [valuesFerris, setValuesFerris] = useState([0, 5000]);
  const [minMaxFerris, setMinMaxFerris] = useState([0, 5000]);
  return (
    <Resultado
      background={"url('/banners/banner_avion.webp')"}
      position={"center"}
      color={"tw-bg-blue-500/50"}
      buscador={<Buscador listado={true} />}
      aside={
        <>
          {activeTab === "Resultados" ? (
            <Aside values={values} setValues={setValues} minMax={minMax} />
          ) : (
            <Aside_Ferry
              values={valuesFerris}
              setValues={setValuesFerris}
              minMax={minMaxFerris}
            />
          )}
        </>
      }
      extraInfo={
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
      }
      wideContent={activeTab === "Cesta" && true}
      ocultarAside={activeTab === "Cesta" && true}
      listado={
        <>
          {activeTab === "Resultados" && (
            <>
              {loading ? (
                <>
                  <Cargando />
                  <PlaceHolder />
                </>
              ) : (
                <Hoteles
                  setActiveTab={setActiveTab}
                  tab={"Ferris"}
                  setHabitacion={setHabitacion}
                  hoteles={hoteles}
                  selectedHotel={selectedHotel}
                  setHotel={setHotel}
                />
              )}
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
        </>
      }
    />
  );
}
export default Productos;
