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
    <div className="tw-relative tw-w-full">
      <Popover
        placement="right"
        aria-labelledby="area-popover"
        open={open}
        onOpenChange={setOpen}
        content={
          <div>
            <div className="tw-bg-slate-800 tw-rounded-t-lg tw-text-white tw-h-14 tw-flex tw-items-center tw-pl-4 tw-font-semibold">
              Adultos / Niños
            </div>
            <div className="tw-px-3 tw-pb-5 tw-max-h-[60vh] tw-overflow-y-auto tw-w-72">
              <div>
                <span className="tw-text-sm">Adultos</span>
                <div className="tw-relative">
                  <select
                    onChange={onAdultosChange}
                    id="habitaciones"
                    className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-h-[40px] tw-pl-10 tw-w-full tw-cursor-pointer"
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
                  <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
                    <FaPerson />
                  </div>
                </div>
              </div>

              {/* Niños */}
              <div>
                <span className="tw-text-sm">Niños</span>
                <div className="tw-relative">
                  <select
                    onChange={onNiniosChange}
                    id="habitaciones"
                    className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-h-[40px] tw-pl-10 tw-w-full tw-cursor-pointer"
                  >
                    <option value={0} selected>
                      0
                    </option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                  </select>
                  <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
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
              <div className="tw-flex tw-justify-between tw-mt-3">
                <div>
                  <label className="tw-inline-flex tw-items-center tw-cursor-pointer">
                    <input
                      type="checkbox"
                      value=""
                      className="tw-sr-only tw-peer"
                      onChange={handleDescuentoChange}
                    />
                    <div className="tw-relative tw-w-11 tw-h-6 tw-bg-gray-200 peer-focus:tw-outline-none peer-focus:tw-ring-4 peer-focus:tw-ring-blue-300 dark:peer-focus:tw-ring-blue-800 tw-rounded-full tw-peer dark:tw-bg-gray-700 peer-checked:after:tw-translate-x-full rtl:peer-checked:after:tw--translate-x-full peer-checked:after:border-tw-white after:tw-content-[''] after:tw-absolute after:tw-top-[2px] after:tw-start-[2px] after:tw-bg-white after:tw-border-gray-300 after:tw-border after:tw-rounded-full after:tw-h-5 after:tw-w-5 after:tw-transition-all dark:tw-border-gray-600 peer-checked:tw-bg-secondary"></div>
                    <span className="tw-ms-1 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-gray-300">
                      Descuentos
                    </span>
                  </label>
                </div>
                <div>
                  <label className="tw-inline-flex tw-items-center tw-cursor-pointer">
                    <input
                      type="checkbox"
                      value=""
                      className="tw-sr-only tw-peer"
                      onChange={handleDiscapacidadChange}
                    />
                    <div className="tw-relative tw-w-11 tw-h-6 tw-bg-gray-200 peer-focus:tw-outline-none peer-focus:tw-ring-4 peer-focus:tw-ring-blue-300 dark:peer-focus:tw-ring-blue-800 tw-rounded-full tw-peer dark:tw-bg-gray-700 peer-checked:after:tw-translate-x-full rtl:peer-checked:after:tw--translate-x-full peer-checked:after:border-tw-white after:tw-content-[''] after:tw-absolute after:tw-top-[2px] after:tw-start-[2px] after:tw-bg-white after:tw-border-gray-300 after:tw-border after:tw-rounded-full after:tw-h-5 after:tw-w-5 after:tw-transition-all dark:tw-border-gray-600 peer-checked:tw-bg-secondary"></div>
                    <span className="tw-ms-1 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-gray-300">
                      Discapacidad
                    </span>
                  </label>
                </div>
              </div>

              {descuentos && (
                <div className="tw-space-y-4 tw-mt-4">
                  {[...Array(adultos)].map((_, index) => (
                    <div
                      key={`adulto-${index}`}
                      className="tw-flex tw-items-center tw-justify-between tw-w-full tw-space-x-4"
                    >
                      <span className="tw-text-sm tw-text-center tw-flex tw-flex-row tw-w-1/3 dark:tw-text-white">
                        Adulto {index + 1}:
                      </span>

                      <select className="tw-border tw-text-sm tw-p-2 tw-rounded-lg dark:tw-bg-slate-700 dark:tw-text-slate-200 tw-w-1/2">
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
                          className={`tw-p-2 tw-border dark:tw-border-0 tw-rounded-lg ${
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
                      className="tw-flex tw-items-center tw-justify-between tw-w-full tw-space-x-4"
                    >
                      <span className="tw-w-1/3 dark:tw-text-white">
                        Niño {index + 1}:
                      </span>
                      <select className="tw-border tw-text-sm tw-p-2 tw-rounded-lg dark:tw-bg-slate-700 dark:tw-text-slate-200 tw-w-1/2">
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
                          className={`tw-p-2 tw-border dark:tw-border-0 tw-rounded-lg ${
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
        <div className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-h-[40px] tw-pl-10 tw-w-full tw-cursor-pointer">
          {adultos} adultos {ninios} niños
        </div>
      </Popover>
      <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
        <MdPeopleAlt />
      </div>
    </div>
  );
}

export default SelectorPersonas;
