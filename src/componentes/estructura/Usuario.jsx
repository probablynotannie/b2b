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
        <div className="tw-w-64 tw-p-3 tw-bg-white dark:tw-bg-slate-800 tw-border-2 tw-rounded-lg tw-border-slate-400  dark:tw-border-slate-600">
          <div className="tw-pb-2 tw-mb-2 tw-flex tw-items-center tw-justify-between">
            <span className="tw-font-bold text-primary dark:tw-text-slate-100">
              vpk desarrollo
            </span>
            <img
              className="tw-h-10 tw-w-16 tw-rounded-full"
              src="../../dit.png"
              alt="Jese Leos"
            />
          </div>
          <div>
            <div className="tw-text-sm">
              <ul className="tw-space-y-3 tw-text-sm tw-border-y-2 dark:tw-border-slate-700 tw-border-slate-100 tw-py-2">
                <li className="tw-flex tw-items-center tw-gap-1 tw-text-slate-600 dark:tw-text-slate-200">
                  <span className="tw-text-secondary">
                    <FaStar />
                  </span>
                  <span>DIT España Freelance</span>
                </li>
                <li className="tw-flex tw-items-center tw-gap-1 tw-text-slate-600 dark:tw-text-slate-200">
                  <span className="tw-text-secondary">
                    <FaUser />
                  </span>
                  <span>Test LIO</span>
                </li>
                <li className="tw-flex tw-items-center tw-gap-1 tw-text-slate-600 dark:tw-text-slate-200">
                  <span className="tw-text-secondary">
                    <MdEmail />
                  </span>
                  <span>Reservas: soporte@ditgestion.com</span>
                </li>
                <li className="tw-flex tw-items-center tw-gap-1 tw-text-slate-600 dark:tw-text-slate-200">
                  <span className="tw-text-secondary">
                    <MdEmail />
                  </span>
                  <span>Admin: holavpk@gmail.com</span>
                </li>
                <li className="tw-flex tw-items-center tw-gap-1 tw-text-slate-600 dark:tw-text-slate-200">
                  <span className="tw-text-secondary">
                    <IoSettings />
                  </span>
                  <span>Modificar margenes</span>
                </li>
              </ul>
              <div className="tw-mt-4 tw-flex tw-justify-end ">
                <button className="tw-text-slate-400 dark:tw-text-slate-300 dark:hover:tw-text-slate-200 hover:tw-text-slate-700 tw-transition tw-p-2">
                  Cerrar sesión
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    >
      <div className="tw-text-white tw-w-fit tw-cursor-pointer hover:tw-text-secondary tw-transition tw-flex tw-justify-center tw-items-center">
        <FaUserCog className="tw-text-3xl" />
      </div>
    </Popover>
  );
}

export default Usuario;
