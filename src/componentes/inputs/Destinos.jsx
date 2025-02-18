import { FaMap } from "react-icons/fa";

function Destinos({ placeholder, destino, setDestino, datos }) {
  const handleDestinationChange = (event) => {
    setDestino(Number(event.target.value));
  };
  console.log(datos);
  const groupedDestinos = {
    destacados: datos.filter((zona) => zona.destacado === 1),
    resto: datos.filter((zona) => zona.destacado === 0),
  };
  return (
    <div className="tw-relative tw-flex tw-w-full">
      <select
        value={destino}
        onChange={handleDestinationChange}
        className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:tw-placeholder-slate-400 dark:tw-text-white dark:tw-focus:ring-slate-600 dark:tw-focus:border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-pl-10 tw-w-full tw-cursor-pointer"
      >
        <option value="">
          {placeholder ? placeholder : "Todos los destinos"}
        </option>
        {groupedDestinos.destacados.length > 0 && (
          <optgroup label="Destacados">
            {groupedDestinos.destacados.map((zona) => (
              <option key={zona.id_zona_destino} value={zona.id_zona_destino}>
                {zona.name}
              </option>
            ))}
          </optgroup>
        )}
        {groupedDestinos.resto.length > 0 && (
          <optgroup
            label={
              groupedDestinos.destacados.lenth > 0 ? "Destinos" : "El resto"
            }
          >
            {groupedDestinos.resto.map((zona) => (
              <option key={zona.id_zona_destino} value={zona.id_zona_destino}>
                {zona.name}
              </option>
            ))}
          </optgroup>
        )}
      </select>

      <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
        <FaMap />
      </div>
    </div>
  );
}

export default Destinos;
