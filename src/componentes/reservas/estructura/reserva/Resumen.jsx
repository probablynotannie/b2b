function Resumen({ img, txt, finalizada }) {
  return (
    <div
  className={`tw-relative ${
    finalizada === true ? "tw-h-[40vh]" : "tw-h-[20vh]"
  } tw-h-[20vh] tw-top-0`}
>
  <img
    src={img}
    className="tw-opacity-90 tw-rounded tw-h-full tw-shadow tw-mb-4 tw-w-full tw-object-cover"
    alt="Imagen reserva"
  />
  <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-black tw-bg-opacity-50 hover:tw-bg-opacity-60 tw-transition tw-duration-300 tw-flex tw-items-center tw-justify-center tw-p-4 tw-rounded">
    <div className="tw-text-white tw-text-3xl tw-font-semibold tw-text-center">
      {txt}
    </div>
  </div>
</div>

  );
}

export default Resumen;
