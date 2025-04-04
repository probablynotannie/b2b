import { FaMapMarkedAlt } from "react-icons/fa";
import { SiMentorcruise } from "react-icons/si";
import { IoAirplane } from "react-icons/io5";

import { Link } from "react-router-dom";

function Sidebar() {
  const otros = [
    {
      id: 1,
      icono: (
        <FaMapMarkedAlt className="tw-text-2xl tw-text-white dark:tw-text-secondaryDark" />
      ),
      texto: "Clientes",
      to: "/clientes",
    },
    {
      id: 2,
      icono: (
        <SiMentorcruise className="tw-text-2xl tw-text-white dark:tw-text-secondaryDark" />
      ),
      texto: "Presupuestos",
      to: "/presupuestos",
    },
    {
      id: 3,
      icono: (
        <IoAirplane className="tw-text-2xl tw-text-white dark:tw-text-secondaryDark" />
      ),
      texto: "Envio presupuestos",
      to: "/envioPresupuestos",
    },
  ];
  const bgColors = [
    "tw-bg-red-500",
    "tw-bg-blue-500",
    "tw-bg-green-500",
    "tw-bg-yellow-500",
    "tw-bg-purple-500",
    "tw-bg-pink-500",
    "tw-bg-indigo-500",
    "tw-bg-orange-500",
  ];
  const otrosIconos = [
    {
      id: 1,
      icono: (
        <FaMapMarkedAlt className="tw-text-3xl tw-text-indigo-500 dark:tw-text-secondaryDark" />
      ),
      color: "red",
      texto: "Clientes",
      to: "/clientes",
    },
    {
      id: 2,
      icono: (
        <SiMentorcruise className="tw-text-3xl tw-text-pink-500 dark:tw-text-secondaryDark" />
      ),
      color: "pink",
      texto: "Presupuestos",
      to: "/presupuestos",
    },
    {
      id: 3,
      icono: (
        <IoAirplane className="tw-text-3xl tw-text-blue-500 dark:tw-text-secondaryDark" />
      ),
      color: "cyan",
      texto: "Envio presupuestos",
      to: "/envioPresupuestos",
    },
  ];
  return (
    <div>
      <div className="tw-grid  tw-gap-4">
        {otrosIconos.map((otro, index) => {
          const randomColor =
            bgColors[Math.floor(Math.random() * bgColors.length)];

          return (
            <div key={index} className="tw-flex tw-items-center tw-gap-1">
              {otro.icono}
              <span>{otro.texto}</span>
            </div>
          );
        })}
      </div>
    </div>
    /*  <div className="tw-hidden dark:tw-text-slate-300  lg:tw-flex tw-col-span-7 lg:tw-col-span-2 xl:tw-col-span-1 xl:tw-flex tw-flex-row tw-flex-wrap md:tw-flex-col tw-mb-2">
      <div className="tw-border-2 tw-bg-white dark:tw-bg-slate-800 tw-border-slate-100 dark:tw-border-slate-700 tw-px-5 tw-rounded-xl tw-shadow-lg tw-pb-5">
        {otros.map((otro, index) => (
          <div className="tw-flex tw-gap-3 tw-items-center tw-mt-3" key={index}>
            <div className="tw-border-2 tw-bg-slate-800 dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:tw-text-secondary tw-p-3 tw-rounded-full">
              {otro.icono}
            </div>
            <Link to={otro.to}>
              <span className="tw-font-semibold">{otro.texto}</span>
            </Link>
          </div>
        ))}
      </div>
    </div> */
  );
}

export default Sidebar;
