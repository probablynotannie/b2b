import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function FooterComponent() {
  return (
    <footer className="tw-bg-slate-100 dark:tw-bg-slate-800 tw-px-10">
      <div className="tw-w-full tw-text-center tw-py-8 ">
        <div className="tw-w-full tw-justify-between sm:tw-flex sm:tw-items-center sm:tw-justify-between">
          <span className="tw-text-secondary dark:tw-text-secondaryDark tw-text-2xl tw-font-bold">
            Haiku
          </span>
          <div className="tw-flex tw-space-x-4">
            <a
              href="#"
              className="tw-text-slate-600 hover:tw-text-secondary dark:tw-text-slate-300 dark:hover:tw-text-secondary"
            >
              Contacto
            </a>
            <a
              href="#"
              className="tw-text-slate-600 hover:tw-text-secondary dark:tw-text-slate-300 dark:hover:tw-text-secondary"
            >
              Privacidad
            </a>
          </div>
        </div>
        <div className="tw-my-4 tw-border-t tw-border-slate-300 dark:tw-border-slate-600"></div>
        <div className="tw-text-slate-400 dark:tw-text-slate-300">
          <span>Copyright © 2025 HAIKU TRAVEL. All Rights Reserved</span>
        </div>
        <div className="tw-flex tw-justify-center tw-gap-2 tw-text-sm">
          <div className="tw-flex tw-items-center tw-justify-center tw-gap-1 tw-text-slate-800 dark:tw-text-slate-300">
            <MdEmail /> info@haikutravel.es
          </div>
          <div className="tw-flex tw-items-center tw-justify-center tw-gap-1 tw-text-slate-800 dark:tw-text-slate-300">
            <FaPhone /> 943000995
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
