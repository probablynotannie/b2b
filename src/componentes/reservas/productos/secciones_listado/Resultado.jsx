import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import { FaMapPin } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { FaChild } from "react-icons/fa6";
import { MdModeNight } from "react-icons/md";

function Resultado() {
  const reserva = {
    pax: 2,
    pax_ninios: 1,
    noches: 7,
  };
  const hoteles = [
    {
      nombre: "Hotel Sol y Mar",
      precio: 120,
      direccion: "Avenida del Mar, 45, Alicante, España",
      estrellas: 4,
      foto: "/hotel1.jpg",
    },
    {
      nombre: "Gran Hotel Madrid",
      precio: 180,
      direccion: "Calle Mayor, 12, Madrid, España",
      estrellas: 5,
      foto: "/hotel2.jpg",
    },
    {
      nombre: "Costa Bella",
      precio: 95,
      direccion: "Paseo Marítimo, 22, Barcelona, España",
      estrellas: 3,
      foto: "/hotel3.jpg",
    },
  ];

  return (
    <section>
      <h3 className="text-secondary font-semibold text-lg ">
        Resultados ({hoteles.length}){" "}
      </h3>
      {hoteles.map((hotel, index) => (
        <article
          key={index}
          className="shadow-lg hover:shadow-xl border-2 border-slate-100 rounded-xl transition mt-10 flex relative"
        >
          <img
            src={hotel.foto}
            className="h-[25vh] object-cover w-1/3 rounded-lg shadow border border-secondary"
            alt={`Foto de ${hotel.nombre}`}
          />
          <div className="p-5 w-2/3">
            <div className="border-b-2 border-slate-100 pb-2">
              <div className="flex justify-between w-full">
                <h4 className="text-secondary font-semibold">{hotel.nombre}</h4>
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
              <span className="text-slate-400 flex items-center">
                <FaMapPin className="text-slate-600 mr-2" />
                {hotel.direccion}
              </span>
              {/* 
              <span className="text-slate-500 font-semibold flex items-center">
                <FaPerson className="text-lg text-secondary" /> {reserva.pax}{" "}
                adulto{reserva.pax !== 1 && "s"},
                <FaChild className="text-lg text-secondary" /> {reserva.pax}{" "}
                niños, <MdModeNight className="text-lg text-secondary" />
                {reserva.noches} noches
              </span> */}
              <div className="flex justify-between mt-2 text-secondary font-semibold text-sm">
                <span className="flex items-center">
                  <FaPerson className="text-lg" /> {reserva.pax} adulto
                  {reserva.pax !== 1 && "s"}
                </span>
                <span className="flex items-center">
                  <FaChild className="text-lg" /> {reserva.pax} niño
                </span>
                <span className="flex items-center">
                  <MdModeNight className="text-lg" />
                  {reserva.noches} noches
                </span>
              </div>
            </div>
            <div></div>
          </div>
          <button className="absolute bottom-5 right-5 p-3 bg-secondary text-white font-semibold rounded-xl shadow">
            Reservar
          </button>
        </article>
      ))}
    </section>
  );
}

export default Resultado;
