import { useState, useEffect } from "react";
import { FaMap } from "react-icons/fa";
import { useController } from "react-hook-form"; // Import useController

function SelectorPaisCiudad({
  control,
  nameContinent,
  nameRegion,
  continents,
  regions,
}) {
  const { field: fieldContinent } = useController({
    name: nameContinent,
    control,
    defaultValue: "",
  });

  const { field: fieldRegion } = useController({
    name: nameRegion,
    control,
    defaultValue: "",
  });

  const [step, setStep] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const selectContinent = (continent) => {
    fieldContinent.onChange(continent.id);
    fieldRegion.onChange("");
    setStep(2);
  };

  const selectRegion = (region) => {
    fieldRegion.onChange(region.id);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    if (!isDropdownOpen) {
      setStep(1);
    }
  };

  useEffect(() => {
    fieldRegion.onChange("");
  }, [fieldContinent.value]);

  return (
    <div className="tw-relative tw-w-full">
      <button
        className="tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border tw-px-2 tw-pl-9 tw-border-gray-300 tw-text-slate-950 tw-text-sm tw-rounded-lg tw-w-full tw-py-2.5 tw-flex tw-items-center tw-justify-between"
        type="button"
        onClick={toggleDropdown}
      >
        <span className="tw-mx-2 tw-overflow-hidden tw-text-ellipsis tw-whitespace-nowrap">
          {fieldRegion.value
            ? `${
                continents.find((c) => c.id === fieldContinent.value)?.name
              } - ${
                regions[fieldContinent.value]?.find(
                  (r) => r.id === fieldRegion.value
                )?.name
              }`
            : "Selecciona continente y región"}
        </span>
        <svg
          className="tw-w-2.5 tw-h-2.5"
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
      <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
        <FaMap />
      </div>

      {isDropdownOpen && (
        <div className="tw-absolute tw-z-10 tw-mt-2 tw-bg-white tw-divide-y tw-divide-gray-100 tw-shadow tw-w-full">
          <ul className="tw-py-2 tw-text-sm tw-text-gray-700">
            {step === 1
              ? continents.map((continent) => (
                  <li key={continent.id}>
                    <button
                      type="button"
                      className="tw-inline-flex tw-w-full tw-px-4 tw-py-2 tw-text-sm hover:tw-bg-gray-100"
                      onClick={() => selectContinent(continent)}
                    >
                      <span className="tw-mr-2">{continent.flag}</span>
                      {continent.name}
                    </button>
                  </li>
                ))
              : regions[fieldContinent.value]?.map((region) => (
                  <li key={region.id}>
                    <button
                      type="button"
                      className="tw-inline-flex tw-w-full tw-px-4 tw-py-2 tw-text-sm hover:tw-bg-gray-100"
                      onClick={() => selectRegion(region)}
                    >
                      {region.name}
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
