import { FaShip } from "react-icons/fa";

function Navieras({ destinos, naviera, setNaviera }) {
  const handleDestinationChange = (event) => {
    setNaviera(event.target.value);
  };

  return (
    <div className="relative flex w-full">
      <select
        value={naviera}
        onChange={handleDestinationChange}
        className="border bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5 pl-10 w-full cursor-pointer"
      >
        <option value="">Todos los Navieras</option>
        {destinos.map((group) => (
          <optgroup key={group.label} label={group.label}>
            {group.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
      <div className="absolute top-0 pointer-events-none bg-inputIcon dark:bg-slate-800 dark:border-slate-600 dark:border-y-2 dark:border-l-2 text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl">
        <FaShip />
      </div>
    </div>
  );
}

export default Navieras;
