function Destinos() {
  return (
    <>
      {Array.from({ length: 2}, (_, index) => (
        <article
          key={index}
          className="tw-bg-slate-50 tw-flex dark:tw-bg-slate-800 tw-shadow-lg tw-border-2 tw-border-slate-100 dark:tw-border-slate-800 tw-rounded-xl tw-mt-5 lg:tw-mt-10 tw-flex-col tw-relative min-lg:h-[25vh] tw-animate-pulse"
        >
          <div className="tw-relative tw-w-full">
            <div className="tw-h-[25vh] tw-bg-slate-300 dark:tw-bg-slate-900 tw-rounded-t-lg"></div>
          </div>
          <div className="tw-px-5 tw-py-3 dark:tw-text-slate-300">
            <div className="tw-flex tw-justify-between tw-items-center">
              <div className="tw-h-5 tw-w-2/3 tw-bg-slate-300 dark:tw-bg-slate-700 tw-rounded"></div>
            </div>
            <div className="tw-flex tw-flex-wrap tw-gap-5 tw-border-b-2 tw-border-slate-100 dark:tw-border-slate-700 tw-pb-5 tw-mt-3">
              <div className="tw-h-4 tw-w-1/2 tw-bg-slate-300 dark:tw-bg-slate-700 tw-rounded"></div>
              <div className="tw-h-4 tw-w-1/2 tw-bg-slate-300 dark:tw-bg-slate-700 tw-rounded"></div>
            </div>
            <div className="tw-mt-4">
              <div className="tw-h-4 tw-w-1/4 tw-bg-slate-300 dark:tw-bg-slate-700 tw-rounded tw-mb-2"></div>
              <div className="tw-h-4 tw-w-1/4 tw-bg-slate-300 dark:tw-bg-slate-700 tw-rounded"></div>
            </div>
            <div className="tw-mt-4 tw-text-center">
              <div className="tw-h-3 tw-w-1/3 tw-bg-slate-300 dark:tw-bg-slate-700 tw-rounded tw-mx-auto"></div>
              <div className="tw-h-3 tw-w-1/4 tw-bg-slate-300 dark:tw-bg-slate-700 tw-rounded tw-mx-auto tw-mt-2"></div>
            </div>
          </div>
        </article>
      ))}
    </>
  );
}

export default Destinos;
