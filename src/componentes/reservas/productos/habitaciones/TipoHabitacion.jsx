// src/DropdownCheckboxSelector.js
import React, { useState } from "react";

const DropdownCheckboxSelector = () => {
  const options = [
    { id: 1, label: "Solo alojamiento" },
    { id: 2, label: "Alojamiento y desayuno" },
    { id: 3, label: "Pension completa" },
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckboxChange = (event) => {
    const value = parseInt(event.target.value);

    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-slate-200 px-10 py-10 rounded-lg shadow-lg">
      <button
        type="button"
        onClick={toggleDropdown}
        className="shadow-xl p-2 px-7 border-2 bg-white font-semibold text-slate-600 border-slate-500 rounded-lg"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        Elige regimen
      </button>

      {isOpen && (
        <div
          className="absolute z-10 w-fit mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <ul className="py-1">
            {options.map((option) => (
              <li
                key={option.id}
                className="flex items-center px-4 py-2 text-sm text-gray-700"
              >
                <input
                  type="checkbox"
                  value={option.id}
                  id={`checkbox-${option.id}`}
                  checked={selectedOptions.includes(option.id)}
                  onChange={handleCheckboxChange}
                  className="mr-2 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                />
                <label
                  htmlFor={`checkbox-${option.id}`}
                  className="cursor-pointer"
                >
                  {option.label}
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownCheckboxSelector;
