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
    <main className="tw-container tw-my-10">
      <header className="tw-relative tw-h-[40vh]">
        <img
          src="/completado.jpg"
          className="tw-w-full tw-h-full tw-object-cover tw-rounded-lg tw-shadow-lg"
          alt="Imagen de reserva completada"
        />
        <div className="tw-bg-black tw-rounded-lg tw-shadow-lg tw-bg-opacity-45 tw-top-0 tw-absolute tw-w-full tw-h-full tw-flex tw-items-center tw-justify-center">
          <div>
            <h2 className="tw-text-white tw-text-center tw-font-bold tw-text-4xl md:tw-text-6xl">
              Reserva completada con éxito
            </h2>
            <span className="tw-block tw-text-center tw-text-white md:tw-text-4xl tw-text-2xl tw-mt-2">
              Núm:
              <span className="tw-font-bold tw-ml-2 tw-text-center">{numReserva}</span>
            </span>
          </div>
        </div>
      </header>

      <section className="tw-border-2 tw-border-slate-100 dark:tw-border-slate-800 tw-shadow-xl tw-mt-5 tw-p-5 tw-rounded-lg tw-bg-white dark:tw-bg-slate-800">
        <header className="dark:tw-text-white">
          <div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-between">
            <h3 className="tw-font-semibold tw-text-lg">
              Resumen de compra ( {reserva.type} )
            </h3>
            <span className="tw-block tw-mt-2">
              Reserva:
              <span className="tw-font-bold tw-ml-2 tw-text-center">{numReserva}</span>
            </span>
          </div>
          <div className="tw-flex tw-flex-col md:tw-flex-row md:tw-gap-3">
            <div>
              <span className="tw-font-semibold tw-text-secondary"> fecha:</span>
              <span className="tw-lowercase"> {reserva.fecha}</span>
            </div>
            {reserva.fechaSalida && (
              <div>
                <span className="tw-font-semibold tw-text-secondary">
                  {" "}
                  Fecha vuelta:
                </span>
                <span className="tw-lowercase"> {reserva.fechaSalida}</span>
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
      <section className="tw-mt-10">
        <div className="reservation-actions tw-flex tw-justify-end tw-flex-row tw-gap-x-5 tw-mt-5">
          <button className="hover:tw-shadow-xl tw-transition tw-bg-slate-700 dark:tw-bg-slate-800 tw-p-3 tw-rounded-lg tw-shadow-lg tw-text-white tw-font-semibold">
            Volver a la página principal
          </button>
          <button className="hover:tw-shadow-xl tw-transition tw-bg-secondary tw-p-3 tw-rounded-lg tw-shadow-lg tw-text-white tw-font-semibold">
            Descargar PDF
          </button>
        </div>
      </section>
    </main>
  );
}

export default ReservaFinalizada;
