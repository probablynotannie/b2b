import React from "react";
import Sidebar from "./sidebar/Sidebar";
import Input_Destinos from "../inputs/Destinos";
import Input_Puertos from "../inputs/Puertos";
import Input_Navieras from "../inputs/Navieras";
import Input_Mes from "../inputs/Mes";
import Input_Dias from "../inputs/SelectorDias";

function Cruceros() {
  return (
    <div className="grid grid-cols-7 gap-10  md:px-20 md:min-h-[78vh] min-h-[90vh] md:py-10">
      <Sidebar />
      <div
        className="relative flex items-center justify-center col-span-7 lg:col-span-5 xl:col-span-6 min-h-[68vh] bg-bottom md:rounded-lg md:shadow-lg"
        style={{
          backgroundImage: `url(/banner_cruise.jfif)`,
          backgroundSize: "cover",
        }}
      >
        <div
          className={`bg-indigo-800 w-full h-full bg-opacity-35 rounded-lg shadow-lg px-10`}
        ></div>
        <div className="absolute md:top-32 md:left-20 bg-CajaForms  bg-opacity-80 text-white px-4 md:px-10 w-11/12 md:w-2/3 xl:w-1/3 h-fit py-5 pb-16 rounded-lg shadow-xl">
          <form>
            <h2 className="text-3xl font-bold ">Buscador de cruceros</h2>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="col-span-2 md:col-span-1">
                <Input_Destinos />
              </div>
              <div className="col-span-2 md:col-span-1">
                <Input_Puertos />
              </div>
              <div className="col-span-2 md:col-span-1">
                <Input_Navieras />
              </div>
              <div className="md:col-span-1">
                <Input_Mes />
              </div>
              <div className="md:col-span-1">
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
