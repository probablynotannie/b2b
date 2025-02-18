function Ciudades() {
  const ciudades = [
    {
      id: "ciudades_general",
      texto: "ciudades en general",
    },
  ];
  return (
    <>
      {ciudades.map((ciudad) => (
        <div key={ciudad.id} className="flex items-center">
          <input
            id={ciudad.id}
            type="checkbox"
            value=""
            className="w-4 h-4 tw-text-secondary bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor={ciudad.id}
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            {ciudad.texto}
          </label>
        </div>
      ))}
    </>
  );
}

export default Ciudades;
