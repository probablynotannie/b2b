import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import { FaMapPin } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { FaChild } from "react-icons/fa6";
import { MdModeNight } from "react-icons/md";
import { Carousel } from "flowbite-react";
import { FaDoorOpen } from "react-icons/fa";
import { Modal } from "flowbite-react";
import { useState } from "react";

function Resultado() {
  const reserva = {
    pax: 2,
    pax_ninios: 1,
    habitaciones: 2,
    noches: 7,
  };

  const hoteles = [
    {
      nombre: "Hotel Sol y Mar",
      precio: 120,
      direccion: "Avenida del Mar, 45, Alicante, España",
      regimen: "solo alojamiento",
      estrellas: 4,
      fotos: ["/hotel1.jpg", "/hotel2.jpg", "/hotel3.jpg"],
      descripcion:
        "Ubicado frente a la playa, el Hotel Sol y Mar ofrece vistas espectaculares al mar Mediterráneo y una estancia relajante en un entorno moderno...",
      extras: ["Wi-Fi", "Piscina", "Gimnasio", "Restaurante", "Spa"],
    },
    {
      nombre: "Gran Hotel Madrid",
      precio: 180,
      direccion: "Calle Mayor, 12, Madrid, España",
      regimen: "alojamiento y desayuno",
      estrellas: 5,
      fotos: ["/hotel2.jpg", "/hotel3.jpg", "/hotel1.jpg"],
      descripcion:
        "El Gran Hotel Madrid es una joya de lujo en el corazón de la capital que tiene un miradot increibla hacia el rio falso jaja :D ",
      extras: ["Wi-Fi", "Desayuno incluido", "Gimnasio", "Restaurante"],
    },
    {
      nombre: "Costa Bella",
      precio: 95,
      direccion: "Paseo Marítimo, 22, Barcelona, España",
      regimen: "pensión completa",
      estrellas: 3,
      fotos: ["/hotel3.jpg", "/hotel2.jpg"],
      descripcion:
        "Costa Bella es un acogedor hotel situado en el Paseo Marítimo de Barcelona...",
      extras: ["Wi-Fi", "Piscina", "Desayuno incluido", "Frente al mar"],
    },
  ];

  const [openModal, setOpenModal] = useState(null);

  return (
    <section className="pb-12 mt-5">
      <div className="flex flex-col lg:flex-row lg:justify-between shadow-xl lg:shadow-none p-3 rounded-xl  border-2 lg:border-0 border-slate-200 dark:bg-slate-800 dark:md:bg-inherit dark:md:border-0 dark:md:shadow-none dark:border-slate-600 mt-4 lg:mt-0">
        <h3 className="text-secondary font-semibold text-lg ">
          Resultados ({hoteles.length})
        </h3>
        <div className="flex flex-col gap-5 md:flex-row md:justify-between">
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 dark:bg-slate-700 dark:md:bg-slate-800 peer-focus:outline-none peer-focus:ring-4  rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
            <span className="ms-3 text-sm font-medium text-slate-500 dark:text-slate-400">
              Abrir enlace pestaña nueva
            </span>
          </label>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 dark:bg-slate-700 dark:md:bg-slate-800 peer-focus:outline-none peer-focus:ring-4  rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
            <span className="ms-3 text-sm font-medium text-slate-500 dark:text-slate-400">
              Mostrar Detalles Precios
            </span>
          </label>
        </div>
      </div>
      {hoteles.map((hotel, index) => (
        <article
          key={index}
          className="bg-white dark:bg-slate-800 shadow-xl lg:shadow-lg hover:shadow-xl border-2 border-slate-100 dark:border-slate-800 rounded-xl transition mt-10 lg:flex flex-row relative lg:h-[25vh]"
        >
          <div className="w-full h-[25vh] lg:w-1/3 lg:rounded-l-lg rounded-t-lg overflow-hidden">
            <Carousel slide={false} indicators={true}>
              {hotel.fotos.map((foto, idx) => (
                <img
                  key={idx}
                  src={foto}
                  alt={`Imagen ${idx + 1} de ${hotel.nombre}`}
                  className="h-[25vh] lg:h-full w-full object-cover"
                />
              ))}
            </Carousel>
          </div>
          <div className="p-5 lg:w-2/3">
            <div className="border-b-2 border-slate-100 dark:border-slate-700  pb-2">
              <div className="flex justify-between w-full ">
                <h4 className="text-secondary font-semibold">
                  {hotel.nombre}
                  <span className="text-sm ml-1 text-slate-400 font-normal">
                    - {hotel.regimen}
                  </span>
                </h4>
                <div className="flex text-secondary">
                  {[...Array(5)].map((_, i) =>
                    i < hotel.estrellas ? (
                      <IoMdStar key={i} className="text-lg" />
                    ) : (
                      <IoMdStarOutline key={i} className="text-lg" />
                    )
                  )}
                </div>
              </div>
              <span className="text-slate-400 dark:text-slate-400 text-sm flex items-center mb-2">
                <FaMapPin className="text-slate-600 dark:text-slate-500 mr-2" />
                {hotel.direccion}
              </span>
              <div className="flex justify-between mt-2 text-slate-900 dark:text-slate-400 font-semibold text-sm">
                <span className="flex items-center">
                  <FaPerson className="text-lg" /> {reserva.pax} adulto
                  {reserva.pax !== 1 && "s"}
                </span>
                <span className="flex items-center">
                  <FaChild className="text-lg" /> {reserva.pax} niño
                </span>
                <span className="flex items-center">
                  <FaDoorOpen className="text-lg mr-1" /> {reserva.habitaciones}{" "}
                  Habitación/es
                </span>
                <span className="flex items-center">
                  <MdModeNight className="text-lg" />
                  {reserva.noches} noches
                </span>
              </div>
            </div>
            <p className="lg:text-slate-600 mt-2 dark:text-slate-400 text-sm text-slate-500 line-clamp-2">
              {hotel.descripcion}
            </p>
            <div className="flex justify-end mt-3">
              <button
                className="px-3 w-full lg:w-fit mr-2 bg-slate-700 dark:bg-slate-600 text-white font-semibold rounded-xl shadow"
                onClick={() => setOpenModal(index)}
              >
                Detalles
              </button>
              <Modal
                dismissible
                show={openModal === index}
                onClose={() => setOpenModal(null)}
              >
                <Modal.Header className="bg-white dark:bg-slate-900">
                  {hotel.nombre}
                </Modal.Header>
                <Modal.Body className="bg-white dark:bg-slate-900">
                  <div className="space-y-6">
                    <p className="leading-relaxed text-gray-500 dark:text-gray-400">
                      {hotel.descripcion}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      <strong>Precio por noche:</strong> ${hotel.precio}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      <strong>extras:</strong> {hotel.extras.join(", ")}
                    </p>
                  </div>
                </Modal.Body>
                <Modal.Footer className="bg-white dark:bg-slate-900 flex justify-end">
                  <button
                    className="p-3 px-5 bg-slate-700  dark:bg-secondary font-bold rounded-xl text-white"
                    onClick={() => setOpenModal(null)}
                  >
                    Cerrar
                  </button>
                </Modal.Footer>
              </Modal>
              <button className="w-full lg:w-fit p-3 bg-secondary text-white font-semibold rounded-xl shadow">
                Reservar
              </button>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

export default Resultado;
