import { useState } from "react";
import { FaShip } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";

function Ferris({
  ferris,
  ida,
  setIda,
  vuelta,
  setVuelta,
  setFerry,
  seleccion,
  ferry,
}) {
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
    setFerry((prevFerry) => {
      const ferrySeleccionado = ferris.find((ferry) => ferry.id === ferryId);
      if (!ferrySeleccionado) return prevFerry;

      const nuevoFerry = { ...prevFerry };
      const precioSeleccionado = ferrySeleccionado[type]?.precios.find(
        (price) => price.id === ferryOption.id
      );
      if (!precioSeleccionado) return prevFerry;
      const nuevoEstado = {
        ferryId,
        id: precioSeleccionado.id,
        precio: precioSeleccionado.precio,
        extra: precioSeleccionado.extras,
        tipo: precioSeleccionado.tipo,
        tarifa: ferrySeleccionado.tarifa,
        cambios: ferrySeleccionado.cambios,
        cancelaciones: ferrySeleccionado.cancelaciones,
        compania: ferrySeleccionado.compania,
        fecha: ferrySeleccionado[type]?.fecha,
        ruta: ferrySeleccionado[type]?.ruta,
        barco: ferrySeleccionado[type]?.barco,
        hora_salida: ferrySeleccionado[type]?.hora_salida,
        hora_llegada: ferrySeleccionado[type]?.hora_llegada,
        duracion_viaje: ferrySeleccionado[type]?.duracion_viaje,
        puerto_origen: ferrySeleccionado[type]?.puerto_origen,
        puerto_destino: ferrySeleccionado[type]?.puerto_destino,
      };
      if (type === "ida") {
        if (prevFerry.vuelta?.ferryId !== ferryId) {
          nuevoFerry.vuelta = null;
          setVuelta(null);
        }
        nuevoFerry.ida = nuevoEstado;
        setIda(nuevoFerry.ida);
      } else if (type === "vuelta") {
        if (prevFerry.ida?.ferryId !== ferryId) {
          nuevoFerry.ida = null;
          setIda(null);
        }
        nuevoFerry.vuelta = nuevoEstado;
        setVuelta(nuevoFerry.vuelta);
      }

      return nuevoFerry;
    });
  };
  return (
    <section>
      <div className="flex flex-col lg:flex-row lg:justify-between shadow-md lg:shadow-none p-3 rounded-xl border-2 lg:border-0 border-slate-200 dark:bg-slate-800 dark:md:bg-inherit dark:md:border-0 dark:md:shadow-none dark:tw-border-slate-600 lg:mt-0">
        <h3 className="tw-text-secondary font-semibold text-lg">
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
            className="mb-6 relative border mt-5 md:mt-0 dark:tw-border-slate-700 rounded-lg shadow-lg bg-white dark:bg-slate-800 transition-all rounded-t-xl"
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
                  <h3 className="text-lg font-bold text-slate-800 dark:tw-text-slate-200">
                    Tarifa: {ferrySet.tarifa.toUpperCase()}
                  </h3>

                  <span className="ml-3 font-bold bg-green-100 dark:bg-green-800 text-green-600 dark:tw-text-green-200 border-2 border-green-100 dark:tw-border-green-800 px-2 py-1 text-base rounded-full">
                    Desde: {minTotalPrice}€
                  </span>
                </div>
                <p className="text-sm text-slate-600 dark:tw-text-slate-400">
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
              <div className=" text-xs text-center justify-center flex-col flex items-center space-x-4 w-full md:w-fit mt-5 md:mt-0">
                <div className="dark:bg-slate-100 px-2 flex justify-center items-center w-full">
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
              <div className="p-4 border-t dark:tw-border-slate-700">
                <div className="flex justify-between">
                  <span className="text-md font-bold text-slate-800 dark:tw-text-slate-400 mb-3">
                    Ida: {ferrySet.ida?.ruta || "Ruta no disponible"}
                  </span>
                  <span className="text-slate-800 dark:tw-text-slate-400 text-sm">
                    {ferrySet.ida?.hora_salida} - {ferrySet.ida?.hora_llegada}
                  </span>
                </div>
                {ferrySet.ida?.precios?.map((option) => (
                  <div
                    key={option.id}
                    className={`flex items-center gap-4 p-2 border-b dark:tw-border-slate-700 ${
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
                      className="h-4 w-4 text-green-500 dark:tw-text-green-400 focus:ring-green-400  border-slate-300 dark:tw-border-slate-700"
                    />
                    <FaShip className="text-green-800 dark:tw-text-green-300" />
                    <div>
                      <p className="text-sm font-semibold text-slate-800 dark:tw-text-slate-300">
                        {option.tipo}
                      </p>
                      <p className="text-sm text-slate-600 dark:tw-text-slate-500">
                        Precio: {option.precio}€
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {ferrySet.vuelta && (
                <div className="p-4 border-t dark:tw-border-slate-700">
                  <div className="flex justify-between">
                    <span className="text-md font-bold text-slate-800 dark:tw-text-slate-400 mb-3">
                      Vuelta: {ferrySet.vuelta?.ruta || "Ruta no disponible"}
                    </span>
                    <span className="text-slate-800 dark:tw-text-slate-400 text-sm">
                      {ferrySet.vuelta?.hora_salida} -{" "}
                      {ferrySet.vuelta?.hora_llegada}
                    </span>
                  </div>
                  {ferrySet.vuelta?.precios?.map((option) => (
                    <div
                      key={option.id}
                      className={`flex items-center gap-4 p-2 border-b dark:tw-border-slate-700 ${
                        vuelta?.id === option.id &&
                        vuelta.ferryId === ferrySet.id
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
                        className="h-4 w-4 text-green-500 dark:tw-text-green-400 focus:ring-green-400  border-slate-300 dark:tw-border-slate-700"
                      />
                      <FaShip className="text-green-800 dark:tw-text-green-300" />
                      <div>
                        <p className="text-sm font-semibold text-slate-800 dark:tw-text-slate-300">
                          {option.tipo}
                        </p>
                        <p className="text-sm text-slate-600 dark:tw-text-slate-500">
                          Precio: {option.precio}€
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {seleccion !== true && (
                <div className="flex justify-end mt-2 p-3">
                  {ida?.ferryId === ferrySet.id && (
                    <Link to={"/datosferry"} state={ferry}>
                      <button className="font-semibold tw-bg-secondary text-white p-2 rounded-md">
                        Reservar por {calculateTotalPrice()}€
                      </button>
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Ferris;
