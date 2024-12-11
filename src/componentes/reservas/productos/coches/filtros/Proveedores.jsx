function Proveedores({ categoriasSeleccionadas, setCategoriasSeleccionadas }) {
  const categorias = [
    { id: "flexible", texto: "Flexible" },
    { id: "rigido", texto: "Rígido" },
  ];
  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;

    if (checked) {
      setCategoriasSeleccionadas((prev) => [...prev, id]);
    } else {
      setCategoriasSeleccionadas((prev) =>
        prev.filter((categoryId) => categoryId !== id)
      );
    }
  };
  return (
    <div>
      {categorias.map((categoria) => (
        <div key={categoria.id} className="flex items-center">
          <input
            id={categoria.id}
            type="checkbox"
            checked={categoriasSeleccionadas.includes(categoria.id)} // Determine if the checkbox is checked
            onChange={handleCheckboxChange} // Call handler when checkbox state changes
            className="w-4 h-4 text-secondary bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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

export default Proveedores;
