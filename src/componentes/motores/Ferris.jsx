import { useState } from "react";
import Sidebar from "../Sidebar";
import Input_Select from "../inputs/Select";
import Input_Fecha from "../inputs/Fecha";
import Input_DateRange from "../inputs/DateRange";
import Input_Vehiculos from "../inputs/Vehiculos";
import Input_Bonificacion from "../inputs/Bonificacion";

function Ferris() {
  const [viaje, setViaje] = useState("ida"); // State to track which trip type is selected

  // Function to handle button click and set trip type
  const handleviajeChange = (type) => {
    setViaje(type);
  };

  return (
    <div className="grid grid-cols-7 gap-10 px-10 md:px-20 min-h-[78vh] py-10">
      <Sidebar />
      <div className="relative col-span-7 md:col-span-6 h-[68vh] bg-[url(../../banner_trenes.jpeg)] bg-cover bg-center rounded-lg shadow-lg">
        <div className="bg-indigo-800 w-full h-full bg-opacity-35 rounded-lg shadow-lg px-10"></div>
        <div className="absolute top-32 md:left-20 bg-CajaForms bg-opacity-80 text-white md:w-1/3 h-fit px-10 py-5 pb-16 rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold">Buscador de ferris</h2>
          <div className="grid grid-cols-2 gap-3 mt-2 text-sm">
            <button
              className={`p-2 rounded-lg font-bold ${
                viaje === "ida" ? "bg-secondary" : "bg-gray-400"
              }`}
              onClick={() => handleviajeChange("ida")}
            >
              Solo ida
            </button>
            <button
              className={`p-2 rounded-lg font-bold ${
                viaje === "ida_vuelta" ? "bg-secondary" : "bg-gray-400"
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
                <Input_Fecha />
              </div>
            ) : (
              <div className="col-span-2">
                <Input_DateRange />
              </div>
            )}

            <div>
              <Input_Bonificacion />
            </div>
            <div>
              <Input_Vehiculos />
            </div>
          </div>

          <div className="absolute -bottom-5 right-5">
            <button className="bg-slate-900 border-2 border-white border-opacity-20 shadow-xl rounded-lg p-3 px-16 font-bold w-full">
              Buscar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ferris;
