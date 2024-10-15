import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaMapPin } from "react-icons/fa";

const suggestionsData = [
  "MADRID (REGION)",
  "MADRID",
  "MADRID AIRPORT",
  "NEW MADRID - CAPE GIRARDEAU, MO (REGION)",
  "Barcelona",
];
function Select({ placeholder }) {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    // Filter suggestions based on input
    if (value) {
      const filteredSuggestions = suggestionsData.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
      setIsDropdownOpen(true);
    } else {
      setIsDropdownOpen(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setSuggestions([]);
    setIsDropdownOpen(false);
  };
  return (
    <div className="relative ">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="p-2.5 pl-10 text-sm border text-gray-700 border-gray-300 rounded-lg w-full focus:outline-none focus:border-gray-400 overflow-hidden text-ellipsis whitespace-nowrap"
      />
      {isDropdownOpen && suggestions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg max-h-60 overflow-auto">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="p-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
      <div className="absolute top-0 pointer-events-none bg-inputIcon text-white h-full rounded-tl-md rounded-bl-md flex items-center justify-center w-8 text-lg">
        <FaMapPin />
      </div>
    </div>
  );
}

export default Select;
