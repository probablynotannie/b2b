import { Link } from "react-router-dom";
import Usuario from "./Usuario";
import Menu from "./Menu";
import { useEffect, useState } from "react";
import Notificaciones from "./Notificaciones";
import Cesta from "./Cesta";
const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  // On initial render, check localStorage to apply user's preference
  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, []);

  // Toggle dark mode and save preference to localStorage
  const handleToggle = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("darkMode", !darkMode);
  };
  return (
    <header className=" bg-primary shadow-md w-full lg:px-20 ">
      <nav className=" mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex space-x-3 items-center">
          <Link className="hidden md:block" to="/">
            <img src="./logo.png" className="w-full" alt="Logo" />
          </Link>
          <Menu />
        </div>

        {/* Notificaciones y configuración de usuario, parte derecja de NavBar */}
        <div className="flex gap-4">
          <label className="inline-flex items-center cursor-pointer">
            <input
              checked={darkMode}
              onChange={handleToggle}
              type="checkbox"
              value=""
              className="sr-only peer"
            />
            <div className="relative w-11 h-6 bg-slate-600 peer-focus:outline-none peer-focus:ring-4  rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-secondary"></div>
          </label>
          <Notificaciones />
          <Cesta />
          <Usuario />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
