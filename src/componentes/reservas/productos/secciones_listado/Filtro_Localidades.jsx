import React, { useState } from "react";

function Localidades({ selected, onChange }) {
  const options = [
    { id: 1, label: "Alicante" },
    { id: 2, label: "Almería" },
    { id: 3, label: "Badajoz" },
    { id: 4, label: "Barcelona" },
    { id: 5, label: "Bilbao" },
    { id: 6, label: "Cádiz" },
    { id: 7, label: "Córdoba" },
    { id: 8, label: "Granada" },
    { id: 9, label: "Gijón" },
    { id: 10, label: "Huelva" },
    { id: 11, label: "La Coruña" },
    { id: 12, label: "León" },
    { id: 13, label: "Madrid" },
    { id: 14, label: "Málaga" },
    { id: 15, label: "Murcia" },
    { id: 16, label: "Palma de Mallorca" },
    { id: 17, label: "Salamanca" },
    { id: 18, label: "San Sebastián" },
    { id: 19, label: "Santiago de Compostela" },
    { id: 20, label: "Sevilla" },
    { id: 21, label: "Tarragona" },
    { id: 22, label: "Toledo" },
    { id: 23, label: "Valencia" },
    { id: 24, label: "Vigo" },
    { id: 25, label: "Zaragoza" },
  ];

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    onChange((prev) => {
      // Toggle the selected locality
      if (prev.includes(value)) {
        return prev.filter((option) => option !== value);
      } else {
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
            id={`localidad_${option.id}`}
            value={option.label}
            checked={selected.includes(option.label)} // Check if the option is selected
            onChange={handleCheckboxChange}
            className="w-4 h-4 text-secondary bg-gray-100 dark:bg-slate-700 dark:border-slate-600 border-gray-300 rounded focus:ring-secondary focus:ring-2"
          />
          <label
            htmlFor={`localidad_${option.id}`}
            className="ml-2 text-sm text-gray-900 dark:text-slate-400"
          >
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
}

export default Localidades;
