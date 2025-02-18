function Inspiracion() {
  const inspiraciones = [
    {
      id: "inspiracion_naturaleza",
      texto: "Naturaleza",
    },
  ];
  return (
    <>
   
      {inspiraciones.map((inspiracion) => (
        <div key={inspiracion.id} className="flex items-center">
          <input
            id={inspiracion.id}
            type="checkbox"
            value=""
            className="w-4 h-4 tw-text-secondary bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor={inspiracion.id}
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            {inspiracion.texto}
          </label>
        </div>
      ))}
    </>
  );
}

export default Inspiracion;
