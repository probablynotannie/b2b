import { useState } from "react";
import { Popover } from "flowbite-react";
import { MdPeopleAlt } from "react-icons/md";
import { FaChild } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";

function SelectorPersonas({
  adultos,
  setAdultos,
  ninios,
  setNinios,
  ninioAges,
  setNinioAges,
}) {
  const [open, setOpen] = useState(false);

  function onAdultosChange(e) {
    let resultado = e.target.value;
    setAdultos(resultado);
  }
  function onNiniosChange(e) {
    const count = parseInt(e.target.value, 10);
    setNinios(count);

    setNinioAges(new Array(count).fill(""));
  }
  const handleAgeChange = (index, age) => {
    const newAges = [...ninioAges];
    newAges[index] = age;
    setNinioAges(newAges);
  };
  return (
    <div className="tw-relative tw-w-full">
      <Popover
        aria-labelledby="area-popover"
        open={open}
        onOpenChange={setOpen}
        content={
          <div className="dark:tw-border-slate-700 tw-bg-white dark:tw-bg-slate-700 tw-border-2 tw-rounded-lg">
            <div className=" tw-bg-slate-900 tw-text-white tw-h-14 tw-flex tw-items-center tw-pl-4 tw-font-semibold tw-rounded-t-lg">
              Adultos / Niños
            </div>
            <div className="tw-w-72 tw-space-y-3 tw-p-4 tw-text-sm tw-text-gray-500 dark:tw-bg-slate-800">
              <div>
                <span className="tw-text-sm">Adultos {ninios} </span>
                <div className="tw-relative">
                  <select
                    onChange={onAdultosChange}
                    id="habitaciones"
                    className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-h-[40px] tw-pl-10 tw-w-full tw-cursor-pointer"
                  >
                    <option value={1}>1</option>
                    <option value={2} defaultValue>
                      2
                    </option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                  </select>
                  <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-[40px] tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
                    <FaPerson />
                  </div>
                </div>
              </div>
              <div>
                <span className="tw-text-sm">Niños</span>
                <div className="tw-relative">
                  <select
                    onChange={onNiniosChange}
                    id="habitaciones"
                    className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-h-[40px] tw-pl-10 tw-w-full tw-cursor-pointer"
                  >
                    <option value={0} defaultValue>
                      0
                    </option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                  </select>
                  <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-[40px] tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
                    <FaChild />
                  </div>
                </div>
                {ninios > 0 && (
                  <div className="tw-grid tw-grid-cols-3 tw-gap-1">
                    {Array.from({ length: ninios }).map((_, index) => (
                      <div key={index} className="tw-mt-4">
                        <input
                          required
                          type="number"
                          id={`ninio-age-${index}`}
                          value={ninioAges[index] || ""}
                          onChange={(e) =>
                            handleAgeChange(index, e.target.value)
                          }
                          className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-w-full tw-cursor-pointer"
                          placeholder="Edad"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        }
      >
        <div className="tw-border tw-flex tw-items-center dark:tw-border-2 tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-h-[40px] tw-pl-10 tw-w-full tw-cursor-pointer">
          {adultos} adultos {ninios} niños
        </div>
      </Popover>
      <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-[40px] tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
        <MdPeopleAlt />
      </div>
    </div>
  );
}

export default SelectorPersonas;
