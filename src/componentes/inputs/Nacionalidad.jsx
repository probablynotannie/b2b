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
    <div className="relative text-black">
      <input
        type="text"
        value={valorInput}
        onChange={manejarCambio}
        placeholder="Introduce la nacionalidad"
        className="w-full dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 pl-10 text-sm py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {sugerencias.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-48 overflow-y-auto">
          {sugerencias.map((sugerencia, index) => (
            <li
              key={index}
              onClick={() => manejarClickSugerencia(sugerencia)}
              className="px-3 py-2 cursor-pointer hover:bg-blue-100 border-b last:border-none border-gray-200"
            >
              {sugerencia}
            </li>
          ))}
        </ul>
      )}
      <div className="absolute dark:bg-slate-800 dark:border-slate-600 dark:border-y-2 dark:border-l-2 top-0 pointer-events-none bg-inputIcon text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl">
        <FaGlobe />
      </div>
    </div>
  );
};

export default InputNacionalidad;
