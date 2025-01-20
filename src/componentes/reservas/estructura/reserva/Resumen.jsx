function Resumen({ img, txt, finalizada }) {
  return (
    <div
      className={`relative  ${
        finalizada === true ? "h-[40vh]" : "h-[20vh]"
      } h-[20vh] top-0`}
    >
      <img
        src={img}
        className="opacity-90 rounded h-full shadow mb-4 w-full object-cover"
        alt="Imagen reserva"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center p-4 rounded">
        <div className={`text-white  text-3xl font-semibold text-center`}>
          {txt}
        </div>
      </div>
    </div>
  );
}

export default Resumen;
