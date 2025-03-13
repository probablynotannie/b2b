import { useState } from "react";
import { Popover } from "flowbite-react";
import { FaUserCog, FaStar, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoSettings } from "react-icons/io5";

function Usuario() {
  const [user] = useState({
    name: "VPK Desarrollo",
    image: "../../dit.png",
    role: "DIT España Freelance",
    testAccount: "Test LIO",
    emails: {
      reservas: "soporte@ditgestion.com",
      admin: "holavpk@gmail.com",
    },
  });

  return (
    <Popover
      aria-labelledby="profile-popover"
      content={
        <div className="tw-w-72 tw-p-4 tw-bg-white dark:tw-bg-slate-800 tw-border tw-border-slate-300 dark:tw-border-slate-700 tw-rounded-lg tw-shadow-lg">
          {/* Header */}
          <div className="tw-flex tw-items-center tw-gap-3 tw-mb-3">
            <img
              className="tw-w-12 tw-h-12 tw-rounded-full tw-object-contain tw-border tw-border-slate-300 dark:tw-border-slate-600"
              src={user.image}
              alt={user.name}
              onError={(e) => (e.target.src = "https://via.placeholder.com/48")}
            />
            <div>
              <h3 className="tw-text-base tw-font-semibold tw-text-slate-900 dark:tw-text-white">
                {user.name}
              </h3>
              <p className="tw-text-sm tw-text-slate-500 dark:tw-text-slate-300">
                {user.role}
              </p>
            </div>
          </div>
          <ul className="tw-space-y-3 tw-border-y tw-border-slate-200 dark:tw-border-slate-700 tw-py-3">
            <li className="tw-flex tw-items-center tw-gap-2 tw-text-slate-700 dark:tw-text-slate-300">
              <FaStar className="tw-text-primary" />
              <span>{user.role}</span>
            </li>
            <li className="tw-flex tw-items-center tw-gap-2 tw-text-slate-700 dark:tw-text-slate-300">
              <FaUser className="tw-text-primary" />
              <span>{user.testAccount}</span>
            </li>
            <li className="tw-flex tw-items-center tw-gap-2 tw-text-slate-700 dark:tw-text-slate-300">
              <MdEmail className="tw-text-primary" />
              <span>Reservas: {user.emails.reservas}</span>
            </li>
            <li className="tw-flex tw-items-center tw-gap-2 tw-text-slate-700 dark:tw-text-slate-300">
              <MdEmail className="tw-text-primary" />
              <span>Admin: {user.emails.admin}</span>
            </li>
            <li className="tw-flex tw-items-center tw-gap-2 tw-text-slate-700 dark:tw-text-slate-300">
              <IoSettings className="tw-text-primary" />
              <span>Modificar márgenes</span>
            </li>
          </ul>
          <div className="tw-mt-4 tw-flex tw-justify-end">
            <button className="tw-text-sm tw-text-red-500 hover:tw-text-red-600 tw-transition">
              Cerrar sesión
            </button>
          </div>
        </div>
      }
    >
      <div className="tw-text-white tw-relative hover:tw-text-secondary tw-transition tw-cursor-pointer dark:tw-bg-slate-700 tw-bg-slate-700 tw-flex tw-items-center tw-justify-center tw-w-[35px] tw-h-[35px] tw-rounded-full tw-text-2xl">
        <FaUserCog />
      </div>
    </Popover>
  );
}

export default Usuario;
