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
        <div key={categoria.id} className="flex items-center">
          <input
            id={categoria.id}
            type="checkbox"
            checked={tipos.includes(categoria.id)}
            onChange={handleCheckboxChange}
            className="w-4 h-4 tw-text-secondary bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor={categoria.id}
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            {categoria.texto}
          </label>
        </div>
      ))}
    </div>
  );
}

export default TiposCoches;
