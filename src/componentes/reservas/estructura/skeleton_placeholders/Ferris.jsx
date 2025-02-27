function Ferris() {
  return (
    <section className="tw-pb-12 md:tw-mt-5 tw-flex tw-flex-col tw-gap-5 tw-animate-pulse">
      {[...Array(5)].map((_, index) => (
        <div
          className="tw-h-[10vh] tw-w-full tw-bg-slate-100 dark:tw-bg-slate-900 tw-rounded-t-lg tw-p-5 tw-flex tw-flex-col tw-gap-4"
          key={index}
        >
          <div className="tw-flex tw-gap-4">
            <div className="tw-h-3 tw-w-24 tw-bg-slate-300"> </div>
            <div className="tw-h-3 tw-w-10 tw-bg-slate-400 tw-rounded-full">
              {" "}
            </div>
          </div>
          <div className="tw-flex tw-gap-4">
            <div className="tw-h-2 tw-w-24 tw-bg-slate-300"> </div>
            <div className="tw-h-2 tw-w-24 tw-bg-slate-300"> </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Ferris;
