import { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { FaHotel } from "react-icons/fa";
import { FaMap } from "react-icons/fa";

function Buscador({ destinos, destino, setDestino, disable, placeholder }) {
  const [selectedDestino, setSelectedDestino] = useState("");

  const [suggestions, setSuggestions] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const searchBoxRef = useRef(null);
  const handleInputChange = (event) => {
    const value = event.target.value;
    setDestino(value);
    setLoading(true);
    if (value) {
      setTimeout(() => {
        const filteredSuggestions = destinos.filter((suggestion) =>
          suggestion.name.toLowerCase().includes(value.toLowerCase())
        );
        setSuggestions(filteredSuggestions);
        setIsDropdownOpen(true);
        setLoading(false);
      }, 1000);
    } else {
      setIsDropdownOpen(false);
      setLoading(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSelectedDestino(suggestion.name);
    setDestino(suggestion);
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchBoxRef.current &&
        !searchBoxRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchBoxRef]);

  const columnCount = Object.keys(groupedSuggestions).length > 1 ? 2 : 1;
  return (
    <div className="tw-relative" ref={searchBoxRef}>
      <input
        type="text"
        value={selectedDestino}
        onChange={handleInputChange}
        placeholder={placeholder}
        disabled={disable && disable}
        className="tw-p-2.5 tw-pl-10 tw-text-sm tw-border dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-text-gray-700 tw-border-gray-300 tw-rounded-lg tw-w-full focus:tw-outline-none focus:tw-border-gray-400 tw-overflow-hidden tw-text-ellipsis tw-whitespace-nowrap"
      />
      {isDropdownOpen && (
        <div className="tw-absolute tw-z-10 tw-w-full tw-bg-slate-50 tw-border-2 tw-shadow-xl tw-mt-2 tw-rounded-lg tw-max-h-60 tw-overflow-auto">
          {loading ? (
            <div className="tw-p-4 tw-flex tw-justify-center tw-items-center tw-flex-col tw-text-center tw-text-slate-500">
              Cargando...
            </div>
          ) : suggestions.length > 0 ? (
            <div
              className={`tw-grid xl:tw-grid-cols-${columnCount} tw-gap-4 tw-p-2`}
            >
              {Object.entries(groupedSuggestions).map(([type, items]) => (
                <div key={type}>
                  <div className="tw-relative">
                    <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-right-1 tw-text-white tw-h-full tw-rounded-tr-md tw-rounded-br-md tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-lg">
                      {type === "Hotel" ? <FaHotel /> : <FaMap />}
                    </div>
                  </div>
                  <ul>
                    {items.map((suggestion, index) => (
                      <li
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="tw-p-2 tw-border-b tw-flex tw-flex-col tw-border-slate-200 tw-text-gray-700 hover:tw-bg-slate-50 tw-cursor-pointer"
                      >
                        <span className="tw-flex tw-space-x-2 tw-items-center">
                          <span className="tw-text-secondary tw-text-lg">
                            {type === "Hotel" ? (
                              <FaHotel />
                            ) : (
                              type === "Destino" && <FaMap />
                            )}
                          </span>
                          <span>{suggestion.name}</span>
                        </span>
                        <span className="tw-block tw-text-slate-300 tw-pl-6">
                          {suggestion.destino && suggestion.destino}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <div className="tw-p-4 tw-flex tw-justify-center tw-items-center tw-flex-col tw-text-center tw-text-slate-500">
              No hay ningún resultado para "{destino}"
            </div>
          )}
        </div>
      )}
      <div className="tw-absolute tw-top-0 tw-right-0 tw-pointer-events-none tw-text-slate-300 tw-text-sm tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8">
        {suggestions.length}
      </div>
      <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
        <FaSearch />
      </div>
    </div>
  );
}

export default Buscador;
