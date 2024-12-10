import { FaCar } from "react-icons/fa";
import { MdSevereCold } from "react-icons/md";
import { FaPerson } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaWallet } from "react-icons/fa";

function Cajas({ coches }) {
  return (
    <div className="grid grid-cols-2 gap-16 mt-10">
      {coches.map((coche, index) => (
        <Link key={index} to="/coche" state={coche}>
          <div className="flex flex-col">
            <div className=" dark:border-slate-700 shadow-lg hover:shadow-2xl transition rounded-xl relative group">
              <div className="bg-black rounded-t-lg bg-opacity-0 transition-opacity duration-500 delay-200 absolute top-0 w-full h-full group-hover:flex justify-center items-center text-5xl group-hover:bg-opacity-45 text-white font-bold hidden">
                {coche.precio * coche.dias}€
              </div>
              <img
                src={coche.img}
                alt={coche.nombre}
                className="w-full h-[30vh] object-cover rounded-t-xl"
              />
            </div>
            <div className="grid grid-cols-4">
              <h3 className=" bg-slate-800 dark:bg-slate-900 rounded-bl-xl flex items-center justify-center gap-1 text-white font-bold p-2">
                <FaPerson className="text-secondary" />
                {coche.capacidad}
              </h3>
              <h3
                className={`flex items-center justify-center gap-1 text-white font-bold p-2 bg-slate-800 dark:bg-slate-900 border-x-2 border-slate-700`}
              >
                <FaCar className="text-secondary" />
                {coche.cambio}
              </h3>
              <h3
                className={`flex items-center justify-center gap- text-white font-bold p-2 bg-slate-800 dark:bg-slate-900 border-r-2 border-slate-700`}
              >
                <MdSevereCold className="text-xl mr-1 text-secondary" />
                {coche.AC === true ? "Sí" : "No"}
              </h3>
              <h3 className=" bg-slate-800 dark:bg-slate-900 rounded-br-xl flex items-center justify-center gap-1 text-white font-bold p-2">
                <FaWallet className="text-md mr-1 text-secondary" />
                {coche.precio}€ día
              </h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Cajas;
