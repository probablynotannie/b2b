import { useState } from "react";

function Precio({ coche, extras, setExtras }) {
  const [selectedQuantities, setSelectedQuantities] = useState(
    coche.extras.reduce((acc, extra) => {
      acc[extra.id] = 0;
      return acc;
    }, {})
  );

  const handleChange = (extraId, precio, value) => {
    const quantity = parseInt(value, 10) || 0;
    setSelectedQuantities((prev) => {
      const updatedQuantities = { ...prev, [extraId]: quantity };
      const total = coche.extras.reduce(
        (acc, extra) => acc + (updatedQuantities[extra.id] || 0) * extra.precio,
        0
      );
      setExtras(total);

      return updatedQuantities;
    });
  };

  return (
    <div className="relative">
      <div className="flex justify-between">
        <h2 className="font-semibold">Extras</h2>
        <span className="font-bold  bg-green-500 dark:bg-green-700 text-white rounded-lg text-sm p-1 px-2">
          {extras.toFixed(2)}€
        </span>
      </div>
      {coche.extras.map((extra) => (
        <div className="grid grid-cols-1 gap-2" key={extra.id}>
          <div className="relative flex justify-between items-center mt-3">
            <span className="w-full p-2 font-bold text-secondary">
              {extra.id === "GPS" && "GPS"}
              {extra.id === "sillitabebe" && "Sillita bebé"}
              {extra.id === "sillitaninio" && "Sillita niño"}
              {extra.id === "elevador" && "Elevador"}
            </span>
            <select
              className="border bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5"
              onChange={(e) =>
                handleChange(extra.id, extra.precio, e.target.value)
              }
              value={selectedQuantities[extra.id]}
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
