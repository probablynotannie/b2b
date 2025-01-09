import { MdMarkEmailRead } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import Itinerario from "../crucero/Itinerario";
function Detalles({ datosContacto, cabinPhotos, producto }) {
  return (
    <div>
      <section className="border-b-2 border-slate-100 dark:border-slate-700 pb-4">
        <h3 className="font-bold text-center my-5 text-slate-800 text-md">
          Reserva asociado/a a:
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 md:gap-10 ">
          <div className="flex items-center justify-center flex-col md:text-center text-sm text-slate-400 dark:text-secondaryDark font-semibold">
            <FaUser className="text-2xl text-secondary mb-2 md:mb-0" />
            <span>
              {datosContacto.nombre} {datosContacto.apellido}
            </span>
          </div>
          <div className="flex items-center justify-center flex-col md:text-center text-sm text-slate-400 dark:text-secondaryDark font-semibold">
            <MdMarkEmailRead className="text-3xl text-secondary" />

            {datosContacto.email}
          </div>
          <div className="flex items-center justify-center flex-col md:text-center text-sm text-slate-400 dark:text-secondaryDark font-semibold">
            <BsFillTelephoneFill className="text-2xl text-secondary" />

            {datosContacto.numero}
          </div>
        </div>
      </section>
      <section>
        <Itinerario producto={producto} />
      </section>
      <section className="p-3">
        <h3 className="font-semibold">Fotos Camarote</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 p-2">
          {cabinPhotos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`Photo`}
              className="rounded-lg shadow-md hover:shadow-lg object-cover hover:scale-110 transition duration-300"
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Detalles;
