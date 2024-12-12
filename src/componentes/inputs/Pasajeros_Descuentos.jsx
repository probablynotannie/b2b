import { useState } from "react";
import { Popover } from "flowbite-react";
import { MdPeopleAlt } from "react-icons/md";
import { FaChild } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { FaWheelchair } from "react-icons/fa";

function SelectorPersonas({
  adultos,
  setAdultos,
  ninios,
  setNinios,
  ninioAges,
  setNinioAges,
  descuentos,
  setDescuentos,
  discapacidad,
  setDiscapacidad,
  selectedDiscapacidad,
  setSelectedDiscapacidad,
}) {
  const [open, setOpen] = useState(false);

  function onAdultosChange(e) {
    const resultado = parseInt(e.target.value, 10);
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

  const handleDescuentoChange = () => {
    setDescuentos(!descuentos);
  };

  const handleDiscapacidadChange = () => {
    setDiscapacidad(!discapacidad);
  };

  const handleDiscapacidadSelection = (type, index) => {
    const newSelection = { ...selectedDiscapacidad };
    if (newSelection[type].includes(index)) {
      newSelection[type] = newSelection[type].filter((item) => item !== index);
    } else {
      newSelection[type].push(index);
    }
    setSelectedDiscapacidad(newSelection);
  };

  return (
    <div className="relative w-full">
      <Popover
        placement="right"
        aria-labelledby="area-popover"
        open={open}
        onOpenChange={setOpen}
        content={
          <div>
            <div className="bg-primary text-white h-14 flex items-center pl-4 font-semibold">
              Adultos / Niños
            </div>
            <div className="px-3 pb-5 max-h-[60vh] overflow-y-auto w-72">
              <div>
                <span className="text-sm">Adultos</span>
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

              {/* Niños */}
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
              <div className="flex justify-between">
                <div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      value=""
                      className="sr-only peer"
                      onChange={handleDescuentoChange}
                    />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-secondary"></div>
                    <span className="ms-1 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Descuentos
                    </span>
                  </label>
                </div>
                <div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      value=""
                      className="sr-only peer"
                      onChange={handleDiscapacidadChange}
                    />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-secondary"></div>
                    <span className="ms-1 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Discapacidad
                    </span>
                  </label>
                </div>
              </div>

              {descuentos && (
                <div className="space-y-4 mt-4">
                  {[...Array(adultos)].map((_, index) => (
                    <div
                      key={`adulto-${index}`}
                      className="flex items-center justify-between w-full space-x-4"
                    >
                      <span className="text-sm text-center flex flex-row w-1/3 dark:text-white">
                        Adulto {index + 1}:
                      </span>

                      <select className="border text-sm p-2 rounded-lg dark:bg-slate-700 dark:text-slate-200 w-1/2">
                        <option value="0">Ninguno</option>
                        <option value="des_familia_num_gen">
                          Familia numerosa general
                        </option>
                        <option value="des_familia_num_esp">
                          Familia numerosa especial
                        </option>
                        <option value="des_interrail_esp">
                          Interrail español
                        </option>
                      </select>
                      {discapacidad && (
                        <button
                          type="button"
                          onClick={() =>
                            handleDiscapacidadSelection("adultos", index)
                          }
                          className={`p-2 border dark:border-0 rounded-lg ${
                            selectedDiscapacidad.adultos.includes(index)
                              ? "bg-blue-500 dark:bg-blue-700 text-white"
                              : "bg-gray-200"
                          }`}
                        >
                          <FaWheelchair />
                        </button>
                      )}
                    </div>
                  ))}

                  {[...Array(ninios)].map((_, index) => (
                    <div
                      key={`nino-${index}`}
                      className="flex items-center justify-between w-full space-x-4"
                    >
                      <span className="w-1/3 dark:text-white">
                        Niño {index + 1}:
                      </span>
                      <select className="border text-sm p-2 rounded-lg dark:bg-slate-700 dark:text-slate-200 w-1/2">
                        <option value="0">Ninguno</option>
                        <option value="des_familia_num_gen">
                          Familia numerosa general
                        </option>
                        <option value="des_familia_num_esp">
                          Familia numerosa especial
                        </option>
                        <option value="des_interrail_esp">
                          Interrail español
                        </option>
                      </select>
                      {discapacidad && (
                        <button
                          type="button"
                          onClick={() =>
                            handleDiscapacidadSelection("ninios", index)
                          }
                          className={`p-2 border dark:border-0 rounded-lg ${
                            selectedDiscapacidad.ninios.includes(index)
                              ? "bg-blue-500 dark:bg-blue-700 text-white"
                              : "bg-gray-200"
                          }`}
                        >
                          <FaWheelchair />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              )}
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
