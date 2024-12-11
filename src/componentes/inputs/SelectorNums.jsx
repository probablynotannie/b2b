function SelectorNums({ valor, setValor, num, placeholder, icono }) {
  const handlePassengerChange = (event) => {
    setValor(parseInt(event.target.value, 10));
  };
  return (
    <div className="relative">
      <select
        className="border bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5 pl-10 w-full cursor-pointer"
        defaultValue=""
        onChange={handlePassengerChange}
      >
        <option value=""> {placeholder} </option>
        {Array.from({ length: num }, (_, index) => (
          <option key={index + 1} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>
      <div className="absolute top-0 pointer-events-none bg-inputIcon dark:bg-slate-800 dark:border-slate-600 dark:border-y-2 dark:border-l-2 text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl">
        {icono}
      </div>
    </div>
  );
}

export default SelectorNums;
