import { FaHotel, FaMapMarkedAlt, FaPeopleCarry } from "react-icons/fa";
import { IoAirplane, IoTicket } from "react-icons/io5";
import { FaCarOn, FaKitMedical, FaPeopleGroup } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaFerry } from "react-icons/fa6";
import { useState } from "react";
function Sidebar({ open, setOpen }) {
  const otros = [
    {
      id: 1,
      icono: (
        <FaPeopleGroup className="tw-text-2xl tw-text-white dark:tw-text-secondaryDark" />
      ),
      texto: "Clientes",
      to: "/clientes",
    },
    {
      id: 2,
      icono: (
        <FaMapMarkedAlt className="tw-text-2xl tw-text-white dark:tw-text-secondaryDark" />
      ),
      texto: "Presupuestos",
      to: "/presupuestos",
    },
    {
      id: 3,
      icono: (
        <FaFerry className="tw-text-2xl tw-text-white dark:tw-text-secondaryDark" />
      ),
      texto: "Envio presupuestos",
      to: "/envioPresupuestos",
    },
  ];

  return (
    <>
      {open === true && (
        <div className="tw-bg-white dark:tw-text-slate-300 tw-py-3 dark:tw-bg-slate-800 tw-hidden tw-h-fit tw-overflow-y-auto lg:tw-flex lg:tw-col-span-3 xl:tw-col-span-2 md:tw-flex-col tw-border-2 tw-border-slate-100 dark:tw-border-slate-600 tw-px-5 tw-rounded-xl tw-shadow-lg tw-mb-2">
          {otros.map((otro, index) => (
            <div
              className="tw-flex tw-gap-3 tw-items-center tw-mt-3"
              key={index}
            >
              <div className="tw-border-2 tw-bg-slate-800 dark:tw-bg-slate-700 dark:tw-border-slate-600 tw-p-3 tw-rounded-full">
                {otro.icono}
              </div>
              <Link to={otro.to}>
                <span className="tw-font-semibold">{otro.texto}</span>
              </Link>
            </div>
          ))}
          <button
            onClick={() => setOpen(false)}
            className="tw-flex tw-justify-end tw-text-slate-400 tw-items-center tw-gap-1"
          >
            <span>Cerrar este menu</span>
          </button>
        </div>
      )}
    </>
  );
}

export default Sidebar;
