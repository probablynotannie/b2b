import { Popover } from "flowbite-react";
import { MdPeopleAlt } from "react-icons/md";
import { FaChild } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { Controller } from "react-hook-form";
import { useState } from "react";

function SelectorPersonas({ control, nameAdult, nameKid, nameInfant }) {
  const [adultos, setAdultos] = useState(2);
  const [ninios, setNinios] = useState(0);
  const [infants, setInfants] = useState(0);
  const [open, setOpen] = useState(false);

  return (
    <div className="tw-relative tw-hidden lg:tw-grid tw-grid-cols-1 tw-gap-3">
      <Popover
        aria-labelledby="area-popover"
        open={open}
        onOpenChange={setOpen}
        content={
          <div className="dark:tw-border-slate-700 dark:tw-bg-slate-700 tw-border-2 tw-rounded-lg">
            <div className="tw-bg-slate-900 tw-text-white tw-h-14 tw-flex tw-items-center tw-pl-4 tw-font-semibold tw-rounded-t-lg">
              Adultos / Niños
            </div>
            <div className="tw-w-72 tw-space-y-3 tw-p-4 tw-text-sm tw-text-gray-500 dark:tw-bg-slate-800 tw-rounded-b-lg">
              <div>
                <span className="tw-text-sm">Adultos </span>
                <div className="tw-relative">
                  <Controller
                    name={nameAdult}
                    control={control}
                    render={({ field }) => (
                      <select
                        {...field}
                        value={field.value || 2}
                        onChange={(e) => {
                          setAdultos(parseInt(e.target.value, 10));
                          field.onChange(Number(e.target.value));
                        }}
                        className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:tw-text-white tw-rounded-lg tw-h-[40px] tw-pl-10 tw-w-full tw-cursor-pointer"
                      >
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        ))}
                      </select>
                    )}
                  />
                  <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon dark:tw-bg-slate-800 dark:tw-border-slate-700 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
                    <FaPerson />
                  </div>
                </div>
              </div>
              {/* Niños */}
              <div>
                <span className="tw-text-sm">Niños</span>
                <div className="tw-relative">
                  <Controller
                    name={nameKid}
                    control={control}
                    render={({ field }) => (
                      <select
                        {...field}
                        value={field.value}
                        onChange={(e) => {
                          setNinios(parseInt(e.target.value, 10));
                          field.onChange(Number(e.target.value));
                        }}
                        className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:tw-text-white tw-rounded-lg tw-h-[40px] tw-pl-10 tw-w-full tw-cursor-pointer"
                      >
                        {[0, 1, 2, 3].map((num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        ))}
                      </select>
                    )}
                  />
                  <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
                    <FaChild />
                  </div>
                </div>
              </div>
              {/* Infants */}
              <div>
                <span className="tw-text-sm">Infants</span>
                <div className="tw-relative">
                  <Controller
                    name={nameInfant}
                    control={control}
                    render={({ field }) => (
                      <select
                        {...field}
                        value={field.value}
                        onChange={(e) => {
                          setInfants(parseInt(e.target.value, 10));
                          field.onChange(Number(e.target.value));
                        }}
                        className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:tw-text-white tw-rounded-lg tw-h-[40px] tw-pl-10 tw-w-full tw-cursor-pointer"
                      >
                        {[0, 1, 2, 3].map((num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        ))}
                      </select>
                    )}
                  />
                  <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
                    <FaChild />
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      >
        <div className="tw-border tw-flex tw-items-center tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-h-[40px] tw-pl-10 tw-w-full tw-cursor-pointer">
          <span>
            {adultos} Ad, {ninios} Niñ, {infants} Inf
          </span>
        </div>
      </Popover>
      <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-[40px] tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
        <MdPeopleAlt />
      </div>
    </div>
  );
}

export default SelectorPersonas;
