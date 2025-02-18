import Datos from "./Datos";
import Vuelos from "./Vuelos";
import Hotel from "./Hotel";
function ReservaFinalizada() {
  const numReserva = "HJGO1759175";
  const reserva = {
    id: 0,
    precio: "132",
    type: "Hotel + vuelo",
    nombre: "Sol y mar",
    fecha: "21 de octubre",
    fechaSalida: "28 de octubre",
    img: "/banner_hoteles.jpg",
  };
  const hotel = {
    nombre: "Sol y mar",
    src: "./hotel1.jpg",
    habitacion: 2,
    adultos: 2,
    ninios: 1,
    direccion: "Calle sagrada familia 7, 20098, Barcelona (España)",
    entrada: new Date(2024, 10, 21),
    salida: new Date(2024, 10, 28),
    estrellas: 4.5,
    descripcion:
      "Sol y Mar es un acogedor hotel de 4.5 estrellas situado en una ubicación privilegiada, perfecto para quienes buscan una escapada tranquila y rejuvenecedora. Con un ambiente relajante y rodeado de hermosos paisajes, el hotel combina el confort moderno con un servicio excepcional. Las habitaciones están diseñadas para brindar máxima comodidad, equipadas con muebles elegantes y vistas panorámicas, mientras que las instalaciones del hotel incluyen una piscina de borde infinito, spa de lujo y acceso directo a la playa. Los huéspedes pueden disfrutar de una variedad de actividades recreativas y opciones gastronómicas, desde restaurantes con especialidades locales hasta bares con cocteles refrescantes.",
  };
  const vuelo = [
    {
      id: 0,
      salida: "Bilbao, España",
      llegada: "Barcelona (Todos los aeropuertos), España",
      salida_corto: "BIO",
      llegada_corto: "BCN",
      compania: "Air Europa",
      logo: "./logo.png",
      escala: 1,
      pax: {
        adultos: 2,
        ninio: 1,
      },
      tiempoEscala: "7h 25m",
      sitioEscala: "MAD",
      horaSalida: "21:05",
      horaLlegada: "02:53",
      fecha: new Date(2024, 10, 21),
    },
    {
      id: 1,
      salida: "Barcelona (Todos los aeropuertos), España",
      llegada: "Bilbao, España",
      salida_corto: "BCN",
      llegada_corto: "BIL",
      compania: "Air Europa",
      logo: "./logo.png",
      escala: 0,
      pax: {
        adultos: 2,
        ninio: 1,
      },
      tiempoEscala: "",
      sitioEscala: "",
      horaSalida: "13:25",
      horaLlegada: "17:30",
      fecha: new Date(2024, 10, 28),
    },
  ];
  return (
    <main className="container my-10">
      <header className="relative h-[40vh]">
        <img
          src="/completado.jpg"
          className="w-full h-full object-cover rounded-lg shadow-lg"
          alt="Imagen de reserva completada"
        />
        <div className="bg-black rounded-lg shadow-lg bg-opacity-45 top-0 absolute w-full h-full flex items-center justify-center">
          <div>
            <h2 className="text-white text-center font-bold text-4xl md:text-6xl">
              Reserva completada con éxito
            </h2>
            <span className="block text-center text-white md:text-4xl text-2xl mt-2">
              Núm:
              <span className=" font-bold ml-2 text-center">{numReserva}</span>
            </span>
          </div>
        </div>
      </header>

      <section className="border-2 border-slate-100 dark:border-slate-800 shadow-xl mt-5 p-5 rounded-lg bg-white dark:bg-slate-800">
        <header className=" dark:text-white">
          <div className="flex flex-col md:flex-row justify-between ">
            <h3 className="font-semibold text-lg">
              Resumen de compra ( {reserva.type} )
            </h3>
            <span className="block mt-2">
              Reserva:
              <span className="font-bold ml-2 text-center">{numReserva}</span>
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:gap-3">
            <div>
              <span className="font-semibold tw-text-secondary"> fecha:</span>
              <span className="lowercase"> {reserva.fecha}</span>
            </div>
            {reserva.fechaSalida && (
              <div>
                <span className="font-semibold tw-text-secondary">
                  {" "}
                  Fecha vuelta:
                </span>
                <span className="lowercase"> {reserva.fechaSalida}</span>
              </div>
            )}
          </div>
          <Datos/>
        </header>
      </section>

      <section>
        <Vuelos vuelos={vuelo} />
      </section>
      <section>
        <Hotel hotel={hotel} />
      </section>
      <section className="mt-10">
        <div className="reservation-actions flex justify-end flex-row gap-x-5 mt-5">
          <button className="hover:shadow-xl transition bg-slate-700 dark:bg-slate-800 p-3 rounded-lg shadow-lg text-white font-semibold">
            Volver a la página principal
          </button>
          <button className="hover:shadow-xl transition bg-secondary p-3 rounded-lg shadow-lg text-white font-semibold">
            Descargar PDF
          </button>
        </div>
      </section>
    </main>
  );
}

export default ReservaFinalizada;
