import Sidebar from "./sidebar/Sidebar";
import Input_Buscador from "../inputs/Buscador";
import Input_DateRange from "../inputs/DateRange";
import Input_hora from "../inputs/Hora";
import Input_Edad from "../inputs/Edad";
import { Link } from "react-router-dom";
function Coches() {
  return (
    <div className="grid grid-cols-10 gap-10 lg:px-20 lg:min-h-[78vh] min-h-[90vh] lg:py-10">
      <Sidebar />
      <div
        className="relative flex  lg:block items-center justify-center h-full  col-span-10 lg:col-span-7 xl:col-span-8 min-h-[68vh] lg:rounded-lg lg:shadow-lg"
        style={{
          backgroundImage: `url(/banner_coches.jpg)`,
          backgroundSize: "cover",
        }}
      >
        <div
          className={`absolute  z-0 bg-indigo-800 w-full h-full bg-opacity-35 rounded-lg shadow-lg px-10 `}
        ></div>
        <div className="relative xl:top-32 lg:left-20 bg-CajaForms bg-opacity-80 dark:bg-opacity-90 text-white px-4 md:px-10 w-11/12 md:w-2/3 lg:w-2/4  2xl:w-2/7 h-fit py-5 pb-16 rounded-lg shadow-xl">
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
              <Link to={"/listadocoches"}>
                <button className="bg-slate-900 border-2 border-white border-opacity-20 shadow-xl rounded-lg p-3 px-16 font-bold w-full">
                  Buscar
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Coches;
