function Destacados() {
  const destacados = [
    {
      id: 0,
      destino: "Barcelona centro",
      img: "/transfers/barcelona.jpg",
    },
    {
      id: 1,
      destino: "Madrid centro",
      img: "/transfers/madrid.jpg",
    },
    {
      id: 2,
      destino: "Sevilla centro",
      img: "/transfers/sevilla.jpg",
    },
    {
      id: 3,
      destino: "Valencia centro",
      img: "/transfers/valencia.jpg",
    },
    {
      id: 4,
      destino: "Barcelona Aeropuerto",
      img: "/transfers/barcelona.jpg",
    },
    {
      id: 5,
      destino: "Madrid Aeropuerto",
      img: "/transfers/madrid.jpg",
    },
  ];
  return (
    <div className="tw-p-5 tw-mt-5">
      <h2 className="tw-text-2xl tw-font-semibold dark:tw-text-white">
        Búsqueda rápida
      </h2>
      <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-5 tw-mt-4">
        {destacados.map((destacado) => (
          <div
            key={destacado.id}
            className="tw-relative tw-group tw-rounded-lg tw-overflow-hidden tw-shadow-md tw-smooth tw-cursor-pointer"
            role="button"
          >
            <img
              src={destacado.img}
              className="tw-w-full tw-h-[15vh] md:tw-h-[20vh] tw-object-cover tw-transition-transform tw-duration-300 group-hover:tw-scale-105"
              alt={`Reserva de hotel en ${destacado.destino}`}
            />
            <div className="tw-absolute tw-inset-0 tw-bg-indigo-900 tw-bg-opacity-60 group-hover:tw-bg-opacity-70 tw-smooth tw-flex tw-items-center tw-justify-center">
              <div className="tw-text-white tw-text-center tw-px-3">
                <h3 className="tw-text-2xl tw-font-semibold">
                  {destacado.destino}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destacados;
