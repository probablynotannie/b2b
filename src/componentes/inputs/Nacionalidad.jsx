import { useState } from "react";
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

const InputNacionalidad = ({
  tipo,
  name,
  register,
  errors,
  required,
  setValue,
}) => {
  const [valorInput, setValorInput] = useState("");
  const [sugerencias, setSugerencias] = useState([]);

  const error = errors?.[name];

  const manejarCambio = (e) => {
    const valor = e.target.value;
    setValorInput(valor);
    setValue(tipo, valor);

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
    setValue(tipo, sugerencia); 
    setSugerencias([]); 
  };

  return (
    <div className="tw-relative">
      <input
        {...register(
          name,
          required ? { required: `${tipo} es obligatorio` } : {}
        )}
        type="text"
        value={valorInput}
        onChange={manejarCambio}
        placeholder={tipo || "Selecciona tu nacionalidad"}
        className="tw-w-full tw-border tw-border-slate-200 tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:tw-placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-text-sm tw-rounded-lg tw-pl-10 tw-h-[40px]"
      />
      {sugerencias.length > 0 && (
        <ul className="tw-absolute tw-z-10 tw-w-full tw-bg-white tw-border tw-border-gray-300 tw-rounded-md tw-shadow-lg tw-max-h-48 tw-overflow-y-auto">
          {sugerencias.map((sugerencia, index) => (
            <li
              key={index}
              onMouseDown={(e) => e.preventDefault()} // Prevents input losing focus
              onClick={() => manejarClickSugerencia(sugerencia)}
              className="tw-px-3 tw-py-2 tw-cursor-pointer hover:tw-bg-blue-100 tw-border-b last:tw-border-none tw-border-gray-200"
            >
              {sugerencia}
            </li>
          ))}
        </ul>
      )}
      <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-[40px] tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
        <FaGlobe />
      </div>

      {error && <p className="tw-text-danger tw-text-xs">{error.message}</p>}
    </div>
  );
};

export default InputNacionalidad;
