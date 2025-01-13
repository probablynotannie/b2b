function Resumen({ img, txt }) {
  return (
    <div className="relative h-[20vh] top-0">
      <img
        src={img}
        className="opacity-90 rounded h-full shadow mb-4 w-full object-cover"
        alt="Reserva ferry"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center p-4">
        <h4 className="text-white text-3xl font-semibold text-center">{txt}</h4>
      </div>
    </div>
  );
}

export default Resumen;
