import Sidebar from "./sidebar/Sidebar";
import { useState } from "react";
import Input_Select from "../inputs/Selector";
import Input_dateRange from "../inputs/DateRange";
import { FaGlobe } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaPerson } from "react-icons/fa6";

function Seguros() {
  const [seguro, setSeguro] = useState();
  const [destinosSeguro, setDestinoSeguro] = useState();
  const [residente, setResidente] = useState();
  const [passengers, setPassengers] = useState(1);
  const handlePassengerChange = (event) => {
    setPassengers(parseInt(event.target.value, 10));
  };
  const destinos = [
    {
      id: 0,
      texto: "España",
    },
    {
      id: 1,
      texto: "Portugal",
    },
    {
      id: 2,
      texto: "Europa y paises ribereños del mediterráneo",
    },
    {
      id: 3,
      texto: "Europa + Europa",
    },
    {
      id: 4,
      texto: "Resto del mundo",
    },
  ];
  const residentes = [
    {
      id: 0,
      texto: "España",
    },
    {
      id: 1,
      texto: "Portugal",
    },
    {
      id: 2,
      texto: "No residente",
    },
  ];
  const seguros = [
    {
      id: 0,
      texto: "Anulación (Vuelos, alojamientos,entradas,etc)",
    },
    {
      id: 1,
      texto: "Anulación Estancias",
    },
    {
      id: 2,
      texto: "Asitencia",
    },
    {
      id: 3,
      texto: "Asistencia + Anulación",
    },
    {
      id: 4,
      texto: "Asistencia + Anulación ampliada",
    },
    {
      id: 5,
      texto: "Asistencia + Anulación cruceros",
    },
    {
      id: 6,
      texto: "Asistencia + Anulación PREEXISENCIS",
    },
  ];

  return (
    <div className="grid grid-cols-10 gap-10 lg:px-20 lg:min-h-[78vh] min-h-[90vh] lg:py-10">
      <Sidebar />
      <div
        className="relative flex  lg:block items-center justify-center h-full  col-span-10 lg:col-span-7 xl:col-span-8 min-h-[68vh] lg:rounded-lg lg:shadow-lg"
        style={{
          backgroundImage: `url(/banner_seguros.jpg)`,
          backgroundSize: "cover",
        }}
      >
        <div
          className={`absolute  z-0 bg-indigo-800 w-full h-full bg-opacity-45 rounded-lg shadow-lg px-10 `}
        ></div>
        <div className="relative xl:top-32 lg:left-20 bg-CajaForms bg-opacity-80 dark:bg-opacity-90 text-white px-4 md:px-10 w-11/12 md:w-2/3 lg:w-2/4  2xl:w-2/7 h-fit py-5 pb-16 rounded-lg shadow-xl">
          <form>
            <h2 className="text-3xl font-bold">Buscador de seguros</h2>

            <div className="mt-2 grid grid-cols-2 gap-2">
              <div>
                <Input_Select
                  icono={<FaUserShield />}
                  placeholder="Tipo seguro"
                  opciones={seguros}
                  values={seguro}
                  setValues={setSeguro}
                />
              </div>
              <div>
                <Input_Select
                  icono={<FaGlobe />}
                  placeholder="Destino"
                  opciones={destinos}
                  values={destinosSeguro}
                  setValues={setDestinoSeguro}
                />
              </div>
              <div>
                <Input_dateRange />
              </div>
              <div>
                <Input_Select
                  icono={<IoPersonSharp />}
                  placeholder="Residencia"
                  opciones={residentes}
                  values={residente}
                  setValues={setResidente}
                />
              </div>
              <div className="relative">
                <select
                  className="border bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5 pl-10 w-full cursor-pointer"
                  defaultValue="" // Default selected value
                  onChange={handlePassengerChange} // No need for "value" if using "defaultValue"
                >
                  <option value="">Núm pasajeros</option>
                  {Array.from({ length: 10 }, (_, index) => (
                    <option key={index + 1} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </select>

                <div className="absolute top-0 pointer-events-none bg-inputIcon dark:bg-slate-800 dark:border-slate-600 dark:border-y-2 dark:border-l-2 text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl">
                  <FaPerson />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 right-5">
              <button className="bg-slate-900 border-2 border-white border-opacity-20 shadow-xl rounded-lg p-3 px-16 font-bold w-full">
                Buscar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Seguros;
