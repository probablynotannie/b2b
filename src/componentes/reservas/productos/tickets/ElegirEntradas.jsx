import { FaRegTrashAlt } from "react-icons/fa";

function ElegirEntradas({ tickets, setTickets, producto, cesta }) {
  const addTicket = () => {
    const currentDateTime = new Date();
    let nextDate = "";
    let nextTime = "";
    for (const [date, times] of Object.entries(producto.reserva.fechas)) {
      const availableDate = new Date(date.split("-").reverse().join("-"));
      if (availableDate >= currentDateTime) {
        for (const time of times.horarios) {
          const [hour, minute] = time.hora.split(":").map(Number);
          const availableTime = new Date(availableDate);
          availableTime.setHours(hour, minute);

          if (availableTime > currentDateTime) {
            nextDate = date;
            nextTime = time.hora;
            break;
          }
        }
        if (nextDate) break;
      }
    }

    if (nextDate && nextTime) {
      setTickets((prevTickets) => [
        ...prevTickets,
        {
          date: nextDate,
          time: nextTime,
          type: "adulto",
          quantity: 1,
        },
      ]);
    } else {
      alert("No hay fechas y horarios disponibles después de la hora actual.");
    }
  };

  const updateTicket = (index, field, value) => {
    setTickets((prevTickets) => {
      const updatedTickets = [...prevTickets];
      updatedTickets[index][field] = value;
      return updatedTickets;
    });
  };

  const removeTicket = (index) => {
    setTickets((prevTickets) =>
      prevTickets.filter((_, ticketIndex) => ticketIndex !== index)
    );
  };

  return (
    <div>
      <div className="tw-grid md:tw-grid-cols-2 tw-gap-5">
        {tickets.map((ticket, index) => (
          <div
            key={index}
            className="tw-mb-5 tw-border dark:tw-border-slate-700 tw-bg-slate-50 dark:tw-bg-slate-800 tw-shadow hover:tw-shadow-md tw-smooth tw-rounded-lg tw-overflow-hidden"
          >
            <div className="tw-flex tw-justify-between tw-items-center tw-bg-slate-700 dark:tw-bg-slate-900 tw-p-2">
              <h2 className="tw-font-semibold tw-text-white">
                Ticket {index + 1}
              </h2>
              {cesta !== true && (
                <button
                  className="tw-bg-red-500 tw-text-white tw-p-2 tw-rounded tw-shadow hover:tw-shadow-lg tw-smooth"
                  onClick={() => removeTicket(index)}
                >
                  <FaRegTrashAlt />
                </button>
              )}
            </div>
            <div className="tw-grid tw-grid-cols-2 tw-gap-4 tw-p-4">
              <div className="tw-mb-2 tw-flex tw-flex-col">
                <label className="dark:tw-text-slate-100">Fecha</label>
                <select
                  className="tw-border tw-border-slate-300 dark:tw-bg-slate-600 dark:tw-text-slate-100 dark:tw-border-slate-800 tw-rounded"
                  value={ticket.date}
                  onChange={(e) => updateTicket(index, "date", e.target.value)}
                  disabled={cesta === true}
                >
                  {Object.keys(producto.reserva.fechas).map((date) => (
                    <option key={date} value={date}>
                      {date}
                    </option>
                  ))}
                </select>
              </div>
              <div className="tw-mb-2 tw-flex tw-flex-col">
                <label className="dark:tw-text-slate-100">Hora</label>
                <select
                  className="tw-border tw-border-slate-300 dark:tw-bg-slate-600 dark:tw-text-slate-100 dark:tw-border-slate-800 tw-rounded"
                  value={ticket.time}
                  onChange={(e) => updateTicket(index, "time", e.target.value)}
                  disabled={cesta === true || !ticket.date}
                >
                  {ticket.date &&
                    producto.reserva.fechas[ticket.date].horarios.map(
                      (time) => (
                        <option key={time.hora} value={time.hora}>
                          {time.hora}
                        </option>
                      )
                    )}
                </select>
              </div>
              <div className="tw-mb-2 tw-flex tw-flex-col">
                <label className="dark:tw-text-slate-100">Tipo</label>
                <select
                  className="tw-border tw-border-slate-300 dark:tw-bg-slate-600 dark:tw-text-slate-100 dark:tw-border-slate-800 tw-rounded"
                  value={ticket.type}
                  onChange={(e) => updateTicket(index, "type", e.target.value)}
                  disabled={cesta === true}
                >
                  <option value="adulto">
                    Adulto - €{producto.reserva.tiposEntradas.adulto.precio}
                  </option>
                  <option value="niño">
                    Niño - €{producto.reserva.tiposEntradas.niño.precio}
                  </option>
                </select>
              </div>
              <div className="tw-mb-2 tw-flex tw-flex-col">
                <label className="dark:tw-text-slate-100">Cantidad</label>
                <input
                  className="tw-border tw-border-slate-300 dark:tw-bg-slate-600 dark:tw-text-slate-100 dark:tw-border-slate-800 tw-rounded"
                  type="number"
                  value={ticket.quantity}
                  min="1"
                  max={
                    ticket.type === "adulto"
                      ? producto.reserva.tiposEntradas.adulto.maxEntradas
                      : producto.reserva.tiposEntradas.niño.maxEntradas
                  }
                  onChange={(e) =>
                    updateTicket(index, "quantity", e.target.value)
                  }
                  disabled={cesta === true}
                />
              </div>
              {ticket.date && ticket.time && (
                <div className="tw-text-sm dark:tw-text-slate-300">
                  {producto.reserva.fechas[ticket.date].horarios
                    .filter((time) => time.hora === ticket.time)
                    .map((time) => (
                      <div key={time.hora}>
                        <p>Guía: {time.guia}</p>
                        <p>Lugar: {time.lugar}</p>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {cesta !== true && (
        <button
          className="tw-btn_primario tw-btn_accesorios"
          onClick={addTicket}
        >
          Añadir entrada
        </button>
      )}
    </div>
  );
}

export default ElegirEntradas;
