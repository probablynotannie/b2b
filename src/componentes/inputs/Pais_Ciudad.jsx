import { useState } from "react";
import {
  FaGlobeAfrica,
  FaGlobeAsia,
  FaGlobeEurope,
  FaGlobeAmericas,
} from "react-icons/fa";
import { FaMap } from "react-icons/fa";

function SelectorPaisCiudad() {
  const [selectedContinent, setSelectedContinent] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [step, setStep] = useState(1);
  const continents = [
    { name: "Africa", shortName: "AF", flag: <FaGlobeAfrica /> },
    { name: "América", shortName: "AM", flag: <FaGlobeAmericas /> },
    { name: "Asia", shortName: "AS", flag: <FaGlobeAsia /> },
    { name: "Europa", shortName: "EU", flag: <FaGlobeEurope /> },
    { name: "Oceanía", shortName: "OC", flag: <FaGlobeEurope /> },
    {
      name: "Haiku",
      shortName: "HK",
      flag: <img src="../../logo.png" className="w-5 h-4" />,
    },
  ];
  const regions = {
    AF: ["Nigeria", "Africa", "Egipto"],
    AM: ["USA", "Canada", "Mexico"],
    AS: ["China", "Japón", "India"],
    EU: ["Alemania", "Francia", "Italia"],
    OC: ["Australia", "Fiji"],
    HK: ["Hola", "Haiku", "Vuela"],
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    if (!isDropdownOpen) {
      setStep(1);
    }
  };
  const selectContinent = (continent) => {
    setSelectedContinent(continent);
    setSelectedRegion("");

    setStep(2);
  };
  const selectRegion = (region) => {
    setSelectedRegion(region);
    setIsDropdownOpen(false);
  };
  return (
    <div className="relative w-full">
      <button
        className="bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border px-2 pl-9 border-gray-300 text-slate-950 text-sm rounded-lg w-full py-3 flex items-center justify-between"
        type="button"
        onClick={toggleDropdown}
      >
        <span className="mx-2 overflow-hidden text-ellipsis whitespace-nowrap">
          {selectedRegion
            ? selectedContinent.name + " - " + selectedRegion
            : "Selecciona continente y región"}
        </span>
        <svg
          className="w-2.5 h-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      <div className="absolute top-0 pointer-events-none bg-inputIcon dark:bg-slate-800 dark:border-slate-600 dark:border-y-2 dark:border-l-2 text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl">
        <FaMap />
      </div>

      {isDropdownOpen && (
        <div className="absolute z-10 mt-2 bg-white divide-y divide-gray-100 shadow w-full">
          <ul className="py-2 text-sm text-gray-700">
            {step === 1
              ? continents.map((continent) => (
                  <li key={continent.name}>
                    <button
                      type="button"
                      className="inline-flex w-full px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={() => selectContinent(continent)}
                    >
                      <span className="mr-2">{continent.flag}</span>
                      {continent.name}
                    </button>
                  </li>
                ))
              : regions[selectedContinent.shortName].map((region) => (
                  <li key={region}>
                    <button
                      type="button"
                      className="inline-flex w-full px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={() => selectRegion(region)}
                    >
                      {region}
                    </button>
                  </li>
                ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SelectorPaisCiudad;
