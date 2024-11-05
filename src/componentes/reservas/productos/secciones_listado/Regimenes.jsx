import React, { useState } from "react";

function Regimenes() {
  const options = [
    { id: 1, label: "Solo alojamiento" },
    { id: 2, label: "Alojamiento y desayuno" },
    { id: 3, label: "Pensión completa" },
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    setSelectedOptions((prev) => {
      if (prev.includes(value)) {
        // If already selected, remove it from the array
        return prev.filter((option) => option !== value);
      } else {
        // If not selected, add it to the array
        return [...prev, value];
      }
    });
  };

  return (
    <div>
      {options.map((option) => (
        <div key={option.id} className="flex items-center mb-2">
          <input
            type="checkbox"
            id={`regimen_${option.id}`}
            value={option.label} // Use the label as value
            onChange={handleCheckboxChange}
            className="w-4 h-4 text-secondary bg-gray-100 border-gray-300 rounded focus:ring-secondary focus:ring-2"
          />
          <label
            htmlFor={`regimen_${option.id}`}
            className="ml-2 text-sm  text-gray-900"
          >
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
}

export default Regimenes;
