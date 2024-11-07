import React, { useState } from "react";

const Regimenes = () => {
  const options = [
    { id: 1, tipo: "SA", label: "Solo alojamiento" },
    { id: 2, tipo: "AD", label: "Alojamiento y desayuno" },
    { id: 3, tipo: "PC", label: "Pension completa" },
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

  // Map selected options to their labels
  const selectedLabels = options
    .filter((option) => selectedOptions.includes(option.id))
    .map((option) => option.label)
    .join(", ");

  return (
    <div>
      <button
        type="button"
        onClick={toggleDropdown}
        className="shadow p-2 w-full border-2 bg-white font-semibold text-slate-700  rounded-lg"
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
                  className="mr-2 w-4 h-4 text-secondary border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
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

export default Regimenes;
