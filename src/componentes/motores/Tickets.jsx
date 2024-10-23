import React from "react";
import Sidebar from "../Sidebar";
import Input_Buscador from "../inputs/Buscador";
import Input_DateRange from "../inputs/DateRange";
import Input_AdultoNInio from "../inputs/Adulto_Ninio";

function Tickets() {
  return (
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
  );
}

export default Tickets;
