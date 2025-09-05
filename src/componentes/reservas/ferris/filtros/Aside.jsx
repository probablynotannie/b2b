function Aside({ ferris, isLoading }) {
  return (
    <div className="lg:tw-flex tw-hidden tw-gap-4 tw-mt-3">
      <div className="tw-flex tw-flex-col tw-gap-5">
        {ferris.map((ferry, index) => (
          <div key={index}>
            <img
              src={ferry.operador.imagen}
              alt="Operador"
              className={`tw-h-16 tw-w-full tw-object-contain tw-border tw-border-slate-100 hover:tw-scale-110 dark:tw-border-slate-700 tw-shadow hover:tw-shadow-lg tw-smooth tw-rounded-xl tw-bg-white ${
                isLoading && "tw-animate-pulse"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Aside;
