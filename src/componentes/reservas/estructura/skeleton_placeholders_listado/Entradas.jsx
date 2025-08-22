function Entradas() {
  return (
    <section className="tw-pb-12 md:tw-mt-5 tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-4 tw-animate-pulse">
      {[...Array(6)].map((_, index) => (
        <div
          className="tw-border-2 tw-overflow-hidden tw-bg-white dark:tw-bg-slate-800 tw-relative tw-border-slate-100 dark:tw-border-slate-700 tw-h-auto tw-max-w-full tw-rounded-lg tw-shadow-lg"
          key={index}
        >
          <span className="tw-absolute tw-rotate-45 tw-w-[150px] tw-bg-secondary/30 dark:tw-bg-secondaryDark/50 tw-rounded-lg tw-px-2 tw-p-1 tw-top-5 -tw-right-10 tw-z-10 tw-shadow-lg tw-h-6"></span>
          <div className="tw-relative">
            <div className="tw-h-[25vh] tw-w-full tw-bg-slate-300 dark:tw-bg-slate-900 tw-rounded-t-lg"></div>
          </div>
          <div className="tw-p-5">
            <div className="tw-h-5 tw-w-3/4 tw-bg-slate-300 dark:tw-bg-slate-700 tw-rounded tw-mb-2"></div>
            <div className="tw-h-4 tw-w-full tw-bg-slate-300 dark:tw-bg-slate-700 tw-rounded tw-mb-1"></div>
            <div className="tw-h-4 tw-w-5/6 tw-bg-slate-300 dark:tw-bg-slate-700 tw-rounded tw-mb-3"></div>
            <div className="tw-flex tw-items-center tw-gap-2">
              <div className="tw-h-4 tw-w-12 tw-bg-slate-300 dark:tw-bg-slate-700 tw-rounded"></div>
              <div className="tw-h-4 tw-w-20 tw-bg-slate-300 dark:tw-bg-slate-700 tw-rounded"></div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Entradas;
