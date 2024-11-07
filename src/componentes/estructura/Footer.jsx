import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoIosBoat } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaClock } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full pt-4 pb-6 font-semibold shadow-inner bg-muted min-h-[8vh]">
      <div className="grid w-full px-6 gap-y-4 md:gap-y-0 md:grid-cols-3">
        <span className="text-xs text-center md:text-start md:text-sm text-slate-700">
          &copy; 2023/2024 Dit Gestion
        </span>

        {/* Center section with links */}
        <div className="flex flex-col items-center md:items-center md:flex-row md:justify-center">
          <ul className="flex gap-4 text-sm">
            <li className="text-primary cursor-pointer hover:underline">
              Aviso Legal
            </li>
            <span className="hidden md:flex text-3xl text-primary">
              <IoIosBoat />
            </span>
            <li className="text-primary cursor-pointer hover:underline">
              Contacto
            </li>
          </ul>
        </div>

        {/* Social media icons */}
        <div className="flex justify-center gap-2 md:justify-end">
          <li className="bg-blue-900 rounded-full text-white w-8 h-8 flex justify-center items-center hover:scale-110 transition">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F%3Flocale%3Des_ES"
            >
              <FaFacebookF />
            </a>
          </li>
          <li className="bg-black dark:bg-white rounded-full text-white w-8 h-8 flex justify-center items-center hover:scale-110 transition">
            <a target="_blank" rel="noreferrer" href="https://twitter.com">
              <BsTwitterX />
            </a>
          </li>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
