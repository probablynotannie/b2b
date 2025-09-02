import { useState, useEffect, useRef } from "react";
import { FaPlane, FaSearch, FaHotel, FaMap } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Controller } from "react-hook-form";
import capitalizeFirstLetter from "../../assets/scripts/capitalizeFirstLetterOnly";

function Buscador({
  destinos,
  control,
  name,
  setValue,
  disable,
  placeholder,
  required,
  vuelo,
}) {
  const [suggestions, setSuggestions] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inputText, setInputText] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const searchBoxRef = useRef(null);
  const suggestionRefs = useRef([]);
  useEffect(() => {
    if (highlightedIndex >= 0 && suggestionRefs.current[highlightedIndex]) {
      suggestionRefs.current[highlightedIndex].scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      });
    }
  }, [highlightedIndex]);
  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputText(value);
    setLoading(true);
    setHighlightedIndex(-1);

    if (value) {
      setTimeout(() => {
        const searchValue = value.toLowerCase();
        const filteredSuggestions = destinos.filter(
          (suggestion) =>
            suggestion.name.toLowerCase().includes(searchValue) ||
            (suggestion.destino &&
              suggestion.destino.toLowerCase().includes(searchValue))
        );
        setSuggestions(filteredSuggestions);
        setIsDropdownOpen(true);
        setLoading(false);
      }, 500);
    } else {
      setIsDropdownOpen(false);
      setLoading(false);
    }
  };
  const handleSuggestionClick = (suggestion) => {
    setValue(name, suggestion.id);
    setInputText(suggestion.name);
    setValue("tipo", suggestion.type);

    if (suggestion.type !== "hotel") {
      if (suggestion.codcity) {
        setValue("codcity", suggestion.codcity);
      }
      if (suggestion.id) {
        setValue("codarea", suggestion.id);
      }
    }
    setSuggestions([]);
    setIsDropdownOpen(false);
    setHighlightedIndex(-1);
  };

  const handleKeyDown = (event) => {
    if (!isDropdownOpen || suggestions.length === 0) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setHighlightedIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : 0
      );
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setHighlightedIndex((prev) =>
        prev > 0 ? prev - 1 : suggestions.length - 1
      );
    }

    if (event.key === "Enter" && highlightedIndex >= 0) {
      event.preventDefault();
      handleSuggestionClick(suggestions[highlightedIndex]);
    }
  };

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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="tw-relative" ref={searchBoxRef}>
      <Controller
        name={name}
        control={control}
        rules={
          required === true ? { required: "Este campo es obligatorio" } : {}
        }
        render={({ fieldState: { error } }) => (
          <>
            <input
              type="text"
              value={inputText}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder={placeholder}
              disabled={disable}
              className="tw-h-[40px] tw-pl-10 dark:tw-placeholder-slate-400 tw-text-sm tw-border dark:tw-border-2 dark:tw-bg-slate-700 dark:tw-border-slate-700 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-text-gray-700 tw-border-gray-300 tw-rounded-lg tw-w-full focus:tw-outline-none focus:tw-border-gray-400 tw-overflow-hidden tw-text-ellipsis tw-whitespace-nowrap"
            />
            {error && (
              <p className="tw-text-danger tw-text-xs tw-mt-1">
                {error.message}
              </p>
            )}
          </>
        )}
      />
      {isDropdownOpen && (
        <div className="tw-absolute tw-top-9 tw-z-10 tw-min-w-[250px] scrollbar-hidden tw-bg-slate-50 dark:tw-bg-slate-800 dark:tw-border-slate-950 tw-border-2 tw-shadow-xl tw-mt-2 tw-rounded-lg tw-max-h-60 tw-overflow-auto">
          {loading ? (
            <div className="tw-p-4 tw-flex tw-justify-center tw-items-center tw-text-slate-500">
              Cargando...
            </div>
          ) : suggestions.length > 0 ? (
            <ul>
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  ref={(el) => (suggestionRefs.current[index] = el)}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className={`tw-p-2 tw-text-gray-700 tw-cursor-pointer ${
                    index === highlightedIndex
                      ? "tw-bg-slate-200 dark:tw-bg-slate-600"
                      : "hover:tw-bg-slate-50 dark:hover:tw-bg-slate-800"
                  }`}
                >
                  <span className="tw-flex tw-space-x-2 tw-items-center">
                    <span className="tw-text-secondary tw-text-lg">
                      {suggestion.type === "hotel" ? (
                        <FaHotel />
                      ) : suggestion.type === "vuelo" ? (
                        <FaPlane />
                      ) : (
                        <FaMap />
                      )}
                    </span>
                    <span className="dark:tw-text-white">
                      {capitalizeFirstLetter(suggestion.name)}
                    </span>
                  </span>
                  <span className="tw-block tw-text-slate-300 tw-pl-6 tw-text-sm">
                    {capitalizeFirstLetter(suggestion.destino)}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="tw-p-4 tw-flex tw-justify-center tw-text-slate-500 tw-gap-1">
              No hay resultados para
              <span className="tw-text-danger">{inputText}</span>
            </div>
          )}
        </div>
      )}

      <div
        onClick={() => {
          setInputText("");
          setValue(name, "");
          setSuggestions([]);
          setIsDropdownOpen(false);
          setHighlightedIndex(-1);
        }}
        className="tw-absolute tw-top-0 tw-right-0 tw-text-slate-300 hover:tw-text-slate-500 tw-text-sm tw-h-[40px] tw-flex tw-items-center tw-justify-center tw-w-8"
      >
        <IoClose className="tw-text-lg" />
      </div>
      <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-[40px] tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
        {vuelo ? <FaPlane /> : <FaSearch />}
      </div>
    </div>
  );
}

export default Buscador;
