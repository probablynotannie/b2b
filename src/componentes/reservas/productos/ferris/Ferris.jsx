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
      <h3 className="tw-text-secondary tw-font-semibold tw-text-lg">
        Resultados ({ferris.length})
      </h3>
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
            className="tw-mb-6 tw-relative tw-border tw-mt-5 md:tw-mt-0 dark:tw-border-slate-700 tw-rounded-lg tw-shadow-lg tw-bg-white dark:tw-bg-slate-800 tw-transition-all tw-rounded-t-xl"
          >
            <div
              className="tw-flex tw-justify-between tw-flex-wrap tw-items-center tw-p-4 tw-bg-white dark:tw-bg-slate-800 tw-transition tw-cursor-pointer tw-rounded-xl"
              onClick={() => toggleDropdown(ferrySet.id)}
            >
              <div className="tw-w-full md:tw-w-fit">
                {ida?.ferryId === ferrySet.id && (
                  <GoDotFill className="tw-absolute tw-top-3 tw-left-3 tw-text-green-500 tw-animate-bounce" />
                )}
                <div className="md:tw-w-fit tw-flex tw-w-full tw-justify-between tw-items-center">
                  <h3 className="tw-text-lg tw-font-bold tw-text-slate-800 dark:tw-text-slate-200">
                    Tarifa: {ferrySet.tarifa.toUpperCase()}
                  </h3>

                  <span className="tw-ml-3 tw-font-bold tw-bg-green-100 dark:tw-bg-green-800 tw-text-green-600 dark:tw-text-green-200 tw-border-2 tw-border-green-100 dark:tw-border-green-800 tw-px-2 tw-py-1 tw-text-base tw-rounded-full">
                    Desde: {minTotalPrice}€
                  </span>
                </div>
                <p className="tw-text-sm tw-text-slate-600 dark:tw-text-slate-400">
                  Cambios:{" "}
                  <span className="tw-font-medium">
                    {ferrySet.cambios ? "Permitidos" : "No Permitidos"}
                  </span>{" "}
                  | Cancelaciones:{" "}
                  <span className="tw-font-medium">
                    {ferrySet.cancelaciones ? "Permitidas" : "No Permitidas"}
                  </span>
                </p>
              </div>
              <div className="tw-text-xs tw-text-center tw-justify-center tw-flex-col tw-flex tw-items-center tw-space-x-4 tw-w-full md:tw-w-fit tw-mt-5 md:tw-mt-0">
                <div className="dark:tw-bg-slate-100 tw-px-2 tw-flex tw-justify-center tw-items-center tw-w-full">
                  <img
                    src={ferrySet.compania}
                    alt="logo compania"
                    className="tw-h-14 md:tw-w-16 tw-w-full tw-object-contain tw-rounded-md"
                  />
                </div>
              </div>
            </div>
            <div
              className={`tw-transition-all tw-duration-500 tw-ease-in-out tw-overflow-hidden ${
                openFerrySets.includes(ferrySet.id) ? "max-h-screen" : "max-h-0"
              }`}
            >
              <div className="tw-p-4 tw-border-t dark:tw-border-slate-700">
                <div className="tw-flex tw-justify-between">
                  <span className="text-md tw-font-bold tw-text-slate-800 dark:tw-text-slate-400 tw-mb-3">
                    Ida: {ferrySet.ida?.ruta || "Ruta no disponible"}
                  </span>
                  <span className="tw-text-slate-800 dark:tw-text-slate-400 tw-text-sm">
                    {ferrySet.ida?.hora_salida} - {ferrySet.ida?.hora_llegada}
                  </span>
                </div>
                {ferrySet.ida?.precios?.map((option) => (
                  <div
                    key={option.id}
                    className={`tw-flex tw-items-center tw-gap-4 tw-p-2 tw-border-b dark:tw-border-slate-700 ${
                      ida?.id === option.id && ida.ferryId === ferrySet.id
                        ? "tw-bg-blue-50 dark:tw-bg-slate-900"
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
                      className="tw-h-4 tw-w-4 tw-text-green-500 dark:tw-text-green-400 focus:tw-ring-green-400 tw-border-slate-300 dark:tw-border-slate-700"
                    />
                    <FaShip className="tw-text-green-800 dark:tw-text-green-300" />
                    <div>
                      <p className="tw-text-sm tw-font-semibold tw-text-slate-800 dark:tw-text-slate-300">
                        {option.tipo}
                      </p>
                      <p className="tw-text-sm tw-text-slate-600 dark:tw-text-slate-500">
                        Precio: {option.precio}€
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {ferrySet.vuelta && (
                <div className="tw-p-4 tw-border-t dark:tw-border-slate-700">
                  <div className="tw-flex tw-justify-between">
                    <span className="text-md tw-font-bold tw-text-slate-800 dark:tw-text-slate-400 tw-mb-3">
                      Vuelta: {ferrySet.vuelta?.ruta || "Ruta no disponible"}
                    </span>
                    <span className="tw-text-slate-800 dark:tw-text-slate-400 tw-text-sm">
                      {ferrySet.vuelta?.hora_salida} -{" "}
                      {ferrySet.vuelta?.hora_llegada}
                    </span>
                  </div>
                  {ferrySet.vuelta?.precios?.map((option) => (
                    <div
                      key={option.id}
                      className={`tw-flex tw-items-center tw-gap-4 tw-p-2 tw-border-b dark:tw-border-slate-700 ${
                        vuelta?.id === option.id &&
                        vuelta.ferryId === ferrySet.id
                          ? "tw-bg-blue-50 dark:tw-bg-slate-900"
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
                        className="tw-h-4 tw-w-4 tw-text-green-500 dark:tw-text-green-400 focus:tw-ring-green-400 tw-border-slate-300 dark:tw-border-slate-700"
                      />
                      <FaShip className="tw-text-green-800 dark:tw-text-green-300" />
                      <div>
                        <p className="tw-text-sm tw-font-semibold tw-text-slate-800 dark:tw-text-slate-300">
                          {option.tipo}
                        </p>
                        <p className="tw-text-sm tw-text-slate-600 dark:tw-text-slate-500">
                          Precio: {option.precio}€
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {seleccion !== true && (
                <div className="tw-flex tw-justify-end tw-mt-2 tw-p-3">
                  {ida?.ferryId === ferrySet.id && (
                    <Link to={"/datosferry"} state={ferry}>
                      <button className="tw-btn_primario tw-btn_accesorios">
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
