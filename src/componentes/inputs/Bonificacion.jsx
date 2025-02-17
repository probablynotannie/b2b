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
    <div className="relative w-full">
      <Popover
        placement="right"
        aria-labelledby="area-popover"
        open={open}
        onOpenChange={setOpen}
        content={
          <div>
            <div className="bg-slate-800 text-white h-14 flex items-center pl-4 font-semibold">
              Tipo de bonificacion
            </div>
            <div className="w-96 space-y-3 p-4 text-sm text-gray-500">
              <div>
                <div className="relative">
                  <select
                    value={pasajeros}
                    onChange={handleSelectChange}
                    className="border bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5  w-full cursor-pointer"
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                  </select>
                  <div className="absolute top-0 pointer-events-none tw-bg-inputIcon text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl dark:bg-slate-800 dark:border-slate-600 dark:border-y-2 dark:border-l-2">
                    <MdPeopleAlt />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {Array.from({ length: pasajeros }).map((_, index) => (
                  <div key={index} className="relative">
                    <input
                      type="number"
                      placeholder={`Edad ${index + 1}`}
                      value={ages[index + 1] || ""}
                      onChange={(e) =>
                        handleAgeChange(index + 1, e.target.value)
                      }
                      className="border bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5  w-full cursor-pointer"
                    />
                  </div>
                ))}
              </div>
              <div>
                <span>Residente?</span>
                <select className="border bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5  w-full cursor-pointer">
                  <option value={0}>---</option>
                  <option value={"Residente"}>
                    Residente en Ceuta o Melilla
                  </option>
                </select>
              </div>
              <div>
                <span>Municipio?</span>
                <select className="border bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5  w-full cursor-pointer">
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
                  className="border bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5  w-full cursor-pointer"
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
                    className="border bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5  w-full cursor-pointer"
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
                    className="border bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5  w-full cursor-pointer"
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
                    className="border bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5  w-full cursor-pointer"
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
        <div className="border bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5 pl-10 w-full cursor-pointer">
          Bonificación/es
        </div>
      </Popover>
      <div className="absolute top-0 pointer-events-none tw-bg-inputIcon text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl dark:bg-slate-800 dark:border-slate-600 dark:border-y-2 dark:border-l-2">
        <MdPeopleAlt />
      </div>
    </div>
  );
}

export default Bonificacion;
