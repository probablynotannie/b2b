import { useState } from "react";
function Fuerza() {
  const [fuerza, setFuerza] = useState("");
  const [especialidad, setEspecialidad] = useState("");

  const handleForceChange = (e) => {
    setFuerza(e.target.value);
    setEspecialidad("");
  };
  const handleEspecialidadChange = (e) => {
    setEspecialidad(e.target.value);
  };
  return (
    <div className="tw-space-y-3">
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
            <option value={"oficiales_sub"}>Oficiales y Suboficiales</option>
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
            <option value={"oficiales_sub"}>Oficiales y Suboficiales</option>
          </select>
        </div>
      )}
    </div>
  );
}

export default Fuerza;
