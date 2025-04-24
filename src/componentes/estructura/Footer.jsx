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
        <div className="tw-text-slate-600 dark:tw-text-slate-300">
          <span>© 2024 DitGestion</span>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
