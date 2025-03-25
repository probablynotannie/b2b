import Hoteles from "./Hoteles";
import VueloSeleccionado from "./VueloSeleccionado";
import { GoDotFill } from "react-icons/go";
function Hotelmasvuelo() {
  return (
    <div>
      <VueloSeleccionado />
      <div className="tw-flex tw-flex-row tw-justify-between tw-p-3 tw-rounded-xl dark:tw-bg-slate-800 dark:md:tw-bg-inherit dark:md:tw-border-0 dark:md:tw-shadow-none dark:tw-border-slate-600 lg:tw-mt-0">
        <div className="tw-h-4 tw-w-1/3 tw-bg-slate-200 dark:tw-bg-slate-600 tw-mt-5 tw-text-secondary tw-font-semibold tw-text-lg"></div>
        <div className="tw-flex tw-flex-col tw-gap-5 md:tw-flex-row md:tw-justify-between tw-mt-5">
          <div className="tw-h-4 tw-w-16 tw-bg-slate-200 dark:tw-bg-slate-600 tw-gap-2 tw-mb-3"></div>
        </div>
      </div>
      <Hoteles />
    </div>
  );
}

export default Hotelmasvuelo;
