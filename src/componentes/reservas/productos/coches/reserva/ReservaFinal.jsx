import { useLocation } from "react-router-dom";
import { FaUser, FaCar } from "react-icons/fa";
import { MdEmail, MdPhoneAndroid } from "react-icons/md";
import Detalles from "../detalles/Detalles";
function Reserva() {
  const location = useLocation();
  const {
    producto,
    selectedExtras,
    nombre,
    precio,
    email,
    apellido,
    numero,
    conductor,
  } = location.state || {};
  return (
    <main className="grid lg:grid-cols-3 min-h-[55vh] items-start container gap-y-10 my-10 lg:gap-12">
      <section className="col-span-2 shadow-lg hover:shadow-xl transition duration-300 rounded-lg min-h-[15vh] border border-slate-200 dark:border-slate-700 dark:bg-slate-900 p-5">
        <Detalles coche={producto} />
      </section>
      <article className="col-span-2 lg:col-span-1 shadow-lg hover:shadow-xl transition duration-300 rounded-lg min-h-[15vh] border border-slate-100  dark:border-slate-800 dark:bg-slate-900 p-5">
        <img
          src="/banner_coches.jpg"
          className="opacity-90 rounded shadow mb-4 h-[20vh] w-full object-cover"
          alt="Reserva vuelo"
        />
        <h2 className="font-semibold border-b-2 border-slate-100 dark:text-slate-200 dark:border-slate-700 pb-2">
          Datos de contacto
        </h2>
        <div className="flex flex-nowrap gap-2 mt-2 items-center text-slate-500 dark:text-slate-400">
          <FaUser className="text-slate-700 dark:text-slate-200" />
          <span>{nombre}</span>
          <span>{apellido}</span>
        </div>
        <div className="flex flex-nowrap gap-2 mt-2 items-center text-slate-500 dark:text-slate-400">
          <MdEmail className="text-slate-700 dark:text-slate-200" />
          <span>{email}</span>
        </div>
        <div className="flex flex-nowrap gap-2 mt-2 items-center text-slate-500 dark:text-slate-400">
          <MdPhoneAndroid className="text-slate-700 dark:text-slate-200" />
          <span>{numero}</span>
        </div>
        <h2 className="font-semibold border-b-2 border-slate-100 dark:text-slate-200 dark:border-slate-700 pb-2 mt-3 mb-2">
          Coche y Extras
        </h2>
        <div className="dark:text-slate-300">
          <div className="flex justify-between gap-2 mt-2 items-center ">
            <span className="flex items-center">
              <FaCar className="text-slate-700 dark:text-slate-200 mr-1" />
              <span>{producto.nombre}</span>
            </span>
            <span>{producto.dias}</span>
          </div>
          <div>
            <ul>
              {selectedExtras.map((extra, index) => (
                <li key={index} className="flex justify-between">
                  <span>
                    <span className="font-semibold mr-1 dark:text-slate-100">
                      {extra.quantity}x
                    </span>
                    {extra.id === "GPS" && "GPS"}
                    {extra.id === "sillitabebe" && "Sillita bebé"}
                    {extra.id === "sillitaninio" && "Sillita niño"}
                    {extra.id === "elevador" && "Elevador"}
                  </span>
                  <span>{extra.price} €</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <h2 className="font-semibold border-b-2 mt-2 border-slate-100 dark:text-slate-200 dark:border-slate-700 pb-2">
          Datos de conductor
        </h2>
        <div className="flex flex-nowrap gap-2 mt-2 items-center  dark:text-slate-100">
          <FaUser className="text-slate-700 dark:text-slate-200" />
          <span>
            {conductor.nombre} {conductor.apellido}
          </span>
        </div>
        <p className="text-sm text-red-400 dark:text-red-500 mt-2">
          Comprueba los datos de contacto para poder comunicar cualquier cambio
          con la resera.
        </p>
        <button className="w-full bg-secondary dark:bg-green-600 rounded-lg  hover:shadow-lg transition duration-300 text-white p-3 font-semibold mt-2">
          {precio.toFixed(2)}
        </button>
      </article>
    </main>
  );
}

export default Reserva;
