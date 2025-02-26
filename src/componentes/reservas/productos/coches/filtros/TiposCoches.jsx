import { useState } from "react";
function TiposCoches({ tipos, setTipos }) {
  const categorias = [
    { id: "mini", texto: "Mini" },
    { id: "economy", texto: "Economy" },
    { id: "compact", texto: "Compact" },
    { id: "intermediate", texto: "Intermediate" },
  ];
  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;

    if (checked) {
      setTipos((prev) => [...prev, id]);
    } else {
      setTipos((prev) => prev.filter((categoryId) => categoryId !== id));
    }
  };
  return (
    <div>
      {categorias.map((categoria) => (
        <div key={categoria.id} className="tw-flex tw-items-center">
          <input
            id={categoria.id}
            type="checkbox"
            checked={tipos.includes(categoria.id)}
            onChange={handleCheckboxChange}
            className="tw-w-4 tw-h-4 tw-text-secondary tw-bg-gray-100 tw-border-gray-300 tw-rounded focus:tw-ring-blue-500 dark:focus:tw-ring-blue-600 dark:tw-ring-offset-gray-800 focus:tw-ring-2 dark:tw-bg-gray-700 dark:tw-border-gray-600"
          />
          <label
            htmlFor={categoria.id}
            className="tw-ms-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-gray-300"
          >
            {categoria.texto}
          </label>
        </div>
      ))}
    </div>
  );
}

export default TiposCoches;
