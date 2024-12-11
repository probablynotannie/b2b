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
    <div className="relative w-full">
      <Popover
        aria-labelledby="area-popover"
        open={open}
        onOpenChange={setOpen}
        content={
          <div>
            <div className="bg-primary text-white h-14 flex items-center pl-4 font-semibold">
              Adultos / Niños
            </div>
            <div className=" w-72 space-y-3 p-4 text-sm text-gray-500">
              <div>
                <span className="text-sm">Adultos {ninios} </span>
                <div className="relative">
                  <select
                    onChange={onAdultosChange}
                    id="habitaciones"
                    className="border bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5 pl-10 w-full cursor-pointer"
                  >
                    <option value={1}>1</option>
                    <option value={2} selected>
                      2
                    </option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                  </select>
                  <div className="absolute top-0 pointer-events-none bg-inputIcon dark:bg-slate-800 dark:border-slate-600 dark:border-y-2 dark:border-l-2 text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl">
                    <FaPerson />
                  </div>
                </div>
              </div>
              <div>
                <span className="text-sm">Niños</span>
                <div className="relative">
                  <select
                    onChange={onNiniosChange}
                    id="habitaciones"
                    className="border bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5 pl-10 w-full cursor-pointer"
                  >
                    <option value={0} selected>
                      0
                    </option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                  </select>
                  <div className="absolute top-0 pointer-events-none bg-inputIcon dark:bg-slate-800 dark:border-slate-600 dark:border-y-2 dark:border-l-2 text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl">
                    <FaChild />
                  </div>
                </div>
                {ninios > 0 && (
                  <div className="grid grid-cols-3 gap-1">
                    {Array.from({ length: ninios }).map((_, index) => (
                      <div key={index} className="mt-4">
                        <input
                          required
                          type="number"
                          id={`ninio-age-${index}`}
                          value={ninioAges[index] || ""}
                          onChange={(e) =>
                            handleAgeChange(index, e.target.value)
                          }
                          className="border bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5 w-full cursor-pointer"
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
        <div className="border bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5 pl-10 w-full cursor-pointer">
          {adultos} adultos {ninios} niños
        </div>
      </Popover>
      <div className="absolute top-0 pointer-events-none bg-inputIcon dark:bg-slate-800 dark:border-slate-600 dark:border-y-2 dark:border-l-2 text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl">
        <MdPeopleAlt />
      </div>
    </div>
  );
}

export default SelectorPersonas;
