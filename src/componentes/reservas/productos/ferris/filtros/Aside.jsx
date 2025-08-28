function Aside({ ferris, isLoading }) {
  return (
    <div className="tw-gap-4 tw-mt-3">
      <div className="tw-grid tw-grid-cols-2 tw-gap-5">
        {ferris.map((ferry, index) => (
          <div key={index}>
            <img
              src={ferry.operador.imagen}
              alt="Operador"
              className={`tw-h-16 tw-w-full tw-object-contain tw-rounded-xl tw-bg-white ${
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
