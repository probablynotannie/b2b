function Datos() {
  return (
    <main className="tw-my-16 tw-flex tw-justify-center tw-container tw-min-h-[68vh]">
      <article className="tw-p-5 tw-w-full tw-border-2 tw-border-slate-200 dark:tw-border-slate-800 tw-rounded-xl tw-shadow-md tw-bg-white dark:tw-bg-slate-800">
        <form>
          <div className="tw-h-8 tw-w-48 tw-bg-slate-300 dark:tw-bg-slate-700 tw-rounded mb-6 animate-pulse" />
          <div className="tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-3 tw-mt-6">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="tw-h-12 tw-bg-slate-300 dark:tw-bg-slate-700 tw-rounded animate-pulse"
              />
            ))}
          </div>
          <div className="tw-h-72 tw-w-full tw-mt-8 tw-bg-slate-300 dark:tw-bg-slate-700 tw-rounded animate-pulse" />
          <div className="tw-flex tw-justify-end tw-border-t tw-border-slate-100 dark:tw-border-slate-700 tw-pt-5 tw-mt-10">
            <div className="tw-h-10 tw-w-24 tw-bg-slate-400 dark:tw-bg-slate-600 tw-rounded animate-pulse" />
          </div>
        </form>
      </article>
    </main>
  );
}

export default Datos;
