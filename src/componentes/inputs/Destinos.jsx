import { FaMap } from "react-icons/fa";
import { useController } from "react-hook-form";

function Destinos({ control, name, placeholder, datos, required }) {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { required: required ? "Este campo es obligatorio" : false },
    defaultValue: "",
  });

  const groupedDestinos = {
    destacados: datos.filter((zona) => zona.destacado === 1),
    resto: datos.filter((zona) => zona.destacado === 0),
  };

  // onChange passes number value back to react-hook-form
  const handleChange = (e) => {
    const val = e.target.value;
    onChange(val === "" ? "" : Number(val));
  };

  return (
    <div className="tw-relative tw-w-full">
      <div className="tw-relative tw-flex tw-w-full">
        <select
          value={value === undefined || value === null ? "" : String(value)}
          onChange={handleChange}
          className={`tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:tw-placeholder-slate-400 dark:tw-text-white dark:tw-focus:ring-slate-600 dark:tw-focus:border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-h-[40px] tw-pl-10 tw-w-full tw-cursor-pointer ${
            error ? "tw-border-red-500" : ""
          }`}
        >
          <option value="">{placeholder || "Todos los destinos"}</option>

          {groupedDestinos.destacados.length > 0 && (
            <optgroup label="Destacados">
              {groupedDestinos.destacados.map((zona) => (
                <option
                  key={zona.id_zona_destino}
                  value={String(zona.id_zona_destino)}
                >
                  {zona.name}
                </option>
              ))}
            </optgroup>
          )}

          {groupedDestinos.resto.length > 0 && (
            <optgroup
              label={
                groupedDestinos.destacados.length > 0 ? "Destinos" : "El resto"
              }
            >
              {groupedDestinos.resto.map((zona) => (
                <option
                  key={zona.name_zona}
                  value={String(zona.id_zona_destino)}
                >
                  {zona.name}
                </option>
              ))}
            </optgroup>
          )}
        </select>

        <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-[40px] tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
          <FaMap />
        </div>
      </div>

      {error && <p className="tw-text-danger tw-text-sm">{error.message}</p>}
    </div>
  );
}

export default Destinos;
