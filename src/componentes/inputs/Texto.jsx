import { FaUser } from "react-icons/fa";
import { FaPassport } from "react-icons/fa6";

function Input_Texto({ tipo, setValue }) {
  const handleInputChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="relative">
      <input
        placeholder={tipo ? tipo : "Datos"}
        className="border bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5 pl-10 w-full"
        type="text"
        onChange={handleInputChange}
      />
      <div className="absolute top-0 pointer-events-none bg-inputIcon dark:bg-slate-800 dark:border-slate-600 dark:border-y-2 dark:border-l-2 text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl">
        {tipo !== "Pasaporte" ? <FaUser /> : <FaPassport />}
      </div>
    </div>
  );
}

export default Input_Texto;
