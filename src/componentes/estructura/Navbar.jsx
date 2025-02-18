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
    <header className="tw-sticky tw-top-0 tw-z-50 tw-bg-primary tw-shadow-md tw-w-full lg:tw-px-20">
      <Scroll />
      <div className="tw-hidden md:tw-flex">
        <ScrollToTop
          component={
            <div className="tw-p-2 tw-text-white bg-secondary tw-rounded-full tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center">
              <HiChevronDoubleUp className="tw-animate-pulse tw-text-xl" />
            </div>
          }
          smooth
        />
      </div>
      <nav className="tw-mx-auto md:tw-px-4 tw-py-4 tw-flex tw-justify-between tw-items-center">
        <div className="tw-flex md:tw-space-x-3 tw-items-center">
          <Link className="tw-hidden md:tw-block" to="/">
            <img src="./logo.png" className="tw-w-full" alt="Logo" />
          </Link>
          <Menu />
        </div>
        <div className="tw-flex tw-gap-2 md:tw-gap-4">
          <DarkMode />
          <Notificaciones />
          <Usuario />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
