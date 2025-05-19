import { useState } from "react";
import { Popover } from "flowbite-react";
import { MdPeopleAlt } from "react-icons/md";
import { FaChild, FaPerson, FaWheelchair } from "react-icons/fa6";

function SelectorPersonas({ register, setValue, watch }) {
  const [open, setOpen] = useState(false);
  const [adultos, setAdultos] = useState(2);
  const [ninios, setNinios] = useState(0);
  const [descuentos, setDescuentos] = useState(false);
  const [discapacidad, setDiscapacidad] = useState(false);

  const selectedDiscapacidad = watch("selectedDiscapacidad", {
    adultos: [],
    ninios: [],
  });

  const selectedDescuentos = watch("selectedDescuentos", {
    adultos: [],
    ninios: [],
  });

  function handleAdultosChange(e) {
    const value = Number(e.target.value);
    setAdultos(value);
    setValue("adultos", value);
  }

  function handleNiniosChange(e) {
    const value = Number(e.target.value);
    setNinios(value);
    console.log(value);
    setValue("ninios", value);
  }

  function handleDiscapacidadSelection(type, index) {
    const updatedSelection = { ...selectedDiscapacidad };
    updatedSelection[type][index] = updatedSelection[type][index] === 1 ? 0 : 1;
    setValue("selectedDiscapacidad", updatedSelection);
  }

  function handleDescuentosSelection(type, index, value) {
    const updatedSelection = { ...selectedDescuentos };
    updatedSelection[type][index] = Number(value);
    setValue("selectedDescuentos", updatedSelection);
  }

  return (
    <div className="tw-relative tw-w-full">
      <Popover
        open={open}
        onOpenChange={setOpen}
        content={
          <div className="tw-rounded-lg tw-overflow-hidden">
            <div className="tw-bg-slate-800 tw-p-4">
              <h3 className="tw-text-white tw-font-bold">Bonificaciones</h3>
            </div>
            <div className="tw-bg-white dark:tw-bg-slate-800 tw-rounded-lg tw-p-4 tw-w-[350px]">
              <span className="tw-text-sm ">Adultos</span>
              <div className="tw-relative">
                <select
                  {...register("adultos")}
                  onChange={handleAdultosChange}
                  className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-h-[40px] tw-pl-10 tw-w-full tw-cursor-pointer"
                >
                  {[...Array(6)].map((_, i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
                <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
                  <FaPerson />
                </div>
              </div>
              <span className="tw-text-sm tw-mt-3">Niños</span>
              <div className="tw-relative">
                <select
                  {...register("ninios")}
                  onChange={handleNiniosChange}
                  className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-h-[40px] tw-pl-10 tw-w-full tw-cursor-pointer"
                >
                  {[...Array(4)].map((_, i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
                <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
                  <FaChild />
                </div>
              </div>
              <div className="tw-flex tw-justify-between tw-mt-3">
                <label className="tw-inline-flex tw-items-center">
                  <input
                    className="tw-text-secondary"
                    type="checkbox"
                    {...register("descuentos")}
                    onChange={() => setDescuentos(!descuentos)}
                  />
                  <span className="tw-ms-1 tw-text-sm tw-text-secon">
                    Descuentos
                  </span>
                </label>
                <label className="tw-inline-flex tw-items-center">
                  <input
                    className="tw-text-secondary"
                    type="checkbox"
                    {...register("discapacidad")}
                    onChange={() => setDiscapacidad(!discapacidad)}
                  />
                  <span className="tw-ms-1 tw-text-sm">Discapacidad</span>
                </label>
              </div>
              {(descuentos || discapacidad) && (
                <div className="tw-flex tw-flex-col tw-space-y-2 tw-mt-4">
                  {[...Array(adultos)].map((_, index) => (
                    <div
                      key={`adulto-${index}`}
                      className="tw-flex tw-items-center tw-space-x-2"
                    >
                      <span className="tw-w-[60px]">Adulto {index + 1}:</span>
                      {descuentos && (
                        <select
                          value={selectedDescuentos.adultos[index] || ""}
                          onChange={(e) =>
                            handleDescuentosSelection(
                              "adultos",
                              index,
                              e.target.value
                            )
                          }
                          className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-h-[40px] tw-cursor-pointer"
                        >
                          <option value={0}>Ninguno</option>
                          <option value={1}>Familia numerosa general</option>
                          <option value={2}>Familia numerosa especial</option>
                          <option value={3}>Interrail español</option>
                        </select>
                      )}
                      {discapacidad && (
                        <button
                          type="button"
                          onClick={() =>
                            handleDiscapacidadSelection("adultos", index)
                          }
                          className={`tw-p-2 tw-rounded-lg ${
                            selectedDiscapacidad.adultos[index] === 1
                              ? "tw-bg-blue-500 text-white"
                              : "tw-bg-gray-200 tw-text-gray-400"
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
                      className="tw-flex tw-items-center tw-space-x-2"
                    >
                      <span className="tw-w-[60px]">Niño {index + 1}:</span>
                      {descuentos && (
                        <select
                          value={selectedDescuentos.ninios[index] || ""}
                          onChange={(e) =>
                            handleDescuentosSelection(
                              "ninios",
                              index,
                              e.target.value
                            )
                          }
                          className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-h-[40px] tw-cursor-pointer"
                        >
                          <option value={0}>Ninguno</option>
                          <option value={1}>Familia numerosa general</option>
                          <option value={2}>Familia numerosa especial</option>
                        </select>
                      )}
                      {discapacidad && (
                        <button
                          type="button"
                          onClick={() =>
                            handleDiscapacidadSelection("ninios", index)
                          }
                          className={`tw-p-2 tw-rounded-lg ${
                            selectedDiscapacidad.ninios[index] === 1
                              ? "tw-bg-blue-500 text-white"
                              : "tw-bg-gray-200 tw-text-gray-400"
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
        <div className="tw-bg-white tw-cursor-pointer tw-flex tw-items-center dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:tw-placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-secondary dark:focus:tw-border-secondary tw-text-slate-700 tw-border-2 tw-h-[40px] tw-rounded-lg tw-text-sm tw-pl-10">
          {adultos} adultos {ninios} niños
        </div>
      </Popover>
      <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-secondary dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white  tw-h-[40px] tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
        <MdPeopleAlt />
      </div>
    </div>
  );
}

export default SelectorPersonas;
