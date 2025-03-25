import { FaMars, FaVenus, FaGlobe, FaBirthdayCake } from "react-icons/fa";

import FormatearFecha from "../../../../../helpers/FormatearFecha";


function Pasajeros({ pasajeros }) {
  return (
    <section className="tw-my-6 tw-space-y-2">
      <h3 className="tw-font-semibold dark:tw-text-slate-100">Pasajeros</h3>
      <div className="tw-flex tw-flex-wrap tw-gap-7">
        {pasajeros.map((pasajero) => (
          <div
            key={pasajero.id}
            className="tw-flex tw-border dark:tw-border-slate-700 tw-bg-white dark:tw-bg-slate-800 tw-shadow tw-rounded-lg"
          >
            <div
              className={`tw-px-3 tw-min-h-[8vh] tw-text-white tw-rounded-l-lg ${
                pasajero.genero === "Mujer"
                  ? "tw-bg-pink-500"
                  : "tw-bg-blue-500"
              } tw-flex tw-justify-center tw-items-center`}
            >
              {pasajero.genero === "Mujer" ? (
                <FaVenus className="tw-text-4xl" />
              ) : (
                <FaMars className="tw-text-4xl" />
              )}
            </div>
            <div className="tw-p-3 tw-pr-8 tw-w-full ">
              <ul className="tw-text-slate-500 dark:tw-text-slate-300 tw-text-sm">
                <li className="tw-flex tw-justify-between">
                  <span className="tw-font-semibold tw-text-black dark:tw-text-white">
                    {pasajero.nombre} {pasajero.apellido}
                  </span>
                  <span className="tw-text-black dark:tw-text-white">
                    Edad: {pasajero.age}
                  </span>
                </li>
                <li className="tw-flex tw-gap-1 ">
                  <FaBirthdayCake className="tw-text-slate-500" />
                  {formatearFecha(pasajero.fechaNacimiento)}
                </li>
                <li className="tw-flex tw-gap-1">
                  <FaGlobe className="tw-text-slate-500" />
                  {pasajero.pais}
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pasajeros;
