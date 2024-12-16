import { useState } from "react";
import { FaShip } from "react-icons/fa";
import ferris from "./Ferris.json";
function FerrySelectionPage() {
  const [ida, setIda] = useState(null);
  const [vuelta, setVuelta] = useState(null);
  const [openFerrySets, setOpenFerrySets] = useState([]);
  function calculateTotalPrice() {
    const outboundPrice = ida ? ida.precio : 0;
    const returnPrice = vuelta ? vuelta.precio : 0;
    return outboundPrice + returnPrice;
  }
  const toggleDropdown = (id) => {
    setOpenFerrySets((prev) =>
      prev.includes(id) ? prev.filter((setId) => setId !== id) : [...prev, id]
    );
  };
  const handleSelection = (type, ferryId, ferryOption) => {
    if (type === "ida") {
      if (vuelta?.ferryId !== ferryId) {
        setVuelta(null);
      }
      setIda({ ferryId, ...ferryOption });
    } else if (type === "vuelta") {
      if (ida?.ferryId !== ferryId) {
        setIda(null);
      }
      setVuelta({ ferryId, ...ferryOption });
    }
  };
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="lg:flex flex-col lg:flex-row lg:justify-between shadow-xl lg:shadow-none p-3 rounded-xl border-2 lg:border-0 border-slate-200 dark:bg-slate-800 dark:md:bg-inherit dark:md:border-0 dark:md:shadow-none dark:border-slate-600  lg:mt-0">
        <h3 className="text-secondary font-semibold text-lg">
          Resultados ({ferris.length})
        </h3>
      </div>
      {ferris.map((ferrySet) => {
        const minIdaPrice = Math.min(
          ...ferrySet.ida.precios.map((option) => option.precio)
        );
        const minVueltaPrice = Math.min(
          ...ferrySet.vuelta.precios.map((option) => option.precio)
        );
        const minTotalPrice = minIdaPrice + minVueltaPrice;
        return (
          <div
            key={ferrySet.id}
            className="mb-6 border dark:border-slate-700 rounded-lg shadow-lg bg-white dark:bg-slate-800 transition-all rounded-t-xl"
          >
            <div
              className="flex justify-between items-center p-4 bg-white dark:bg-slate-800 transition cursor-pointer rounded-xl"
              onClick={() => toggleDropdown(ferrySet.id)}
            >
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-1">
                  Tarifa: {ferrySet.tarifa.toUpperCase()}
                  <span className="ml-3 font-bold bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-200 border-2 border-green-100 dark:border-green-800 px-2 py-1 text-base rounded-full">
                    Desde: {minTotalPrice}€
                  </span>
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Cambios:{" "}
                  <span className="font-medium">
                    {ferrySet.cambios ? "Permitidos" : "No Permitidos"}
                  </span>{" "}
                  | Cancelaciones:{" "}
                  <span className="font-medium">
                    {ferrySet.cancelaciones ? "Permitidas" : "No Permitidas"}
                  </span>
                </p>
              </div>
              <div className="text-right flex items-center space-x-4">
                <div className="dark:bg-slate-100 rounded-xl px-2">
                  <img
                    src={ferrySet.compania}
                    alt="logo compania"
                    className="h-14 w-16 object-contain rounded-md"
                  />
                </div>
              </div>
            </div>
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                openFerrySets.includes(ferrySet.id)
                  ? "max-h-screen"
                  : "max-h-0 "
              }`}
            >
              <div className="p-4 border-t dark:border-slate-700">
                <div className="flex justify-between">
                  <span className="text-md font-bold text-slate-800 dark:text-slate-400 mb-3">
                    Ida: {ferrySet.ida.ruta}
                  </span>
                  <span className="text-slate-800 dark:text-slate-400 text-sm">
                    {ferrySet.ida.departure_time} - {ferrySet.ida.arrival_time}
                  </span>
                </div>
                {ferrySet.ida.precios.map((option) => (
                  <div
                    key={option.id}
                    className={`flex items-center gap-4  p-2 border-b dark:border-slate-700 ${
                      ida?.id === option.id && ida.ferryId === ferrySet.id
                        ? "bg-blue-50 dark:bg-slate-900"
                        : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name={`ida-${ferrySet.id}`}
                      checked={
                        ida?.id === option.id && ida.ferryId === ferrySet.id
                      }
                      onChange={() =>
                        handleSelection("ida", ferrySet.id, option)
                      }
                      className="h-4 w-4 text-secondary focus:ring-secondary border-slate-300 dark:border-slate-700"
                    />
                    <FaShip className="text-blue-500" />
                    <div>
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-300">
                        {option.tipo}
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-500">
                        Precio: {option.precio}€
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t dark:border-slate-700">
                <div className="flex justify-between">
                  <span className="text-md font-bold text-slate-800 dark:text-slate-400 mb-3">
                    Ida: {ferrySet.vuelta.ruta}
                  </span>
                  <span className="text-slate-800 dark:text-slate-400 text-sm">
                    {ferrySet.vuelta.departure_time} -{" "}
                    {ferrySet.vuelta.arrival_time}
                  </span>
                </div>
                {ferrySet.vuelta.precios.map((option) => (
                  <div
                    key={option.id}
                    className={`flex items-center gap-4 p-2 border-b dark:border-slate-700 ${
                      vuelta?.id === option.id && vuelta.ferryId === ferrySet.id
                        ? "bg-blue-50 dark:bg-slate-900"
                        : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name={`vuelta-${ferrySet.id}`}
                      checked={
                        vuelta?.id === option.id &&
                        vuelta.ferryId === ferrySet.id
                      }
                      onChange={() =>
                        handleSelection("vuelta", ferrySet.id, option)
                      }
                      className="h-4 w-4 text-secondary focus:ring-secondary border-slate-300 dark:border-slate-700"
                    />
                    <FaShip className="text-blue-500" />
                    <div>
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-300">
                        {option.tipo}
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-500">
                        Precio: {option.precio}€
                      </p>
                    </div>
                  </div>
                ))}
                <div className="flex justify-end mt-2">
                  <button className="font-semibold bg-slate-200 p-2 rounded-md">
                    Reservar por {calculateTotalPrice()}€
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default FerrySelectionPage;
