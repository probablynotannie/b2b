import { useState, useEffect } from "react";
import { FaShip } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

function Ferris({ ida, setIda, vuelta, setVuelta, ferris }) {
  console.log(ida);

  const [openFerrySets, setOpenFerrySets] = useState([]);

  useEffect(() => {
    if (ferris.length > 0) {
      let cheapestSet = null;
      let minTotalPrice = Infinity;

      ferris.forEach((ferrySet) => {
        const minIda = ferrySet.ida.precios.reduce((min, option) =>
          option.precio < min.precio ? option : min
        );
        const minVuelta = ferrySet.vuelta
          ? ferrySet.vuelta.precios.reduce((min, option) =>
              option.precio < min.precio ? option : min
            )
          : null;

        const totalPrice = minIda.precio + (minVuelta ? minVuelta.precio : 0);
        if (totalPrice < minTotalPrice) {
          cheapestSet = {
            id: ferrySet.id,
            ida: minIda,
            vuelta: minVuelta,
          };
          minTotalPrice = totalPrice;
        }
      });

      if (cheapestSet) {
        setIda({
          ferryId: cheapestSet.id,
          id: cheapestSet.ida.id,
          precio: cheapestSet.ida.precio,
          tipo: cheapestSet.ida.tipo,
        });

        if (cheapestSet.vuelta) {
          setVuelta({
            ferryId: cheapestSet.id,
            id: cheapestSet.vuelta.id,
            precio: cheapestSet.vuelta.precio,
            tipo: cheapestSet.vuelta.tipo,
          });
        } else {
          setVuelta(null);
        }
      }
    }
  }, [ferris]);

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
      setIda({
        ferryId,
        id: ferryOption.id,
        precio: ferryOption.precio,
        tipo: ferryOption.tipo,
      });
    } else if (type === "vuelta") {
      if (ida?.ferryId !== ferryId) {
        setIda(null);
      }
      setVuelta({
        ferryId,
        id: ferryOption.id,
        precio: ferryOption.precio,
        tipo: ferryOption.tipo,
      });
    }
  };

  return (
    <section>
      <div className="flex flex-col lg:flex-row lg:justify-between shadow-md lg:shadow-none p-3 rounded-xl border-2 lg:border-0 border-slate-200 dark:bg-slate-800 dark:md:bg-inherit dark:md:border-0 dark:md:shadow-none dark:border-slate-600 lg:mt-0">
        <h3 className="text-secondary font-semibold text-lg ">
          Resultados ({ferris.length})
        </h3>
      </div>
      {ferris.map((ferrySet) => {
        const minIdaPrice = Math.min(
          ...ferrySet.ida.precios.map((option) => option.precio)
        );
        const minVueltaPrice = ferrySet.vuelta
          ? Math.min(...ferrySet.vuelta.precios.map((option) => option.precio))
          : 0;
        const minTotalPrice = minIdaPrice + minVueltaPrice;
        return (
          <div
            key={ferrySet.id}
            className=" mb-6 relative border mt-5 md:mt-0 dark:border-slate-700 rounded-lg shadow-lg bg-white dark:bg-slate-800 transition-all rounded-t-xl"
          >
            <div
              className="flex justify-between flex-wrap items-center p-4 bg-white dark:bg-slate-800 transition cursor-pointer rounded-xl"
              onClick={() => toggleDropdown(ferrySet.id)}
            >
              <div className="w-full md:w-fit">
                {ida?.ferryId === ferrySet.id && (
                  <GoDotFill className="absolute top-3 left-3 text-green-500 animate-bounce" />
                )}
                <div className="md:w-fit flex w-full justify-between items-center">
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">
                    Tarifa: {ferrySet.tarifa.toUpperCase()}
                  </h3>
                  <span className="ml-3 font-bold bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-200 border-2 border-green-100 dark:border-green-800 px-2 py-1 text-base rounded-full">
                    Desde: {minTotalPrice}€
                  </span>
                </div>
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
              <div className=" text-xs text-center justify-center flex-col flex items-center space-x-4 w-full md:w-fit">
                <div className="dark:bg-slate-100 rounded-xl px-2 flex justify-center items-center w-full">
                  <img
                    src={ferrySet.compania}
                    alt="logo compania"
                    className=" h-14 md:w-16 w-full object-contain rounded-md"
                  />
                </div>
              </div>
            </div>
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                openFerrySets.includes(ferrySet.id) ? "max-h-screen" : "max-h-0"
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
                    className={`flex items-center gap-4 p-2 border-b dark:border-slate-700 ${
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
                      className="h-4 w-4 text-green-500 dark:text-green-400 focus:ring-green-400  border-slate-300 dark:border-slate-700"
                    />
                    <FaShip className="text-green-800 dark:text-green-300" />
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
              {ferrySet.vuelta && (
                <div className="p-4 border-t dark:border-slate-700">
                  <div className="flex justify-between">
                    <span className="text-md font-bold text-slate-800 dark:text-slate-400 mb-3">
                      Vuelta: {ferrySet.vuelta.ruta}
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
                        className="h-4 w-4 text-green-500 dark:text-green-400 focus:ring-green-400  border-slate-300 dark:border-slate-700"
                      />
                      <FaShip className="text-green-800 dark:text-green-300" />
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
              )}
              <div className="flex justify-end mt-2 p-3">
                {ida?.ferryId === ferrySet.id && (
                  <button className="font-semibold bg-secondary text-white p-2 rounded-md">
                    Reservar por {calculateTotalPrice()}€
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Ferris;
