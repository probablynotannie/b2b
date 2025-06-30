function Cruceros() {
  return (
    <article className="tw-cursor-pointer tw-bg-slate-100 tw-flex dark:tw-bg-slate-800 tw-shadow-xl lg:tw-shadow-lg hover:tw-shadow-xl tw-border-2 tw-border-slate-100 dark:tw-border-slate-700 tw-rounded-xl tw-transition tw-mt-5 lg:tw-mt-10 lg:tw-flex tw-flex-col tw-relative min-lg:h-[25vh] tw-animate-pulse">
      <div className="tw-relative tw-w-full">
        <div className="tw-min-h-[25vh] tw-border-t-2 tw-border-slate-200 dark:tw-border-slate-900 tw-rounded-tr-xl tw-rounded-tl-xl tw-max-h-[45vh] tw-flex tw-relative">
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
          <div className="tw-absolute tw-bottom-0 tw-w-full tw-bg-slate-400 dark:tw-bg-slate-900  tw-bg-opacity-90 tw-text-white tw-font-bold tw-px-5 tw-h-2"></div>
        </div>
        <div className="tw-flex tw-items-center tw-font-semibold tw-bg-slate-300 dark:tw-bg-slate-700 tw-text-white tw-px-2 tw-p-1 tw-rounded-full tw-absolute tw-top-5 tw-right-5 tw-w-16 tw-h-8"></div>
      </div>
      <div className="tw-px-5 tw-py-3 dark:tw-text-white tw-pb-5 md:tw-pb-0">
        <div className="tw-h-4 tw-w-3/4 tw-bg-slate-300 dark:tw-bg-slate-700 tw-rounded tw-mb-2"></div>
        <div className="tw-h-3 tw-w-full tw-bg-slate-300 dark:tw-bg-slate-700 tw-rounded tw-mb-1"></div>
        <div className="tw-h-3 tw-w-5/6 tw-bg-slate-300 dark:tw-bg-slate-700 tw-rounded tw-mb-3"></div>
        <div className="tw-grid tw-grid-cols-2 lg:tw-grid-cols-3 2xl:tw-grid-cols-4 tw-gap-5 tw-mb-3">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-bg-slate-300 dark:tw-bg-slate-900 tw-p-4 tw-rounded-lg"
            >
              <div className="tw-w-20 tw-h-4 tw-bg-slate-300 dark:tw-bg-slate-800 tw-rounded tw-mb-2"></div>
              <div className="tw-h-8 tw-w-16 tw-bg-slate-300 dark:tw-bg-slate-800 tw-rounded"></div>
              <div className="tw-h-6 tw-w-16 tw-bg-slate-300 dark:tw-bg-slate-800 tw-rounded tw-mt-2"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="tw-hidden md:tw-flex tw-justify-end">
        <div className="tw-text-center tw-w-full md:tw-w-fit tw-flex tw-flex-col tw-items-center tw-justify-center tw-font-bold tw-bg-slate-300 dark:tw-bg-slate-950 tw-text-white tw-p-2 tw-px-4 tw-rounded-br-lg tw-rounded-tl-xl">
          <div className="tw-w-24 tw-h-4 tw-bg-slate-300 dark:tw-bg-slate-900 tw-rounded tw-mb-2"></div>
          <div className="tw-h-4 tw-w-16 tw-bg-slate-300 dark:tw-bg-slate-900 tw-rounded tw-mb-2"></div>
        </div>
      </div>
    </article>
  );
}
export default Cruceros;
