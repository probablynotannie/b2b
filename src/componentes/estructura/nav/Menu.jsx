import { useState, useRef, useEffect } from "react";
import {
  FaGlobe,
  FaHotel,
  FaPlane,
  FaShip,
  FaTaxi,
  FaTrain,
  FaTicketAlt,
  FaCar,
  FaBriefcaseMedical,
  FaUser,
  FaEuroSign,
  FaVoicemail,
} from "react-icons/fa";
import { MdModeOfTravel } from "react-icons/md";

import { FaFerry, FaKitMedical, FaTicket } from "react-icons/fa6";
import { IoTicket } from "react-icons/io5";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRefs = useRef({});

  const toggleDropdown = (category) => {
    setOpenDropdown((prev) => (prev === category ? null : category));
  };

  const handleItemClick = () => {
    setOpenDropdown(null);
  };

  const menu = [
    {
      key: "motores",
      texto: "Motores",
      subItems: [
        { id: 0, texto: "Hoteles", to: "/hoteles", icon: [FaHotel] },
        { id: 1, texto: "Destinos", to: "/destinos", icon: [FaGlobe] },
        { id: 2, texto: "Cruceros", to: "/cruceros", icon: [FaShip] },
        { id: 3, texto: "Transfers", to: "/transfers", icon: [FaTaxi] },
        {
          id: 4,
          texto: "Hotel + Vuelo",
          to: "/vueloHotel",
          icon: [FaHotel, FaPlane],
        },
        {
          id: 5,
          texto: "Hotel + Actividades",
          to: "/hotelmasactividades",
          icon: [FaHotel, FaTicketAlt],
        },
        {
          id: 56,
          texto: "Hotel + Ferris",
          to: "/hotelmasferris",
          icon: [FaHotel, FaFerry],
        },
        { id: 7, texto: "Coches", to: "/coches", icon: [FaCar] },
        { id: 8, texto: "Tickets", to: "/tickets", icon: [FaTicketAlt] },
        { id: 9, texto: "Entradas", to: "/entradas", icon: [IoTicket] },
        { id: 10, texto: "Ferris", to: "/ferris", icon: [FaFerry] },
        { id: 11, texto: "Trenes", to: "/trenes", icon: [FaTrain] },
        {
          id: 12,
          texto: "Seguros",
          to: "/seguros",
          icon: [FaBriefcaseMedical],
        },
        {
          id: 13,
          texto: "Vuelos",
          to: "/vuelos",
          icon: [FaPlane],
        },
        {
          id: 14,
          texto: "Circuitos",
          to: "/circuitos",
          icon: [MdModeOfTravel],
        },
      ],
    },
    {
      key: "reservas",
      texto: "Reservas",
      subItems: [
        { id: 15, texto: "Coches", to: "/coches/reservas", icon: [FaCar] },
        {
          id: 16,
          texto: "Destinos",
          to: "/destinos/reservas",
          icon: [FaTicket],
        },
        { id: 17, texto: "Ferris", to: "/ferris/reservas", icon: [FaTicket] },

        { id: 18, texto: "Hoteles", to: "/hoteles/reservas", icon: [FaHotel] },
        {
          id: 19,
          texto: "Seguros",
          to: "/seguros/reservas",
          icon: [FaKitMedical],
        },
        { id: 20, texto: "Tickets", to: "/tickets/reservas", icon: [FaTicket] },
        { id: 21, texto: "Trenes", to: "/trenes/reservas", icon: [FaTrain] },

        {
          id: 22,
          texto: "Hotel + Vuelo",
          to: "/vuelomashotel/reservas",
          icon: [FaHotel, FaPlane],
        },
      ],
    },
    {
      key: "utilidades",
      texto: "Utilidades",
      subItems: [
        { id: 23, texto: "Clientes", to: "/clientes", icon: [FaUser] },
        {
          id: 24,
          texto: "Presupuestos",
          to: "/presupuestos",
          icon: [FaEuroSign],
        },
        {
          id: 25,
          texto: "Envio presupuesto",
          to: "/envioPresupuestos",
          icon: [FaVoicemail],
        },
      ],
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !Object.values(dropdownRefs.current).some(
          (ref) => ref && ref.contains(event.target)
        )
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (openDropdown) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [openDropdown]);

  return (
    <nav>
      <ul className="tw-flex tw-gap-6 tw-items-center tw-flex-wrap">
        {menu.map((category) => (
          <li
            key={category.key}
            className="tw-relative"
            ref={(el) => (dropdownRefs.current[category.key] = el)}
          >
            <button
              onClick={() => toggleDropdown(category.key)}
              className="tw-text-white tw-font-medium tw-text-sm tw-px-4 tw-py-2 tw-rounded-lg tw-cursor-pointer hover:tw-bg-opacity-80 tw-transition-all"
              aria-haspopup="true"
              aria-expanded={openDropdown === category.key ? "true" : "false"}
            >
              {category.texto}
            </button>
            {openDropdown === category.key && (
              <ul
                className={`tw-absolute tw-z-50 tw-top-full tw-mt-2 tw-border-2 tw-bg-white dark:tw-bg-slate-800 dark:tw-border-slate-500 
            tw-rounded-lg tw-shadow-lg tw-border-slate-200 tw-min-w-[70vw] tw-max-w-[90vw] tw-max-h-[80vh] tw-overflow-auto 
            tw-grid sm:tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 
            ${
              dropdownRefs.current[category.key]?.getBoundingClientRect()
                .right >
              window.innerWidth - 200
                ? "tw-right-0"
                : "tw-left-0"
            }`}
              >
                {category.subItems.map((subItem) => (
                  <Link
                    key={subItem.id}
                    to={subItem.to}
                    onClick={handleItemClick}
                  >
                    <li className="tw-flex tw-items-center tw-px-5 tw-p-3 dark:tw-text-slate-400 tw-group">
                      <div className="tw-relative">
                        {subItem.icon.map((Icon, index) => (
                          <Icon
                            key={index}
                            className={`tw-duration-300 tw-transition ${
                              index === 1
                                ? "tw--ml-1 tw-text-xl tw-bg-blue-400 absolute tw-p-1 tw--right-3 tw--bottom-2 tw-rounded-full tw-text-white"
                                : "tw-text-xl dark:tw-text-white group-hover:tw-text-secondary"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="tw-block tw-px-4 tw-py-2 tw-transition-all">
                        {subItem.texto}
                      </span>
                    </li>
                  </Link>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Dropdown;
