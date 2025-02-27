function Regimenes() {
  const regimenes = [
    {
      id: "regimen_algunas",
      texto: "Algunas comidas/cenas",
    },
    {
      id: "regimen_AD",
      texto: "Alojamiento y desayuno",
    },
  ];
  return (
    <>

      {regimenes.map((regimen) => (
        <div key={regimen.id} className="flex items-center">
          <input
            id={regimen.id}
            type="checkbox"
            value=""
            className="w-4 h-4 tw-text-secondary bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:tw-border-gray-600"
          />
          <label
            htmlFor={regimen.id}
            className="ms-2 text-sm font-medium text-gray-900 dark:tw-text-gray-300"
          >
            {regimen.texto}
          </label>
        </div>
      ))}
    </>
  );
}

export default Regimenes;
