import { useState, useEffect, useRef } from "react";
import { FaPlane, FaSearch, FaHotel, FaMap } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Controller } from "react-hook-form";

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
  const [selectedDestino, setSelectedDestino] = useState(null);
  const [inputText, setInputText] = useState("");
  const searchBoxRef = useRef(null);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputText(value);
    setSelectedDestino(null);
    setLoading(true);

    if (value) {
      setTimeout(() => {
        const filteredSuggestions = destinos.filter((suggestion) =>
          suggestion.name.toLowerCase().includes(value.toLowerCase())
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
    setSelectedDestino(suggestion);
    setValue(name, suggestion.id);
    setInputText(suggestion.name);
    setSuggestions([]);
    setIsDropdownOpen(false);
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
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="tw-relative" ref={searchBoxRef}>
      <Controller
        name={name}
        control={control}
        rules={
          required === true ? { required: "Este campo es obligatorio" } : {}
        }
        render={({ field, fieldState: { error } }) => (
          <>
            <input
              type="text"
              value={inputText}
              onChange={handleInputChange}
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
        <div className="tw-absolute tw-top-9 tw-z-10 tw-w-full tw-bg-slate-50 tw-border-2 tw-shadow-xl tw-mt-2 tw-rounded-lg tw-max-h-60 tw-overflow-auto">
          {loading ? (
            <div className="tw-p-4 tw-flex tw-justify-center tw-items-center tw-text-slate-500">
              Cargando...
            </div>
          ) : suggestions.length > 0 ? (
            <ul>
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion.id}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="tw-p-2 tw-border-b tw-text-gray-700 hover:tw-bg-slate-50 tw-cursor-pointer"
                >
                  <span className="tw-flex tw-space-x-2 tw-items-center">
                    <span className="tw-text-secondary tw-text-lg">
                      {suggestion.type === "Hotel" ? (
                        <FaHotel />
                      ) : suggestion.type === "Vuelo" ? (
                        <FaPlane />
                      ) : (
                        <FaMap />
                      )}
                    </span>
                    <span>{suggestion.name}</span>
                  </span>
                  <span className="tw-block tw-text-slate-300 tw-pl-6">
                    {suggestion.destino}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="tw-p-4 tw-flex tw-justify-center tw-text-slate-500">
              No hay resultados para
              <span className="tw-text-danger">{inputText}</span>
            </div>
          )}
        </div>
      )}
      <div
        onClick={() => {
          setSelectedDestino(null);
          setInputText("");
          setValue(name, "");
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
