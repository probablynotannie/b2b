import { useState } from "react";
import { Popover } from "flowbite-react";
import { MdPeopleAlt } from "react-icons/md";
function Bonificacion({ ages, setAges, pasajeros, setPasajeros }) {
  const [open, setOpen] = useState(false);
  const [fuerza, setFuerza] = useState("");
  const [especialidad, setEspecialidad] = useState("");
  const handleSelectChange = (e) => {
    const value = Number(e.target.value);
    setPasajeros(value);
    const newAges = {};
    for (let i = 1; i <= value; i++) {
      newAges[i] = "";
    }
    setAges(newAges);
  };
  const handleAgeChange = (index, value) => {
    setAges((prev) => ({ ...prev, [index]: value }));
  };
  const handleForceChange = (e) => {
    setFuerza(e.target.value);
    setEspecialidad("");
  };
  const handleEspecialidadChange = (e) => {
    setEspecialidad(e.target.value);
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
              Tipo de bonificacion
            </div>
            <div className="tw-w-96 tw-space-y-3 tw-p-4 tw-text-sm tw-text-gray-500">
              <div>
                <div className="tw-relative">
                  <select
                    value={pasajeros}
                    onChange={handleSelectChange}
                    className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-w-full tw-cursor-pointer"
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                  </select>
                  <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2">
                    <MdPeopleAlt />
                  </div>
                </div>
              </div>
              <div className="tw-grid tw-grid-cols-4 tw-gap-2">
                {Array.from({ length: pasajeros }).map((_, index) => (
                  <div key={index} className="tw-relative">
                    <input
                      type="number"
                      placeholder={`Edad ${index + 1}`}
                      value={ages[index + 1] || ""}
                      onChange={(e) =>
                        handleAgeChange(index + 1, e.target.value)
                      }
                      className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-w-full tw-cursor-pointer"
                    />
                  </div>
                ))}
              </div>
              <div>
                <span>Residente?</span>
                <select className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-w-full tw-cursor-pointer">
                  <option value={0}>---</option>
                  <option value={"Residente"}>
                    Residente en Ceuta o Melilla
                  </option>
                </select>
              </div>
              <div>
                <span>Municipio?</span>
                <select className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-w-full tw-cursor-pointer">
                  <option value={"---"}>---</option>
                  <option value={"Ceuta"}>Ceuta</option>
                  <option value={"Melilla"}>Melilla</option>
                </select>
              </div>
              <div>
                <span>Fuerza militar?</span>
                <select
                  value={fuerza}
                  onChange={handleForceChange}
                  className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-w-full tw-cursor-pointer"
                >
                  <option value={"---"}>---</option>
                  <option value={"ejercito_tierra"}>Ejército de tierra</option>
                  <option value={"ejercito_aire"}>Ejército de aire</option>
                  <option value={"familia_especial"}>Family Especial</option>
                  <option value={"fuerza_naval"}>Fuerza Naval</option>
                  <option value={"fuerza_general"}>Family General</option>
                </select>
              </div>
              {fuerza === "ejercito_tierra" && (
                <div>
                  <span>Especialidad Tierra</span>
                  <select
                    value={especialidad}
                    onChange={handleEspecialidadChange}
                    className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-w-full tw-cursor-pointer"
                  >
                    <option value={"infanteria"}>Infantería</option>
                    <option value={"artilleria"}>Artillería</option>
                    <option value={"caballeria"}>Caballería</option>
                  </select>
                </div>
              )}
              {fuerza === "ejercito_aire" && (
                <div>
                  <span>Especialidad Aire</span>
                  <select
                    value={especialidad}
                    onChange={handleEspecialidadChange}
                    className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-w-full tw-cursor-pointer"
                  >
                    <option value={"tropa_marineria"}>
                      Militares de tropa y marinería
                    </option>
                    <option value={"generales_almirantes"}>
                      Oficiales Generales y Almirantes
                    </option>
                    <option value={"oficiales_sub"}>
                      Oficiales y Suboficiales
                    </option>
                  </select>
                </div>
              )}
              {fuerza === "fuerza_naval" && (
                <div>
                  <span>Especialidad Naval</span>
                  <select
                    value={especialidad}
                    onChange={handleEspecialidadChange}
                    className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-w-full tw-cursor-pointer"
                  >
                    <option value={"tropa_marineria"}>
                      Militares de tropa y marinería
                    </option>
                    <option value={"generales_almirantes"}>
                      Oficiales Generales y Almirantes
                    </option>
                    <option value={"oficiales_sub"}>
                      Oficiales y Suboficiales
                    </option>
                  </select>
                </div>
              )}
            </div>
          </div>
        }
      >
        <div className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-h-[40px] tw-pl-10 tw-w-full tw-cursor-pointer">
          Bonificación/es
        </div>
      </Popover>
      <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2">
        <MdPeopleAlt />
      </div>
    </div>
  );
}

export default Bonificacion;
