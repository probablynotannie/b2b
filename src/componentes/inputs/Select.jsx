import { useState } from "react";
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
    <div className="tw-relative">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="tw-border tw-bg-white dark:tw-placeholder-slate-400 dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-pl-10 tw-w-full tw-cursor-pointer"
      />
      {isDropdownOpen && suggestions.length > 0 && (
        <ul className="tw-absolute tw-z-10 tw-w-full tw-bg-white tw-border tw-border-gray-300 tw-rounded-lg tw-max-h-60 tw-overflow-auto">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="tw-p-2 tw-text-gray-700 hover:tw-bg-gray-100 tw-cursor-pointer"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
      <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
        <FaMapPin />
      </div>
    </div>
  );
}

export default Select;
