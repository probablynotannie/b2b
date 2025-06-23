import { useState } from "react";
import { Popover } from "flowbite-react";
import { MdPeopleAlt } from "react-icons/md";
import Pers_Edad from "./Pers_Edad";
import Residentes from "./Residentes";
import Fuerza from "./Fuerza";
function Bonificacion({ control, errors, setValue, namePasajeros }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="tw-relative tw-w-full">
      <Popover
        placement="right"
        aria-labelledby="area-popover"
        open={open}
        onOpenChange={setOpen}
        content={
          <div className="dark:tw-border-slate-700 dark:tw-bg-slate-700 tw-border-2 tw-rounded-lg">
            <div className="tw-bg-slate-800 dark:tw-bg-slate-900 tw-rounded-t-lg tw-text-white tw-h-14 tw-flex tw-items-center tw-pl-4 tw-font-semibold ">
              Tipo de bonificacion
            </div>
            <div className="tw-w-96 tw-space-y-3 tw-p-4 tw-text-sm tw-text-gray-500 dark:tw-bg-slate-800">
              <Pers_Edad
                setValue={setValue}
                namePasajeros={namePasajeros}
                control={control}
                errors={errors}
              />
              <Residentes />
              <Fuerza />
            </div>
          </div>
        }
      >
        <div className="tw-border tw-flex tw-items-center tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-h-[40px] tw-pl-10 tw-w-full tw-cursor-pointer">
          Bonificación/es
        </div>
      </Popover>
      <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon tw-text-white tw-h-[40px] tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2">
        <MdPeopleAlt />
      </div>
    </div>
  );
}

export default Bonificacion;
