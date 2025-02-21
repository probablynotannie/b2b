import { FaCheck, FaChevronUp, FaChevronDown, FaPerson } from "react-icons/fa6";
import { MdLuggage } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";

import { FaShareAlt } from "react-icons/fa";
function Listado({ coches }) {
  console.log(coches);
  const [activeCars, setActiveCars] = useState([]);

  const toggleCarDetails = (index) => {
    setActiveCars((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const borderColors = {
    premium_minivan: "tw-border-blue-500",
    taxi: "tw-border-red-500",
    premium_taxi: "tw-border-green-500",
    minivan: "tw-border-yellow-500",
    coach: "tw-border-purple-500",
    minicoach: "tw-border-orange-500",
    minibus: "tw-border-pink-500",
  };
  const boxColor = {
    premium_minivan: "tw-bg-blue-500",
    taxi: "tw-bg-red-500",
    premium_taxi: "tw-bg-green-500",
    minivan: "tw-bg-yellow-500",
    coach: "tw-bg-purple-500",
    minicoach: "tw-bg-orange-500",
    minibus: "tw-bg-pink-500",
  };

  const formatDuration = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}min`;
  };

  return (
    <>
      {coches.map((coche, index) => (
        <main
          className={`tw-bg-slate-50  tw-border-b-4 xl:tw-border-b-0 xl:tw-border-r-4 ${
            borderColors[coche.type] || "tw-border-gray-500"
          }
          tw-rounded-xl dark:tw-bg-slate-800 tw-shadow-md hover:tw-shadow-lg tw-transition tw-duration-300 tw-my-6`}
          key={index}
        >
          <article className="tw-flex tw-flex-col md:tw-flex-row tw-border tw-border-slate-100 dark:tw-border-slate-800 tw-rounded-xl">
            <div
              className={`tw-relative tw-w-full  md:tw-w-2/5 lg:tw-w-3/5 xl:tw-w-1/3   xl:tw-h-auto tw-rounded-t-xl xl:tw-rounded-l-xl
                ${borderColors[coche.type] || "tw-border-gray-500"}

                
                tw-border-opacity-35 tw-overflow-hidden`}
            >
              <img
                className="tw-w-full tw-h-[200px] md:tw-h-[full] tw-object-contain"
                src={coche.img}
                alt={coche.name}
              />
              <div
                className={`tw-absolute tw-bottom-0 tw-w-full  ${
                  boxColor[coche.type] || "tw-bg-gray-500"
                } tw-bg-opacity-60 tw-text-white tw-flex tw-justify-around tw-py-2`}
              >
                {[
                  {
                    icon: <FaPerson />,
                    text: coche.maxPaxes,
                  },
                  {
                    icon: <MdLuggage />,
                    text: coche.maxLuggage,
                  },
                  {
                    icon: <FaShareAlt />,
                    text: coche.isShared === true ? "Si" : "No",
                  },
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
                    {coche.name}
                  </h4>
                  <div className="tw-flex tw-flex-wrap tw-gap-2 tw-mt-2 tw-text-sm tw-text-slate-500 dark:tw-text-slate-400">
                    {coche.route.origin.name} - {coche.route.destination.name}
                  </div>
                </div>
              </div>
              <div className="tw-flex tw-flex-wrap tw-justify-between tw-mt-3">
                <div className="tw-flex tw-flex-col tw-gap-2">
                  <ul>
                    <li className="tw-text-sm tw-text-slate-700 dark:tw-text-slate-300">
                      Duración del trayecto:{" "}
                      {formatDuration(coche.route.duration)}
                    </li>
                    <li className="tw-text-sm tw-text-slate-700 dark:tw-text-slate-300">
                      Distancia del trayecto:
                      {coche.route.distance}KM
                    </li>
                  </ul>
                </div>
                <div className="tw-flex tw-flex-wrap tw-justify-between tw-w-full">
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
                  <div className="tw-flex tw-items-end ">
                    <Link
                      to="/coche"
                      state={coche}
                      className="tw-flex tw-flex-col tw-items-center tw-text-slate-700 dark:tw-text-slate-300 "
                    >
                      <span className="tw-text-slate-400">Precio desde</span>
                      <h4 className="tw-text-4xl tw-font-semibold tw-group-hover:tw-text-secondary tw-transition hover:tw-text-secondary">
                        {Number(coche.price).toFixed(2)}
                        {coche.currency === "EUR" ? "€" : "$"}
                      </h4>
                    </Link>
                  </div>
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
                  {coche.cancelations.map((date, i) => (
                    <li className="tw-text-sm dark:tw-text-slate-300" key={i}>
                      <strong>A partir de {date.split("-")[0]}</strong> –
                      Penalización: <strong>{date.split("|")[1]}%</strong>
                    </li>
                  ))}
                </ul>
              </div>
              <section className="tw-bg-white dark:tw-bg-slate-700 tw-rounded-lg tw-shadow-md tw-p-5 ">
                <h5 className="tw-font-semibold tw-text-lg tw-text-slate-800 dark:tw-text-slate-300">
                  {coche.name}
                </h5>
                <p className="tw-text-sm md:tw-text-base tw-text-slate-600 dark:tw-text-slate-400">
                  {coche.description}
                </p>
              </section>
            </div>
          )}
        </main>
      ))}
    </>
  );
}

export default Listado;
