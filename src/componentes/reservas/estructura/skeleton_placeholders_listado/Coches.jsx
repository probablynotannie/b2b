function Coches() {
  return (
    <>
      {Array.from({ length: 2 }, (_, index) => (
        <article
          key={index}
          className="tw-xl:flex tw-flex-row tw-border-2 tw-border-slate-100 dark:tw-border-slate-800 tw-rounded-xl tw-transition tw-mt-10 tw-relative tw-min-h-[15vh] tw-animate-pulse"
        >
          <div className="tw-w-full tw-h-[25vh] tw-lg:h-auto tw-xl:w-1/3 tw-lg:rounded-l-lg tw-rounded-t-lg tw-overflow-hidden tw-relative">
            <div className="tw-w-full tw-h-full tw-bg-slate-300 dark:tw-bg-slate-900"></div>
          </div>
          <div className="tw-p-5 tw-xl:w-2/3 dark:tw-bg-slate-800">
            <div className="tw-border-b-2 tw-border-slate-200 dark:tw-border-slate-700 tw-pb-2">
              <div className="tw-flex tw-justify-between tw-w-full tw-mb-2">
                <div className="tw-h-5 tw-w-2/3 tw-bg-slate-300 dark:tw-bg-slate-900 tw-rounded"></div>
                <div className="tw-h-5 tw-w-1/3 tw-bg-slate-300 dark:tw-bg-slate-900 tw-rounded"></div>
              </div>
              <div className="tw-flex tw-justify-between tw-w-full tw-mb-4">
                <div className="tw-h-4 tw-w-1/2 tw-bg-slate-300 dark:tw-bg-slate-900 tw-rounded"></div>
                <div className="tw-h-4 tw-w-1/5 tw-bg-slate-300 dark:tw-bg-slate-900 tw-rounded"></div>
              </div>
              <div className="tw-flex tw-items-center tw-mb-4">
                <div className="tw-w-4 tw-h-4 tw-bg-slate-300 dark:tw-bg-slate-900 tw-rounded tw-mr-2"></div>
                <div className="tw-h-4 tw-w-1/3 tw-bg-slate-300 dark:tw-bg-slate-900 tw-rounded"></div>
              </div>
              <div className="tw-flex tw-flex-wrap tw-gap-2 tw-justify-between tw-mt-2">
                <div className="tw-h-5 tw-w-12 tw-bg-slate-300 dark:tw-bg-slate-900 tw-rounded"></div>
                <div className="tw-h-5 tw-w-12 tw-bg-slate-300 dark:tw-bg-slate-900 tw-rounded"></div>
                <div className="tw-h-5 tw-w-12 tw-bg-slate-300 dark:tw-bg-slate-900 tw-rounded"></div>
                <div className="tw-h-5 tw-w-12 tw-bg-slate-300 dark:tw-bg-slate-900 tw-rounded"></div>
                <div className="tw-h-5 tw-w-12 tw-bg-slate-300 dark:tw-bg-slate-900 tw-rounded"></div>
              </div>
            </div>
            <ul className="tw-grid tw-md:grid-cols-2 tw-gap-x-10 dark:tw-tw-text-slate-300 tw-mt-4">
              <li className="tw-h-4 tw-w-1/2 tw-bg-slate-300 dark:tw-bg-slate-900 tw-rounded"></li>
              <li className="tw-h-4 tw-w-1/2 tw-bg-slate-300 dark:tw-bg-slate-900 tw-rounded"></li>
              <li className="tw-h-4 tw-w-1/2 tw-bg-slate-300 dark:tw-bg-slate-900 tw-rounded"></li>
              <li className="tw-h-4 tw-w-1/2 tw-bg-slate-300 dark:tw-bg-slate-900 tw-rounded"></li>
            </ul>
            <div className="tw-flex tw-flex-col tw-md:flex-row tw-justify-end tw-mt-3 tw-gap-3">
              <div className="tw-w-full tw-lg:w-20 tw-h-8 tw-bg-slate-300 dark:tw-bg-slate-900 tw-rounded"></div>
              <div className="tw-w-full tw-lg:w-20 tw-h-8 tw-bg-slate-300 dark:tw-bg-slate-900 tw-rounded"></div>
            </div>
          </div>
        </article>
      ))}
    </>
  );
}

export default Coches;
