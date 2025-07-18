import { FaShip } from "react-icons/fa";

function Ferris() {
  return (
    <section className="tw-pb-12 md:tw-mt-5 tw-flex tw-flex-col tw-gap-5 tw-animate-pulse">
      {[...Array(2)].map((_, index) => (
        <div
          className=" tw-w-full tw-bg-slate-100 dark:tw-bg-slate-900 tw-rounded-t-lg tw-p-5 tw-flex tw-flex-col tw-gap-4"
          key={index}
        >
          <section className="tw-flex tw-justify-between tw-border-b tw-border-slate-100 dark:tw-border-slate-500 tw-pb-2">
            <div className="tw-flex tw-flex-col tw-gap-2">
              <div className="tw-flex tw-gap-4">
                <div className="tw-h-3 tw-w-24 tw-bg-slate-300 dark:tw-bg-slate-500" />
                <div className="tw-h-3 tw-w-10 tw-bg-slate-400 tw-rounded-full"></div>
              </div>
              <div className="tw-flex tw-gap-4">
                <div className="tw-h-1 tw-w-24 tw-bg-slate-300 dark:tw-bg-slate-500" />
                <div className="tw-h-1 tw-w-24 tw-bg-slate-300 dark:tw-bg-slate-500" />
              </div>
            </div>
            <div className="tw-h-12 tw-w-16 tw-bg-slate-300 dark:tw-bg-slate-500 tw-rounded"></div>
          </section>
          {[...Array(2)].map((_, index) => (
            <section key={index}>
              <div className="tw-flex tw-justify-between tw-items-center ">
                <div className="tw-flex tw-gap-2">
                  <div className="tw-w-10 tw-h-1.5 tw-bg-slate-300 dark:tw-bg-slate-500" />
                  <div className="tw-w-10 tw-h-1.5 tw-bg-slate-300 dark:tw-bg-slate-500" />
                </div>
                <div className="tw-flex tw-gap-2">
                  <div className="tw-w-8 tw-h-1 tw-bg-slate-300 dark:tw-bg-slate-500" />
                  <div className="tw-w-8 tw-h-1 tw-bg-slate-300 dark:tw-bg-slate-500" />
                </div>
              </div>
              <div className="tw-flex tw-flex-col tw-gap-3 tw-mt-3">
                {[...Array(3)].map((_, index) => (
                  <div
                    className="tw-flex tw-gap-3 tw-h-10 tw-border-b tw-border-slate-200 dark:tw-border-slate-600"
                    key={index}
                  >
                    <div className="tw-w-3 tw-h-3 dark:tw-bg-slate-100 tw-bg-slate-300 tw-rounded-full" />
                    <FaShip className="tw-text-slate-500 dark:tw-text-slate-400" />
                    <div className="tw-flex tw-flex-col tw-gap-2">
                      <div className="w-16 h-1.5 tw-bg-slate-300" />
                      <div className="w-10 h-1 dark:tw-bg-slate-500 tw-bg-slate-200" />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      ))}
    </section>
  );
}

export default Ferris;
