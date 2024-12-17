import { Link } from "react-router-dom";
import Usuario from "./Usuario";
import Menu from "./Menu";
import Notificaciones from "./Notificaciones";
import DarkMode from "./DarkMode";
import ScrollToTop from "react-scroll-to-top";
import Scroll from "./ScrollToTop";
import { HiChevronDoubleUp } from "react-icons/hi";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-primary shadow-md w-full lg:px-20 ">
      <Scroll />
      <div className="hidden md:flex">
        <ScrollToTop
          component={
            <div className="p-2 text-white bg-secondary rounded-full w-full h-full flex justify-center items-center">
              <HiChevronDoubleUp className=" animate-pulse text-xl" />
            </div>
          }
          smooth
        />
      </div>
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
