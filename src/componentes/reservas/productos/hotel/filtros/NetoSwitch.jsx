import { FaEye } from "react-icons/fa";
function NetoSwitch({ neto, setNeto }) {
  return (
    <button
      onClick={() => setNeto(!neto)}
      className={`2xl:tw-left-10 tw-p-3 hover:tw-scale-105 tw-smooth tw-rounded-full tw-z-50   ${
        neto === true
          ? "tw-bg-slate-200 tw-text-slate-700 dark:tw-bg-slate-500 dark:tw-text-slate-200 "
          : "tw-bg-secondary tw-text-white"
      }`}
    >
      <FaEye />
    </button>
  );
}

export default NetoSwitch;
