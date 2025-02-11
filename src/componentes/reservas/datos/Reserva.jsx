function Contacto({
  img,
  position,
  tipo,
  itinerario,
  fechaIda,
  fechaVuelta,
  extras,
}) {
  return (
    <section className="tw-py-10 tw-my-10 tw-border-y-2  tw-border-slate-100 dark:tw-border-slate-700">
      <div
        className="tw-bg-cover tw-border-2 dark:tw-border-slate-800 dark:tw-shadow-md dark:tw-shadow-slate-700 tw-shadow-md tw-rounded-xl tw-w-full tw-h-full"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: position,
        }}
      >
        <div className="tw-bg-black tw-rounded-xl tw-w-full tw-min-h-[30vh] tw-bg-opacity-45 tw-flex tw-justify-center tw-items-center tw-flex-col">
          <h4 className="tw-text-white tw-font-bold tw-text-7xl">{tipo}</h4>
          <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-text-white">
            <span className="tw-font-semibold tw-text-3xl tw-text-center">
              {itinerario}
            </span>
            <p className="tw-text-slate-200 tw-text-center tw-px-4">
              {fechaIda}
              {fechaVuelta && <span> - {fechaVuelta} </span>}
            </p>
            {extras !== null && extras}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
