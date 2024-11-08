import { useState } from "react";
import { FaTrainSubway } from "react-icons/fa6";

// Sample data to be passed as props
const destinationData = [
  {
    label: "Destacados",
    options: [
      { value: "Mediterraneo", label: "Mediterraneo" },
      {
        value: "Norte de Europa y Fiordos",
        label: "Norte de Europa y Fiordos",
      },
      { value: "Posicionales", label: "Posicionales" },
    ],
  },
  {
    label: "Resto",
    options: [
      { value: "Africa", label: "Africa" },
      { value: "Caribe", label: "Caribe" },
      { value: "Emiratos y Mar Rojo", label: "Emiratos y Mar Rojo" },
      { value: "Persian Gulf", label: "Persian Gulf" },
      { value: "Round World", label: "Round World" },
    ],
  },
];

function Navieras({ destinations = destinationData }) {
  const [selectedDestination, setSelectedDestination] = useState("");

  const handleDestinationChange = (event) => {
    setSelectedDestination(event.target.value);
  };

  return (
    <div className="relative flex w-full">
      {" "}
      {/* Make sure the parent has a width */}
      <select
        value={selectedDestination}
        onChange={handleDestinationChange}
        className="border bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5 pl-10 w-full cursor-pointer"

      >
        {/* Default option */}
        <option value="">Todos los Navieras</option>

        {/* Dynamic optgroups */}
        {destinations.map((group) => (
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
        <FaTrainSubway />                 
       </div>
 
    </div>
  );
}

export default Navieras;
