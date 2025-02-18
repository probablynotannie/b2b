import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { FaHotel } from "react-icons/fa";
import { FaMap } from "react-icons/fa";

// Updated suggestions data with types
const suggestionsData = [
  { type: "Destino", name: "MADRID Centro" },
  { type: "Destino", name: "MADRID Afueras", destino: "Madrid" },
  { type: "Destino", name: "SEVILLA" },
  { type: "Destino", name: "MADRID - CAPE GIRARDEAU" },
  { type: "Hotel", name: "Hotel Barcelona", destino: "Madrid" },
  { type: "Hotel", name: "Hotel Madrid", destino: "Madrid" },
  { type: "Hotel", name: "Hotel Sevilla", destino: "Sevilla" },
];

function Buscador() {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setIsLoading(true);
    setTimeout(() => {
      if (value) {
        const filteredSuggestions = suggestionsData.filter((suggestion) =>
          suggestion.name.toLowerCase().includes(value.toLowerCase())
        );
        setSuggestions(filteredSuggestions);
        setIsDropdownOpen(true);
      } else {
        setIsDropdownOpen(false);
      }
      setIsLoading(false);
    }, 500);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion.name);
    setSuggestions([]);
    setIsDropdownOpen(false);
  };
  const groupedSuggestions = suggestions.reduce((acc, suggestion) => {
    if (!acc[suggestion.type]) {
      acc[suggestion.type] = [];
    }
    acc[suggestion.type].push(suggestion);
    return acc;
  }, {});

  return (
    <div className="tw-relative">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Destino"
        className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:tw-placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-pl-10 tw-w-full tw-cursor-pointer"
      />
      {isDropdownOpen && (
        <ul className="tw-absolute tw-z-10 tw-w-full tw-bg-white tw-border tw-mt-2 tw-border-gray-300 tw-rounded-lg tw-max-h-60 tw-overflow-auto">
          {isLoading ? (
            // Mostrar "Cargando..." cuando está en proceso de búsqueda
            <li className="tw-p-2 tw-text-center tw-text-gray-500">
              Cargando...
            </li>
          ) : suggestions.length === 0 ? (
            // Mostrar "No hay resultados" cuando no haya sugerencias
            <li className="tw-p-2 tw-text-center tw-text-gray-500">
              No hay ningún resultado para &amp;quot;{inputValue}&amp;quot;
            </li>
          ) : (
            Object.entries(groupedSuggestions).map(([type, items]) => (
              <div key={type}>
                <h3 className="tw-flex tw-items-center tw-space-x-2 tw-font-semibold tw-text-gray-700 tw-p-2 tw-border-t-2 tw-border-slate-100">
                  <span className="tw-text-secondary tw-text-lg">
                    {type === "Hotel" ? <FaHotel /> : <FaMap />}
                  </span>
                  <span>{type}</span>
                </h3>
                {items.map((suggestion, index) => (
                  <li
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="tw-p-2 tw-flex tw-justify-between tw-text-gray-700 hover:tw-bg-gray-100 tw-cursor-pointer"
                  >
                    <span>{suggestion.name}</span>
                    <span className="tw-text-slate-300">
                      {suggestion.destino && suggestion.destino}
                    </span>
                  </li>
                ))}
              </div>
            ))
          )}
        </ul>
      )}
      <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
        <FaSearch />
      </div>
    </div>
  );
}

export default Buscador;
