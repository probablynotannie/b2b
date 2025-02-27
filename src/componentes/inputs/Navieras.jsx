import { FaShip } from "react-icons/fa";

function Navieras({ datos, naviera, setNaviera, placeholder }) {
  const handleDestinationChange = (event) => {
    setNaviera(Number(event.target.value));
  };
  const groupedpuertos = {
    destacados: datos.filter((zona) => zona.destacado === 1),
    resto: datos.filter((zona) => zona.destacado === 0),
  };
  return (
    <div className="tw-relative tw-flex tw-w-full">
      <select
        value={naviera}
        onChange={handleDestinationChange}
        className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:tw-placeholder-slate-400 dark:tw-text-white dark:tw-focus:ring-slate-600 dark:tw-focus:border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-h-[40px] tw-pl-10 tw-w-full tw-cursor-pointer"
      >
        <option value="">
          {placeholder ? placeholder : "Todas las navieras"}
        </option>
        {groupedpuertos.destacados.length > 0 && (
          <optgroup label="Destacados">
            {groupedpuertos.destacados.map((zona) => (
              <option key={zona.id_naviera} value={zona.id_naviera}>
                {zona.name}
              </option>
            ))}
          </optgroup>
        )}
        {groupedpuertos.resto.length > 0 && (
          <optgroup
            label={
              groupedpuertos.destacados.lenth > 0 ? "El resto" : "Navieras"
            }
          >
            {groupedpuertos.resto.map((zona) => (
              <option key={zona.id_zona_puertos} value={zona.id_naviera}>
                {zona.name_naviera}
              </option>
            ))}
          </optgroup>
        )}
      </select>

      <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-[40px] tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
        <FaShip />
      </div>
    </div>
  );
}

export default Navieras;
