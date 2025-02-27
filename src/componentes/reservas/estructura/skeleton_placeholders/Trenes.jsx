function Trenes() {
  return (
    <section className="tw-pb-12 md:tw-mt-5 tw-flex tw-flex-col tw-gap-5 tw-animate-pulse">
      {[...Array(3)].map((_, index) => (
        <div
          className="tw-h-[20vh] tw-w-full tw-bg-slate-100 dark:tw-bg-slate-800 tw-rounded-t-lg tw-p-5 tw-flex tw-flex-col tw-gap-4 tw-py-10"
          key={index}
        >
          <div className="tw-flex tw-justify-between">
            <div className="tw-border-l-2 tw-border-slate-400 dark:tw-border-slate-700 tw-pl-3 tw-flex tw-flex-col tw-gap-3">
              <div className="tw-h-2 tw-w-52 tw-bg-slate-300 dark:tw-bg-slate-900 tw-rounded" />
              <div className="tw-h-2 tw-w-52 tw-bg-slate-300 dark:tw-bg-slate-900 tw-rounded" />
              <div className="tw-h-2 tw-w-52 tw-bg-slate-300 dark:tw-bg-slate-900 tw-rounded" />
            </div>
            <div className="tw-flex tw-gap-2">
              <div className="tw-h-8 tw-w-16 tw-bg-slate-300 dark:tw-bg-slate-900 tw-rounded" />
              <div className="tw-h-8 tw-w-16 tw-bg-slate-300 dark:tw-bg-slate-900 tw-rounded" />
              <div className="tw-h-8 tw-w-16 tw-bg-slate-300 dark:tw-bg-slate-900 tw-rounded" />
            </div>
          </div>
          <div className="tw-flex tw-justify-between">
            <div className="tw-flex tw-gap-3">
              <div className="tw-h-8 tw-w-20 tw-rounded-lg tw-bg-slate-400 dark:tw-bg-slate-700" />
              <div className="tw-h-8 tw-w-20 tw-rounded-lg tw-bg-slate-300 dark:tw-bg-slate-600" />
            </div>
            <div className="tw-h-8 tw-w-20 tw-rounded-lg tw-bg-slate-300 dark:tw-bg-slate-900" />
          </div>
        </div>
      ))}
    </section>
  );
}

export default Trenes;
