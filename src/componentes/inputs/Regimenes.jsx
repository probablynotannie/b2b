import { useState } from "react";
import { FaBowlFood } from "react-icons/fa6";

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

  return (
    <div>
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          className="tw-relative tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-h-[40px] tw-pl-10 tw-w-full tw-cursor-pointer"
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          Elige regimen
          <div className="tw-absolute tw-top-0 tw-left-0 tw-pointer-events-none tw-bg-inputIcon dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-lg">
            <FaBowlFood />
          </div>
        </button>
      </div>
      {isOpen && (
        <div
          className="tw-absolute tw-z-10 tw-w-fit tw-mt-2 tw-rounded-md tw-shadow-lg tw-bg-white tw-ring-1 tw-ring-black tw-ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <ul className="tw-py-1">
            {options.map((option) => (
              <li
                key={option.id}
                className="tw-flex tw-items-center tw-px-4 tw-py-2 tw-text-sm tw-text-gray-700"
              >
                <input
                  type="checkbox"
                  value={option.id}
                  id={`checkbox-${option.id}`}
                  checked={selectedOptions.includes(option.id)}
                  onChange={handleCheckboxChange}
                  className="tw-mr-2 tw-w-4 tw-h-4 tw-text-secondary tw-border-gray-300 tw-rounded focus:tw-ring-blue-500 focus:tw-ring-2"
                />
                <label
                  htmlFor={`checkbox-${option.id}`}
                  className="tw-cursor-pointer"
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
