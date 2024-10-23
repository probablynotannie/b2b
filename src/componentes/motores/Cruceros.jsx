import React from "react";
import Sidebar from "../Sidebar";
import Input_Destinos from "../inputs/Destinos";
import Input_Puertos from "../inputs/Puertos";
import Input_Navieras from "../inputs/Navieras";
import Input_Mes from "../inputs/Mes";
import Input_Dias from "../inputs/SelectorDias";

function Cruceros() {
  return (
    <form>
      <h2 className="text-3xl font-bold ">Buscador de cruceros</h2>
      <div className="grid grid-cols-2 gap-2 mt-2">
        <div className="">
          <Input_Destinos />
        </div>
        <div>
          <Input_Puertos />
        </div>
        <div>
          <Input_Navieras />
        </div>
        <div>
          <Input_Mes />
        </div>
        <div>
          <Input_Dias />
        </div>
        <div className="absolute -bottom-5 right-5">
          <button className="bg-slate-900 border-2 border-white border-opacity-20 shadow-xl rounded-lg p-3 px-16 font-bold w-full">
            Buscar
          </button>
        </div>
      </div>
    </form>
  );
}

export default Cruceros;
