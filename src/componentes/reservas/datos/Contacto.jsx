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
      type: "Vuelo",
      fecha: "21 de octubre",
      img: "/banner_avion.jpg",
    },
  ];
  return (
    <main className="my-10flex justify-center h-[75vh] container">
      <article className="w-full border-2  border-slate-200 dark:border-slate-800 rounded-xl shadow-xl bg-white dark:bg-slate-800">
        <section>
          <Datos />
        </section>
        <section className="pt-10  mb-10 border-t-2 border-slate-100 dark:border-slate-700 mx-5">
          <h3 className="text-lg font-semibold ml-4 dark:text-white">
            Tus productos ({reserva.length}){" "}
          </h3>
          <div className="grid lg:grid-cols-3 gap-3 grid-cols-1 mt-3">
            {reserva.map((reserva) => (
              <div key={reserva.id} className=" px-3 min-h-48  ">
                <div
                  className="bg-cover border-2 dark:border-slate-800 dark:shadow-md dark:shadow-slate-700  shadow-md rounded-xl w-full h-full"
                  style={{
                    backgroundImage: `url(${reserva.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="bg-black rounded-xl w-full h-full bg-opacity-45  flex justify-center items-center flex-col ">
                    <h4 className="text-white font-bold text-4xl">
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
          <button className="bg-secondary dark:bg-slate-900 lg:w-fit w-full p-3 px-10 rounded-xl shadow-lg hover:shadow-xl dark:shadow-slate-800 transition text-white font-bold">
            Siguiente
          </button>
        </div>
      </article>
    </main>
  );
}
export default Contacto;
