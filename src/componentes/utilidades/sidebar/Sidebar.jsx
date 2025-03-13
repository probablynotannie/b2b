import { FaMapMarkedAlt } from "react-icons/fa";
import { SiMentorcruise } from "react-icons/si";
import { IoAirplane } from "react-icons/io5";

import { Link } from "react-router-dom";

function Sidebar() {
  const otros = [
    {
      id: 1,
      icono: <FaMapMarkedAlt className="tw-text-2xl tw-text-white" />,
      texto: "Clientes",
      to: "/clientes",
    },
    {
      id: 2,
      icono: <SiMentorcruise className="tw-text-2xl tw-text-white" />,
      texto: "Presupuestos",
      to: "/presupuestos",
    },
    {
      id: 3,
      icono: <IoAirplane className="tw-text-2xl tw-text-white" />,
      texto: "Envio presupuestos",
      to: "/envioPresupuestos",
    },
  ];

  return (
    <div className="tw-hidden lg:tw-flex tw-col-span-7 lg:tw-col-span-2 xl:tw-col-span-1 xl:tw-flex tw-flex-row tw-flex-wrap md:tw-flex-col tw-mb-2">
      <div className="tw-border-2 tw-border-slate-100 tw-px-5 tw-rounded-xl tw-shadow-lg tw-pb-5">
      {otros.map((otro, index) => (
        <div className="tw-flex tw-gap-3 tw-items-center tw-mt-5" key={index}>
          <div className="tw-border-2 tw-bg-primary tw-p-3 tw-rounded-full">
            {otro.icono}
          </div>
          <Link to={otro.to}>
            <span className="tw-font-semibold">{otro.texto}</span>
          </Link>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Sidebar;
