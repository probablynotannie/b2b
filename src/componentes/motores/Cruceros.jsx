import React from "react";
import Sidebar from "../Sidebar";
import Input_Destinos from "../inputs/Destinos";
import Input_Puertos from "../inputs/Puertos";
import Input_Navieras from "../inputs/Navieras";
import Input_Mes from "../inputs/Mes";
import Input_Dias from "../inputs/SelectorDias";

function Cruceros() {
  return (
    <div className="grid grid-cols-7 gap-10 px-10 md:px-20 min-h-[78vh] py-10">
      <Sidebar />
      <div className="relative col-span-7 md:col-span-6 h-[68vh] bg-[url(../../banner_cruise.jfif)] bg-cover bg-bottom rounded-lg shadow-lg">
        <div className="bg-indigo-800 w-full h-full bg-opacity-55 rounded-lg shadow-lg px-10"></div>
        <div className="absolute top-32 md:left-20  bg-CajaForms bg-opacity-80 text-white md:w-2/5 h-fit px-10 py-5 pb-16 rounded-lg shadow-xl">
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
        </div>
      </div>
    </div>
  );
}

export default Cruceros;
