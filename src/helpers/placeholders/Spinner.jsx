import { FaSpinner } from "react-icons/fa";

function Spinner() {
  return (
    <div className="tw-flex tw-justify-center tw-items-center">
      <FaSpinner className="tw-animate-spin tw-text-2xl tw-text-slate-600" />
    </div>
  );
}

export default Spinner;
