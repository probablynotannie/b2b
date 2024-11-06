import React from "react";
import Sidebar from "./sidebar/Sidebar";
import Input_Buscador from "../inputs/Buscador";
import Input_DateRange from "../inputs/DateRange";
import Input_AdultoNInio from "../inputs/Adulto_Ninio";

function Tickets() {
  return (
    <div className="grid grid-cols-8 gap-10  md:px-20 md:min-h-[78vh] min-h-[90vh] md:py-10">
      <Sidebar />
      <div
        className="relative flex items-center justify-center col-span-7 lg:col-span-5 xl:col-span-6 min-h-[68vh] md:rounded-lg md:shadow-lg"
        style={{
          backgroundImage: `url(/banner_hoteles.jpg)`,
          backgroundSize: "cover",
        }}
      >
        <div
          className={`bg-indigo-800 w-full h-full bg-opacity-35 rounded-lg shadow-lg px-10`}
        ></div>
        <div className="absolute md:top-32 md:left-20 bg-CajaForms  bg-opacity-80 text-white px-4 md:px-10 w-11/12 md:w-2/3 xl:w-1/3 h-fit py-5 pb-16 rounded-lg shadow-xl">
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
