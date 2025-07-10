function Cruceros() {
  return (
    <div className="tw-mb-6">
      <div className="tw-grid tw-gap-3 md:tw-grid-cols-2 lg:tw-grid-cols-3 xl:tw-grid-cols-3">
        {[...Array(3)].map((_, idx) => (
          <div
            key={idx}
            className="tw-w-full tw-p-6 tw-bg-white tw-border tw-border-slate-200 tw-rounded-lg tw-shadow-sm dark:tw-bg-slate-800 dark:tw-border-slate-700"
          >
            <div className="tw-mb-2 tw-h-7 tw-w-2/3 tw-bg-slate-200 dark:tw-bg-slate-700 tw-rounded tw-animate-pulse"></div>
            <div className="tw-mb-3 tw-h-5 tw-w-1/2 tw-bg-slate-200 dark:tw-bg-slate-700 tw-rounded tw-animate-pulse"></div>
            <div className="tw-h-4 tw-w-20 tw-bg-slate-200 dark:tw-bg-slate-700 tw-rounded tw-mb-2 tw-animate-pulse"></div>
            <div className="tw-flex tw-flex-wrap tw-gap-3 tw-my-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="tw-px-6 tw-py-2 tw-bg-slate-200 dark:tw-bg-slate-700 tw-rounded-lg tw-animate-pulse tw-h-6 tw-w-16"
                ></div>
              ))}
            </div>
            <div className="tw-inline-flex tw-items-center tw-mt-3 tw-px-3 tw-py-2 tw-bg-slate-200 dark:tw-bg-slate-700 tw-rounded-lg tw-w-32 tw-h-8 tw-animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cruceros;
