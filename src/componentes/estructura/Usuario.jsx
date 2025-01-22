import { Popover } from "flowbite-react";
import { FaUserCog } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

function Usuario() {
  return (
    <Popover
      aria-labelledby="profile-popover"
      content={
        <div className="w-64 p-3">
          <div className="border-b-2 border-slate-100 pb-2 mb-2 flex items-center justify-between">
            <span className="font-bold text-primary dark:text-slate-100">
              vpk desarrollo
            </span>
            <img
              className="h-10 w-16 rounded-full"
              src="../../dit.png"
              alt="Jese Leos"
            />
          </div>
          <div>
            <div className="text-sm">
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-1 text-slate-600 dark:text-slate-200">
                  <span className="text-secondary">
                    <FaStar />
                  </span>
                  <span>DIT España Freelance</span>
                </li>
                <li className="flex items-center gap-1 text-slate-600 dark:text-slate-200 ">
                  <span className="text-secondary">
                    <FaUser />
                  </span>
                  <span>Test LIO</span>
                </li>
                <li className="flex items-center gap-1 text-slate-600 dark:text-slate-200">
                  <span className="text-secondary">
                    <MdEmail />
                  </span>
                  <span>Reservas: soporte@ditgestion.com</span>
                </li>
                <li className="flex items-center gap-1 text-slate-600 dark:text-slate-200">
                  <span className="text-secondary">
                    <MdEmail />
                  </span>
                  <span>Admin: holavpk@gmail.com</span>
                </li>
                <li className="flex items-center gap-1 text-slate-600 dark:text-slate-200">
                  <span className="text-secondary">
                    <IoSettings />
                  </span>
                  <span>Modificar margenes</span>
                </li>
              </ul>
              <div className="mt-4 flex justify-end border-t-2 border-slate-100 pt-3">
                <button className="text-slate-400 dark:text-slate-300 dark:hover:text-slate-200 hover:text-slate-700 transition p-2">
                  Cerrar sesión
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    >
      <div className="text-white  w-fit cursor-pointer hover:text-secondary transition flex justify-center items-center">
        <FaUserCog className="text-3xl" />
      </div>
    </Popover>
  );
}

export default Usuario;
