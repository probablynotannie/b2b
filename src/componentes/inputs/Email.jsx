import { MdEmail } from "react-icons/md";

function Input_Texto({email,setEmail}) {
  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="relative">
      <input
        placeholder="Email"
        className="border bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5 pl-10 w-full"
        type="email"
        value={email}
        onChange={handleChange}
      />
      <div className="absolute top-0 pointer-events-none bg-inputIcon dark:bg-slate-800 dark:border-slate-600 dark:border-y-2 dark:border-l-2 text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl">
        <MdEmail />
      </div>
    </div>
  );
}

export default Input_Texto;
