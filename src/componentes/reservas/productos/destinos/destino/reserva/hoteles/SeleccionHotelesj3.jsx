import { useState, useEffect } from "react";
import { FaArrowRight, FaInfoCircle } from "react-icons/fa";

function SeleccionHoteles({
  hoteles,
  seleccion,
  setSeleccion,
  titulo,
  paginaActual,
  setPaginaActual,
  pax,
}) {
  const [modalHotel, setModalHotel] = useState(null);
  const hotelesPorPagina = 5;

  const hotelesPagina = hoteles.slice(
    (paginaActual - 1) * hotelesPorPagina,
    paginaActual * hotelesPorPagina
  );

  const handleRoomChange = (hotelId, hotelNombre, tipo, cantidad) => {
    const habitacionesActuales =
      seleccion?.hotelId === hotelId ? seleccion.habitaciones || [] : [];
    let nuevasHabitaciones = habitacionesActuales.filter(
      (h) => h.tipo !== tipo.nombre
    );
    if (cantidad > 0) {
      nuevasHabitaciones.push({
        tipo: tipo.nombre,
        cantidad,
        capacidad: tipo.capacidad,
        extra: tipo.extra,
      });
    }
    setSeleccion({
      hotelId,
      hotelNombre,
      habitaciones: nuevasHabitaciones,
    });
  };

  useEffect(() => {
    document.body.style.overflow = modalHotel ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalHotel]);

  const calcularCapacidad = (habitaciones) =>
    habitaciones?.reduce((total, h) => total + h.capacidad * h.cantidad, 0) || 0;

  const calcularCosto = (habitaciones) =>
    habitaciones?.reduce((total, h) => total + h.extra * h.cantidad, 0) || 0;

  return (
    <div className="tw-my-4 tw-bg-slate-100 dark:tw-bg-slate-800 tw-rounded-xl tw-shadow-lg tw-p-4 tw-overflow-x-auto">
      <div className="tw-text-lg tw-font-bold tw-text-slate-600 dark:tw-text-slate-200 tw-mb-4">
        Selección de hotel de {titulo}
      </div>

      {hotelesPagina.map((hotel) => {
        const currentSelection =
          seleccion?.hotelId === hotel.id ? seleccion : null;
        const habitacionesSeleccionadas = currentSelection?.habitaciones || [];
        const capacidadTotal = calcularCapacidad(habitacionesSeleccionadas);
        const costoTotal = calcularCosto(habitacionesSeleccionadas);

        return (
          <div
            key={hotel.id}
            className={`tw-bg-white dark:tw-bg-slate-900 tw-rounded-xl tw-shadow-md tw-p-4 tw-mb-6 tw-border ${
              currentSelection
                ? "tw-border-secondary dark:tw-border-secondaryDark"
                : "tw-border-slate-200 dark:tw-border-slate-700"
            }`}
          >
            <div className="tw-flex tw-items-center tw-gap-4">
              <img
                src={hotel.imagenMiniatura}
                alt={hotel.nombre}
                className="tw-w-28 tw-h-20 tw-object-cover tw-rounded-md"
              />
              <div className="tw-flex-1">
                <div className="tw-flex tw-items-center tw-gap-2">
                  <button
                    onClick={() => setModalHotel(hotel)}
                    className="tw-text-secondary hover:tw-scale-110 tw-transition tw-text-lg"
                  >
                    <FaInfoCircle />
                  </button>
                  <h3 className="tw-text-base tw-font-semibold tw-text-slate-800 dark:tw-text-slate-200">
                    {hotel.nombre}
                  </h3>
                </div>
                <p className="tw-text-xs tw-text-slate-500 dark:tw-text-slate-400">
                  {hotel.tipo.length}{" "}
                  {hotel.tipo.length === 1 ? "Régimen" : "Régimenes"} disponible{" "}
                  <FaArrowRight className="tw-inline" />
                </p>
              </div>
            </div>

            <div className="tw-mt-4">
              <p className="tw-text-sm tw-font-semibold tw-text-slate-700 dark:tw-text-slate-300 mb-2">
                Selecciona cantidad por tipo de habitación:
              </p>
              <div className="tw-flex tw-flex-col tw-gap-3">
                {[...hotel.tipo]
                  .sort((a, b) => a.extra - b.extra)
                  .map((tipo) => {
                    const seleccionActual = habitacionesSeleccionadas.find(
                      (h) => h.tipo === tipo.nombre
                    );
                    const cantidad = seleccionActual?.cantidad || 0;

                    return (
                      <div
                        key={tipo.nombre}
                        className="tw-border tw-rounded-lg tw-p-3 dark:tw-border-slate-700 tw-bg-slate-100 dark:tw-bg-slate-800"
                      >
                        <div className="tw-flex tw-justify-between tw-items-center tw-mb-2">
                          <div className="tw-text-sm tw-font-medium dark:tw-text-white">
                            {tipo.nombre} — Capacidad: {tipo.capacidad}
                          </div>
                          <div className="tw-text-sm tw-text-slate-600 dark:tw-text-slate-300">
                            +{tipo.extra}€
                          </div>
                        </div>
                        <div className="tw-flex tw-justify-end tw-items-center tw-gap-2">
                          <button
                            onClick={() =>
                              handleRoomChange(
                                hotel.id,
                                hotel.nombre,
                                tipo,
                                Math.max(0, cantidad - 1)
                              )
                            }
                            className="tw-bg-slate-300 dark:tw-bg-slate-600 tw-px-3 tw-py-1 tw-rounded tw-transition hover:tw-scale-105"
                          >
                            -
                          </button>
                          <span className="tw-w-6 tw-text-center dark:tw-text-white">
                            {cantidad}
                          </span>
                          <button
                            onClick={() =>
                              handleRoomChange(
                                hotel.id,
                                hotel.nombre,
                                tipo,
                                Math.min(cantidad + 1, tipo.disponible)
                              )
                            }
                            className={`tw-px-3 tw-py-1 tw-rounded tw-transition hover:tw-scale-105 ${
                              cantidad >= tipo.disponible
                                ? "tw-bg-red-500 dark:tw-bg-red-700 tw-text-white tw-cursor-not-allowed"
                                : "tw-bg-slate-300 dark:tw-bg-slate-600"
                            }`}
                            disabled={cantidad >= tipo.disponible}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>

            <div className="tw-mt-4 tw-text-sm tw-font-medium">
              Capacidad total:{" "}
              <span
                className={
                  capacidadTotal < pax ? "tw-text-red-600" : "tw-text-green-600"
                }
              >
                {capacidadTotal} / {pax} pax
              </span>
              <br />
              Costo total: <strong>{costoTotal}€</strong>
            </div>
          </div>
        );
      })}

      {/* Pagination */}
      <div className="tw-flex tw-justify-center tw-gap-2 tw-mt-6">
        {Array.from({
          length: Math.ceil(hoteles.length / hotelesPorPagina),
        }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setPaginaActual(idx + 1)}
            className={`tw-px-4 tw-py-2 tw-rounded tw-font-medium tw-text-sm transition ${
              paginaActual === idx + 1
                ? "tw-bg-secondary dark:tw-bg-secondaryDark tw-text-white"
                : "tw-bg-slate-200 hover:tw-bg-slate-300 dark:tw-bg-slate-600 dark:hover:tw-bg-slate-500 dark:tw-text-slate-300"
            }`}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SeleccionHoteles;
