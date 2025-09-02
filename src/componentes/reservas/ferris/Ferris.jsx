import { useState } from "react";
import { FaShip } from "react-icons/fa";
import { Link } from "react-router-dom";
import extractDateAndTime from "../../../assets/scripts/extractDateAndTime.js";
import calcularDuracion from "../../../assets/scripts/calcularDuracion.js";
import capitalizeFirstLetter from "../../../assets/scripts/capitalizeFirstLetterOnly.js";
import TarifaNames from "./jsons/TarifaNames.js";

function Ferris({
  ida,
  setIda,
  vuelta,
  setVuelta,
  setFerry,
  ferry,
  ferrisData,
}) {
  const [openTipoSets, setOpenTipoSets] = useState([]);
  const results = Object.values(ferrisData.results) ?? [];
  const idaFerries = results?.[0]?.ListaTarifas ?? [];
  const vueltaFerries = results?.[1]?.ListaTarifas ?? [];
  const tipos = [
    ...new Set([...idaFerries, ...vueltaFerries].map((t) => t.Tipo)),
  ];

  const toggleDropdown = (tipo) => {
    setOpenTipoSets((prev) =>
      prev.includes(tipo) ? prev.filter((t) => t !== tipo) : [...prev, tipo]
    );
  };
  const handleSelection = (type, tarifa) => {
    const ferryObj = type === "ida" ? results?.[0] : results?.[1];
    if (!ferryObj) return;

    const opcionSeleccionada = {
      ferryId: ferryObj?.AuxRef,
      id: tarifa.Code + tarifa.AcomodationCode,
      tipo: tarifa.Tipo,
      nombre: tarifa.Name,
      Pvp: tarifa.Pvp,
      Restriction: tarifa.Restriction,
      fecha_salida: ferryObj?.FechaSalida?.date,
      fecha_llegada: ferryObj?.FechaLlegada?.date,
      puerto_origen: ferryObj?.PuertoOrigen,
      puerto_destino: ferryObj?.PuertoDestino,
      barco: ferryObj?.NombreBarco,
      img: ferryObj?.Img,
    };

    setFerry((prevFerry) => {
      const newFerry = { ...prevFerry };
      if (type === "ida") {
        if (vuelta && vuelta.tipo !== tarifa.Tipo) {
          newFerry.vuelta = null;
          setVuelta(null);
        }
        newFerry.ida = opcionSeleccionada;
        setIda(opcionSeleccionada);
      } else {
        if (ida && ida.tipo !== tarifa.Tipo) {
          newFerry.ida = null;
          setIda(null);
        }
        newFerry.vuelta = opcionSeleccionada;
        setVuelta(opcionSeleccionada);
      }
      return newFerry;
    });
  };

  return (
    <section>
      {tipos.map((tipo) => {
        const idaTarifas = idaFerries.filter((t) => t.Tipo === tipo);
        const vueltaTarifas = vueltaFerries.filter((t) => t.Tipo === tipo);

        const minIda =
          idaTarifas.length > 0 ? Math.min(...idaTarifas.map((t) => t.Pvp)) : 0;
        const minVuelta =
          vueltaTarifas.length > 0
            ? Math.min(...vueltaTarifas.map((t) => t.Pvp))
            : 0;

        const minPrice = minIda + minVuelta;
        const isOpen = openTipoSets.includes(tipo);

        const { hora: horaIda } = extractDateAndTime(
          results?.[0]?.FechaSalida?.date
        );
        const { hora: horaLlegada } = extractDateAndTime(
          results?.[0]?.FechaLlegada?.date
        );
        const duracionViajeIda = calcularDuracion(
          results?.[0]?.FechaSalida?.date,
          results?.[0]?.FechaLlegada?.date
        );

        const { hora: horaVuelta } = extractDateAndTime(
          results?.[1]?.FechaSalida?.date
        );
        const { hora: horaLlegadaVuelta } = extractDateAndTime(
          results?.[1]?.FechaLlegada?.date
        );
        const duracionViajeVuelta = calcularDuracion(
          results?.[1]?.FechaSalida?.date,
          results?.[1]?.FechaLlegada?.date
        );
        return (
          <div
            key={tipo}
            className={`tw-mt-2 tw-border dark:tw-border-slate-700 tw-border-slate-100 tw-rounded-lg tw-shadow hover:tw-shadow-lg tw-bg-white dark:tw-bg-slate-800 tw-transition-all tw-duration-500`}
          >
            <div
              className="tw-flex tw-justify-between tw-items-center tw-p-4 tw-cursor-pointer"
              onClick={() => toggleDropdown(tipo)}
            >
              <div>
                <div className="md:tw-w-fit tw-flex tw-w-full tw-justify-between tw-items-start">
                  <h3 className="tw-text-lg tw-font-bold tw-text-slate-800 dark:tw-text-slate-200">
                    Tarifa:
                    <span className="tw-uppercase">
                      {TarifaNames[tipo].Title}
                    </span>
                  </h3>
                  <span
                    className={`
                    tw-ml-3 tw-font-bold  tw-border-2 tw-px-2 tw-py-1 tw-text-base tw-rounded-full
                    tw-bg-green-100 dark:tw-bg-green-800 tw-text-green-600 dark:tw-text-green-200 dark:tw-border-green-800 tw-border-green-100 dark:tw-border-green-800"
                    `}
                  >
                    Desde: {minPrice.toFixed(2)}€
                  </span>
                </div>
                {ida?.tipo === tipo && vuelta?.tipo === tipo && (
                  <p className="tw-text-sm tw-text-green-600 dark:tw-text-green-400 tw-mt-1">
                    Seleccionado: {ida.nombre} + {vuelta.nombre} (
                    {(ida.Pvp + vuelta.Pvp).toFixed(2)}€)
                  </p>
                )}
                <p className="dark:tw-text-slate-400 tw-text-sm">
                  {TarifaNames[tipo].Descrip}
                </p>
              </div>
              <div className="dark:tw-bg-slate-100 tw-rounded-lg tw-overflow-hidden">
                <img
                  src={ferrisData.operador.imagen}
                  alt="GNV Logo"
                  className="tw-h-12 tw-w-24 tw-object"
                />
              </div>
            </div>

            {isOpen && (
              <div className="tw-p-4 tw-border-t dark:tw-border-slate-700 tw-space-y-4">
                <div className="tw-flex tw-justify-between">
                  <div>
                    <h4 className="text-md tw-font-bold tw-text-slate-800 dark:tw-text-slate-400 tw-mb-3">
                      Ida: {results?.[0]?.PuertoOrigen} -{" "}
                      {results?.[0]?.PuertoDestino}
                    </h4>
                    <span className="tw-text-slate-500 dark:tw-text-slate-400 tw-font-semibold tw-text-sm">
                      duración viaje: {duracionViajeIda}
                    </span>
                  </div>
                  <span className="tw-text-slate-800 dark:tw-text-slate-400 tw-text-sm">
                    {horaIda} - {horaLlegada}
                  </span>
                </div>
                {idaFerries
                  .filter((t) => t.Tipo === tipo)
                  .map((tarifa) => {
                    tarifa;
                    const selected =
                      ida?.id === tarifa.Code + tarifa.AcomodationCode;
                    return (
                      <div
                        key={tarifa.Code + tarifa.AcomodationCode}
                        className={`tw-group tw-relative tw-flex tw-items-center tw-gap-4 tw-p-2 tw-border-b dark:tw-border-slate-700 ${
                          selected ? "tw-bg-blue-50 dark:tw-bg-slate-900" : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name={`ida-${tipo}`}
                          checked={selected}
                          onChange={() => handleSelection("ida", tarifa)}
                          className="tw-h-4 tw-w-4 tw-text-green-500 dark:tw-text-green-400 tw-border-slate-300 dark:tw-border-slate-700"
                        />
                        <FaShip className="tw-text-green-800 dark:tw-text-green-300" />
                        <div>
                          <p className="tw-text-sm tw-font-semibold tw-text-slate-800 dark:tw-text-slate-300">
                            {capitalizeFirstLetter(tarifa.Name)}
                          </p>
                          <p className="tw-text-sm tw-text-slate-600 dark:tw-text-slate-500">
                            {tarifa.Pvp.toFixed(2)}€
                          </p>
                        </div>

                        {tarifa.Restriction && (
                          <div className="tw-absolute tw-hidden tw-ml-2 tw--translate-y-1/2 tw-left-0 tw-top-20 tw-z-50 group-hover:tw-block tw-w-fit tw-rounded-lg tw-bg-white tw-border-2 tw-border-slate-200 dark:tw-border-slate-700 dark:tw-bg-slate-800 tw-p-2 tw-text-sm tw-text-slate-700 tw-shadow-lg dark:tw-text-slate-200">
                            <p>{tarifa.Restriction}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}

                {results.length > 1 &&
                  vueltaFerries.some((t) => t.Tipo === tipo) && (
                    <>
                      <div className="tw-flex tw-justify-between">
                        <div>
                          <h4 className="text-md tw-font-bold tw-text-slate-800 dark:tw-text-slate-400">
                            Vuelta: {results?.[1]?.PuertoOrigen} -{" "}
                            {results?.[1]?.PuertoDestino}
                          </h4>
                          <span className="tw-text-slate-500">
                            duración viaje: {duracionViajeVuelta}
                          </span>
                        </div>
                        <span className="tw-text-slate-800 dark:tw-text-slate-400 tw-text-sm">
                          {horaVuelta} - {horaLlegadaVuelta}
                        </span>
                      </div>
                      {vueltaFerries
                        .filter((t) => t.Tipo === tipo)
                        .map((tarifa) => {
                          const selected =
                            vuelta?.id === tarifa.Code + tarifa.AcomodationCode;
                          return (
                            <div
                              key={tarifa.Code + tarifa.AcomodationCode}
                              className={`tw-group tw-relative tw-flex tw-items-center tw-gap-4 tw-p-2 tw-border-b dark:tw-border-slate-700 ${
                                selected
                                  ? "tw-bg-blue-50 dark:tw-bg-slate-900"
                                  : ""
                              }`}
                            >
                              <input
                                type="radio"
                                name={`vuelta-${tipo}`}
                                checked={selected}
                                onChange={() =>
                                  handleSelection("vuelta", tarifa)
                                }
                                className="tw-h-4 tw-w-4 tw-text-green-500 dark:tw-text-green-400 tw-border-slate-300 dark:tw-border-slate-700"
                              />
                              <FaShip className="tw-text-green-800 dark:tw-text-green-300" />
                              <div>
                                <p className="tw-text-sm tw-font-semibold tw-text-slate-800 dark:tw-text-slate-300">
                                  {capitalizeFirstLetter(tarifa.Name)}
                                </p>
                                <p className="tw-text-sm tw-text-slate-600 dark:tw-text-slate-500">
                                  {tarifa.Pvp.toFixed(2)}€
                                </p>
                              </div>
                              {tarifa.Restriction && (
                                <div className="tw-absolute tw-hidden tw-ml-2 tw--translate-y-1/2 tw-left-0 tw-top-20 tw-z-50 group-hover:tw-block tw-w-fit tw-rounded-lg tw-bg-white tw-border-2 tw-border-slate-200 dark:tw-border-slate-700 dark:tw-bg-slate-800 tw-p-2 tw-text-sm tw-text-slate-700 tw-shadow-lg dark:tw-text-slate-200">
                                  <p>{tarifa.Restriction}</p>
                                </div>
                              )}
                            </div>
                          );
                        })}
                    </>
                  )}

                {ida?.tipo === tipo &&
                  (!results?.[1] || vuelta?.tipo === tipo) && (
                    <div className="tw-flex tw-justify-end tw-mt-4">
                      <Link to="/ferry" state={{ ferry, ferrisData }}>
                        <button className="tw-btn_primario tw-btn_accesorios">
                          Reservar por{" "}
                          {((ida?.Pvp || 0) + (vuelta?.Pvp || 0)).toFixed(2)}€
                        </button>
                      </Link>
                    </div>
                  )}
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}

export default Ferris;
