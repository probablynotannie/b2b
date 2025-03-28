function Regimenes({ selected, onChange }) {
  const options = [
    { id: 1, label: "Solo alojamiento" },
    { id: 2, label: "Alojamiento y desayuno" },
    { id: 3, label: "Pensión completa" },
  ];

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    onChange((prev) => {
      if (prev.includes(value)) {
        return prev.filter((option) => option !== value); 
      } else {
        return [...prev, value];
      }
    });
  };

  return (
    <div>
      {options.map((option) => (
        <div key={option.id} className="tw-flex tw-items-center tw-mb-2">
          <input
            type="checkbox"
            id={`regimen_${option.id}`}
            value={option.label}
            checked={selected.includes(option.label)}
            onChange={handleCheckboxChange}
            className="tw-w-4 tw-h-4 tw-text-secondary tw-bg-gray-100 dark:tw-bg-slate-700 dark:tw-border-slate-600 tw-border-gray-300 tw-rounded focus:tw-ring-secondary focus:tw-ring-2"
          />
          <label
            htmlFor={`regimen_${option.id}`}
            className="tw-ml-2 tw-text-sm tw-text-gray-900 dark:tw-text-slate-400"
          >
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
}

export default Regimenes;
