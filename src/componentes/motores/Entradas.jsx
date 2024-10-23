import React from "react";
import Sidebar from "../Sidebar";
import Input_Buscador from "../inputs/Buscador";
import Input_Fecha from "../inputs/Fecha";
import Input_adultoNinio from "../inputs/Adulto_Ninio";
function Entradas() {
  return (

          <form>
            <h2 className="text-3xl font-bold ">Buscador de entradas</h2>
            <div className="grid grid-cols-2 gap-2 mt-2 ">
              <div className="col-span-2">
                <Input_Buscador />
              </div>

              <div>
                <Input_Fecha />
              </div>
              <div>
                <Input_adultoNinio />
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

export default Entradas;
