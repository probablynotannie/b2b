import React from "react";
import Sidebar from "../Sidebar";
import Input_Buscador from "../inputs/Buscador";
import Input_DateRange from "../inputs/DateRange";
import Input_hora from "../inputs/Hora";
import Input_Edad from "../inputs/Edad";
function Coches() {
  return (

          <form>
            <h2 className="text-3xl font-bold ">Buscador de coches</h2>
            <div className="grid grid-cols-3 gap-2 mt-2">
              <div className="col-span-3">
                <Input_Buscador />
              </div>

              <div className="col-span-3">
                <Input_DateRange />
              </div>
              <div>
                <span className="block mb-1 text-sm font-semibold">
                  Recogida
                </span>
                <Input_hora />
              </div>
              <div>
                <span className="block mb-1 text-sm font-semibold">
                  Devolución
                </span>
                <Input_hora />
              </div>
              <div>
                <span className="block mb-1 text-sm font-semibold">
                  Edad conductor
                </span>
                <Input_Edad />
              </div>
            </div>
            <div className="absolute -bottom-5 right-5">
              <button className="bg-slate-900 border-2 border-white border-opacity-20 shadow-xl rounded-lg p-3 px-16 font-bold w-full">
                Buscar
              </button>
            </div>
          </form>
    
  );
}

export default Coches;
