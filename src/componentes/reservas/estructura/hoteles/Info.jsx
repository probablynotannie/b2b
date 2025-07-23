import { useState } from "react";
import { FaBookOpen } from "react-icons/fa";
function Info({ descripcion, titulo }) {
  const [isOpen, setIsOpen] = useState(false);

  const info = (
    <div className="tw-text-slate-500 dark:tw-text-slate-400">
      <p>{descripcion}</p>
    </div>
  );
  return (
    <div className="tw-border tw-border-slate-200 dark:tw-border-slate-700 tw-rounded-md tw-mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="tw-w-full tw-text-left tw-p-3 tw-py-6 tw-font-medium tw-bg-white dark:tw-bg-slate-900/50 hover:tw-bg-slate-100 tw-smooth dark:hover:tw-text-slate-300 tw-rounded-t-md"
      >
        <div
          className={`tw-flex tw-justify-between tw-items-center ${
            isOpen
              ? " tw-border-b tw-border-slate-700 dark:tw-border-slate-700 tw-pb-3 "
              : ""
          }`}
        >
          <span className="tw-text-slate-800 dark:tw-text-slate-300 tw-font-bold">
            {titulo}
          </span>
          <FaBookOpen
            className={`tw-text-xl ${
              isOpen
                ? "tw-text-secondary dark:tw-text-secondaryDark"
                : "tw-text-slate-500"
            }`}
          />
        </div>
      </button>

      {isOpen && (
        <div className="tw-p-3 tw-bg-slate-50 dark:tw-bg-slate-900/50 dark:tw-text-slate-300 tw-rounded-b-md">
          {info}
        </div>
      )}
    </div>
  );
}

export default Info;
