import { useState } from "react";

function Residentes() {
  const [residente, setResidente] = useState("");
  const [municipio, setMunicipio] = useState("");

  const handleResidenteChange = (event) => {
    setResidente(event.target.value);
  };

  const handleMunicipioChange = (event) => {
    setMunicipio(event.target.value);
  };

  return (
    <div className="tw-space-y-3">
      <div>
        <span>Residente?</span>
        <select
          className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-w-full tw-cursor-pointer"
          value={residente}
          onChange={handleResidenteChange}
        >
          <option value={0}>---</option>
          <option value={1}>Residente en Ceuta o Melilla</option>
        </select>
      </div>
      {residente === "1" && (
        <div>
          <span>Municipio?</span>
          <select
            className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-w-full tw-cursor-pointer"
            value={municipio}
            onChange={handleMunicipioChange}
          >
            <option value={0}>---</option>
            <option value={1}>Ceuta</option>
            <option value={2}>Melilla</option>
          </select>
        </div>
      )}
    </div>
  );
}

export default Residentes;
