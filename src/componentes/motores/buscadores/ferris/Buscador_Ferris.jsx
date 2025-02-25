import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Input_Select from "../../../inputs/Select";
import Input_Fecha from "../../../inputs/Fecha";
import Input_DateRange from "../../../inputs/DateRange";
import Input_Vehiculos from "../../../inputs/Vehiculos";
import Input_Bonificacion from "../../../inputs/Bonificacion";
import { useNavigate } from "react-router-dom";

function Buscador_Destinos() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viaje, setViaje] = useState("ida");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [vehiculos, setNumVehiculos] = useState(0);
  const [tipoVehiculo, setTipoVehiculo] = useState("");
  const [remolque, setRemolque] = useState("0");
  const [longitud, setLongitud] = useState(0);
  const [altura, setAltura] = useState(0);
  const [longitudRemolque, setLongitudRemolque] = useState(0);
  const [alturaRemolque, setAlturaRemolque] = useState(0);
  const [ages, setAges] = useState({});
  const [pasajeros, setPasajeros] = useState(1);

  const handleviajeChange = (type) => {
    setViaje(type);
  };
  const [fecha, setFecha] = useState(null);
  const handleSubmit = () => {
    const newRequestData = {
      destination: 0,
    };
    navigate("/listadoFerris", { state: { newRequestData } });
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
        <div className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-50 tw-flex tw-justify-center tw-items-center tw-z-50">
          <div className="tw-bg-white tw-rounded-lg tw-p-6 tw-relative tw-w-[90%] tw-max-w-md dark:tw-bg-slate-700">
            <button
              className="tw-absolute tw-top-3 tw-right-3 tw-text-gray-600 dark:tw-text-gray-300"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>
            <form>
              <h2 className="tw-text-xl tw-font-bold dark:tw-text-white tw-mb-4">
                Buscador de Ferris
              </h2>
              <div className="grid grid-cols-2 gap-3 mt-2 text-sm tw-mb-5">
                <button
                  type="button"
                  className={`p-2.5 rounded-lg font-bold tw-text-white ${
                    viaje === "ida"
                      ? "tw-bg-secondary"
                      : "bg-gray-400 dark:bg-slate-600"
                  }`}
                  onClick={() => handleviajeChange("ida")}
                >
                  Solo ida
                </button>
                <button
                  type="button"
                  className={`p-2 rounded-lg font-bold tw-text-white ${
                    viaje === "ida_vuelta"
                      ? "tw-bg-secondary"
                      : "bg-gray-400 dark:bg-slate-600"
                  }`}
                  onClick={() => handleviajeChange("ida_vuelta")}
                >
                  Ida y vuelta
                </button>
              </div>
              <div className="tw-space-y-2">
                <Input_Select placeholder={"Origen"} />
                <Input_Select placeholder={"Destino"} />
                {viaje === "ida" ? (
                  <Input_Fecha fecha={fecha} setFecha={setFecha} />
                ) : (
                  <Input_DateRange
                    startDate={startDate}
                    endDate={endDate}
                    setStartDate={setStartDate}
                    setEndDate={setEndDate}
                  />
                )}
                <Input_Bonificacion
                  ages={ages}
                  setAges={setAges}
                  pasajeros={pasajeros}
                  setPasajeros={setPasajeros}
                />
                <div>
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
              </div>
              <button
                type="button"
                className="tw-w-full tw-mt-4 tw-bg-secondary tw-text-white tw-font-bold tw-p-3 tw-rounded-lg"
                onClick={() => {
                  handleSubmit();
                  setIsModalOpen(false);
                }}
              >
                Buscar
              </button>
            </form>
          </div>
        </div>
      )}
      <div className="tw-hidden sm:tw-flex tw-w-full tw-bg-white dark:tw-bg-slate-900 tw-bg-opacity-80 dark:tw-bg-opacity-75 tw-rounded tw-p-4 tw-pb-10 tw-flex-col tw-items-center tw-justify-center tw-h-fit">
        <form className="tw-w-full">
          <div className="tw-flex tw-justify-between">
            <h2 className="tw-text-3xl tw-font-bold dark:tw-text-white">
              Buscador de Ferris
            </h2>
            <div>
              <ul className="tw-flex tw-items-center tw-gap-2">
                <li
                  className="tw-bg-pink-300 tw-rounded tw-p-0.5 tw-px-1 tw-text-sm tw-lowercase tw-text-pink-900 tw-cursor-pointer hover:tw-scale-105 tw-transition tw-duration-300 hover:tw-shadow-md"
                  onClick={() => handleviajeChange("ida")}
                >
                  Solo ida
                </li>
                <li
                  className="tw-bg-blue-300 tw-rounded tw-p-0.5 tw-px-1 tw-text-sm tw-lowercase tw-text-blue-900 tw-cursor-pointer hover:tw-scale-105 tw-transition tw-duration-300 hover:tw-shadow-md"
                  onClick={() => handleviajeChange("ida_vuelta")}
                >
                  Ida y vuelta
                </li>
              </ul>
            </div>
          </div>

          <div className="tw-grid tw-grid-cols-3  2xl:tw-grid-cols-5 tw-gap-4 tw-mt-4">
            <Input_Select placeholder={"Origen"} />
            <Input_Select placeholder={"Destino"} />
            {viaje === "ida" ? (
              <Input_Fecha fecha={fecha} setValue={setFecha} />
            ) : (
              <Input_DateRange
                startDate={startDate}
                endDate={endDate}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
              />
            )}
            <div>
              <Input_Bonificacion
                ages={ages}
                setAges={setAges}
                pasajeros={pasajeros}
                setPasajeros={setPasajeros}
              />
            </div>
            <div>
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
