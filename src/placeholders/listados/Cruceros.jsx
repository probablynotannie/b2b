function Cruceros() {
  return (
    <main className="tw-flex tw-flex-col tw-gap-10">
      {[...Array(3)].map((_, index) => (
        <article
          key={index}
          className="tw-cursor-pointer tw-bg-slate-100 tw-flex dark:tw-bg-slate-800 tw-shadow-xl lg:tw-shadow-lg hover:tw-shadow-xl tw-border-2 tw-border-slate-100 dark:tw-border-slate-700 tw-rounded-2xl tw-overflow-hidden tw-transition lg:tw-flex tw-flex-col tw-relative min-lg:h-[25vh] tw-animate-pulse"
        >
          <div className="tw-relative tw-w-full ">
            <div className="tw-border-t-2 tw-border-t-secondary dark:tw-border-secondaryDark/70 tw-min-h-[25vh] tw-rounded-tr-xl tw-rounded-tl-xl tw-max-h-[45vh] tw-flex tw-relative">
              {[...Array(5)].map((_, index) => (
                <div
                  key={index}
                  className={`tw-transition-all tw-duration-300 tw-w-[33.33%] sm:tw-w-[25%] tw-bg-slate-300 dark:tw-bg-slate-800 tw-min-h-[20vh] tw-max-h-[45vh] tw-flex tw-justify-center tw-items-center`}
                >
                  <div className="md:tw-text-xl tw-font-semibold tw-text-white tw-bg-slate-800  tw-bg-opacity-45 tw-p-2 tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center tw-flex-col">
                    <div className="tw-w-20 tw-h-4 tw-bg-slate-300 dark:tw-bg-slate-700 tw-rounded"></div>
                  </div>
                </div>
              ))}
              <div className="tw-absolute tw-bottom-0 tw-w-full tw-bg-slate-400 dark:tw-bg-slate-900 tw-text-white tw-font-bold tw-px-5 tw-h-6"></div>
            </div>
          </div>
          <div className="tw-px-5 tw-py-3 dark:tw-text-white tw-pb-5 md:tw-pb-0">
            <div className="tw-h-4 tw-w-3/4 tw-bg-slate-400 dark:tw-bg-slate-900 tw-rounded tw-mb-2"></div>
            <div className="tw-h-3 tw-w-full tw-bg-slate-300 dark:tw-bg-slate-700 tw-rounded tw-mb-1"></div>
            <div className="tw-h-3 tw-w-5/6 tw-bg-slate-300 dark:tw-bg-slate-700 tw-rounded tw-mb-3"></div>
            <div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-4 tw-gap-5 tw-mb-3 tw-mt-8">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-bg-slate-300 dark:tw-bg-slate-900 tw-p-4 tw-rounded-lg"
                ></div>
              ))}
            </div>
          </div>
          <div className="tw-hidden md:tw-flex tw-justify-end tw-mt-10">
            <div className="tw-text-center tw-h-[50px] md:tw-w-[120px] tw-flex tw-font-bold tw-bg-slate-300 dark:tw-bg-slate-900 tw-text-white tw-p-2 tw-px-4 tw-rounded-br-lg tw-rounded-tl-xl"></div>
          </div>
        </article>
      ))}
    </main>
  );
}
export default Cruceros;
