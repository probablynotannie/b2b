function Placeholder() {
  return (
    <>
      {[...Array(2)].map((_, i) => (
        <div
          key={`loading-skeleton-${i}`}
          className="tw-group tw-flex tw-flex-row tw-bg-slate-50 dark:tw-bg-slate-900 tw-border tw-border-slate-200 dark:tw-border-slate-700 tw-rounded-xl tw-overflow-hidden tw-select-none tw-pointer-events-none tw-mb-4"
        >
          <div className="tw-w-2/5 tw-bg-gray-300 dark:tw-bg-gray-700 tw-animate-pulse tw-rounded-lg"></div>
          <div className="tw-flex-1 tw-p-4 tw-flex tw-flex-col tw-justify-between">
            <div className="tw-flex tw-flex-col tw-gap-2 tw-border-b tw-pb-4 tw-border-slate-100 dark:tw-border-slate-700">
              <div className="tw-flex tw-flex-col">
                <div className="tw-h-6 tw-bg-gray-300 dark:tw-bg-gray-700 tw-rounded tw-w-3/4 tw-mb-2 tw-animate-pulse"></div>
                <div className="tw-h-4 tw-bg-gray-300 dark:tw-bg-gray-700 tw-rounded tw-w-1/2 tw-animate-pulse"></div>
              </div>
              <div className="tw-h-4 tw-bg-gray-300 dark:tw-bg-gray-700 tw-rounded tw-w-full tw-mt-2 tw-animate-pulse"></div>
              <div className="tw-h-4 tw-bg-gray-300 dark:tw-bg-gray-700 tw-rounded tw-w-1/3 tw-mt-1 tw-animate-pulse"></div>
            </div>
            <div className="tw-mt-4">
              <div className="tw-w-full tw-h-8 tw-bg-gray-300 dark:tw-bg-gray-700 tw-rounded-lg tw-animate-pulse"></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Placeholder;
