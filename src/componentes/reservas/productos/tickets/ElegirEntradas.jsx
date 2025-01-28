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
      <div className="grid grid-cols-2 gap-5">
        {tickets.map((ticket, index) => (
          <div
            key={index}
            className="mb-5 border dark:border-slate-700 bg-slate-50 dark:bg-slate-800 shadow hover:shadow-md transition duration-300 rounded-lg"
          >
            <div className="flex justify-between items-center bg-slate-700 dark:bg-slate-900 p-2">
              <h2 className="font-semibold text-white">Ticket {index + 1}</h2>
              {cesta !== true && (
                <button
                  className="bg-red-500 text-white p-2 rounded shadow hover:shadow-lg transition duration-300"
                  onClick={() => removeTicket(index)}
                >
                  <FaRegTrashAlt />
                </button>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4 p-4">
              <div className="mb-2 flex flex-col">
                <label className="dark:text-slate-100">Fecha</label>
                <select
                  className="border border-slate-300 dark:bg-slate-600 dark:text-slate-100 dark:border-slate-800 rounded"
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
              <div className="mb-2 flex flex-col">
                <label className="dark:text-slate-100">Hora</label>
                <select
                  className="border border-slate-300 dark:bg-slate-600 dark:text-slate-100 dark:border-slate-800  rounded"
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
              <div className="mb-2 flex flex-col">
                <label className="dark:text-slate-100">Tipo</label>
                <select
                  className="border border-slate-300 dark:bg-slate-600 dark:text-slate-100 dark:border-slate-800  rounded"
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
              <div className="mb-2 flex flex-col">
                <label className="dark:text-slate-100">Cantidad</label>
                <input
                  className="border border-slate-300 dark:bg-slate-600 dark:text-slate-100 dark:border-slate-800  rounded"
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
                <div className=" text-sm dark:text-slate-300">
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
          className="tw-bg-secondary text-white p-3 font-bold rounded"
          onClick={addTicket}
        >
          Añadir entrada
        </button>
      )}
    </div>
  );
}

export default ElegirEntradas;
