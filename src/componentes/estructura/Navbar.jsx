import { Link } from "react-router-dom";
import { Dropdown } from "flowbite-react";
import { Popover } from "flowbite-react";
import Usuario from "./Usuario";
import Notificaciones from "./Notificaciones";
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
              <div key={index}>
                <Popover
                  aria-labelledby="profile-popover"
                  content={
                    <div className="w-96">
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 p-4 gap-4">
                        {item.subItems.map((motor) => (
                          <div key={motor.id}>
                            <Link to={motor.to} onClick={toggleMenu}>
                              {motor.texto}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  }
                >
                  <div className="text-slate-400 w-fit cursor-pointer hover:text-secondary transition flex items-center text-sm">
                    {item.texto}
                  </div>
                </Popover>
              </div>

              /*   <Dropdown
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
              </Dropdown> */
            ))}
          </div>
        </div>
        {/* Notificaciones y configuración de usuario, parte derecja de NavBar */}
        <div className="flex gap-4">
          <Notificaciones />
          <Usuario />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
