function PaginaDetalles({
  titulo,
  tituloDescripcion,
  tituloSecundario,
  contenidoPrincipal,
  contenidoSecundario,
}) {
  return (
    <main className="tw-container lg:tw-grid lg:tw-grid-cols-3 tw-min-h-[55vh] tw-items-start tw-space-y-10 tw-my-10 lg:tw-gap-12">
      <section className="tw-col-span-2 tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-200 tw-bg-white dark:tw-border-slate-700 dark:tw-bg-slate-800 tw-p-5">
        <div className="tw-flex tw-justify-between tw-items-center tw-border-b-2 tw-border-slate-100 dark:tw-text-slate-200 dark:tw-border-slate-700/70 tw-pb-2">
          <div>
            <h1 className="tw-font-bold">{titulo}</h1>
            <p className="tw-text-slate-500 dark:tw-text-slate-400 tw-text-sm">
              {tituloDescripcion}
            </p>
          </div>
          {tituloSecundario}
        </div>
        {contenidoPrincipal}
      </section>
      <article className="tw-sticky tw-top-10 tw-col-span-2 lg:tw-col-span-1 tw-shadow-lg hover:tw-shadow-xl tw-transition tw-duration-300 tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-100 dark:tw-border-slate-800 dark:tw-bg-slate-800 tw-p-5">
        {contenidoSecundario}
      </article>
    </main>
  );
}

export default PaginaDetalles;
