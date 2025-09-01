import { FaRegTrashAlt } from "react-icons/fa";

function ElegirEntradas({ producto, cesta, tickets, setTickets }) {
  const addTicket = () => {
    if (!producto?.ListaOpciones?.length) return;
    const firstOption = producto.ListaOpciones[0];
    setTickets((prev) => [
      ...prev,
      {
        code: firstOption.code,
        modalcode: firstOption.modalcode,
        modalName: firstOption.modalName,
        price: firstOption.precio,
        quantity: 1,
      },
    ]);
  };
  const updateTicket = (index, field, value) => {
    setTickets((prev) => {
      const updated = [...prev];
      updated[index][field] = value;
      return updated;
    });
  };
  const removeTicket = (index) => {
    setTickets((prev) => prev.filter((_, i) => i !== index));
  };
  return (
    <div className="tw-flex tw-flex-col tw-space-y-5">
      {cesta !== true && (
        <h2 className="tw-font-semibold tw-mb-4 dark:tw-text-white">
          Seleccionar Entradas
        </h2>
      )}
      <div className="tw-grid md:tw-grid-cols-2 tw-gap-5 ">
        {tickets.length === 0 && (
          <p className="tw-text-gray-500 dark:tw-text-slate-400r">
            No hay tickets seleccionados.
          </p>
        )}
        {tickets.map((ticket, index) => (
          <div
            key={index}
            className="tw-border tw-rounded-2xl tw-bg-white dark:tw-bg-slate-800 dark:tw-border-slate-700 tw-shadow-md tw-overflow-hidden tw-transition hover:tw-shadow-lg"
          >
            <div className="tw-flex tw-justify-between tw-items-center tw-bg-slate-700 dark:tw-bg-slate-900 tw-px-4 tw-py-3">
              <h3 className="tw-font-semibold tw-text-white tw-text-lg">
                Ticket {index + 1}: {ticket.modalName}
              </h3>
              {!cesta && (
                <button
                  onClick={() => removeTicket(index)}
                  className="tw-text-white tw-bg-red-600 tw-rounded-lg tw-p-2 tw-transition hover:tw-scale-110 hover:tw-bg-red-700"
                >
                  <FaRegTrashAlt />
                </button>
              )}
            </div>

            <div className="tw-flex tw-flex-col tw-gap-4 tw-p-4">
              {cesta !== true ? (
                <>
                  <div>
                    <label className="tw-block tw-mb-1 tw-font-medium dark:tw-text-slate-200">
                      Horario
                    </label>
                    <select
                      value={ticket.modalcode}
                      onChange={(e) => {
                        const selectedOption = producto.ListaOpciones.find(
                          (opt) => opt.modalcode === e.target.value
                        );
                        updateTicket(index, "modalcode", e.target.value);
                        updateTicket(
                          index,
                          "modalName",
                          selectedOption.modalName
                        );
                        updateTicket(index, "price", selectedOption.precio);
                      }}
                      disabled={cesta}
                      className="tw-w-full tw-border tw-rounded-lg tw-border-slate-300 dark:tw-border-slate-700 dark:tw-bg-slate-900 dark:tw-text-slate-200 tw-px-3 tw-py-2 tw-transition focus:tw-ring-2 focus:tw-ring-blue-500 focus:tw-border-blue-500"
                    >
                      {producto.ListaOpciones.map((option) => (
                        <option key={option.modalcode} value={option.modalcode}>
                          {option.modalName} - €{option.precio}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Cantidad */}
                  <div>
                    <label className="tw-block tw-mb-1 tw-font-medium dark:tw-text-slate-200">
                      Cantidad
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={ticket.quantity}
                      onChange={(e) =>
                        updateTicket(index, "quantity", Number(e.target.value))
                      }
                      disabled={cesta}
                      className="tw-w-full tw-border tw-rounded-lg tw-border-slate-300 dark:tw-border-slate-700 dark:tw-bg-slate-900 dark:tw-text-slate-200 tw-px-3 tw-py-2 tw-transition focus:tw-ring-2 focus:tw-ring-blue-500 focus:tw-border-blue-500"
                    />
                  </div>
                </>
              ) : (
                <div className="tw-grid tw-grid-cols-2 tw-gap-3 tw-text-sm">
                  <div>
                    <span className="tw-font-medium dark:tw-text-slate-200">
                      Cantidad
                    </span>
                    <div className="tw-mt-1 tw-border tw-rounded-lg tw-p-2 tw-text-center tw-bg-slate-50 dark:tw-bg-slate-900 dark:tw-text-slate-200 dark:tw-border-slate-700">
                      {ticket.quantity}x
                    </div>
                  </div>
                  <div>
                    <span className="tw-font-medium dark:tw-text-slate-200">
                      Precio
                    </span>
                    <div className="tw-mt-1 tw-border tw-rounded-lg tw-p-2 tw-text-center tw-bg-slate-50 dark:tw-bg-slate-900 dark:tw-text-slate-200 dark:tw-border-slate-700">
                      {ticket.price}€
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {!cesta && (
        <button
          onClick={addTicket}
          className="tw-btn_accesorios tw-btn_primario tw-w-fit"
        >
          Añadir entrada
        </button>
      )}
    </div>
  );
}

export default ElegirEntradas;
