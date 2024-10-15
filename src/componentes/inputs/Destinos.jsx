import React, { useState } from "react";
import { FaMap } from "react-icons/fa";

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

function Destinos({ destinations = destinationData }) {
  const [selectedDestination, setSelectedDestination] = useState("");

  const handleDestinationChange = (event) => {
    setSelectedDestination(event.target.value);
  };

  return (
    <div className="relative flex w-full">
      <select
        value={selectedDestination}
        onChange={handleDestinationChange}
        className="w-full p-2.5 border border-gray-300 focus:outline-none text-slate-950 text-sm focus:border-gray-400 pl-10 rounded-lg box-border"
      >
        <option value="">Todos los destinos</option>
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
      <div className="absolute top-0 left-0 pointer-events-none bg-inputIcon text-white h-full rounded-tl-md rounded-bl-md flex items-center justify-center w-8 text-lg">
        <FaMap />
      </div>
    </div>
  );
}

export default Destinos;
