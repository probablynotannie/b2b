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
        <div className="border-2 border-slate-100 shadow-xl mt-5 p-5 rounded-lg ">
          <h3 className="font-semibold text-lg">Resumen de compra</h3>
          <p className="text-slate-500 mt-3">
            La reserva{" "}
            <span className="font-semibold  text-black shadow-inn ">
              {" "}
              {numReserva}{" "}
            </span>{" "}
            se ha completado con éxito a nombre de{" "}
            <span className="font-semibold text-secondary">
              {" "}
              {reservante.nombre} {reservante.apellido}{" "}
            </span>
            con email:
            <span className="font-semibold text-secondary">
              {" "}
              {reservante.email}{" "}
            </span>
            y teléfono de contacto:{" "}
            <span className="font-semibold text-secondary">
              {" "}
              {reservante.tel}{" "}
            </span>
          </p>
          <div>
            <section className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-3 lg::gap-16  ">
              {reserva.map((reserva, index) => (
                <div
                  className="border-l-4 border-secondary bg-gray-50 shadow-inner rounded-r-xl text-sm p-3  border-y  border-y-slate-200 flexflex-col"
                  key={index}
                >
                  <span className="font-semibold"> {reserva.precio}€ </span>

                  <p className="text-slate-500">
                    {" "}
                    {reserva.fecha}{" "}
                    {reserva.fechaSalida && `- ${reserva.fechaSalida}`}{" "}
                  </p>

                  <h4 className="font-semibold text-secondary">
                    {" "}
                    {reserva.nombre}{" "}
                  </h4>
                </div>
              ))}
            </section>
          </div>
          <div className="flex justify-end flex-row gap-x-5 mt-10">
            <button className="hover:shadow-xl transition bg-slate-700 p-3 rounded-lg shadow-lg text-white font-semibold">
              Volver a la página principal
            </button>
            <button className="hover:shadow-xl transition bg-secondary p-3 rounded-lg shadow-lg text-white font-semibold">
              Descargar PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReservaFinalizada;
