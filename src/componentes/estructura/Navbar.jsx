import { Link } from "react-router-dom";
import Usuario from "./Usuario";
import Menu from "./Menu";
import Notificaciones from "./Notificaciones";
import DarkMode from "./DarkMode";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-primary shadow-md w-full lg:px-20 ">
      <nav className=" mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex space-x-3 items-center">
          <Link className="hidden md:block" to="/">
            <img src="./logo.png" className="w-full" alt="Logo" />
          </Link>
          <Menu />
        </div>
        <div className="flex gap-4">
          <DarkMode />
          <Notificaciones />
          <Usuario />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
