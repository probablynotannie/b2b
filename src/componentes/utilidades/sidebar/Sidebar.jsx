import { FaHotel } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { SiMentorcruise } from "react-icons/si";
import { IoAirplane } from "react-icons/io5";

import { Link } from "react-router-dom";

function Sidebar() {
  const otros = [
    {
      id: 1,
      icono: <FaMapMarkedAlt className="text-2xl text-white" />,
      texto: "Clientes",
      to: "/clientes",
    },
    {
      id: 2,
      icono: <SiMentorcruise className="text-2xl text-white" />,
      texto: "Presupuestos",
      to: "/presupuestos",
    },
    {
      id: 3,
      icono: <IoAirplane className="text-2xl text-white" />,
      texto: "Envio presupuestos",
      to: "/envioPresupuestos",
    },
  ];

  return (
    <div className="hidden lg:flex col-span-7 lg:col-span-2 xl:col-span-1 xl:flex flex-row flex-wrap md:flex-col  mb-2">
      <div className="border-2 border-slate-100 px-5 rounded-xl shadow-lg pb-5">
      {otros.map((otro, index) => (
        <div className="flex gap-3 items-center mt-5 " key={index}>
          <div className="border-2 bg-primary p-3 rounded-full">
            {otro.icono}
          </div>
          <Link to={otro.to}>
            <span className="font-semibold">{otro.texto}</span>
          </Link>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Sidebar;
