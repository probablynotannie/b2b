import { useState } from "react";
import Sidebar from "./sidebar/Sidebar";
import Input_Select from "../inputs/Select";
import Input_Fecha from "../inputs/Fecha";
import Input_DateRange from "../inputs/DateRange";
import Input_Vehiculos from "../inputs/Vehiculos";
import Input_Bonificacion from "../inputs/Bonificacion";

function Ferris() {
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

  const handleviajeChange = (type) => {
    setViaje(type);
  };
  const [fecha, setFecha] = useState(null);

  return (
    <div className="grid grid-cols-10 gap-10 lg:px-20 lg:min-h-[78vh] min-h-[90vh] lg:py-10">
      <Sidebar />
      <div
        className="relative flex  lg:block items-center justify-center h-full  col-span-10 lg:col-span-7 xl:col-span-8 min-h-[68vh] lg:rounded-lg lg:shadow-lg"
        style={{
          backgroundImage: `url(/banner_ferris.jpg)`,
          backgroundSize: "cover",
        }}
      >
        <div
          className={`absolute z-0 bg-indigo-800 w-full h-full bg-opacity-55 rounded-lg shadow-lg px-10 `}
        ></div>
        <div className="relative xl:top-32 lg:left-20 bg-CajaForms bg-opacity-80 dark:bg-opacity-90 text-white px-4 md:px-10 w-11/12 md:w-2/3 lg:w-2/4  2xl:w-2/7 h-fit py-5 pb-16 rounded-lg shadow-xl">
          <form>
            <h2 className="text-3xl font-bold">Buscador de ferris</h2>
            <div className="grid grid-cols-2 gap-3 mt-2 text-sm">
              <button
                type="button"
                className={`p-2.5 rounded-lg font-bold ${
                  viaje === "ida"
                    ? "bg-secondary"
                    : "bg-gray-400 dark:bg-slate-600"
                }`}
                onClick={() => handleviajeChange("ida")}
              >
                Solo ida
              </button>
              <button
                type="button"
                className={`p-2 rounded-lg font-bold ${
                  viaje === "ida_vuelta"
                    ? "bg-secondary"
                    : "bg-gray-400 dark:bg-slate-600"
                }`}
                onClick={() => handleviajeChange("ida_vuelta")}
              >
                Ida y vuelta
              </button>
            </div>

            <div className="mt-2 grid grid-cols-2 gap-2">
              <div>
                <Input_Select placeholder={"Origen"} />
              </div>
              <div>
                <Input_Select placeholder={"Destino"} />
              </div>
              {viaje === "ida" ? (
                <div>
                  <Input_Fecha fecha={fecha} setFecha={setFecha} />
                </div>
              ) : (
                <div className="col-span-2">
                  <Input_DateRange
                    startDate={startDate}
                    endDate={endDate}
                    setStartDate={setStartDate}
                    setEndDate={setEndDate}
                  />
                </div>
              )}

              <div>
                <Input_Bonificacion />
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

export default Ferris;
