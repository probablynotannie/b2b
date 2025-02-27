import { useState, useRef, useEffect } from "react";
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
        { id: 0, texto: "Hoteles", to: "/hoteles" },
        { id: 1, texto: "Destinos", to: "/destinos" },
        { id: 2, texto: "Cruceros", to: "/cruceros" },
        { id: 3, texto: "Transfers", to: "/transfers" },
        { id: 4, texto: "Vuelo + hotel", to: "/vueloHotel" },
        { id: 5, texto: "Coches", to: "/coches" },
        { id: 6, texto: "Tickets", to: "/tickets" },
        { id: 7, texto: "Entradas", to: "/entradas" },
        { id: 8, texto: "Ferris", to: "/ferris" },
        { id: 9, texto: "Trenes", to: "/trenes" },
        { id: 10, texto: "Seguros", to: "/seguros" },
      ],
    },
    {
      key: "reservas",
      texto: "Reservas",
      subItems: [
        { id: 11, texto: "Hoteles", to: "/" },
        { id: 12, texto: "Vuelo + hotel", to: "/" },
        { id: 13, texto: "Coches", to: "/" },
        { id: 14, texto: "Trenes", to: "/" },
        { id: 15, texto: "Tickets", to: "/" },
      ],
    },
    {
      key: "utilidades",
      texto: "Utilidades",
      subItems: [
        { id: 16, texto: "Clientes", to: "/clientes" },
        { id: 17, texto: "Presupuestos", to: "/presupuestos" },
        { id: 18, texto: "Envio presupuesto", to: "/envioPresupuestos" },
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
                className={`tw-absolute tw-z-20 tw-mt-2 tw-bg-white tw-rounded-lg tw-shadow-lg tw-border tw-border-gray-200 ${
                  category.key === "utilidades" ? "tw-w-48" : "tw-w-64"
                }`}
              >
                {category.subItems.map((subItem) => (
                  <li key={subItem.id}>
                    <Link
                      to={subItem.to}
                      className="tw-block tw-px-4 tw-py-2 hover:tw-bg-gray-100 tw-transition-all"
                      onClick={handleItemClick}
                    >
                      {subItem.texto}
                    </Link>
                  </li>
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
