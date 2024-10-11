import { Link } from "react-router-dom";
import { Dropdown } from "flowbite-react";
import { FaUserCog } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Menu with categories and sub-items
  const menu = [
    {
      texto: "Motores",
      subItems: [
        { id: 0, texto: "Hoteles", to: "/" },
        { id: 1, texto: "Hoteles 2", to: "/hoteles" },
        { id: 2, texto: "Hoteles 3", to: "/hoteles2" },
        { id: 3, texto: "Hoteles 4", to: "/hoteles3" },
        { id: 4, texto: "Coches", to: "/" },
        { id: 5, texto: "Entradas", to: "/" },
        { id: 6, texto: "Tickets", to: "/" },
        { id: 7, texto: "Cruceros", to: "/" },
        { id: 8, texto: "Ferris", to: "/" },
      ],
    },
    {
      texto: "Reservas",
      subItems: [
        { id: 0, texto: "Hoteles", to: "/" },
        { id: 2, texto: "Vuelo + hotel", to: "/" },
        { id: 3, texto: "Destinos", to: "/" },
        { id: 4, texto: "Coches", to: "/" },
        { id: 5, texto: "Trenes", to: "/" },
        { id: 6, texto: "Tickets", to: "/" },
        { id: 7, texto: "Seguros", to: "/" },
        { id: 8, texto: "Ferris", to: "/" },
      ],
    },
    {
      texto: "Utilidades",
      subItems: [
        { id: 0, texto: "Clientes", to: "/" },
        { id: 1, texto: "Presupuestos", to: "/" },
        { id: 2, texto: "Envio presupuesto", to: "/" },
      ],
    },
  ];

  return (
    <nav className="bg-primary shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex space-x-3 items-center">
          <Link to="/">
            <img src="./logo.png" className="w-full" alt="Logo" />
          </Link>
          <div className="flex space-x-3">
            {menu.map((item, index) => (
              <Dropdown
                key={index}
                inline
                label={
                  <span className="text-white font-semibold">{item.texto}</span>
                }
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 p-4 gap-4">
                  {item.subItems.map((motor) => (
                    <Dropdown.Item key={motor.id}>
                      <Link to={motor.to} onClick={toggleMenu}>
                        {motor.texto}
                      </Link>
                    </Dropdown.Item>
                  ))}
                </div>
              </Dropdown>
            ))}
          </div>
        </div>

        {/* User Icon & Menu */}
        <div>
          <Dropdown
            label={
              <span className="text-4xl text-white">
                <FaUserCog />
              </span>
            }
            inline
            className="relative"
          >
            {/* Dropdown Header */}
            <Dropdown.Header className="flex flex-col items-start">
              <div className="flex items-center w-full">
                <img
                  src="./dit.png" // Placeholder for your logo
                  alt="Logo"
                  className="w-16 h-10"
                />
                <span className="ml-3 font-bold">vpk desarrollo</span>
              </div>
              <div className="border-t-2 border-slate-100 w-full  my-3">
                <span className="block  font-bold mt-2">
                  Dit España Freelance
                </span>
                <span className="flex flex-col mt-2">
                  <MdMarkEmailRead />
                  Reservas: soporte@ditgestion.com
                </span>
                <span className="block mt-2">Dit España Freelance</span>
                <span className="block mt-2">Dit España Freelance</span>
                <span className="block mt-2">Dit España Freelance</span>
              </div>
            </Dropdown.Header>
            {/* Dropdown Items */}
            <Dropdown.Item>
              <span className="text-sm">Cerrar sesión</span>
            </Dropdown.Item>
            {/* Optional divider */}
            <Dropdown.Divider />
          </Dropdown>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
