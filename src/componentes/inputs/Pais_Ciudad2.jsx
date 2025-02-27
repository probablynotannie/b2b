import { useState } from "react";
import { FaGlobeAfrica } from "react-icons/fa";
import { FaGlobeAsia } from "react-icons/fa";
import { FaGlobeEurope } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

function SelectorPaisCiudad() {
  const [selectedContinent, setSelectedContinent] = useState({
    shortName: "AF",
    flag: <FaGlobeAfrica />,
  });

  const [isContinentDropdownOpen, setIsContinentDropdownOpen] = useState(false);
  const [isRegionDropdownOpen, setIsRegionDropdownOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("");

  const continents = [
    { name: "Africa", shortName: "AF", flag: <FaGlobeAfrica /> },
    { name: "América", shortName: "AM", flag: <FaGlobeAmericas /> },
    { name: "Asia", shortName: "AS", flag: <FaGlobeAsia /> },
    { name: "Europa", shortName: "EU", flag: <FaGlobeEurope /> },
    { name: "Oceanía", shortName: "OC", flag: <FaGlobeEurope /> },
    {
      name: "Haiku",
      shortName: "HK",
      flag: <img src="../../logo.png" className="w-5 h-4" alt="logo" />,
    },
  ];

  const regions = {
    AF: ["Nigeria", "South Africa", "Egipto"],
    AM: ["USA", "Canada", "Mexico"],
    AS: ["China", "Japón", "India"],
    EU: ["Alemania", "Francia", "Italia"],
    OC: ["Australia", "Fiji"],
    HK: ["Hola", "Haiku", "Vuela"],
  };

  const toggleContinentDropdown = () => {
    setIsContinentDropdownOpen(!isContinentDropdownOpen);
    setIsRegionDropdownOpen(false);
  };

  const toggleRegionDropdown = () => {
    setIsRegionDropdownOpen(!isRegionDropdownOpen);
  };

  const selectContinent = (continent) => {
    setSelectedContinent({
      shortName: continent.shortName,
      flag: continent.flag,
    });
    setSelectedRegion(""); // Reset region when continent changes
    setIsContinentDropdownOpen(false);
  };

  const selectRegion = (region) => {
    setSelectedRegion(region);
    setIsRegionDropdownOpen(false);
  };

  return (
    <div className="flex w-full">
      <div className="relative">
        <button
          className="flex-shrink-0 z-10 w-[50px] inline-flex py-2  px-2 justify-center items-center text-sm font-medium border tw-bg-inputIcon border-inputIcon rounded-l-lg text-white"
          type="button"
          onClick={toggleContinentDropdown}
        >
          <div className="flex items-center space-x-2 text-white">
            <span className="max-h-[20px] overflow-hidden text-ellipsis whitespace-nowrap">
              {selectedContinent.shortName}
            </span>
            {isContinentDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
          </div>
        </button>
        {isContinentDropdownOpen && (
          <div className="absolute z-10 mt-2 bg-white divide-y divide-gray-100 shadow max-w-[200px]">
            <ul className="py-2 text-sm text-gray-700">
              {continents.map((continent) => (
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
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="relative flex-grow ">
        <button
          className="bg-white  text-slate-950 text-sm justify-between rounded-r-lg flex-shrink-0 z-10 inline-flex items-center w-full py-2 pr-3 border border-gray-300"
          type="button"
          onClick={toggleRegionDropdown}
          disabled={!selectedContinent}
        >
          <span className="mx-2 max-h-[20px] text-start  overflow-hidden text-ellipsis whitespace-nowrap">
            {selectedRegion || "Region"}
          </span>
          <svg
            className="w-2.5 h-2.5 ms-2.5"
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
        {isRegionDropdownOpen && selectedContinent && (
          <div className="absolute z-10 mt-2 bg-white divide-y divide-gray-100 shadow w-full">
            <ul className="py-2 text-sm text-gray-700 dark:tw-text-gray-200">
              {regions[selectedContinent.shortName].map((region) => (
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
    </div>
  );
}

export default SelectorPaisCiudad;
