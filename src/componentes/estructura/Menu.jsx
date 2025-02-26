import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiChevronDown } from "react-icons/hi";

const DropdownMenu = () => {
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
        { id: 1, texto: "Hoteles", to: "/hoteles" },
        { id: 2, texto: "Destinos", to: "/destinos" },
        { id: 3, texto: "Cruceros", to: "/cruceros" },
        { id: 4, texto: "Transfers", to: "/transfers" },
        { id: 5, texto: "Vuelo + hotel", to: "/vueloHotel" },
      ],
    },
    {
      key: "reservas",
      texto: "Reservas",
      subItems: [
        { id: 6, texto: "Hoteles", to: "/reservas/hoteles" },
        { id: 7, texto: "Vuelo + hotel", to: "/reservas/vueloHotel" },
        { id: 8, texto: "Coches", to: "/reservas/coches" },
      ],
    },
    {
      key: "utilidades",
      texto: "Utilidades",
      subItems: [
        { id: 9, texto: "Clientes", to: "/clientes" },
        { id: 10, texto: "Presupuestos", to: "/presupuestos" },
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
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="tw-bg-primary tw-py-4 tw-shadow-md">
      <div className="tw-container tw-mx-auto tw-flex tw-justify-around tw-items-center">
        {menu.map((category) => (
          <div
            key={category.key}
            className="tw-relative"
            ref={(el) => (dropdownRefs.current[category.key] = el)}
          >
            <button
              onClick={() => toggleDropdown(category.key)}
              className="tw-text-white tw-font-semibold tw-py-2 tw-px-4 tw-rounded-md tw-bg-secondary hover:tw-bg-opacity-80 tw-transition-all tw-flex tw-items-center tw-gap-2"
            >
              {category.texto}
              <HiChevronDown className="tw-text-lg" />
            </button>

            {openDropdown === category.key && (
              <div className="tw-absolute tw-mt-2 tw-bg-white tw-rounded-lg tw-shadow-lg tw-border tw-border-gray-200 tw-w-56 tw-animate-fadeIn">
                <ul className="tw-py-2 tw-text-sm tw-text-gray-800">
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
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default DropdownMenu;
