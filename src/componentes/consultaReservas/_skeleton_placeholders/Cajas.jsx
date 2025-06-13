function Cajas() {
  return (
    <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 xl:tw-grid-cols-3 tw-gap-6 tw-mt-5">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="tw-animate-pulse tw-bg-slate-200 dark:tw-bg-slate-800 tw-rounded-2xl tw-h-[200px] sm:tw-h-[230px] tw-w-full"
        >
          <div className="tw-h-6 tw-bg-slate-300 dark:tw-bg-slate-700 tw-rounded tw-mt-5 tw-mx-5 tw-w-1/2"></div>
          <div className="tw-flex tw-gap-2 tw-mt-3 tw-px-5">
            <div className="tw-h-4 tw-w-1/4 tw-bg-slate-300 dark:tw-bg-slate-700 tw-rounded"></div>
            <div className="tw-h-4 tw-w-1/3 tw-bg-slate-300 dark:tw-bg-slate-700 tw-rounded"></div>
          </div>
          <div className="tw-grid tw-grid-cols-2 tw-gap-2 tw-mt-5 tw-px-5">
            <div className="tw-h-4 tw-bg-slate-300 dark:tw-bg-slate-700 tw-rounded"></div>
            <div className="tw-h-4 tw-bg-slate-300 dark:tw-bg-slate-700 tw-rounded"></div>
            <div className="tw-h-4 tw-bg-slate-300 dark:tw-bg-slate-700 tw-rounded"></div>
            <div className="tw-h-4 tw-bg-slate-300 dark:tw-bg-slate-700 tw-rounded"></div>
          </div>
          <div className="tw-h-5 tw-w-1/3 tw-bg-slate-300 dark:tw-bg-slate-700 tw-rounded tw-mt-6 tw-mx-5"></div>
        </div>
      ))}
    </div>
  );
}

export default Cajas;
