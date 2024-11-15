import React, { useState } from "react";

function Regimenes({ selected, onChange }) {
  const options = [
    { id: 1, label: "Solo alojamiento" },
    { id: 2, label: "Alojamiento y desayuno" },
    { id: 3, label: "Pensión completa" },
  ];

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    onChange((prev) => {
      if (prev.includes(value)) {
        return prev.filter((option) => option !== value); // Remove if selected
      } else {
        return [...prev, value]; // Add if not selected
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
            value={option.label}
            checked={selected.includes(option.label)} // Check if selected
            onChange={handleCheckboxChange}
            className="w-4 h-4 text-secondary bg-gray-100  dark:bg-slate-700 dark:border-slate-600 border-gray-300 rounded focus:ring-secondary focus:ring-2"
          />
          <label
            htmlFor={`regimen_${option.id}`}
            className="ml-2 text-sm text-gray-900 dark:text-slate-400"
          >
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
}

export default Regimenes;
