import Sidebar from "./sidebar/Sidebar";
import Input_Mes from "../inputs/Mes";
import Input_Destinos from "../inputs/Pais_Ciudad";
import { Link } from "react-router-dom";

function Destinos() {
  return (
    <div className="grid grid-cols-10 gap-10 lg:px-20 lg:min-h-[78vh] min-h-[90vh] lg:py-10">
      <Sidebar />
      <div
        className="relative flex  lg:block items-center justify-center h-full  col-span-10 lg:col-span-7 xl:col-span-8 min-h-[68vh] lg:rounded-lg lg:shadow-lg"
        style={{
          backgroundImage: `url(/banner_destinos.jpg)`,
          backgroundSize: "cover",
          opacity: 25,
        }}
      >
        <div
          className={`absolute  z-0 bg-indigo-800 w-full h-full bg-opacity-35 rounded-lg shadow-lg px-10 `}
        ></div>
        <div className="relative xl:top-32 lg:left-20 bg-CajaForms bg-opacity-80 dark:bg-opacity-90 text-white px-4 md:px-10 w-11/12 md:w-2/3 lg:w-2/4  2xl:w-2/7 h-fit py-5 pb-16 rounded-lg shadow-xl">
          {/* <form> */}
          <h2 className="text-3xl font-bold ">Buscador de destinos</h2>
          <div className="mt-2">
            <Input_Destinos />
          </div>
          <div className="mt-2">
            <Input_Mes />
          </div>
          <div className="absolute -bottom-5 right-5">
            <Link to="/listadoDestinos">
              <button className="bg-slate-900 border-2 border-white border-opacity-20 shadow-xl rounded-lg p-3 px-16 font-bold w-full">
                Buscar
              </button>
            </Link>
          </div>
          {/*  </form> */}
        </div>
      </div>
    </div>
  );
}

export default Destinos;
