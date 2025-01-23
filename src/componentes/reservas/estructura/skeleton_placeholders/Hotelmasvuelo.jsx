import Hoteles from "./Hoteles";
import VueloSeleccionado from "./VueloSeleccionado";
import { GoDotFill } from "react-icons/go";
function Hotelmasvuelo() {
  return (
    <div>
      <VueloSeleccionado />
      <div className=" flex flex-row justify-between p-3 rounded-xl dark:bg-slate-800 dark:md:bg-inherit dark:md:border-0 dark:md:shadow-none dark:border-slate-600 lg:mt-0">
        <div className="h-4 w-1/3 bg-slate-200 dark:bg-slate-600 mt-5 text-secondary font-semibold text-lg "></div>
        <div className="flex flex-col gap-5 md:flex-row md:justify-between mt-5">
          <div className="h-4 w-16 bg-slate-200 dark:bg-slate-600 gap-2 mb-3"></div>
        </div>
      </div>
      <Hoteles />
    </div>
  );
}

export default Hotelmasvuelo;
