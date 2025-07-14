import { Link } from "react-router-dom";
import Usuario from "./Usuario";
import Menu from "./Menu";
import Notificaciones from "./Notificaciones";
import DarkMode from "../DarkMode";
import ScrollToTop from "react-scroll-to-top";
import Scroll from "../ScrollToTop";
import { HiChevronDoubleUp } from "react-icons/hi";
import Cesta from "../cesta/CestaPopOver";

const Navbar = () => {
  return (
    <header className=" tw-bg-header tw-shadow-md tw-w-full lg:tw-px-20">
      <Scroll />
      <div className="tw-flex">
        <ScrollToTop
          component={
            <div className="tw-p-2 tw-text-white tw-bg-secondary tw-rounded-full tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center">
              <HiChevronDoubleUp className="tw-animate-pulse tw-text-xl" />
            </div>
          }
          smooth
        />
      </div>
      <div className="tw-mx-auto tw-flex-col-reverse md:tw-flex-row md:tw-px-4 tw-py-4 tw-flex md:tw-justify-between tw-flex-wrap tw-px-5 tw-justify-center">
        <div className="tw-flex md:tw-space-x-3 tw-items-center tw-mt-3 md:tw-mt-0">
          <Link className="tw-hidden md:tw-block" to="/">
            <img src="/logo.png" className="tw-w-full" alt="Logo" />
          </Link>
          <Menu />
        </div>
        <div className="tw-flex tw-gap-2 md:tw-gap-4 tw-w-full md:tw-w-fit tw-justify-around">
          <DarkMode />
          <Cesta />
          <Notificaciones />
          <Usuario />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
