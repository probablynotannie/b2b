import { useState } from "react";

function Destacados({ destacados, columnas, filas, max }) {
  const maxItems = columnas * filas;

  return (
    <div className="tw-p-5 tw-mt-5">
      <h2 className="tw-text-2xl tw-font-semibold dark:tw-text-white">
        Búsqueda rápida
      </h2>
      <div
        className="tw-grid tw-gap-5 tw-mt-4 tw-grid-cols-1 sm:tw-grid-cols-[var(--columnas)]"
        style={{ "--columnas": `repeat(${columnas}, minmax(0, 1fr))` }}
      >
        {destacados.slice(0, max ? max : maxItems).map((destacado) => (
          <ImageWithSpinner key={destacado.id} destacado={destacado} />
        ))}
      </div>
    </div>
  );
}

function ImageWithSpinner({ destacado }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="tw-relative tw-group tw-rounded-lg tw-overflow-hidden tw-shadow-md tw-cursor-pointer"
      role="button"
    >
      {!loaded && (
        <div className="tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center tw-bg-gray-200">
          <div className="tw-border-4 tw-border-t-indigo-500 tw-rounded-full tw-w-10 tw-h-10 tw-animate-spin"></div>
        </div>
      )}
      <img
        src={destacado.img}
        className={`tw-w-full tw-h-[15vh] md:tw-min-h-[23vh] tw-object-cover tw-transition-transform tw-duration-300 group-hover:tw-scale-105 ${
          loaded ? "tw-block" : "tw-hidden"
        }`}
        alt={`Reserva de hotel en ${destacado.titulo}`}
        onLoad={() => setLoaded(true)}
      />
      <div className="tw-absolute tw-inset-0 tw-bg-indigo-900 tw-p-2 tw-bg-opacity-60 group-hover:tw-bg-opacity-70 tw-smooth tw-flex tw-items-center tw-justify-center">
        <div className="tw-text-white tw-text-center tw-px-3">
          <h3 className="tw-text-lg md:tw-text-xl xl:tw-text-2xl tw-font-semibold">
            {destacado.titulo}
          </h3>
          <h4 className="tw-mt-1">{destacado.descripcion}</h4>
        </div>
      </div>
    </div>
  );
}

export default Destacados;
