import { FaUser } from "react-icons/fa";
import { FaPassport } from "react-icons/fa6";

function Input_Texto({ tipo, name, register, errors }) {
  const error = errors?.[name];
  return (
    <div>
      <div className="tw-relative">
        <input
          {...register(name, { required: `${tipo} es obligatorio` })}
          placeholder={tipo || "Datos"}
          className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:tw-placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-pl-10 tw-w-full"
          type="text"
        />
        <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
          {name !== "pasaporte" ? <FaUser /> : <FaPassport />}
        </div>
      </div>

      {error && <p className="tw-text-red-500 tw-text-xs">{error?.message}</p>}
    </div>
  );
}

export default Input_Texto;
