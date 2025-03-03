import { useState, useEffect } from "react";
import { Modal } from "flowbite-react";
import formatearFecha from "../../estructura/FormatearFecha";
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
    <section className="pb-12 md:mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {tickets.map((actividad, index) => {
        const isSelected = actividades.some(
          (item) => item.titulo === actividad.titulo
        );
        return (
          <article
            key={index}
            onClick={() => setActiveActividad(actividad)}
            className={`border-2 hover:scale-[102%] duration-300  relative  h-auto max-w-full rounded-lg rounded-t-lg shadow-lg hover:shadow-xl transition cursor-pointer ${
              isSelected
                ? "bg-elegido dark:bg-green-950 border-2 border-secondary dark:tw-border-green-500"
                : "bg-white  dark:bg-slate-800 border-slate-100 dark:tw-border-slate-700 "
            }`}
          >
            <span
              className={`absolute rotate-45 bg-blue-500 rounded-lg px-2 p-1 font-bold text-sm top-5 right-5 z-10 shadow-lg ${
                actividad.tipoPrecio === "Neto"
                  ? "bg-green-300 text-green-800"
                  : "bg-red-500 text-red-200"
              }`}
            >
              {actividad.tipoPrecio}
            </span>
            <div className="relative">
              <img
                className="h-[25vh] w-full object-cover rounded-t-lg"
                src={actividad.img}
                alt={actividad.titulo}
              />
              <div className="bg-emerald-500  tw-bg-opacity-15 absolute top-0 w-full h-full" />
            </div>
            <div className="p-5">
              <h1 className="font-semibold text-slate-600 dark:tw-text-slate-300">
                {actividad.titulo}
              </h1>
              <p className="text-sm dark:tw-text-slate-400">
                {actividad.descripcion_corta}
              </p>
              <p className="mt-3 text-lg">
                <span className="text-slate-400 text-sm mr-1">Desde:</span>
                <span className="font-bold text-green-600 dark:tw-text-green-400">
                  {actividad.precio}€
                </span>
              </p>
            </div>
          </article>
        );
      })}

      {activeActividad && (
        <Modal dismissible show={true} onClose={() => setActiveActividad(null)}>
          <Modal.Header>{activeActividad.titulo}</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <img
                alt="Imagen actividad"
                src={activeActividad.img}
                className="w-full h-[20vh] object-cover rounded-lg"
              />
              <p className="dark:tw-text-slate-300">
                {activeActividad.descripcion_corta}
              </p>
              <div className="grid grid-cols-2 gap-5">
                {isSelected ? (
                  <div>
                    {formatearFecha(fechaSeleccionada)} - {horaSeleccionada}
                  </div>
                ) : (
                  <>
                    <div className="relative ">
                      <select
                        id="fecha"
                        className="border bg-white dark:bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5 pl-10 w-full cursor-pointer"
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
                      <div className="absolute top-0 pointer-events-none tw-bg-inputIcon dark:bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl">
                        <FaCalendarAlt />
                      </div>
                    </div>
                  </>
                )}
                {fechaSeleccionada && !isSelected && (
                  <>
                    <div className="relative ">
                      <select
                        id="hora"
                        className="border bg-white dark:bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5 pl-10 w-full cursor-pointer"
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
                      <div className="absolute top-0 pointer-events-none tw-bg-inputIcon dark:bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl">
                        <FaClock />
                      </div>
                    </div>
                  </>
                )}
              </div>
              {fechaSeleccionada && horaSeleccionada && (
                <div className="mt-4">
                  <label className="block font-semibold  dark:tw-text-slate-100">
                    Entradas:
                  </label>
                  {isSelected ? (
                    <div className="flex gap-4">
                      <div>
                        <p>
                          Adultos: {entradasSeleccionadas.adulto} (
                          {activeActividad.tiposEntradas.adulto.precio}€)
                        </p>
                      </div>
                      <div>
                        <p>
                          Niños: {entradasSeleccionadas.niño} (
                          {activeActividad.tiposEntradas.niño.precio}€)
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex gap-4">
                      <div>
                        <label
                          htmlFor="adulto"
                          className="block text-sm  dark:tw-text-slate-100"
                        >
                          Adultos ({activeActividad.tiposEntradas.adulto.precio}
                          €)
                        </label>
                        <select
                          id="adulto"
                          className="border bg-white dark:bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5 w-full cursor-pointer"
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
                          className="block text-sm  dark:tw-text-slate-100"
                        >
                          Niños ({activeActividad.tiposEntradas.niño.precio}€)
                        </label>
                        <select
                          id="niño"
                          className="border bg-white dark:bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5 w-full cursor-pointer"
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
          <Modal.Footer>
            <button
              className="p-3 bg-slate-500 text-white font-semibold rounded-lg shadow"
              onClick={() => setActiveActividad(null)}
            >
              Cerrar
            </button>
            <button
              className="p-3 tw-bg-secondary text-white font-semibold rounded-lg shadow"
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
