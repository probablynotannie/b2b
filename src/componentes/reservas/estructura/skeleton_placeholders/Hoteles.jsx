import { GoDotFill } from "react-icons/go";
function Hoteles() {
  return (
    <div>
      
      {Array.from({ length: 5 }, (_, index) => (
        <article
          key={index}
          className="lg:tw-flex tw-flex-row tw-bg-slate-100 dark:tw-bg-slate-800 tw-shadow-lg tw-border-2 tw-border-slate-100 dark:tw-border-slate-800 tw-rounded-xl tw-mt-10 tw-relative tw-min-h-[15vh] tw-animate-pulse"
        >
          <div className="tw-w-full tw-h-[25vh] lg:tw-h-auto lg:tw-w-1/3 lg:tw-rounded-l-lg tw-rounded-t-lg tw-overflow-hidden">
            <div className="tw-h-full tw-w-full tw-bg-slate-300 dark:tw-bg-slate-900"></div>
          </div>
          <div className="tw-p-5 lg:tw-w-2/3">
            <div className="tw-border-b-2 tw-border-slate-200 dark:tw-border-slate-900 tw-pb-2">
              <div className="tw-flex tw-justify-between tw-w-full">
                <div className="tw-h-6 tw-w-3/5 tw-bg-slate-300 dark:tw-bg-slate-900 tw-rounded"></div>
                <div className="tw-flex tw-space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="tw-h-4 tw-w-4 tw-bg-slate-300 dark:tw-bg-slate-900 tw-rounded"
                    ></div>
                  ))}
                </div>
              </div>
              <div className="tw-h-4 tw-w-2/3 tw-bg-slate-300 dark:tw-bg-slate-900 tw-rounded tw-mt-3"></div>
              <div className="tw-flex tw-flex-wrap tw-gap-2 tw-justify-between tw-mt-4 tw-text-sm">
                <div className="tw-h-3 tw-w-1/3 tw-bg-slate-300 dark:tw-bg-slate-900 tw-rounded"></div>
                <div className="tw-h-3 tw-w-1/3 tw-bg-slate-300 dark:tw-bg-slate-900 tw-rounded"></div>
                <div className="tw-h-3 tw-w-1/3 tw-bg-slate-300 dark:tw-bg-slate-900 tw-rounded"></div>
                <div className="tw-h-3 tw-w-1/3 tw-bg-slate-300 dark:tw-bg-slate-900 tw-rounded"></div>
              </div>
            </div>
            <div className="tw-mt-4 tw-h-5 tw-w-full tw-bg-slate-300 dark:tw-bg-slate-900 tw-rounded"></div>
            <div className="tw-flex tw-justify-end tw-mt-4">
              <div className="tw-h-10 tw-w-32 tw-bg-slate-300 dark:tw-bg-slate-900 tw-rounded"></div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default Hoteles;
