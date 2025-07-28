function Resultado({
  buscador,
  aside,
  listado,
  background,
  color,
  position,
  extraInfo,
  wideContent,
  ocultarAside,
}) {
  return (
    <main className="tw-flex tw-justify-center tw-flex-col tw-items-center tw-mb-20">
      <div
        className="tw-w-full tw-bg-cover tw-p-8 tw-relative tw-shadow-xl"
        style={{
          backgroundImage: background,
          backgroundPosition: position,
        }}
      >
        <div
          className={`${color ? color : "tw-bg-pink-300/30"}
         dark:tw-bg-black tw-text-pink-600 dark:tw-bg-opacity-45 tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-pointer-events-none`}
        ></div>
        <div className="tw-flex">
          <div className="tw-container tw-relative">{buscador}</div>
          <aside className="lg:tw-hidden tw-col-span-9 lg:tw-col-span-3 tw-h-fit  tw-top-5 lg:tw-bg-slate-100 lg:dark:tw-bg-slate-800 lg:tw-border-2 tw-border-slate-200 dark:tw-border-slate-800 tw-rounded-lg lg:tw-shadow-xl hover:lg:tw-shadow-2xl tw-transition tw-px-3 lg:tw-p-3 lg:tw-pb-10">
            {aside}
          </aside>
        </div>
      </div>

      {extraInfo}

      <article className="tw-grid tw-grid-cols-9 lg:tw-gap-10 xs:gap-28 tw-w-full tw-container tw-mt-10 tw-min-h-[50vh]">
        {aside !== false && !ocultarAside && (
          <aside className="tw-hidden lg:tw-block tw-col-span-9 lg:tw-col-span-3 tw-h-fit tw-top-10 lg:tw-bg-slate-100 lg:dark:tw-bg-slate-800 lg:tw-border-2 tw-border-slate-200 dark:tw-border-slate-800 tw-rounded-lg lg:tw-shadow-xl hover:lg:tw-shadow-2xl tw-transition tw-px-3 lg:tw-p-3 lg:tw-pb-10">
            {aside}
          </aside>
        )}

        <section
          className={`tw-col-span-9 ${
            wideContent === true || aside === false
              ? "lg:tw-col-span-9"
              : "lg:tw-col-span-6"
          }  tw-p-3`}
        >
          {listado}
        </section>
      </article>
    </main>
  );
}

export default Resultado;
