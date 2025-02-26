import { MdPerson } from "react-icons/md";

function Edad({ edad, setEdad, edadMinima, edadMaxima }) {
  const ages = Array.from(
    {
      length:
        (edadMaxima ? edadMaxima : 100) - (edadMinima ? edadMinima : 1) + 1,
    },
    (_, i) => i + (edadMinima ? edadMinima : 1)
  );

  const handleChange = (event) => {
    setEdad(event.target.value);
  };

  return (
    <div className="tw-relative">
      <select
        id="age"
        name="age"
        value={edad}
        onChange={handleChange}
        className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-h-[40px] tw-pl-10 tw-w-full tw-cursor-pointer"
      >
        {ages.map((age) => (
          <option key={age} value={age}>
            {age}
          </option>
        ))}
      </select>
      <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
        <MdPerson />
      </div>
    </div>
  );
}

export default Edad;
