import Datos from "./Datos";
function Contacto() {
  const reserva = [
    {
      id: 0,
      type: "Hotel",
      nombre: "Luxury appartments",
      fecha: "21 de octubre",
      fechaSalida: "28 de octubre",
      img: "/banner_hoteles.jpg",
    },
    {
      id: 1,
      nombre: "Barcelona - Madrid",
      type: "Tren",
      fecha: "21 de octubre",
      img: "/banner_avion.jpg",
    },
    {
      id: 2,
      nombre: "Festival de libros",
      type: "Entradas",
      fecha: "21 de octubre",
      img: "/banner_destinos.jpg",
    },
  ];
  return (
    <main className="mt-16 mb-20 flex justify-center min-h-[65vh] container px-5 ">
      <article className="w-full border-2  border-slate-200 rounded-xl shadow-xl">
        <section>
          <Datos />
        </section>
        <section className="pt-10 mt-10 mb-10 border-t-2 border-slate-100 mx-5">
          <h3 className="text-lg font-semibold ml-4 ">
            Tus productos ({reserva.length}){" "}
          </h3>
          <div className="grid lg:grid-cols-3 gap-3 grid-cols-1 mt-3">
            {reserva.map((reserva) => (
              <div key={reserva.id} className=" px-3 min-h-48  ">
                <div
                  className="bg-cover border-2 shadow-md rounded-xl w-full h-full"
                  style={{
                    backgroundImage: `url(${reserva.img})`,
                    backgroundSize: "cover",
                  }}
                >
                  <div className="bg-black rounded-xl w-full h-full bg-opacity-45  flex justify-center items-center flex-col ">
                    <h4 className="text-white font-bold text-4xl ">
                      {reserva.type}
                    </h4>
                    <div className="flex flex-col justify-center items-center text-white">
                      <span className=" font-semibold ">{reserva.nombre}</span>
                      <span className="block  text-slate-300">
                        {reserva.fecha}
                        {reserva.fechaSalida && (
                          <span> - {reserva.fechaSalida} </span>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="my-10 mx-8 flex justify-end">
          <button className="bg-secondary lg:w-fit w-full p-3 px-10 rounded-xl shadow-lg text-white font-bold">
            Siguiente
          </button>
        </div>
      </article>
    </main>
  );
}
export default Contacto;
