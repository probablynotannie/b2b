import { MdPerson } from "react-icons/md";

function Edad({ edad, setEdad }) {
  const ages = Array.from({ length: 100 }, (_, i) => i + 1);

  const handleChange = (event) => {
    setEdad(event.target.value);
  };

  return (
    <div className="relative">
      <select
        id="age"
        name="age"
        value={edad}
        onChange={handleChange}
        className="border bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5 pl-10 w-full cursor-pointer"
      >
        {ages.map((age) => (
          <option key={age} value={age}>
            {age}
          </option>
        ))}
      </select>
      <div className="absolute top-0 pointer-events-none tw-bg-inputIcon dark:bg-slate-800 dark:border-slate-600 dark:border-y-2 dark:border-l-2 text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl">
        <MdPerson />
      </div>
    </div>
  );
}

export default Edad;
