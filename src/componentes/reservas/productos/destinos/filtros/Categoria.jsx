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
        <div key={categoria.id} className="tw-flex tw-items-center">
          <input
            id={categoria.id}
            type="checkbox"
            value=""
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
    </>
  );
}

export default Categoria;
