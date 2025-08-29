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
      <h2 className="tw-font-semibold tw-mb-4 dark:tw-text-white">
        Seleccionar Entradas
      </h2>

      <div className="tw-grid md:tw-grid-cols-2 tw-gap-5 ">
        {tickets.length === 0 && (
          <p className="tw-text-gray-500 dark:tw-text-slate-400r">
            No hay tickets seleccionados.
          </p>
        )}
        {tickets.map((ticket, index) => (
          <div
            key={index}
            className="tw-border tw-rounded-lg tw-bg-slate-50 dark:tw-bg-slate-800 dark:tw-border-slate-700 tw-shadow"
          >
            <div className="tw-flex tw-justify-between tw-items-center tw-mb-2 tw-bg-slate-900 tw-p-4 tw-rounded-t-lg">
              <h3 className=" tw-font-semibold tw-text-white dark:tw-text-slate-100">
                Ticket {index + 1}: {ticket.modalName}
              </h3>
              {!cesta && (
                <button
                  className="hover:tw-scale-110 tw-smooth tw-bg-red-600 tw-p-1 tw-rounded tw-text-white tw-text-lg"
                  onClick={() => removeTicket(index)}
                >
                  <FaRegTrashAlt />
                </button>
              )}
            </div>

            <div className="tw-flex tw-flex-col tw-gap-2 tw-p-4">
              {cesta !== true ? (
                <>
                  <label className="dark:tw-text-slate-200">Horario:</label>

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
                    className="tw-border tw-rounded tw-border-slate-200 dark:tw-border-slate-700 dark:tw-bg-slate-800 dark:tw-text-slate-300 tw-px-2 tw-py-1"
                  >
                    {producto.ListaOpciones.map((option) => (
                      <option key={option.modalcode} value={option.modalcode}>
                        {option.modalName} - €{option.precio}
                      </option>
                    ))}
                  </select>

                  <label className="dark:tw-text-slate-200">Cantidad:</label>
                  <input
                    type="number"
                    min="1"
                    value={ticket.quantity}
                    onChange={(e) =>
                      updateTicket(index, "quantity", Number(e.target.value))
                    }
                    disabled={cesta}
                    className="tw-border tw-rounded tw-border-slate-200 dark:tw-border-slate-700 dark:tw-bg-slate-800 dark:tw-text-slate-300 tw-px-2 tw-py-1"
                  />
                </>
              ) : (
                <div>
                  <span>cantidad</span>
                  <div className="tw-border tw-border-slate-200 dark:tw-border-slate-700 tw-p-2 tw-rounded-lg">
                    {ticket.quantity}
                  </div>
                  <span>precios</span>
                  <div className="tw-border tw-border-slate-200 dark:tw-border-slate-700 tw-p-2 tw-rounded-lg">
                    {ticket.price}€
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
