function CochesSkeleton() {
  return (
    <>
      {Array.from({ length: 2 }, (_, index) => (
        <article
          key={index}
          className="tw-flex tw-flex-col tw-mb-5 xl:tw-flex-row tw-border tw-border-slate-100 dark:tw-border-slate-800 tw-rounded-xl tw-animate-pulse tw-bg-white dark:tw-bg-slate-800"
        >
          <div className="tw-relative tw-w-full xl:tw-w-1/3 xl:tw-h-auto tw-rounded-t-xl xl:tw-rounded-l-xl tw-overflow-hidden">
            <div className="tw-w-full tw-h-[200px] xl:tw-h-full tw-bg-slate-300 dark:tw-bg-slate-900"></div>
            <div className="tw-absolute tw-bottom-0 tw-w-full tw-bg-slate-600 tw-bg-opacity-60 tw-text-white tw-flex tw-justify-around tw-py-2">
              {[...Array(4)].map((_, i) => (
                <span
                  key={i}
                  className="tw-flex tw-items-center tw-gap-1 tw-w-10 tw-h-5 tw-bg-slate-400 dark:tw-bg-slate-700 tw-rounded"
                ></span>
              ))}
            </div>
          </div>
          <div className="tw-p-5 xl:tw-w-2/3">
            <div className="tw-flex tw-justify-between tw-border-b tw-pb-2 dark:tw-border-slate-700">
              <div className="tw-w-1/2 tw-h-6 tw-bg-slate-300 dark:tw-bg-slate-900 tw-rounded"></div>
              <div className="tw-flex tw-text-secondary">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="tw-w-5 tw-h-5 tw-bg-slate-300 dark:tw-bg-slate-900 tw-rounded"
                  ></div>
                ))}
              </div>
            </div>
            <ul className="tw-flex tw-flex-wrap tw-gap-2 tw-mt-2">
              {[...Array(3)].map((_, i) => (
                <li
                  key={i}
                  className="tw-w-40 tw-h-4 tw-bg-slate-300 dark:tw-bg-slate-900 tw-rounded"
                ></li>
              ))}
            </ul>
            <div className="tw-flex tw-flex-wrap tw-justify-between tw-mt-3">
              <div className="tw-flex tw-flex-col tw-gap-2">
                <div className="tw-w-32 tw-h-4 tw-bg-slate-300 dark:tw-bg-slate-900 tw-rounded"></div>
                <div className="tw-w-40 tw-h-8 tw-bg-slate-300 dark:tw-bg-slate-900 tw-rounded tw-mt-5"></div>
              </div>
              <div className="tw-flex tw-items-end">
                <div className="tw-flex tw-flex-col tw-items-center">
                  <div className="tw-w-20 tw-h-4 tw-bg-slate-300 dark:tw-bg-slate-900 tw-rounded"></div>
                  <div className="tw-w-24 tw-h-8 tw-bg-slate-300 dark:tw-bg-slate-900 tw-rounded tw-mt-2"></div>
                </div>
              </div>
            </div>
          </div>
        </article>
      ))}
    </>
  );
}

export default CochesSkeleton;
