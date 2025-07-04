function Detalles() {
  return (
    <>
      <section className="tw-bg-white dark:tw-bg-slate-800 tw-space-y-3 tw-col-span-2 tw-shadow-lg tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-100 dark:tw-border-slate-700 tw-p-5 animate-pulse">
        <h1 className="tw-font-bold tw-text-lg tw-text-secondary dark:tw-text-secondaryDark"> Cargando detalles</h1>
        <div className="tw-h-6 tw-bg-slate-200 dark:tw-bg-slate-600 tw-rounded tw-w-1/3"></div>
        <div>
          <div className="tw-h-6 tw-w-32 tw-bg-slate-200 dark:tw-bg-slate-600 tw-rounded tw-mb-4"></div>
          <div className="tw-grid lg:tw-grid-cols-2 tw-gap-5 tw-py-4">
            <div className="tw-h-32 tw-bg-slate-200 dark:tw-bg-slate-600 tw-rounded"></div>
            <div className="tw-h-32 tw-bg-slate-200 dark:tw-bg-slate-600 tw-rounded"></div>
          </div>
        </div>
        <div className="tw-space-y-2">
          <div className="tw-h-4 tw-bg-slate-200 dark:tw-bg-slate-600 tw-rounded tw-w-1/4"></div>
          <div className="tw-h-4 tw-bg-slate-200 dark:tw-bg-slate-600 tw-rounded tw-w-1/2"></div>
          <div className="tw-h-4 tw-bg-slate-200 dark:tw-bg-slate-600 tw-rounded tw-w-1/3"></div>
        </div>
      </section>
      <aside className="tw-bg-white dark:tw-bg-slate-800 tw-sticky tw-top-10 tw-col-span-2 lg:tw-col-span-1 tw-shadow-lg tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-100 dark:tw-border-slate-800 tw-p-5 animate-pulse">
        <div className="tw-flex tw-justify-between tw-pb-2 tw-border-b tw-border-slate-100 dark:tw-border-slate-700">
          <div className="tw-h-4 tw-w-24 tw-bg-slate-200 dark:tw-bg-slate-600 tw-rounded"></div>
          <div className="tw-flex tw-gap-2">
            <div className="tw-h-4 tw-w-12 tw-bg-slate-300 dark:tw-bg-slate-700 tw-rounded"></div>
            <div className="tw-h-4 tw-w-12 tw-bg-slate-300 dark:tw-bg-slate-700 tw-rounded"></div>
          </div>
        </div>
        <div className="tw-mt-4 tw-space-y-2">
          <div className="tw-h-4 tw-bg-slate-200 dark:tw-bg-slate-600 tw-rounded tw-w-full"></div>
          <div className="tw-h-4 tw-bg-slate-200 dark:tw-bg-slate-600 tw-rounded tw-w-5/6"></div>
          <div className="tw-h-4 tw-bg-slate-200 dark:tw-bg-slate-600 tw-rounded tw-w-2/3"></div>
        </div>
      </aside>
    </>
  );
}

export default Detalles;
