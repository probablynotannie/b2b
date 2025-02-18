import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Input_Destinos from "../../../inputs/Destinos";
import Input_Puertos from "../../../inputs/Puertos";
import Input_Navieras from "../../../inputs/Navieras";
import Input_Mes from "../../../inputs/Mes";
import Input_Dias from "../../../inputs/SelectorDias";
import { useNavigate } from "react-router-dom";
import datos_destinos from "./destinos.json";
import datos_puertos from "./puertos.json";
import datos_navieras from "./navieras.json";

function Buscador_Cruceros({
  setDestino,
  setPuerto,
  destino,
  naviera,
  mes,
  setNaviera,
  setMes,
  setDuracion,
  duracion,
  puerto,
  requestData,
  setRequestData,
}) {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = () => {
    const newRequestData = requestData;
    navigate("/listadoCruceros", { state: { newRequestData } });
  };

  const updateRequestData = (key, value) => {
    const newRequestData = {
      ...requestData,
      [key]: value,
    };
    setRequestData(newRequestData);
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
                Buscador de Cruceros
              </h2>
              <div className="tw-grid tw-grid-cols-1 tw-gap-4">
                <Input_Destinos
                  datos={datos_destinos}
                  destino={destino}
                  setDestino={(value) => {
                    setDestino(value);
                    updateRequestData("idZona", value);
                  }}
                />
                <Input_Puertos
                  datos={datos_puertos}
                  puerto={puerto}
                  setPuerto={(value) => {
                    setPuerto(value);
                    updateRequestData("idPuerto", value);
                  }}
                />
                <Input_Navieras
                  naviera={naviera}
                  setNaviera={(value) => {
                    setNaviera(value);
                    updateRequestData("idNav", value);
                  }}
                  datos={datos_navieras}
                />
                <Input_Mes
                  mes={mes}
                  setMes={(value) => {
                    setMes(value);
                    updateRequestData("fechSal", value);
                  }}
                />
                <Input_Dias
                  duracion={duracion}
                  setDuracion={(value) => {
                    setDuracion(value);
                    updateRequestData("duracion", value);
                  }}
                />
              </div>
              <button
                type="button"
                className="tw-w-full tw-mt-4 bg-secondary tw-text-white tw-font-bold tw-p-3 tw-rounded-lg"
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

      <div className="tw-hidden sm:tw-flex tw-bg-white dark:tw-bg-slate-600 tw-bg-opacity-80 tw-rounded tw-p-4 tw-pb-10 tw-flex-col tw-items-center tw-justify-center tw-h-fit">
        <form>
          <h2 className="tw-text-3xl tw-font-bold dark:tw-text-white">
            Buscador de Cruceros ef
          </h2>
          <div className="tw-grid tw-grid-cols-3 md:tw-grid-cols-3 lg:tw-grid-cols-5 tw-gap-4 tw-mt-4">
            <Input_Destinos
              datos={datos_destinos}
              destino={destino}
              setDestino={(value) => {
                setDestino(value);
                updateRequestData("idZona", value);
              }}
            />
            <Input_Puertos
              datos={datos_puertos}
              puerto={puerto}
              setPuerto={(value) => {
                setPuerto(value);
                updateRequestData("idPuerto", value);
              }}
            />
            <Input_Navieras
              naviera={naviera}
              setNaviera={(value) => {
                setNaviera(value);
                updateRequestData("idNav", value);
              }}
              datos={datos_navieras}
            />
            <Input_Mes
              mes={mes}
              setMes={(value) => {
                setMes(value);
                updateRequestData("fechSal", value);
              }}
            />
            <Input_Dias
              duracion={duracion}
              setDuracion={(value) => {
                setDuracion(value);
                updateRequestData("duracion", value);
              }}
            />
          </div>
          <button
            type="button"
            className="tw-absolute tw--bottom-3 lg:tw--bottom-7 tw-right-10 lg:tw-right-5 tw-px-8 bg-secondary tw-p-3 tw-font-bold tw-rounded-lg tw-text-white"
            onClick={handleSubmit}
          >
            Buscar
          </button>
        </form>
      </div>
    </>
  );
}

export default Buscador_Cruceros;
