import { Link } from "react-router-dom";
import Usuario from "./Usuario";
import Menu from "./Menu";
import Notificaciones from "./Notificaciones";
import Cesta from "./Cesta";
const Navbar = () => {
  return (
    <nav className="bg-primary shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex space-x-3 items-center">
          <Link className="hidden md:block" to="/">
            <img src="./logo.png" className="w-full" alt="Logo" />
          </Link>

          <Menu />
        </div>
        {/* Notificaciones y configuración de usuario, parte derecja de NavBar */}
        <div className="flex gap-4">
          <Notificaciones />
          <Cesta />

          <Usuario />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
