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
        { id: 4, texto: "Destinos", to: "/destinos" },
        { id: 4, texto: "Cruceros", to: "/cruceros" },
        { id: 4, texto: "Vuelo + hotel", to: "/vueloHotel" },
        { id: 4, texto: "Coches", to: "/coches" },
        { id: 6, texto: "Tickets", to: "/tickets" },
        { id: 5, texto: "Entradas", to: "/entradas" },
        { id: 8, texto: "Ferris", to: "/ferris" },
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
        { id: 0, texto: "Clientes", to: "clientes" },
        { id: 1, texto: "Presupuestos", to: "presupuestos" },
        { id: 2, texto: "Envio presupuesto", to: "envioPresupuestos" },
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
          <div className="flex space-x-5">
            {menu.map((item, index) => (
              <div key={index}>
                <Popover
                  aria-labelledby="profile-popover"
                  content={
                    <div className="w-96">
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 py-3 px-1">
                        {item.subItems.map((motor) => (
                          <Link
                            key={motor.id}
                            className="p-3 hover:bg-slate-200 hover:shadow transition flex items-center justify-center text-center"
                            to={motor.to}
                            onClick={toggleMenu}
                          >
                            {motor.texto}
                          </Link>
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
