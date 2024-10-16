import React from "react";
import Sidebar from "../Sidebar";
import Input_Buscador from "../inputs/Buscador";
import Input_DateRange from "../inputs/DateRange";
import Input_AdultoNInio from "../inputs/Adulto_Ninio";

function Tickets() {
  return (
    <div className="grid grid-cols-7 gap-10 px-10 md:px-20 min-h-[78vh] py-10">
      <Sidebar />
      <div className="relative col-span-7 md:col-span-6 h-[68vh] bg-[url(../../banner_hoteles.jpg)] bg-cover bg-center rounded-lg shadow-lg">
        <div className="bg-indigo-800 w-full h-full bg-opacity-35 rounded-lg shadow-lg px-10"></div>
        <div className="absolute top-32 md:left-20  bg-CajaForms bg-opacity-80 text-white md:w-1/3 h-fit px-10 py-5 pb-16 rounded-lg shadow-xl">
          <form>
            <h2 className="text-3xl font-bold ">Buscador de tickets</h2>
            <div className="grid gap-2 mt-2">
              <div>
                <Input_Buscador />
              </div>

              <div>
                <Input_DateRange />
              </div>
              <div>
                <Input_AdultoNInio />
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

export default Tickets;
