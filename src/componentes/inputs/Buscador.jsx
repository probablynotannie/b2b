import React, { useState } from "react";
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

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    // Filter suggestions based on input
    if (value) {
      const filteredSuggestions = suggestionsData.filter((suggestion) =>
        suggestion.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
      setIsDropdownOpen(true);
    } else {
      setIsDropdownOpen(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion.name);
    setSuggestions([]);
    setIsDropdownOpen(false);
  };

  // Group suggestions by type
  const groupedSuggestions = suggestions.reduce((acc, suggestion) => {
    if (!acc[suggestion.type]) {
      acc[suggestion.type] = [];
    }
    acc[suggestion.type].push(suggestion);
    return acc;
  }, {});

  return (
    <div className="relative">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Destino"
        className="p-2.5 pl-10 text-sm border text-gray-700 border-gray-300 rounded-lg w-full focus:outline-none focus:border-gray-400 overflow-hidden text-ellipsis whitespace-nowrap"
      />
      {isDropdownOpen && suggestions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border mt-2 border-gray-300 rounded-lg max-h-60 overflow-auto">
          {Object.entries(groupedSuggestions).map(([type, items]) => (
            <div key={type}>
              <h3 className="flex items-center space-x-2 font-semibold text-gray-700 p-2 border-t-2 border-slate-100">
                <span className="text-secondary text-lg">
                  {type === "Hotel" ? <FaHotel /> : <FaMap />}
                </span>
                <span>{type}</span>
              </h3>
              {items.map((suggestion, index) => (
                <li
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="p-2 flex justify-between text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  <span>{suggestion.name}</span>
                  <span className="text-slate-300"> {suggestion.destino && suggestion.destino} </span>
                </li>
              ))}
            </div>
          ))}
        </ul>
      )}
      <div className="absolute top-0 pointer-events-none bg-inputIcon text-white h-full rounded-tl-md rounded-bl-md flex items-center justify-center w-8 text-lg">
        <FaSearch />
      </div>
    </div>
  );
}

export default Buscador;
