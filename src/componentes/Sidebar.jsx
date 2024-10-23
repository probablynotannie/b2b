import { useState } from "react";
import { FaHotel } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { SiMentorcruise } from "react-icons/si";
import { IoAirplane } from "react-icons/io5";
import { FaCarOn } from "react-icons/fa6";
import { IoTicket } from "react-icons/io5";
import { FaTicketAlt } from "react-icons/fa";
import { FaTrain } from "react-icons/fa6";
import { Link } from "react-router-dom";
/* Componentes */
import Coches from "./motores/Coches";
import Cruceros from "./motores/Cruceros";
import Destinos from "./motores/Destinos";
import Entradas from "./motores/Entradas";
import Ferris from "./motores/Ferris";
import Hoteles from "./motores/Hoteles";
import Tickets from "./motores/Tickets";
import Vuelomashotel from "./motores/Vuelomashotel";

function Sidebar() {
  const [activeComponent, setActiveComponent] = useState(0); // Default to first component

  const otros = [
    {
      id: 1,
      icono: <FaMapMarkedAlt className="text-2xl text-white" />,
      texto: "Destinos",
      to: "/destinos",
    },
    {
      id: 2,
      icono: <SiMentorcruise className="text-2xl text-white" />,
      texto: "Cruceros",
      to: "/cruceros",
    },
    {
      id: 3,
      icono: <IoAirplane className="text-2xl text-white" />,
      texto: "Vuelo+Hotel",
      to: "/vueloHotel",
    },
    {
      id: 4,
      icono: <FaCarOn className="text-2xl text-white" />,
      texto: "Coches",
      to: "/coches",
    },
    {
      id: 5,
      icono: <IoTicket className="text-2xl text-white" />,
      texto: "Tickets",
      to: "/tickets",
    },
    {
      id: 6,
      icono: <FaTicketAlt className="text-2xl text-white" />,
      texto: "Entradas",
      to: "/entradas",
    },
    {
      id: 7,
      icono: <FaTrain className="text-2xl text-white" />,
      texto: "Ferris",
      to: "/ferris",
    },
  ];

  const componentes = [
    {
      id: 0,
      placement: "bg-center",
      opacity: "bg-opacity-35",
      component: <Hoteles />,
      img: "../../banner_hoteles.jpg",
    },
    {
      id: 1,
      placement: "bg-center",
      opacity: "bg-opacity-35",
      component: <Destinos />,
      img: "../../banner_destinos.jfif",
    },
    {
      id: 2,
      placement: "bg-bottom",
      opacity: "bg-opacity-35",
      component: <Cruceros />,
      img: "../../banner_cruise.jfif",
    },
    {
      id: 3,
      placement: "bg-center",
      opacity: "bg-opacity-35",
      component: <Vuelomashotel />,
      img: "../../avion.jpg",
    },
    {
      id: 4,
      placement: "bg-center",
      opacity: "bg-opacity-45",
      component: <Coches />,
      img: "../../banner_cars.jpg",
    },
    {
      id: 5,
      placement: "bg-bottom",
      opacity: "bg-opacity-35",
      component: <Tickets />,
      img: "../../banner_cruise.jfif",
    },
    {
      id: 6,
      placement: "bg-bottom",
      opacity: "bg-opacity-45",
      component: <Entradas />,
      img: "../../banner_entradas.jpg",
    },
    {
      id: 7,
      placement: "bg-bottom",
      opacity: "bg-opacity-35",
      component: <Ferris />,
      img: "../../banner_trenes.jpeg",
    },
  ];

  return (
    <div className="grid grid-cols-7 gap-10  md:px-20 md:min-h-[78vh] min-h-[90vh] md:py-10">
      {/* Sidebar */}
      <div className="hidden lg:flex col-span-7 lg:col-span-2 xl:col-span-1 xl:flex flex-row flex-wrap md:flex-col justify-around border-2 border-slate-100 px-5 rounded-xl shadow-lg mb-2">
        <div className="flex gap-3 items-center ">
          <div className="border-2 bg-primary p-3 rounded-full">
            <FaHotel className="text-2xl text-white" />
          </div>
          <button onClick={() => setActiveComponent(0)}>
            <span className="font-semibold">Hoteles</span>
          </button>
        </div>
        {otros.map((otro, index) => (
          <div className="flex gap-3 items-center" key={index}>
            <div className="border-2 bg-primary p-3 rounded-full">
              {otro.icono}
            </div>
            <button onClick={() => setActiveComponent(otro.id)}>
              <span className="font-semibold">{otro.texto}</span>
            </button>
          </div>
        ))}
      </div>
      <div
        className={`relative flex items-center justify-center col-span-7 lg:col-span-5 xl:col-span-6 min-h-[68vh] bg-[url(${componentes[activeComponent].img})] bg-cover ${componentes[activeComponent].placement} md:rounded-lg shadow-lg`}
      >
        <div
          className={`bg-indigo-800 w-full h-full ${componentes[activeComponent].opacity} rounded-lg shadow-lg px-10`}
        ></div>
        <div className="absolute md:top-32 md:left-20 bg-CajaForms  bg-opacity-80 text-white  px-4 md:px-10 w-11/12 md:w-2/3 xl:w-1/3 h-fit py-5 pb-16 rounded-lg shadow-xl">
          {componentes[activeComponent].component}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
