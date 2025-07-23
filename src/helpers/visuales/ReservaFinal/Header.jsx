function Header({ finalizada, numReserva }) {
  return (
    <section>
      <div
        className={`tw-relative ${
          finalizada === true ? "tw-h-[40vh]" : " lg:tw-h-[20vh] tw-h-[30vh]"
        } tw-h-[20vh] tw-top-0`}
      >
        <img
          src={"/banners/completado.webp"}
          className="tw-opacity-90 tw-rounded tw-h-full tw-shadow tw-mb-4 tw-w-full tw-object-cover"
          alt="Imagen reserva"
        />
        <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-black tw-bg-opacity-50 hover:tw-bg-opacity-60 tw-smooth tw-flex tw-items-center tw-justify-center tw-p-4 tw-rounded">
          <div className="tw-text-white tw-text-3xl tw-font-semibold tw-text-center">
            <div className="tw-flex tw-flex-col tw-items-center tw-justify-center">
              <h1 className="tw-text-7xl">Reserva Finalizada</h1>
              <h2 className="tw-text-6xl">ID: {numReserva}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
