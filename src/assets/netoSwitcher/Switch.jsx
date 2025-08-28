import { FaEye } from "react-icons/fa";
import useNetoStore from "./useNetoStore";
function Switch() {
  const { neto, setNeto } = useNetoStore();

  return (
    <button
      className={`tw-flex tw-items-center tw-gap-2 tw-p-2 tw-rounded-md ${
        neto !== true
          ? "tw-bg-secondary dark:tw-bg-secondaryDark tw-text-white"
          : "tw-bg-slate-200 dark:tw-bg-slate-800 dark:tw-text-slate-200"
      }`}
      onClick={() => setNeto(!neto)}
    >
      <FaEye />
    </button>
  );
}

export default Switch;
