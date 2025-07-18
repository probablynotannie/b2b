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
    habitaciones?.reduce((total, h) => total + h.capacidad * h.cantidad, 0) ||
    0;

  const calcularCosto = (habitaciones) =>
    habitaciones?.reduce((total, h) => total + h.extra * h.cantidad, 0) || 0;

  return (
    <div className="tw-overflow-x-auto tw-my-4 dark:tw-bg-slate-800 tw-rounded-lg tw-shadow tw-p-2 tw-pb-5">
      <div className="tw-font-bold tw-text-slate-600 dark:tw-bg-slate-900 dark:tw-text-slate-200 tw-p-2 tw-rounded-t-lg tw-flex tw-justify-between tw-items-center tw-border-slate-100 dark:tw-border-slate-700 tw-border-b-2">
        Selección de hotel de {titulo}
      </div>

      {hotelesPagina.map((hotel) => {
        const seleccionHotel =
          seleccion?.hotelId === hotel.id ? seleccion : null;

        const habitacionesSeleccionadas = seleccionHotel?.habitaciones || [];

        const capacidadTotal = calcularCapacidad(habitacionesSeleccionadas);
        const costoTotal = calcularCosto(habitacionesSeleccionadas);

        return (
          <div
            key={hotel.id}
            className={`tw-rounded-lg tw-shadow tw-p-4 tw-my-4 ${
              seleccionHotel
                ? "tw-border-2 tw-border-secondary tw-bg-elegido dark:tw-bg-slate-900 dark:tw-border-secondaryDark"
                : "tw-bg-slate-100 dark:tw-bg-slate-900 tw-border-2 dark:tw-border-slate-700"
            }`}
          >
            <div className="tw-grid md:tw-grid-cols-5 tw-gap-4 tw-items-start">
              <div className="md:tw-col-span-3 lg:tw-col-span-5 xl:tw-col-span-2 tw-flex tw-items-center tw-gap-4">
                <img
                  src={hotel.imagenMiniatura}
                  alt={hotel.nombre}
                  className="tw-w-32 tw-h-20 tw-object-cover tw-rounded-lg"
                />
                <div className="tw-flex-1">
                  <div className="tw-flex tw-gap-2">
                    <button
                      onClick={() => setModalHotel(hotel)}
                      className="tw-text-secondary hover:tw-scale-110 tw-text-lg"
                    >
                      <FaInfoCircle />
                    </button>
                    <h3 className="tw-text-base tw-font-semibold tw-text-slate-800 dark:tw-text-slate-200">
                      {hotel.nombre}
                    </h3>
                  </div>
                  <p className="tw-text-xs tw-text-slate-500 dark:tw-text-slate-400">
                    {hotel.tipo.length}{" "}
                    {hotel.tipo.length === 1 ? "Régimen" : "Régimenes"}{" "}
                    disponible{" "}
                    <FaArrowRight className="tw-inline tw-text-slate-500 dark:tw-text-slate-400" />
                  </p>
                  <div className="tw-my-1 tw-text-sm dark:tw-text-slate-400">
                    <span
                      className={
                        capacidadTotal < pax
                          ? "tw-text-red-600 dark:tw-text-red-700"
                          : "tw-text-green-600 dark:tw-text-green-500"
                      }
                    >
                      {capacidadTotal} / {pax} pax
                    </span>
                    <p>
                      Total: <strong>{costoTotal}€</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className="tw-col-span-5 md:tw-col-span-2 lg:tw-col-span-3 2xl:tw-col-span-3">
                <span className="tw-block tw-text-sm tw-font-semibold tw-mb-2 dark:tw-text-slate-300">
                  Elegir habitación/es:
                </span>
                <div className="tw-grid md:tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-4">
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
                          className="tw-flex tw-justify-between tw-items-center tw-gap-2"
                        >
                          <div
                            className={`tw-w-full tw-text-sm  dark:tw-text-slate-200  tw-border-2 tw-p-2 tw-rounded-lg
                              ${
                                cantidad > 0
                                  ? "tw-bg-secondary dark:tw-bg-secondaryDark/30 tw-border-secondary tw-text-white"
                                  : "tw-bg-slate-200 dark:tw-bg-slate-700 tw-border-slate-200 dark:tw-border-slate-600 tw-text-slate-700"
                              }
                              `}
                          >
                            <div className="tw-flex tw-justify-between tw-mb-1 ">
                              <h3>{tipo.nombre}</h3>
                              <span className="tw-font-bold">
                                +{tipo.extra}€
                              </span>
                            </div>
                            <div className="tw-flex tw-justify-between tw-items-center dark:tw-text-slate-300">
                              Capcidad {tipo.capacidad}
                              <div className="tw-flex tw-items-center tw-gap-2">
                                <button
                                  onClick={() =>
                                    handleRoomChange(
                                      hotel.id,
                                      hotel.nombre,
                                      tipo,
                                      Math.max(0, cantidad - 1)
                                    )
                                  }
                                  className={`tw-py-1 tw-rounded-full tw-px-3 tw-smooth hover:tw-bg-opacity-65 hover:tw-scale-105
                                    
                                   ${
                                     cantidad > 0
                                       ? "tw-bg-white/20 dark:tw-bg-slate-600 tw-text-white"
                                       : "tw-bg-slate-300 dark:tw-bg-slate-600 "
                                   }
                              `}
                                >
                                  -
                                </button>
                                <span className="dark:tw-text-slate-100">
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
                                  className={`tw-py-1 tw-rounded-full tw-px-3 tw-smooth hover:tw-bg-opacity-65 hover:tw-scale-105 ${
                                    cantidad >= tipo.disponible
                                      ? "tw-bg-red-500 dark:tw-bg-red-800 tw-text-white tw-cursor-not-allowed"
                                      : cantidad > 0
                                      ? "tw-bg-white/20  dark:tw-bg-slate-600 tw-text-white"
                                      : "tw-bg-slate-300 dark:tw-bg-slate-600 "
                                  }`}
                                  disabled={cantidad >= tipo.disponible}
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="tw-flex tw-justify-center tw-gap-2 tw-mt-4">
        {Array.from({
          length: Math.ceil(hoteles.length / hotelesPorPagina),
        }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setPaginaActual(idx + 1)}
            className={`tw-px-3 tw-py-1 tw-rounded ${
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
