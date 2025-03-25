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
      flag: <img src="../../logo.png" className="tw-w-5 tw-h-4" alt="logo" />,
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
    <div className="tw-flex tw-w-full">
      <div className="tw-relative">
        <button
          className="tw-flex-shrink-0 tw-z-10 tw-w-[50px] tw-inline-flex tw-py-2 tw-px-2 tw-justify-center tw-items-center tw-text-sm tw-font-medium tw-border tw-bg-inputIcon tw-border-inputIcon tw-rounded-l-lg tw-text-white"
          type="button"
          onClick={toggleContinentDropdown}
        >
          <div className="tw-flex tw-items-center tw-space-x-2 tw-text-white">
            <span className="tw-max-h-[20px] tw-overflow-hidden tw-text-ellipsis tw-whitespace-nowrap">
              {selectedContinent.shortName}
            </span>
            {isContinentDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
          </div>
        </button>
        {isContinentDropdownOpen && (
          <div className="tw-absolute tw-z-10 tw-mt-2 tw-bg-white tw-divide-y tw-divide-gray-100 tw-shadow tw-max-w-[200px]">
            <ul className="tw-py-2 tw-text-sm tw-text-gray-700">
              {continents.map((continent) => (
                <li key={continent.name}>
                  <button
                    type="button"
                    className="tw-inline-flex tw-w-full tw-px-4 tw-py-2 tw-text-sm hover:tw-bg-gray-100"
                    onClick={() => selectContinent(continent)}
                  >
                    <span className="tw-mr-2">{continent.flag}</span>
                    {continent.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="tw-relative tw-flex-grow">
        <button
          className="tw-bg-white tw-text-slate-950 tw-text-sm tw-justify-between tw-rounded-r-lg tw-flex-shrink-0 tw-z-10 tw-inline-flex tw-items-center tw-w-full tw-py-2 tw-pr-3 tw-border tw-border-gray-300"
          type="button"
          onClick={toggleRegionDropdown}
          disabled={!selectedContinent}
        >
          <span className="tw-mx-2 tw-max-h-[20px] tw-text-start tw-overflow-hidden tw-text-ellipsis tw-whitespace-nowrap">
            {selectedRegion || "Region"}
          </span>
          <svg
            className="tw-w-2.5 tw-h-2.5 tw-ms-2.5"
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
          <div className="tw-absolute tw-z-10 tw-mt-2 tw-bg-white tw-divide-y tw-divide-gray-100 tw-shadow tw-w-full">
            <ul className="tw-py-2 tw-text-sm tw-text-gray-700 dark:tw-text-gray-200">
              {regions[selectedContinent.shortName].map((region) => (
                <li key={region}>
                  <button
                    type="button"
                    className="tw-inline-flex tw-w-full tw-px-4 tw-py-2 tw-text-sm hover:tw-bg-gray-100"
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
