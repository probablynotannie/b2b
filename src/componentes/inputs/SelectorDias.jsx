import { FaClock } from "react-icons/fa";

function SelectorDias({ duracion, setDuracion }) {
  const handleDurationChange = (event) => {
    const selectedValue = event.target.value;
    setDuracion(Number(selectedValue));
  };

  return (
    <div className="tw-relative">
      <select
        id="habitaciones"
        className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-pl-10 tw-w-full tw-cursor-pointer"
        value={duracion}
        onChange={handleDurationChange}
      >
        <option value={0}>Cualquier duración</option>
        <option value={1}>1-6 días</option>
        <option value={2}>7-8 días</option>
        <option value={3}>9-12 días</option>
        <option value={4}>Más de 12 días</option>
      </select>
      <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
        <FaClock />
      </div>
    </div>
  );
}

export default SelectorDias;
