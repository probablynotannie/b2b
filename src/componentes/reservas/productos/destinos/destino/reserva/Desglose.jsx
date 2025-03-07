import { FaPercent, FaEuroSign } from "react-icons/fa";

function Desglose({ precio }) {
  return (
    <>
      <h3 className="tw-font-semibold tw-text-center tw-border-b-2 tw-my-3 tw-pb-3 dark:tw-text-slate-300 tw-border-slate-100 dark:tw-border-slate-700 tw-uppercase">
        Desglose:
      </h3>
      <div className="tw-grid tw-grid-cols-3 tw-justify-around tw-w-full tw-text-center tw-py-1">
        <p className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-text-sm tw-text-slate-400 dark:tw-text-slate-500">
          <FaPercent className="tw-text-secondary dark:tw-text-secondary" />
          <span className="tw-text-secondary tw-font-semibold tw-text-lg">
            {precio - precio * 0.15}
          </span>
          Neto
        </p>
        <p className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-text-sm tw-text-slate-400 dark:tw-text-slate-500">
          <FaPercent className="tw-text-secondary dark:tw-text-secondary" />
          <span className="tw-text-secondary tw-font-semibold tw-text-lg">15%</span>
          Margen
        </p>
        <p className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-text-sm tw-text-slate-400 dark:tw-text-slate-500">
          <FaEuroSign className="tw-text-secondary dark:tw-text-secondary" />
          <span className="tw-text-secondary tw-font-semibold tw-text-lg">{precio}</span>
          P.V.P
        </p>
      </div>
    </>
  );
}

export default Desglose;
