function Categoria() {
  const categorias = [
    {
      id: "categoria_confort",
      texto: "Confort",
    },
    {
      id: "categoria_economico",
      texto: "Esconómico",
    },
  ];
  return (
    <>
     
      {categorias.map((categoria) => (
        <div key={categoria.id} className="flex items-center">
          <input
            id={categoria.id}
            type="checkbox"
            value=""
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
    </>
  );
}

export default Categoria;
