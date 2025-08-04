function Regimenes({ selected, onChange, regimenes }) {
  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    onChange((prev) =>
      prev.includes(value)
        ? prev.filter((option) => option !== value)
        : [...prev, value]
    );
  };
  return (
    <div>
      {regimenes.map((option, index) => (
        <div key={index} className="tw-flex tw-items-center tw-mb-2">
          <input
            type="checkbox"
            id={`regimen_${index}`}
            value={option}
            checked={selected.includes(option)}
            onChange={handleCheckboxChange}
            className="tw-w-4 tw-h-4 tw-text-secondary tw-bg-gray-100 dark:tw-bg-slate-700 dark:tw-border-slate-600 tw-border-gray-300 tw-rounded focus:tw-ring-secondary focus:tw-ring-2"
          />
          <label
            htmlFor={`regimen_${index}`}
            className="tw-ml-2 tw-text-sm tw-text-gray-900 dark:tw-text-slate-400"
          >
            {option}
          </label>
        </div>
      ))}
    </div>
  );
}

export default Regimenes;
