import { FaPercent, FaEuroSign } from "react-icons/fa";

function Desglose({ precio }) {
  return (
    <>
      <h3 className="font-semibold text-center border-b-2 my-3 pb-3 dark:tw-text-slate-300 border-slate-100 dark:tw-border-slate-700 uppercase">
        Desglose:
      </h3>
      <div className="grid grid-cols-3 justify-around w-full text-center py-1">
        <p className="flex flex-col justify-center items-center text-sm text-slate-400 dark:tw-text-slate-500">
          <FaPercent className="tw-text-secondary dark:tw-text-secondary" />
          <span className="tw-text-secondary font-semibold text-lg">
            {precio - precio * 0.15}
          </span>
          Neto
        </p>
        <p className="flex flex-col justify-center items-center text-sm text-slate-400 dark:tw-text-slate-500">
          <FaPercent className="tw-text-secondary dark:tw-text-secondary" />
          <span className="tw-text-secondary font-semibold text-lg">15%</span>
          Margen
        </p>
        <p className="flex flex-col justify-center items-center text-sm text-slate-400 dark:tw-text-slate-500">
          <FaEuroSign className="tw-text-secondary dark:tw-text-secondary" />
          <span className="tw-text-secondary font-semibold text-lg">{precio}</span>
          P.V.P
        </p>
      </div>
    </>
  );
}

export default Desglose;
