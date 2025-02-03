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
    <div className="tw-relative tw-bg-white dark:tw-bg-slate-600 dark:tw-bg-opacity-55 tw-bg-opacity-80 tw-rounded tw-p-4 tw-pb-10 tw-flex tw-flex-col tw-items-center tw-justify-center tw-h-fit">
      <form>
        <h2 className="tw-text-3xl tw-font-bold dark:tw-text-white">
          Buscador de cruceros
        </h2>
        <div className="tw-grid tw-grid-cols-3  md:tw-grid-cols-3 lg:tw-grid-cols-5 tw-gap-4 tw-mt-4">
          <div className="tw-col-span-1 md:tw-col-span-1">
            <Input_Destinos
              datos={datos_destinos}
              destino={destino}
              setDestino={(value) => {
                setDestino(value);
                updateRequestData("idZona", value);
              }}
            />
          </div>
          <div className="tw-col-span-1 md:tw-col-span-1">
            <Input_Puertos
              datos={datos_puertos}
              puerto={puerto}
              setPuerto={(value) => {
                setPuerto(value);
                updateRequestData("idPuerto", value);
              }}
            />
          </div>
          <div className="tw-col-span-1 md:tw-col-span-1">
            <Input_Navieras
              naviera={naviera}
              setNaviera={(value) => {
                setNaviera(value);
                updateRequestData("idNav", value);
              }}
              datos={datos_navieras}
            />
          </div>
          <div className="tw-col-span-1 md:tw-col-span-1">
            <Input_Mes
              mes={mes}
              setMes={(value) => {
                setMes(value);
                updateRequestData("fechSal", value);
              }}
            />
          </div>

          <div className="tw-col-span-1 md:tw-col-span-1">
            <Input_Dias
              duracion={duracion}
              setDuracion={(value) => {
                setDuracion(value);
                updateRequestData("duracion", value);
              }}
            />
          </div>
        </div>
        <button
          type="button"
          className="tw-absolute tw--bottom-7 tw-right-5 tw-px-8 tw-bg-secondary tw-p-3 tw-font-bold tw-rounded-lg tw-text-white"
          onClick={handleSubmit}
        >
          Buscar
        </button>
      </form>
    </div>
  );
}

export default Buscador_Cruceros;
