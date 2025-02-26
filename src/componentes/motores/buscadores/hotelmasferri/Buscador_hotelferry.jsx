import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Input_Destinos from "../../../inputs/Pais_Ciudad";
import {
  FaGlobeAfrica,
  FaGlobeAsia,
  FaGlobeEurope,
  FaGlobeAmericas,
} from "react-icons/fa";
import Input_Vehiculos from "../../../inputs/Vehiculos";
import Input_Bonificaciones from "../../../inputs/Bonificacion";
import Input_DateRange from "../../../inputs/DateRange";
import { useNavigate } from "react-router-dom";

function Buscador_Destinos() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedContinent, setSelectedContinent] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [vehiculos, setNumVehiculos] = useState(0);
  const [tipoVehiculo, setTipoVehiculo] = useState("");
  const [remolque, setRemolque] = useState("0");
  const [longitud, setLongitud] = useState(0);
  const [longitudRemolque, setLongitudRemolque] = useState(0);
  const [alturaRemolque, setAlturaRemolque] = useState(0);
  const [altura, setAltura] = useState(0);
  const [ages, setAges] = useState({});
  const [pasajeros, setPasajeros] = useState(1);
  const continents = [
    { name: "Africa", shortName: "AF", flag: <FaGlobeAfrica /> },
    { name: "América", shortName: "AM", flag: <FaGlobeAmericas /> },
    { name: "Asia", shortName: "AS", flag: <FaGlobeAsia /> },
    { name: "Europa", shortName: "EU", flag: <FaGlobeEurope /> },
    { name: "Oceanía", shortName: "OC", flag: <FaGlobeEurope /> },
    {
      name: "Haiku",
      shortName: "HK",
      flag: <img src="../../logo.png" alt="logo" className="tw-w-5 tw-h-4" />,
    },
  ];
  const regions = {
    AF: ["Nigeria", "Africa", "Egipto"],
    AM: ["USA", "Canada", "Mexico"],
    AS: ["China", "Japón", "India"],
    EU: ["Alemania", "Francia", "Italia"],
    OC: ["Australia", "Fiji"],
    HK: ["Hola", "Haiku", "Vuela"],
  };
  const handleSubmit = () => {
    const newRequestData = {
      destination: 0,
    };
    navigate("/listadoTickets", { state: { newRequestData } });
  };
  return (
    <>
      <div className="tw-w-full sm:tw-hidden">
        <button
          onClick={() => setIsModalOpen(true)}
          className="tw-relative tw-border-2 tw-shadow-xl dark:tw-border-slate-700 tw-bg-white lg:tw-hidden dark:tw-bg-slate-800 dark:tw-placeholder-slate-400 dark:tw-text-white dark:tw-focus:ring-slate-600 dark:tw-focus:border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-3 tw-pl-10 tw-w-full tw-cursor-pointer"
        >
          Cambiar busqueda
          <span className="tw-absolute dark:tw-bg-slate-800 dark:tw-border-slate-800 dark:tw-border-y-2 dark:tw-border-l-2 tw-top-0 tw-left-0 tw-pointer-events-none tw-bg-inputIcon tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
            <FaSearch />
          </span>
        </button>
      </div>
      {isModalOpen && (
        <div className="tw-fixed  tw-inset-0 tw-bg-black tw-bg-opacity-50 tw-flex tw-justify-center tw-items-center tw-z-50">
          <div className="tw-bg-white tw-rounded-lg  tw-relative  dark:tw-bg-slate-800 tw-min-h-[100vh] tw-w-[100vw]">
            <div className="tw-flex tw-justify-between tw-items-center tw-mb-4 tw-bg-primary dark:tw-bg-slate-900 tw-p-5">
              <h2 className="tw-text-xl tw-font-bold tw-text-white">
                Buscador
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="tw-text-xl tw-text-white"
              >
                &times;
              </button>
            </div>
            <div className="tw-p-3">
              <form>
                <div className="tw-space-y-2">
                  <div className="tw-col-span-2 lg:tw-col-span-2">
                    <Input_DateRange
                      startDate={startDate}
                      endDate={endDate}
                      setStartDate={setStartDate}
                      setEndDate={setEndDate}
                    />
                  </div>
                  <div className="tw-col-span-2 lg:tw-col-span-1">
                    <Input_Bonificaciones
                      ages={ages}
                      setAges={setAges}
                      pasajeros={pasajeros}
                      setPasajeros={setPasajeros}
                    />
                  </div>
                  <div className="tw-col-span-2 lg:tw-col-span-1">
                    <Input_Vehiculos
                      vehiculos={vehiculos}
                      setNumVehiculos={setNumVehiculos}
                      tipoVehiculo={tipoVehiculo}
                      setTipoVehiculo={setTipoVehiculo}
                      remolque={remolque}
                      setRemolque={setRemolque}
                      longitud={longitud}
                      setLongitud={setLongitud}
                      altura={altura}
                      setAltura={setAltura}
                      longitudRemolque={longitudRemolque}
                      setLongitudRemolque={setLongitudRemolque}
                      alturaRemolque={alturaRemolque}
                      setAlturaRemolque={setAlturaRemolque}
                    />
                  </div>
                  <div className="tw-col-span-2 lg:tw-col-span-2">
                    <Input_Destinos
                      continents={continents}
                      regions={regions}
                      setSelectedContinent={setSelectedContinent}
                      selectedContinent={selectedContinent}
                      selectedRegion={selectedRegion}
                      setSelectedRegion={setSelectedRegion}
                    />
                  </div>
                </div>
                <button
                  onClick={() => {
                    handleSubmit();
                    setIsModalOpen(false);
                  }}
                  className="tw-bg-primary tw-w-full tw-mt-3 dark:tw-bg-slate-900 tw-flex tw-justify-center tw-items-center tw-h-full tw-p-3 tw-px-10 tw-rounded-lg tw-shadow"
                >
                  <FaSearch className="tw-text-white tw-text-xl" />
                </button>
              </form>
              <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-col-span-12">
                <button
                  className="tw-text-2xl tw-rounded-full tw-w-[50px] tw-h-[50px] tw-border-2 tw-mt-10 tw-text-slate-300 tw-border-slate-300 dark:tw-border-slate-600"
                  onClick={() => setIsModalOpen(false)}
                >
                  X
                </button>
                <span className="tw-text-slate-400">Cerrar</span>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="tw-hidden sm:tw-flex tw-w-full tw-bg-white dark:tw-bg-slate-900 tw-bg-opacity-80 dark:tw-bg-opacity-75 tw-rounded tw-p-4 tw-pb-10 tw-flex-col tw-items-center tw-justify-center tw-h-fit">
        <form className="tw-w-full">
          <h2 className="tw-text-3xl tw-font-bold dark:tw-text-white">
            Buscador de Hotel + Ferry
          </h2>
          <div className="tw-grid tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-4 tw-mt-4">
            <Input_DateRange
              startDate={startDate}
              endDate={endDate}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
            />
            <Input_Bonificaciones
              ages={ages}
              setAges={setAges}
              pasajeros={pasajeros}
              setPasajeros={setPasajeros}
            />
            <Input_Vehiculos
              vehiculos={vehiculos}
              setNumVehiculos={setNumVehiculos}
              tipoVehiculo={tipoVehiculo}
              setTipoVehiculo={setTipoVehiculo}
              remolque={remolque}
              setRemolque={setRemolque}
              longitud={longitud}
              setLongitud={setLongitud}
              altura={altura}
              setAltura={setAltura}
              longitudRemolque={longitudRemolque}
              setLongitudRemolque={setLongitudRemolque}
              alturaRemolque={alturaRemolque}
              setAlturaRemolque={setAlturaRemolque}
            />

            <Input_Destinos
              continents={continents}
              regions={regions}
              setSelectedContinent={setSelectedContinent}
              selectedContinent={selectedContinent}
              selectedRegion={selectedRegion}
              setSelectedRegion={setSelectedRegion}
            />
          </div>
          <button
            type="button"
            className="tw-absolute tw--bottom-3 lg:tw--bottom-7 tw-right-10 lg:tw-right-5 tw-px-8 tw-bg-secondary tw-p-3 tw-font-bold tw-rounded-lg tw-text-white"
            onClick={handleSubmit}
          >
            Buscar
          </button>
        </form>
      </div>
    </>
  );
}

export default Buscador_Destinos;
