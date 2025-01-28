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
        { id: 0, texto: "Hoteles", to: "/" },
        { id: 1, texto: "Destinos", to: "/destinos" },
        { id: 2, texto: "Cruceros", to: "/cruceros" },
        { id: 3, texto: "Vuelo + hotel", to: "/vueloHotel" },
        { id: 4, texto: "Coches", to: "/coches" },
        { id: 5, texto: "Tickets", to: "/tickets" },
        { id: 6, texto: "Entradas", to: "/entradas" },
        { id: 7, texto: "Ferris", to: "/ferris" },
        { id: 8, texto: "Trenes", to: "/trenes" },
        { id: 8, texto: "Seguros", to: "/seguros" },
        { id: 9, texto: "Hotel + actividades", to: "/hotelmasactividades" },
        { id: 10, texto: "Hotel + ferris", to: "/hotelmasferris" },
        { id: 11, texto: "Circuitos", to: "/circuitos" },
        { id: 12, texto: "Vuelos", to: "/vuelos" },
      ],
    },
    {
      key: "reservas",
      texto: "Reservas",
      subItems: [
        { id: 8, texto: "Hoteles", to: "/" },
        { id: 9, texto: "Vuelo + hotel", to: "/" },
        { id: 10, texto: "Destinos", to: "/" },
        { id: 11, texto: "Coches", to: "/" },
        { id: 12, texto: "Trenes", to: "/" },
        { id: 13, texto: "Tickets", to: "/" },
        { id: 14, texto: "Seguros", to: "/" },
        { id: 15, texto: "Ferris", to: "/" },
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
      const dropdownElement = Object.values(dropdownRefs.current).find(
        (ref) => ref && ref.contains(event.target)
      );
      if (!dropdownElement) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="tw-flex md:tw-space-x-4">
      
      {menu.map((category) => (
        <div
          key={category.key}
          className="tw-relative tw-inline-block"
          ref={(el) => (dropdownRefs.current[category.key] = el)}
        >
          <div
            onClick={() => toggleDropdown(category.key)}
            className="tw-text-white tw-cursor-pointer focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-blue-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-2 md:tw-px-5 tw-py-2.5 tw-text-center tw-inline-flex tw-items-center"
            type="button"
          >
            {category.texto}
          </div>

          {openDropdown === category.key && (
            <div
              className={`tw-absolute tw-z-10 tw-mt-2 tw-bg-white tw-divide-y tw-divide-gray-100 tw-rounded-lg tw-shadow ${
 category.key ==="utilidades" ? "w-40" : "w-40 md:w-96"
              }`}
            >
              <ul
                className={`tw-py-2 tw-text-sm tw-text-gray-700 ${
 category.key ==="utilidades"
                    ? "grid md:grid-cols-1"
                    : " md:grid grid-cols-2"
                }`}
                aria-labelledby={`${category.key}DropdownButton`}
              >
                {category.subItems.map((subItem) => (
                  <li key={subItem.id}>
                    <Link
                      to={subItem.to}
                      className="tw-block tw-px-4 tw-py-2 hover:tw-bg-gray-100"
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
  );
};

export default Dropdown;
