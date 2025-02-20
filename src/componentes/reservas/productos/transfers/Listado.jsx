import {
  FaCheck,
  FaChevronUp,
  FaChevronDown,
  FaPerson,
  FaCar,
} from "react-icons/fa6";
import { MdLuggage, MdSevereCold } from "react-icons/md";
import { GiCarDoor } from "react-icons/gi";
import { IoMdStar, IoMdStarOutline, IoMdStarHalf } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { BsFillLuggageFill } from "react-icons/bs";
function Listado({ coches }) {
  const [activeCars, setActiveCars] = useState([]);

  const toggleCarDetails = (index) => {
    setActiveCars((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };
  const borderColors = {
    1: "tw-border-blue-500",
    2: "tw-border-red-500",
    3: "tw-border-green-500",
    4: "tw-border-yellow-500",
    5: "tw-border-purple-500",
  };
  return (
    <>
      {coches.map((coche, index) => (
        <main
          className={`tw-bg-slate-50  tw-border-b-4 xl:tw-border-b-0 xl:tw-border-r-4 ${
            borderColors[coche.tipoVehiculo] || "tw-border-gray-500"
          }
      tw-rounded-xl dark:tw-bg-slate-800 tw-shadow-md hover:tw-shadow-lg tw-transition tw-duration-300 tw-my-6`}
          key={index}
        >
          <article className="tw-flex tw-flex-col xl:tw-flex-row tw-border tw-border-slate-100 dark:tw-border-slate-800 tw-rounded-xl">
            <div className="tw-relative tw-w-full xl:tw-w-1/3  xl:tw-h-auto tw-rounded-t-xl xl:tw-rounded-l-xl tw-overflow-hidden">
              <img
                className="tw-w-full tw-h-full tw-object-cover"
                src={coche.img}
                alt={coche.nombre}
              />
              <div className="tw-absolute tw-bottom-0 tw-w-full tw-bg-green-500 tw-bg-opacity-60 tw-text-white tw-flex tw-justify-around tw-py-2">
                {[
                  { icon: <FaPerson />, text: coche.capacidad },
                  { icon: <MdLuggage />, text: coche.maletero },
                  { icon: <GiCarDoor />, text: coche.puertas },
                  { icon: <MdSevereCold />, text: coche.AC ? "SÍ" : "NO" },
                ].map((item, i) => (
                  <span key={i} className="tw-flex tw-items-center tw-gap-1">
                    {item.icon} {item.text}
                  </span>
                ))}
              </div>
            </div>
            <div className="tw-p-5 xl:tw-w-2/3">
              <div className="tw-flex tw-justify-between tw-border-b tw-pb-2 dark:tw-border-slate-700">
                <div>
                  <h4 className="tw-text-secondary tw-font-semibold">
                    {coche.nombre}
                  </h4>
                  <ul className="tw-flex tw-flex-wrap tw-gap-2 tw-mt-2 tw-text-sm tw-text-slate-500 dark:tw-text-slate-400">
                    <li className="tw-flex tw-items-center tw-gap-1">
                      <FaCheck className="tw-text-green-700 dark:tw-text-green-400" />{" "}
                      Cancelaciones gratuitas
                    </li>
                    <li className="tw-flex tw-items-center tw-gap-1">
                      <FaCheck className="tw-text-green-700 dark:tw-text-green-400" />{" "}
                      Todos los costes incluidos
                    </li>
                    <li className="tw-flex tw-items-center tw-gap-1">
                      <FaCheck className="tw-text-green-700 dark:tw-text-green-400" />{" "}
                      Puerta a puerta
                    </li>
                  </ul>
                </div>
                <div className="tw-flex tw-flex-col tw-items-end">
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
                  <span className="tw-text-slate-500 dark:tw-text-slate-300 tw-text-sm tw-mt-1">
                    ({Number(coche.valoracion.cantidad).toLocaleString("en-US")}
                    )
                  </span>
                </div>
              </div>
              <div className="tw-flex tw-flex-wrap tw-justify-between tw-mt-3">
                <div className="tw-flex tw-flex-col tw-gap-2">
                  <span className="tw-text-sm tw-text-slate-700 dark:tw-text-slate-300">
                    Duración del trayecto: {coche.duracion}
                  </span>
                  <button
                    onClick={() => toggleCarDetails(index)}
                    className="tw-bg-slate-200 tw-w-fit tw-mt-5 dark:tw-bg-slate-900 tw-text-slate-700 dark:tw-text-slate-200 tw-font-semibold tw-rounded tw-px-4 tw-py-2 tw-flex tw-justify-between tw-items-center"
                  >
                    {activeCars.includes(index)
                      ? "Menos información"
                      : "Más información"}
                    {activeCars.includes(index) ? (
                      <FaChevronUp className="tw-ml-2" />
                    ) : (
                      <FaChevronDown className="tw-ml-2" />
                    )}
                  </button>
                </div>
                <div className="tw-flex tw-items-end">
                  <Link
                    to="/coche"
                    state={coche}
                    className="tw-flex tw-flex-col tw-items-center tw-text-slate-700 dark:tw-text-slate-300 "
                  >
                    <span className="tw-text-slate-400">Precio desde</span>
                    <h4 className="tw-text-4xl tw-font-semibold tw-group-hover:tw-text-secondary tw-transition hover:tw-text-secondary">
                      {Number(coche.precio).toFixed(2)}€
                    </h4>
                  </Link>
                </div>
              </div>
            </div>
          </article>
          {activeCars.includes(index) && (
            <div className="tw-bg-slate-100 dark:tw-bg-slate-800 tw-p-6 tw-rounded-b-lg tw-shadow-md tw-space-y-6">
              <div className="tw-border-l-4 tw-border-secondary tw-pl-4">
                <h3 className="tw-font-semibold tw-text-lg dark:tw-text-white">
                  Cancelaciones
                </h3>
                <ul>
                  {Object.entries(coche.cancelaciones).map(([date, count]) => (
                    <li
                      className="tw-text-sm dark:tw-text-slate-300"
                      key={date}
                    >
                      <strong>A partir de {date}</strong> – Penalización:{" "}
                      <strong>{count}%</strong>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="tw-flex tw-gap-3 tw-flex-wrap">
                {[
                  {
                    text: "Sin cargos por pagar con tarjeta",
                    bgColor: "bg-red-300",
                    textColor: "text-red-800",
                  },
                  {
                    text: "Servicio Puerta a puerta",
                    bgColor: "bg-indigo-300",
                    textColor: "text-indigo-800",
                  },
                  {
                    text: "Peajes incluidos",
                    bgColor: "bg-pink-300",
                    textColor: "text-pink-800",
                  },
                  {
                    text: "Conductores profesionales",
                    bgColor: "bg-orange-300",
                    textColor: "text-orange-800",
                  },
                ].map((item, i) => (
                  <span
                    key={i}
                    className={`${item.bgColor} ${item.textColor} tw-rounded-lg tw-text-sm tw-px-3 tw-py-1`}
                  >
                    {item.text}
                  </span>
                ))}
              </div>
              <ul className="tw-bg-white dark:tw-bg-slate-700 tw-rounded-lg tw-shadow-md tw-p-5 tw-space-y-6">
                <li className="tw-flex tw-items-start tw-gap-4">
                  <BsFillLuggageFill className="tw-text-xl tw-text-green-700 dark:tw-text-green-500" />
                  <div>
                    <h5 className="tw-font-semibold tw-text-lg tw-text-slate-800 dark:tw-text-slate-300">
                      Equipaje permitido
                    </h5>
                    <p className="tw-text-sm md:tw-text-base tw-text-slate-600 dark:tw-text-slate-400">
                      Puedes llevar <strong>1 maleta mediana</strong> por cada
                      asiento de pasajeros + <strong>1 bulto pequeño</strong>{" "}
                      (portátil, cámara de fotos o bolso pequeño).
                    </p>
                  </div>
                </li>
                <li className="tw-flex tw-items-start tw-gap-4">
                  <IoMdSettings className="tw-text-2xl tw-text-blue-900 dark:tw-text-blue-400" />
                  <div>
                    <h5 className="tw-font-semibold tw-text-lg tw-text-slate-800 dark:tw-text-slate-300">
                      Extras
                    </h5>
                    <p className="tw-text-sm md:tw-text-base tw-text-slate-600 dark:tw-text-slate-400">
                      Tras seleccionar este vehículo, puedes añadir{" "}
                      <strong>equipamiento deportivo</strong>,{" "}
                      <strong> sistemas de retención infantil</strong> y otros
                      extras.
                    </p>
                  </div>
                </li>
                <li className="tw-flex tw-items-start tw-gap-4">
                  <FaCar className="tw-text-lg tw-text-red-600" />
                  <div>
                    <h5 className="tw-font-semibold tw-text-lg tw-text-slate-800 dark:tw-text-slate-300">
                      Vehículo
                    </h5>
                    <p className="tw-text-sm md:tw-text-base tw-text-slate-600 dark:tw-text-slate-400">
                      Este vehículo puede ser <strong>sustituido</strong> por
                      otro con más capacidad según disponibilidad.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </main>
      ))}
    </>
  );
}

export default Listado;
