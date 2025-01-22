import { FaHotel } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { SiMentorcruise } from "react-icons/si";
import { IoAirplane } from "react-icons/io5";
import { FaCarOn } from "react-icons/fa6";
import { IoTicket } from "react-icons/io5";
import { FaTicketAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaFerry } from "react-icons/fa6";

function Sidebar() {
  const otros = [
    {
      id: 1,
      icono: (
        <FaMapMarkedAlt className="text-2xl text-white dark:text-secondaryDark" />
      ),
      texto: "Destinos",
      to: "/destinos",
    },
    {
      id: 2,
      icono: (
        <SiMentorcruise className="text-2xl text-white dark:text-secondaryDark" />
      ),
      texto: "Cruceros",
      to: "/cruceros",
    },
    {
      id: 3,
      icono: (
        <IoAirplane className="text-2xl text-white dark:text-secondaryDark" />
      ),
      texto: "Vuelo+Hotel",
      to: "/vueloHotel",
    },
    {
      id: 4,
      icono: (
        <FaCarOn className="text-2xl text-white dark:text-secondaryDark" />
      ),
      texto: "Coches",
      to: "/coches",
    },
    {
      id: 5,
      icono: (
        <IoTicket className="text-2xl text-white dark:text-secondaryDark" />
      ),
      texto: "Tickets",
      to: "/tickets",
    },
    {
      id: 6,
      icono: (
        <FaTicketAlt className="text-2xl text-white dark:text-secondaryDark" />
      ),
      texto: "Entradas",
      to: "/entradas",
    },
    {
      id: 7,
      icono: (
        <FaFerry className="text-2xl text-white dark:text-secondaryDark" />
      ),
      texto: "Ferris",
      to: "/ferris",
    },
  ];

  return (
    <div className="bg-white dark:text-slate-300 py-3 dark:bg-slate-800 hidden lg:flex col-span-7 lg:col-span-3 xl:col-span-2 xl:flex flex-row flex-wrap md:flex-col justify-around border-2 border-slate-100 dark:border-slate-600 px-5 rounded-xl shadow-lg mb-2">
      <div className="flex gap-3 items-center ">
        <div className="border-2 bg-primary p-3 rounded-full dark:bg-slate-700 dark:border-slate-600">
          <FaHotel className="text-2xl text-white dark:text-secondaryDark " />
        </div>
        <Link to="/hoteles">
          <span className="font-semibold">Hoteles</span>
        </Link>
      </div>
      {otros.map((otro, index) => (
        <div className="flex gap-3 items-center mt-3" key={index}>
          <div className="border-2 bg-primary dark:bg-slate-700 dark:border-slate-600 p-3 rounded-full">
            {otro.icono}
          </div>
          <Link to={otro.to}>
            <span className="font-semibold">{otro.texto}</span>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
