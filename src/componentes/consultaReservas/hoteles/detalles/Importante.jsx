import { useState } from "react";
function Importante({ hotel }) {
  const [activeTab, setActiveTab] = useState("Cancelación");
  const tabContent = {
    Cancelación: (
      <div className="tw-p-6 tw-text-sm tw-bg-slate-50 text-medium tw-text-slate-500 dark:tw-text-slate-400 dark:tw-bg-slate-800 tw-rounded-lg tw-w-full">
        {hotel.cancelaciones}
      </div>
    ),
    Observaciones: (
      <div className="tw-p-6 tw-text-sm tw-bg-slate-50 text-medium tw-text-slate-500 dark:tw-text-slate-400 dark:tw-bg-slate-800 tw-rounded-lg tw-w-full">
        {hotel.observaciones}
      </div>
    ),
    Pagos: (
      <div className="tw-p-6 tw-text-sm tw-bg-slate-50 text-medium tw-text-slate-500 dark:tw-text-slate-400 dark:tw-bg-slate-800 tw-rounded-lg tw-w-full">
        {hotel.pagos}
      </div>
    ),
  };

  return (
    <section className="tw-border-t-2 tw-border-slate-100 dark:tw-border-slate-700">
      <div className="md:tw-flex tw-mt-9">
        <ul className="tw-flex-column tw-space-y-4 tw-text-sm tw-font-medium tw-text-slate-500 dark:tw-text-slate-400 md:tw-me-4 tw-mb-4 md:tw-mb-0">
          {["Cancelación", "Observaciones", "Pagos"].map((tab) => (
            <li key={tab}>
              <button
                onClick={() => setActiveTab(tab)}
                className={`tw-inline-flex tw-items-center tw-px-4 tw-py-3 tw-rounded-lg tw-w-full ${
                  activeTab === tab
                    ? "tw-text-white tw-bg-secondary dark:tw-bg-secondaryDark"
                    : "hover:tw-text-slate-700 dark:hover:tw-text-slate-300 tw-bg-slate-50 hover:bg-slate-100 dark:tw-bg-slate-800 dark:tw-hover:bg-slate-700 dark:tw-hover:text-white"
                }`}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
        {tabContent[activeTab]}
      </div>
    </section>
  );
}

export default Importante;
