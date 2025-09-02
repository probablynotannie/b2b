import { useState, useEffect } from "react";
import { Modal } from "flowbite-react";
import formatearFecha from "../../../assets/scripts/formatearFecha";
import { FaCalendarAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
function Resultado({ tickets, actividades, setActividades }) {
  const [activeActividad, setActiveActividad] = useState(null);
  const [fechaSeleccionada, setFechaSeleccionada] = useState("");
  const [horaSeleccionada, setHoraSeleccionada] = useState("");
  const [entradasSeleccionadas, setEntradasSeleccionadas] = useState({
    adulto: 0,
    niño: 0,
  });
  useEffect(() => {
    if (activeActividad) {
      const actividad = actividades.find(
        (item) => item.titulo === activeActividad.titulo
      );
      if (actividad) {
        setFechaSeleccionada(actividad.fechaSeleccionada || "");
        setHoraSeleccionada(actividad.horaSeleccionada || "");
        setEntradasSeleccionadas(
          actividad.entradasSeleccionadas || {
            adulto: 0,
            niño: 0,
          }
        );
      } else {
        setFechaSeleccionada("");
        setHoraSeleccionada("");
        setEntradasSeleccionadas({
          adulto: 0,
          niño: 0,
        });
      }
    }
  }, [activeActividad, actividades]);

  const calculateTotalPrice = () => {
    if (activeActividad) {
      const adultoPrice = activeActividad.tiposEntradas.adulto.precio;
      const niñoPrice = activeActividad.tiposEntradas.niño.precio;
      return (
        entradasSeleccionadas.adulto * adultoPrice +
        entradasSeleccionadas.niño * niñoPrice
      );
    }
    return 0;
  };

  const handleSelectActividad = (actividad) => {
    const totalTickets =
      entradasSeleccionadas.adulto + entradasSeleccionadas.niño;

    if (totalTickets === 0) {
      alert("Por favor selecciona al menos una entrada.");
      return;
    }
    if (!fechaSeleccionada || !horaSeleccionada) {
      alert("Por favor selecciona una fecha y una hora.");
      return;
    }
    const totalPrice = calculateTotalPrice();
    const actividadConDetalles = {
      ...actividad,
      fechaSeleccionada,
      horaSeleccionada,
      entradasSeleccionadas,
      precioTotal: totalPrice,
      paxReserva: {
        adultos: entradasSeleccionadas.adulto,
        ninios: entradasSeleccionadas.niño,
      },
    };

    setActividades((prevActividades) => {
      const isAlreadySelected = prevActividades.some(
        (item) => item.titulo === actividad.titulo
      );
      if (isAlreadySelected) {
        return prevActividades.filter(
          (item) => item.titulo !== actividad.titulo
        );
      } else {
        return [...prevActividades, actividadConDetalles];
      }
    });

    setActiveActividad(null);
  };
  const handleTicketChange = (type, value) => {
    setEntradasSeleccionadas((prev) => ({
      ...prev,
      [type]: Number(value),
    }));
  };

  const isSelected = activeActividad
    ? actividades.some((item) => item.titulo === activeActividad.titulo)
    : false;

  return (
    <section className="tw-pb-12 md:tw-mt-5 tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-4">
      {tickets.map((actividad, index) => {
        const isSelected = actividades.some(
          (item) => item.titulo === actividad.titulo
        );
        return (
          <article
            key={index}
            onClick={() => setActiveActividad(actividad)}
            className={`tw-border-2 hover:tw-scale-[102%] tw-duration-300 tw-relative tw-overflow-hidden tw-h-auto tw-max-w-full tw-rounded-lg tw-rounded-t-lg tw-shadow-lg hover:tw-shadow-xl tw-transition tw-cursor-pointer ${
              isSelected
                ? "tw-bg-elegido dark:tw-bg-green-950 tw-border-2 tw-border-secondary dark:tw-border-green-500"
                : "tw-bg-white dark:tw-bg-slate-800 tw-border-slate-100 dark:tw-border-slate-700 "
            }`}
          >
            <span
              className={`tw-absolute tw-w-[150px] tw-text-center tw-rotate-45 tw-bg-blue-500 tw-rounded-lg tw-px-2 tw-p-1 tw-font-bold tw-text-sm tw-top-5 -tw-right-10 tw-z-10 tw-shadow-lg ${
                actividad.tipoPrecio === "Neto"
                  ? "tw-bg-green-300/70 tw-text-green-800"
                  : "tw-bg-red-500/70 tw-text-red-200"
              }`}
            >
              {actividad.tipoPrecio}
            </span>
            <div className="tw-relative">
              <img
                className="tw-h-[25vh] tw-w-full tw-object-cover tw-rounded-t-lg"
                src={actividad.img}
                alt={actividad.titulo}
              />
              <div className="tw-bg-emerald-500 tw-bg-opacity-15 tw-absolute tw-top-0 tw-w-full tw-h-full" />
            </div>
            <div className="tw-p-5">
              <h1 className="tw-font-semibold tw-text-slate-600 dark:tw-text-slate-300">
                {actividad.titulo}
              </h1>
              <p className="tw-text-sm dark:tw-text-slate-400">
                {actividad.descripcion_corta}
              </p>
              <p className="tw-mt-3 tw-text-lg">
                <span className="tw-text-slate-400 tw-text-sm tw-mr-1">
                  Desde:
                </span>
                <span className="tw-font-bold tw-text-green-600 dark:tw-text-green-400">
                  {actividad.precio}€
                </span>
              </p>
            </div>
          </article>
        );
      })}
      {activeActividad && (
        <Modal
          className="tw-bg-black/70"
          dismissible
          show={true}
          onClose={() => setActiveActividad(null)}
        >
          <Modal.Header className="dark:tw-bg-slate-800 dark:tw-border-slate-700 tw-border-slate-100">
            <span className="dark:tw-text-white">{activeActividad.titulo}</span>
          </Modal.Header>
          <Modal.Body className="dark:tw-bg-slate-800">
            <div className="tw-space-y-6 ">
              <img
                alt="Imagen actividad"
                src={activeActividad.img}
                className="tw-w-full tw-h-[20vh] tw-object-cover tw-rounded-lg"
              />
              <p className="dark:tw-text-slate-300">
                {activeActividad.descripcion_corta}
              </p>
              <div className="tw-grid tw-grid-cols-2 tw-gap-5">
                {isSelected ? (
                  <div className="dark:tw-text-slate-400">
                    {formatearFecha(fechaSeleccionada)} - {horaSeleccionada}
                  </div>
                ) : (
                  <>
                    <div className="tw-relative">
                      <select
                        id="fecha"
                        className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-pl-10 tw-w-full tw-cursor-pointer"
                        value={fechaSeleccionada}
                        onChange={(e) => setFechaSeleccionada(e.target.value)}
                      >
                        <option value="">Selecciona una fecha</option>
                        {Object.keys(activeActividad.fechasDisponibles).map(
                          (fecha) => (
                            <option key={fecha} value={fecha}>
                              {formatearFecha(fecha)}
                            </option>
                          )
                        )}
                      </select>
                      <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
                        <FaCalendarAlt />
                      </div>
                    </div>
                  </>
                )}
                {fechaSeleccionada && !isSelected && (
                  <>
                    <div className="tw-relative">
                      <select
                        id="hora"
                        className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-pl-10 tw-w-full tw-cursor-pointer"
                        value={horaSeleccionada}
                        onChange={(e) => setHoraSeleccionada(e.target.value)}
                      >
                        <option value="">Selecciona una hora</option>
                        {activeActividad.fechasDisponibles[
                          fechaSeleccionada
                        ].map((hora) => (
                          <option key={hora} value={hora}>
                            {hora}
                          </option>
                        ))}
                      </select>
                      <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
                        <FaClock />
                      </div>
                    </div>
                  </>
                )}
              </div>
              {fechaSeleccionada && horaSeleccionada && (
                <div className="tw-mt-4">
                  <label className="tw-block tw-font-semibold dark:tw-text-slate-100">
                    Entradas:
                  </label>
                  {isSelected ? (
                    <div className="tw-flex tw-gap-4 tw-text-sm">
                      <div className="tw-p-1 tw-bg-pink-100 tw-text-pink-600 dark:tw-bg-pink-700 dark:tw-text-pink-100 tw-rounded-lg tw-shadow">
                        <p>
                          Adultos: {entradasSeleccionadas.adulto} (
                          {activeActividad.tiposEntradas.adulto.precio}€)
                        </p>
                      </div>
                      <div className="tw-p-1 tw-bg-indigo-100 tw-text-indigo-600 dark:tw-bg-indigo-800 dark:tw-text-indigo-200 tw-rounded-lg tw-shadow">
                        <p>
                          Niños: {entradasSeleccionadas.niño} (
                          {activeActividad.tiposEntradas.niño.precio}€)
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="tw-grid tw-grid-cols-2 tw-gap-4">
                      <div>
                        <label
                          htmlFor="adulto"
                          className="tw-block tw-text-sm dark:tw-text-slate-100"
                        >
                          Adultos ({activeActividad.tiposEntradas.adulto.precio}
                          €)
                        </label>
                        <select
                          id="adulto"
                          className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-w-full tw-cursor-pointer"
                          value={entradasSeleccionadas.adulto}
                          onChange={(e) =>
                            handleTicketChange("adulto", e.target.value)
                          }
                        >
                          {Array.from(
                            {
                              length:
                                activeActividad.tiposEntradas.adulto
                                  .maxEntradas + 1,
                            },
                            (_, i) => (
                              <option key={i} value={i}>
                                {i}
                              </option>
                            )
                          )}
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="niño"
                          className="tw-block tw-text-sm dark:tw-text-slate-100"
                        >
                          Niños ({activeActividad.tiposEntradas.niño.precio}€)
                        </label>
                        <select
                          id="niño"
                          className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-w-full tw-cursor-pointer"
                          value={entradasSeleccionadas.niño}
                          onChange={(e) =>
                            handleTicketChange("niño", e.target.value)
                          }
                        >
                          {Array.from(
                            {
                              length:
                                activeActividad.tiposEntradas.niño.maxEntradas +
                                1,
                            },
                            (_, i) => (
                              <option key={i} value={i}>
                                {i}
                              </option>
                            )
                          )}
                        </select>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </Modal.Body>
          <Modal.Footer className="dark:tw-bg-slate-800 dark:tw-border-slate-700 tw-border-slate-100">
            <button
              className="tw-p-3 tw-bg-slate-500 dark:tw-bg-slate-600 tw-text-white tw-font-semibold tw-rounded-lg tw-shadow"
              onClick={() => setActiveActividad(null)}
            >
              Cerrar
            </button>
            <button
              className="tw-btn_primario tw-btn_accesorios"
              onClick={() => handleSelectActividad(activeActividad)}
            >
              {isSelected
                ? "Eliminar actividad"
                : `Añadir ${
                    fechaSeleccionada &&
                    horaSeleccionada &&
                    calculateTotalPrice() + "€"
                  }`}
            </button>
          </Modal.Footer>
        </Modal>
      )}
    </section>
  );
}

export default Resultado;
