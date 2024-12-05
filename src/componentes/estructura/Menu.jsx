import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const [openDropdown, setOpenDropdown] = useState(null); // Track the currently open dropdown
  const dropdownRefs = useRef({});

  const toggleDropdown = (category) => {
    setOpenDropdown((prev) => (prev === category ? null : category)); // Toggle dropdown or close if it's already open
  };

  const handleItemClick = () => {
    setOpenDropdown(null); // Close the dropdown when a sub-item is clicked
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

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdownElement = Object.values(dropdownRefs.current).find(
        (ref) => ref && ref.contains(event.target)
      );
      if (!dropdownElement) {
        setOpenDropdown(null); // Close all dropdowns
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex md:space-x-4">
      {menu.map((category) => (
        <div
          key={category.key}
          className="relative inline-block"
          ref={(el) => (dropdownRefs.current[category.key] = el)}
        >
          <div
            onClick={() => toggleDropdown(category.key)}
            className="text-white cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 md:px-5 py-2.5 text-center inline-flex items-center "
            type="button"
          >
            {category.texto}
          </div>

          {openDropdown === category.key && ( // Only show the dropdown if it is the currently open one
            <div
              className={`absolute z-10 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow ${
                category.key === "utilidades" ? "w-40" : "w-40 md:w-96"
              }`}
            >
              <ul
                className={`py-2 text-sm text-gray-700  ${
                  category.key === "utilidades"
                    ? "grid md:grid-cols-1"
                    : " md:grid grid-cols-2"
                }`}
                aria-labelledby={`${category.key}DropdownButton`}
              >
                {category.subItems.map((subItem) => (
                  <li key={subItem.id}>
                    <Link
                      to={subItem.to}
                      className="block px-4 py-2 hover:bg-gray-100"
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
