function Destacados({ destacados, columnas, filas, max }) {
  const maxItems = columnas * filas;
  return (
    <div className="tw-p-5 tw-mt-5">
      <h2 className="tw-text-2xl tw-font-semibold dark:tw-text-white">
        Búsqueda rápida
      </h2>
      <div
        className="tw-grid tw-gap-5 tw-mt-4 tw-grid-cols-1 md:tw-grid-cols-[var(--columnas)] tw-flex-nowrap"
        style={{ "--columnas": `repeat(${columnas}, minmax(0, 1fr))` }}
      >
        {destacados.slice(0, max ? max : maxItems).map((destacado) => (
          <div
            key={destacado.id}
            className="tw-relative tw-group tw-rounded-lg tw-overflow-hidden tw-shadow-md tw-smooth tw-cursor-pointer"
            role="button"
          >
            <img
              src={destacado.img}
              className="tw-w-full tw-h-[15vh] md:tw-h-[20vh] tw-object-cover tw-transition-transform tw-duration-300 group-hover:tw-scale-105"
              alt={`Reserva de hotel en ${destacado.titulo}`}
            />
            <div className="tw-absolute tw-inset-0 tw-bg-indigo-900 tw-bg-opacity-60 group-hover:tw-bg-opacity-70 tw-smooth tw-flex tw-items-center tw-justify-center">
              <div className="tw-text-white tw-text-center tw-px-3">
                <h3 className="tw-text-3xl tw-font-semibold">
                  {destacado.titulo}
                </h3>
                <span className="tw-font-semibold">
                  {destacado.descripcion}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destacados;
