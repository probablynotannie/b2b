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
    <main className="tw-flex tw-justify-center tw-flex-col tw-items-center tw-mb-20 tw-space-y-10">
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
          <aside className="lg:tw-hidden tw-col-span-9 lg:tw-col-span-3">
            {aside}
          </aside>
        </div>
      </div>
      {extraInfo}
      <article
        className={`tw-grid tw-grid-cols-9 lg:tw-gap-10 xs:gap-28 tw-w-full tw-container tw-min-h-[55vh]`}
      >
        {aside !== false && !ocultarAside && (
          <aside className="tw-hidden lg:tw-block tw-col-span-9 lg:tw-col-span-3 ">
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
