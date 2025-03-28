import { FaHotel } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { SiMentorcruise } from "react-icons/si";
import { IoAirplane } from "react-icons/io5";
import { FaCarOn } from "react-icons/fa6";
import { IoTicket } from "react-icons/io5";
import { FaTicketAlt } from "react-icons/fa";
import { FaTrain } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Sidebar() {
  const otros = [
    {
      id: 1,
      icono: <FaMapMarkedAlt className="tw-text-2xl tw-text-white" />,
      texto: "Destinos",
      to: "/destinos",
    },
    {
      id: 2,
      icono: <SiMentorcruise className="tw-text-2xl tw-text-white" />,
      texto: "Cruceros",
      to: "/cruceros",
    },
    {
      id: 3,
      icono: <IoAirplane className="tw-text-2xl tw-text-white" />,
      texto: "Vuelo+Hotel",
      to: "/vueloHotel",
    },
    {
      id: 4,
      icono: <FaCarOn className="tw-text-2xl tw-text-white" />,
      texto: "Coches",
      to: "/coches",
    },
    {
      id: 5,
      icono: <IoTicket className="tw-text-2xl tw-text-white" />,
      texto: "Tickets",
      to: "/tickets",
    },
    {
      id: 6,
      icono: <FaTicketAlt className="tw-text-2xl tw-text-white" />,
      texto: "Entradas",
      to: "/entradas",
    },
    {
      id: 7,
      icono: <FaTrain className="tw-text-2xl tw-text-white" />,
      texto: "Ferris",
      to: "/ferris",
    },
  ];

  return (
    <div className="tw-hidden lg:tw-flex tw-col-span-7 lg:tw-col-span-2 xl:tw-col-span-1 xl:tw-flex tw-flex-row tw-flex-wrap md:tw-flex-col tw-justify-around tw-border-2 tw-border-slate-100 tw-px-5 tw-rounded-xl tw-shadow-lg tw-mb-2">
      <div className="tw-flex tw-gap-3 tw-items-center ">
        <div className="tw-border-2 tw-bg-slate-800 tw-p-3 tw-rounded-full">
          <FaHotel className="tw-text-2xl tw-text-white" />
        </div>
        <Link to="/">
          <span className="tw-font-semibold">Hoteles</span>
        </Link>
      </div>
      {otros.map((otro, index) => (
        <div className="tw-flex tw-gap-3 tw-items-center" key={index}>
          <div className="tw-border-2 tw-bg-slate-800 tw-p-3 tw-rounded-full">
            {otro.icono}
          </div>
          <Link to={otro.to}>
            <span className="tw-font-semibold">{otro.texto}</span>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
