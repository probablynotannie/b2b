import { MdCancel } from "react-icons/md";
function Error() {
  return (
    <section className="tw-flex tw-h-[60vh] tw-items-center tw-justify-center tw-bg-red-50 dark:tw-bg-slate-900 tw-p-6 tw-mt-16">
      <div className="tw-text-center tw-max-w-md">
        <MdCancel className="tw-text-red-500 dark:tw-text-red-400 tw-text-[6rem] tw-mx-auto tw-animate-pulse" />
        <h1 className="tw-text-4xl sm:tw-text-5xl tw-font-bold tw-text-red-600 dark:tw-text-red-400 tw-mt-4">
          ¡Oops! Algo ha salido mal
        </h1>
        <p className="tw-mt-4 tw-text-base sm:tw-text-lg tw-text-slate-700 dark:tw-text-slate-300">
          Parece que has accedido a esta página sin los datos necesarios.
        </p>
        <p className="tw-text-sm tw-text-slate-500 dark:tw-text-slate-400 tw-mt-2">
          Por favor, vuelve al inicio.
        </p>

        <a
          href="/"
          className="tw-inline-block tw-mt-6 tw-bg-red-500 hover:tw-bg-red-600 tw-text-white tw-font-semibold tw-px-6 tw-py-2 tw-rounded-xl tw-shadow transition-all"
        >
          Volver al inicio
        </a>
      </div>
    </section>
  );
}

export default Error;
