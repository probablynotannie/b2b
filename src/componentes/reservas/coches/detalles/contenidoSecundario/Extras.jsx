import { useState } from "react";

function Precio({ coche, extras, setExtras, setSelectedExtras }) {
  const [cantidad, setCantidad] = useState(
    coche.extras.reduce((acc, extra) => {
      acc[extra.id] = 0;
      return acc;
    }, {})
  );
  const handleChange = (extraId, precio, value) => {
    const quantity = parseInt(value, 10) || 0;
    setCantidad((prev) => {
      const updatedQuantities = { ...prev, [extraId]: quantity };
      const total = coche.extras.reduce(
        (acc, extra) => acc + (updatedQuantities[extra.id] || 0) * extra.precio,
        0
      );
      setExtras(total);
      const updatedSelectedExtras = coche.extras
        .filter((extra) => updatedQuantities[extra.id] > 0)
        .map((extra) => ({
          id: extra.id,
          quantity: updatedQuantities[extra.id],
          price: extra.precio * updatedQuantities[extra.id],
        }));
      setSelectedExtras(updatedSelectedExtras);
      return updatedQuantities;
    });
  };
  return (
    <div className="tw-relative">
      <div className="tw-flex tw-justify-between">
        <h2 className="tw-font-semibold dark:tw-text-white">Extras</h2>
        <span className="tw-font-bold tw-bg-green-500 dark:tw-bg-green-700 tw-text-white tw-rounded-lg tw-text-sm tw-p-1 tw-px-2">
          {extras.toFixed(2)}€
        </span>
      </div>

      {coche.extras.map((extra) => (
        <div className="tw-grid tw-grid-cols-1 tw-gap-2" key={extra.id}>
          <div className="tw-relative tw-flex tw-justify-between tw-items-center tw-mt-3">
            <span className="tw-w-full tw-p-2 tw-font-bold tw-text-slate-600 dark:tw-text-slate-400">
              {extra.id === "GPS" && "GPS"}
              {extra.id === "sillitabebe" && "Sillita bebé"}
              {extra.id === "sillitaninio" && "Sillita niño"}
              {extra.id === "elevador" && "Elevador"}
            </span>
            <select
              className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5"
              onChange={(e) =>
                handleChange(extra.id, extra.precio, e.target.value)
              }
              value={cantidad[extra.id]}
            >
              {Array.from({ length: extra.cantidad + 1 }, (_, i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Precio;
