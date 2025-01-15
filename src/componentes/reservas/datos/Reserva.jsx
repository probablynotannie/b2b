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
    <section className="pt-10 mb-10 border-t-2 border-slate-100 dark:border-slate-700 ">
      <div
        className="bg-cover border-2 dark:border-slate-800 dark:shadow-md dark:shadow-slate-700 shadow-md rounded-xl  w-full h-full"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: position,
        }}
      >
        <div className="bg-black rounded-xl w-full min-h-[30vh] bg-opacity-45 flex justify-center items-center flex-col">
          <h4 className="text-white font-bold text-7xl">{tipo}</h4>
          <div className="flex flex-col justify-center items-center text-white">
            <span className="font-semibold text-3xl text-center">
              {itinerario}
            </span>
            <p className="text-slate-300 text-center px-4">
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
