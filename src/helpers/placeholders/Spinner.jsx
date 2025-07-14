import { CgSpinner } from "react-icons/cg";

function Spinner() {
  return (
    <div className="tw-flex tw-justify-center tw-items-center">
      <CgSpinner className="tw-animate-spin tw-text-2xl tw-text-slate-600" />
    </div>
  );
}

export default Spinner;
