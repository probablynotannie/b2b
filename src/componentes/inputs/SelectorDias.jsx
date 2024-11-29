import { FaClock } from "react-icons/fa";
function SelectorDias() {
  return (
    <div className="relative">
      <select
        id="habitaciones"
        className="border bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5 pl-10 w-full cursor-pointer"
      >
        <option value={0} selected>
          Cualquier duración
        </option>
        <option value={1}>1-6 días</option>
        <option value={2}>7-8 días</option>
        <option value={3}>9-12 días</option>
        <option value={3}>Más de 12 días</option>
      </select>
      <div className="absolute top-0 pointer-events-none bg-inputIcon text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl dark:bg-slate-800 dark:border-slate-600 dark:border-y-2 dark:border-l-2">
        <FaClock />
      </div>
    </div>
  );
}

export default SelectorDias;
