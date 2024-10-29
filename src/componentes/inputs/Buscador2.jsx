import { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { FaHotel } from "react-icons/fa";
import { FaMap } from "react-icons/fa";

// Datos de sugerencias actualizados con tipos
const suggestionsData = [
  { type: "Destino", name: "MADRID Centro", destino: "Madrid" },
  { type: "Destino", name: "MADRID Afueras", destino: "Madrid" },
  { type: "Destino", name: "BARCELONA", destino: "Madrid" },
  { type: "Destino", name: "SEVILLA", destino: "Sevilla" },
  { type: "Destino", name: "MADRID - CAPE GIRARDEAU", destino: "Madrid" },
  { type: "Hotel", name: "Hotel Barcelona", destino: "Barcelona" },
  { type: "Hotel", name: "Hotel Madrid", destino: "Madrid" },
  { type: "Hotel", name: "Hotel Sevilla", destino: "Sevilla" },
];

function Buscador() {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const searchBoxRef = useRef(null);
  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setLoading(true);
    if (value) {
      setTimeout(() => {
        const filteredSuggestions = suggestionsData.filter((suggestion) =>
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
    <div className="relative" ref={searchBoxRef}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Destino"
        className="p-2.5 pl-10 text-sm border text-gray-700 border-gray-300 rounded-lg w-full focus:outline-none focus:border-gray-400 overflow-hidden text-ellipsis whitespace-nowrap"
      />
      {isDropdownOpen && (
        <div className="absolute z-10 w-full bg-slate-50 border-2 shadow-xl mt-2 rounded-lg max-h-60 overflow-auto">
          {loading ? (
            <div className="p-4 flex justify-center items-center flex-col text-center text-slate-500">
              Cargando...
            </div>
          ) : suggestions.length > 0 ? (
            <div className={`grid grid-cols-${columnCount} gap-4 p-2`}>
              {Object.entries(groupedSuggestions).map(([type, items]) => (
                <div key={type}>
                  <div className="relative">
                    <h3 className="font-semibold bg-primary text-white rounded-md p-2">
                      {type}
                    </h3>
                    <div className="absolute top-0 pointer-events-none right-1 text-white h-full rounded-tr-md rounded-br-md flex items-center justify-center w-8 text-lg">
                      {type === "Hotel" ? <FaHotel /> : <FaMap />}
                    </div>
                  </div>
                  <ul>
                    {items.map((suggestion, index) => (
                      <li
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="p-2 border-b flex flex-col border-slate-200 text-gray-700 hover:bg-slate-50 cursor-pointer"
                      >
                        <span className="flex space-x-2 items-center">
                          <span className="text-secondary text-lg">
                            {type === "Hotel" ? <FaHotel /> : <FaMap />}
                          </span>
                          <span>{suggestion.name}</span>
                        </span>
                        <span className="block text-slate-300 pl-6">
                          {suggestion.destino && suggestion.destino}{" "}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-4 flex justify-center items-center flex-col text-center text-slate-500">
              No hay ningún resultado para &quot;{inputValue}&quot;
            </div>
          )}
        </div>
      )}
      <div className="absolute top-0 right-0 pointer-events-none text-slate-300 text-sm h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8">
        {suggestions.length}
      </div>
      <div className="absolute top-0 pointer-events-none bg-inputIcon text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-lg">
        <FaSearch />
      </div>
    </div>
  );
}

export default Buscador;
