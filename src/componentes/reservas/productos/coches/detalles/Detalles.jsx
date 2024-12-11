import { FaPerson } from "react-icons/fa6";
import { MdLuggage } from "react-icons/md";
import { GiCarDoor } from "react-icons/gi";
import { FaCar } from "react-icons/fa6";
import { MdSevereCold } from "react-icons/md";
import { HiOutlineChevronDoubleLeft } from "react-icons/hi";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { FaMapPin } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import Condiciones from "./politica/Condiciones";
import Politica from "./politica/Politica";
import Gasolina from "./politica/Gasolina";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { useState } from "react";
function Detalles({ coche }) {
  const [activeTab, setActiveTab] = useState("franquicia");

  function formatFecha(fecha) {
    const meses = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];

    const [dia, mes, año] = fecha.split("/");

    return `${dia} de ${meses[parseInt(mes, 10) - 1]} de ${año}`;
  }
  return (
    <div>
      <div className="flex justify-between items-center border-b-2 pb-5 border-slate-100 dark:border-slate-700">
        <h1 className="text-2xl font-bold dark:text-white"> {coche.nombre} </h1>
        <span className="bg-slate-500 rounded-md text-white p-2">
          {coche.tipo}
        </span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 jujstify-center gap-10 mt-10 border-b-2 pb-5 border-slate-100 dark:border-slate-700">
        <div className="flex justify-center">
          <div className="flex flex-col justify-center items-center rounded-full h-[100px] w-[100px] font-bold shadow-md hover:shadow-lg hover:border-2 dark:border-transparent transition bg-pink-300 text-pink-500 dark:bg-pink-800 dark:text-pink-400">
            <FaPerson className="text-lg" /> {coche.capacidad}x
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col justify-center items-center rounded-full h-[100px] w-[100px] font-bold shadow-md hover:shadow-lg hover:border-2 dark:border-transparent transition bg-orange-300 text-orange-500 dark:bg-orange-800 dark:text-orange-400">
            <MdLuggage className="text-lg" /> {coche.maletero}x
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col justify-center items-center rounded-full h-[100px] w-[100px] font-bold shadow-md hover:shadow-lg hover:border-2 dark:border-transparent transition bg-blue-300 text-blue-500 dark:bg-blue-800 dark:text-blue-400">
            <GiCarDoor className="text-lg" /> {coche.puertas}x
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col justify-center items-center rounded-full h-[100px] w-[100px] font-bold shadow-md hover:shadow-lg hover:border-2 dark:border-transparent transition bg-green-300 text-green-500 dark:bg-green-800 dark:text-green-400">
            <FaCar className="text-lg" /> {coche.tipo}
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col justify-center items-center rounded-full h-[100px] w-[100px] font-bold shadow-md hover:shadow-lg hover:border-2 dark:border-transparent transition bg-indigo-300 text-indigo-500 dark:bg-indigo-800 dark:text-indigo-400">
            <MdSevereCold className="text-lg" />
            {coche.AC ? "Sí" : "No"}
          </div>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-5 items-center">
        <div className="flex flex-col col-span-5 md:col-span-2 shadow-lg p-5 rounded-lg border-2 border-slate-100 dark:border-slate-800 dark:hover:bg-slate-700 transition bg-slate-100 dark:bg-slate-900 dark:text-slate-300 w-full">
          <h3 className="font-semibold">Recogida</h3>
          <div className="ml-2">
            <p className="flex items-center gap-1">
              <FaMapPin />
              {" - "}
              <span className="text-sm">{coche.recogida.lugar}</span>
            </p>
            <p className="flex items-center gap-1">
              <FaCalendarAlt />
              {" - "}
              <span className="text-sm">
                {formatFecha(coche.recogida.fecha)}
              </span>
            </p>
            <p className="flex items-center gap-1">
              <FaClock />
              {" - "}
              <span className="text-sm">{coche.recogida.hora}</span>
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-5 col-span-5 md:col-span-1 justify-center items-center my-2 dark:text-white">
          <HiOutlineChevronDoubleLeft className="md:block hidden text-xl" />
          <HiOutlineChevronDoubleRight className="md:block hidden text-xl" />
          <HiOutlineChevronDoubleUp className="md:hidden block text-xl" />
          <HiOutlineChevronDoubleDown className="md:hidden block text-xl" />
        </div>
        <div className="flex flex-col col-span-5 md:col-span-2 shadow-lg p-5 rounded-lg border-2 border-slate-100 dark:border-slate-800 dark:hover:bg-slate-700 transition bg-slate-100 dark:bg-slate-900 dark:text-slate-300 w-full">
          <h3 className="font-semibold">Devolucion</h3>
          <div className="ml-2">
            <p className="flex items-center gap-1">
              <FaMapPin />
              {" - "}
              <span className="text-sm">{coche.devolucion.lugar}</span>
            </p>
            <p className="flex items-center gap-1">
              <FaCalendarAlt />
              {" - "}
              <span className="text-sm">
                {formatFecha(coche.devolucion.fecha)}
              </span>
            </p>
            <p className="flex items-center gap-1">
              <FaClock />
              {" - "}
              <span className="text-sm">{coche.devolucion.hora}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="mt-10">
          <ul className="flex space-x-4 text-sm font-medium text-slate-500 dark:text-slate-400">
            <li>
              <button
                onClick={() => setActiveTab("franquicia")}
                className={`px-4 py-3 rounded-lg ${
                  activeTab === "franquicia"
                           ? "bg-secondary text-white dark:bg-secondaryDark"
                    : "bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-700"
                }`}
              >
                Política de Franquicia
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("condiciones")}
                className={`px-4 py-3 rounded-lg ${
                  activeTab === "condiciones"
                    ? "bg-secondary text-white dark:bg-secondaryDark"
                    : "bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-700"
                }`}
              >
                Condiciones de alquiler
              </button>
            </li>

            <li>
              <button
                onClick={() => setActiveTab("gasolina")}
                className={`px-4 py-3 rounded-lg ${
                  activeTab === "gasolina"
                             ? "bg-secondary text-white dark:bg-secondaryDark"
                    : "bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-700"
                }`}
              >
                Política sobre gasolina
              </button>
            </li>
          </ul>
        </div>
        {/* Tab Content */}
        <div className="mt-4 p-6 bg-slate-50 text-medium text-slate-500 dark:text-slate-400 dark:bg-slate-900 rounded-lg">
          {activeTab === "franquicia" && (
            <div>
              <Politica />
            </div>
          )}
          {activeTab === "condiciones" && (
            <div>
              <Condiciones />
            </div>
          )}

          {activeTab === "gasolina" && (
            <div>
              <Gasolina />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Detalles;
