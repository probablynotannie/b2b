import {
  FaChevronDown,
  FaChevronRight,
  FaClock,
  FaMapPin,
} from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { MdLuggage } from "react-icons/md";
import { GiCarDoor } from "react-icons/gi";
import { IoMdStar, IoMdStarOutline, IoMdStarHalf } from "react-icons/io";
import FormatearFecha from "../../estructura/FormatearFecha";
import { MdSevereCold } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
function Listado({ coches }) {
  const [activeModalCar, setActiveModalCar] = useState(null);
  return (
    <>
      {coches.map((coche, index) => {
        return (
          <main
            className="tw-bg-slate-50 tw-border-b-2 dark:tw-bg-slate-800 tw-shadow-xl lg:tw-shadow-md hover:tw-shadow-xl tw-transition tw-duration-300"
            key={index}
          >
            <article className="xl:tw-flex tw-flex-row tw-border-2 tw-border-slate-100 dark:tw-border-slate-800 tw-rounded-xl tw-transition tw-mt-10 tw-relative tw-min-h-[10vh]">
              <div className="tw-w-full tw-h-[25vh] lg:tw-h-auto xl:tw-w-1/3 lg:tw-rounded-l-lg tw-rounded-t-lg tw-overflow-hidden tw-relative tw-group">
                <div className="tw-bg-black tw-rounded-t-lg bg-opacity-0 tw-transition-opacity tw-duration-500 tw-delay-200 tw-absolute tw-top-0 tw-w-full tw-h-full group-hover:flex tw-justify-center tw-items-center tw-text-5xl group-hover:bg-opacity-45 tw-text-white tw-font-bold tw-hidden">
                  {coche.precio * coche.dias}€
                </div>
                <div className="tw-relative tw-h-full">
                  <img
                    className="tw-w-full tw-h-full tw-object-cover"
                    src={coche.img}
                    alt={coche.nombre}
                  />
                  <div className="tw-absolute tw-bg-opacity-55 tw-bottom-0 tw-w-full tw-bg-green-500 tw-grid tw-grid-cols-4  tw-text-white tw-p-2">
                    <span className="tw-flex tw-items-center tw-gap-1 tw-justify-center tw-border-r-2 ">
                      <FaPerson className="tw-text-lg" />
                      {coche.capacidad}
                    </span>
                    <span className="tw-flex tw-items-center tw-gap-1 tw-justify-center tw-border-r-2">
                      <MdLuggage className="tw-text-lg" />
                      {coche.maletero}
                    </span>
                    <span className="tw-flex tw-items-center tw-gap-1 tw-justify-center tw-border-r-2">
                      <GiCarDoor className="tw-text-lg tw-gap-1 tw-flex tw-justify-center " />
                      {coche.puertas}
                    </span>
                    <span className="tw-flex tw-items-center tw-gap-1 tw-justify-center">
                      <MdSevereCold className="tw-text-lg tw-gap-1 tw-flex tw-justify-center" />
                      {coche.AC === true ? "SÍ" : "NO"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="tw-p-5 xl:tw-w-2/3">
                <div className=" tw-pb-2">
                  <div className="tw-border-b-2 tw-border-slate-100 dark:tw-border-slate-700 tw-flex tw-justify-between tw-w-full">
                    <div className="tw-flex tw-flex-col">
                      <h4 className="tw-text-secondary tw-font-semibold">
                        {coche.nombre}
                      </h4>
                      <div className="tw-flex tw-justify-between tw-w-full">
                        <span className="tw-text-slate-400 dark:tw-text-slate-400 tw-text-sm tw-flex tw-items-center tw-mb-2">
                          <FaClock className="tw-text-slate-600 dark:tw-text-slate-500 tw-mr-2" />
                          Duración: {coche.duracion}
                        </span>
                      </div>
                    </div>
                    <div className="tw-flex tw-flex-col ">
                      <div className="tw-flex tw-text-secondary">
                        {[...Array(5)].map((_, i) =>
                          i < Math.floor(coche.valoracion.estrellas) ? (
                            <IoMdStar key={i} className="tw-text-lg" />
                          ) : i === Math.floor(coche.valoracion.estrellas) &&
                            coche.valoracion.estrellas % 1 !== 0 ? (
                            <IoMdStarHalf key={i} className="tw-text-lg" />
                          ) : (
                            <IoMdStarOutline key={i} className="tw-text-lg" />
                          )
                        )}
                      </div>
                      <span className="tw-text-slate-500 tw-text-sm tw-text-end tw-mt-1">
                        (
                        {Number(coche.valoracion.cantidad).toLocaleString(
                          "en-US"
                        )}
                        )
                      </span>
                    </div>
                  </div>
                </div>
                <div className="tw-grid tw-grid-cols-2 tw-gap-2">
                  <div className="tw-flex tw-flex-col tw-gap-1">
                    <div className="tw-col-span-2 tw-bg-white dark:tw-bg-slate-900 dark:tw-border-slate-800 dark:tw-text-slate-200 tw-rounded-lg tw-border tw-border-slate-200 tw-p-4 tw-flex tw-flex-col tw-justify-center tw-items-center">
                      <span className="tw-text-[1rem] tw-font-semibold">
                        {coche.recogida.lugar}
                      </span>
                      <span className="tw-text-gray-600 dark:tw-text-gray-500 tw-text-sm">
                        {FormatearFecha(coche.recogida.fecha)}
                      </span>
                    </div>
                    <div className="tw-flex tw-items-center tw-justify-center dark:tw-text-secondary">
                      <FaChevronDown />
                    </div>
                    <div className="tw-col-span-2 tw-bg-white dark:tw-bg-slate-900 dark:tw-border-slate-800 dark:tw-text-slate-200 tw-rounded-lg tw-border tw-border-slate-200 tw-p-4 tw-flex tw-flex-col tw-justify-center tw-items-center">
                      <span className="tw-text-[1rem] tw-font-semibold">
                        {coche.recogida.lugar}
                      </span>
                      <span className="tw-text-gray-600 dark:tw-text-gray-500 tw-text-sm">
                        {FormatearFecha(coche.recogida.fecha)}
                      </span>
                    </div>
                  </div>
                  <div className="tw-mt-3 tw-gap-3">
                    <div>holi</div>
                    <button
                      onClick={() => setActiveModalCar(index)}
                      className="tw-w-full  tw-p-3  tw-text-slate-500 dark:tw-text-slate-400"
                    >
                      Más info...
                    </button>
                    <Link
                      to="/coche"
                      state={coche}
                      className="  tw-p-3  tw-text-slate-500 dark:tw-text-slate-400"
                    >
                      <button className="tw-w-full">
                        Reservar por {Number(coche.precio).toFixed(2)}€
                      </button>
                    </Link>
                  </div>
                </div>
                {/*   <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-5 tw-gap-6 tw-mt-3">
                  <div className="tw-col-span-2 tw-bg-white dark:tw-bg-slate-900 dark:tw-border-slate-800 dark:tw-text-slate-200 tw-rounded-lg tw-border tw-border-slate-200 tw-p-4 tw-flex tw-flex-col tw-justify-center tw-items-center">
                    <span className="tw-text-[1rem] tw-font-semibold">
                      {coche.recogida.lugar}
                    </span>
                    <span className="tw-text-gray-600 dark:tw-text-gray-500 tw-text-sm">
                      {FormatearFecha(coche.recogida.fecha)}
                    </span>
                  </div>
                  <div className="tw-flex tw-items-center tw-justify-center dark:tw-text-secondary">
                    <FaChevronRight />
                  </div>
                  <div className="tw-col-span-2 tw-bg-white dark:tw-bg-slate-900 dark:tw-border-slate-800 dark:tw-text-slate-200 tw-rounded-lg tw-border tw-border-slate-200 tw-p-4 tw-flex tw-flex-col tw-justify-center tw-items-center">
                    <span className="tw-text-[1rem] tw-font-semibold">
                      {coche.recogida.lugar}
                    </span>
                    <span className="tw-text-gray-600 dark:tw-text-gray-500 tw-text-sm">
                      {FormatearFecha(coche.recogida.fecha)}
                    </span>
                  </div>
                </div>

                <div className="tw-flex tw-justify-between  tw-mt-3 tw-gap-3">
                  <button
                    onClick={() => setActiveModalCar(index)}
                    className="tw-w-full lg:tw-w-fit tw-p-3  tw-text-slate-500 dark:tw-text-slate-400"
                  >
                    Más info...
                  </button>
                  <Link
                    to="/coche"
                    state={coche}
                    className="tw-w-full lg:tw-w-fit tw-p-3 tw-bg-secondary tw-px-10 tw-text-white tw-font-semibold tw-rounded-lg  tw-text-center"
                  >
                    <button>
                      Reservar por {Number(coche.precio).toFixed(2)}€
                    </button>
                  </Link>
                </div>*/}
              </div>
            </article>
            {activeModalCar === index && (
              <div className="tw-z-10 tw-fixed tw-inset-0 tw-flex tw-items-center tw-justify-center tw-bg-black tw-bg-opacity-50">
                <div className="tw-bg-white tw-rounded-lg tw-shadow-lg tw-max-w-lg tw-w-full dark:tw-bg-gray-800">
                  <div className="tw-p-5 tw-border-b tw-border-gray-200 dark:tw-border-gray-700 tw-flex tw-justify-between">
                    <h2 className="tw-text-lg tw-font-semibold tw-text-gray-900 dark:tw-text-white">
                      {coche.nombre}
                    </h2>
                    <button
                      onClick={() => setActiveModalCar(null)}
                      className="tw-text-gray-500 hover:tw-text-red-500"
                    >
                      ✖
                    </button>
                  </div>
                  <div className="tw-p-6">
                    {" "}
                    <div>
                      <h3 className="tw-font-semibold ">Cancelaciones</h3>
                      {Object.entries(coche.cancelaciones).map(
                        ([date, count]) => (
                          <p className="tw-text-sm" key={date}>
                            A partir de : {date}, Penalización: {count}%
                          </p>
                        )
                      )}
                    </div>
                  </div>
                  <div className="tw-p-4 tw-border-t tw-border-gray-200 dark:tw-border-gray-700 tw-flex tw-justify-end">
                    <button
                      className="tw-bg-gray-500 tw-text-white tw-p-2 tw-rounded-lg hover:tw-bg-gray-700"
                      onClick={() => setActiveModalCar(null)}
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            )}
          </main>
        );
      })}
    </>
  );
}

export default Listado;
