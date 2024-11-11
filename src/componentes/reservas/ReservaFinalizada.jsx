import React from "react";

function ReservaFinalizada() {
  const reservante = {
    nombre: "Ana",
    apellido: "Vachadze",
    tel: "631694540",
    email: "vachadze123@gmail.com",
  };
  const numReserva = "HJGO1759175";
  const reserva = [
    {
      id: 0,
      precio: "132",
      type: "Hotel",
      nombre: "Luxury appartments",
      fecha: "21 de octubre",
      fechaSalida: "28 de octubre",
      img: "/banner_hoteles.jpg",
    },
    {
      id: 1,
      nombre: "Barcelona - Madrid",
      precio: "172",
      type: "Tren",
      fecha: "21 de octubre",
      img: "/banner_avion.jpg",
    },
    {
      id: 2,
      nombre: "Festival de libros",
      precio: "32",
      type: "Entradas",
      fecha: "21 de octubre",
      img: "/banner_destinos.jpg",
    },
  ];
  return (
    <div className=" container my-10">
      <div>
        <div className="relative h-[40vh]">
          <img
            src="/completado.jpg"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          <div className="bg-black rounded-lg shadow-lg bg-opacity-45 top-0 absolute w-full h-full flex items-center justify-center">
            <div>
              <h2 className="text-white font-bold text-6xl">
                Reserva completada con éxito
              </h2>
              <span className="block text-center text-white  mt-2">
                Núm:
                <span className=" font-bold ml-2 text-center">
                  {numReserva}
                </span>
              </span>
            </div>
          </div>
        </div>
        <div></div>
        <div className="border-2 border-slate-100 dark:border-slate-800 shadow-xl mt-5 p-5 rounded-lg bg-white dark:bg-slate-800">
          <h3 className="font-semibold text-lg dark:text-white">
            Resumen de compra
          </h3>

          <section className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-3 lg::gap-16  ">
            Holi
          </section>
          <div className="flex justify-end flex-row gap-x-5 mt-10">
            <button className="hover:shadow-xl transition bg-slate-700 p-3 rounded-lg shadow-lg text-white font-semibold">
              Volver a la página principal
            </button>
            <button className="hover:shadow-xl transition bg-secondary dark:bg-secondaryDark p-3 rounded-lg shadow-lg text-white font-semibold">
              Descargar PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReservaFinalizada;
