import React, { useState, useEffect } from "react";
import { FaGlobe } from "react-icons/fa";

const nacionalidades = [
  "Afgano",
  "Albanés",
  "Argelino",
  "Americano",
  "Andorrano",
  "Angoleño",
  "Antiguano",
  "Argentino",
  "Armenio",
  "Australiano",
  "Austriaco",
  "Azerbaiyano",
];

const InputNacionalidad = ({ value, setValue }) => {
  const [valorInput, setValorInput] = useState(value);
  const [sugerencias, setSugerencias] = useState([]);

  useEffect(() => {
    setValorInput(value);
  }, [value]);

  const manejarCambio = (e) => {
    const valor = e.target.value;
    setValorInput(valor);

    if (valor.length > 0) {
      const sugerenciasFiltradas = nacionalidades.filter((nacionalidad) =>
        nacionalidad.toLowerCase().includes(valor.toLowerCase())
      );
      setSugerencias(sugerenciasFiltradas);
    } else {
      setSugerencias([]);
    }
  };

  const manejarClickSugerencia = (sugerencia) => {
    setValorInput(sugerencia);
    setSugerencias([]);
    setValue(sugerencia);
  };

  return (
    <div className="tw-relative tw-text-black">
      <input
        type="text"
        value={valorInput}
        onChange={manejarCambio}
        placeholder="Introduce la nacionalidad"
        className="tw-w-full dark:tw-placeholder-slate-400 dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-pl-10 tw-text-sm tw-py-2.5 tw-border dark:tw-border-2 tw-border-gray-300 tw-rounded-md focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-blue-500"
      />
      {sugerencias.length > 0 && (
        <ul className="tw-absolute tw-z-10 tw-w-full tw-bg-white tw-border tw-border-gray-300 tw-rounded-md tw-shadow-lg tw-max-h-48 tw-overflow-y-auto">
          {sugerencias.map((sugerencia, index) => (
            <li
              key={index}
              onClick={() => manejarClickSugerencia(sugerencia)}
              className="tw-px-3 tw-py-2 tw-cursor-pointer hover:tw-bg-blue-100 tw-border-b last:tw-border-none tw-border-gray-200"
            >
              {sugerencia}
            </li>
          ))}
        </ul>
      )}
      <div className="tw-absolute dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-top-0 tw-pointer-events-none tw-bg-inputIcon tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
        <FaGlobe />
      </div>
    </div>
  );
};

export default InputNacionalidad;
