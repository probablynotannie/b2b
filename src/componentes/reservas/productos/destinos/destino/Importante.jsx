import { useState } from "react";

function Importante({ destino }) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      {destino.notas.length > 1 && (
        <div>
          <h3
            onClick={() => setOpenModal(true)}
            className="tw-font-semibold tw-text-center tw-text-lg tw-mt-3 tw-pl-3 tw-bg-orange-100 dark:tw-bg-orange-800 dark:tw-text-white tw-rounded-lg tw-p-2 tw-mb-2 cursor-pointer hover:tw-bg-orange-200 dark:hover:tw-bg-orange-700 transition-all duration-300 ease-in-out"
          >
            Notas importantes
          </h3>
          {openModal && (
            <div className="tw-fixed tw-inset-0 tw-z-50 tw-bg-black tw-bg-opacity-50 tw-flex tw-justify-center tw-items-center">
              <div className="tw-bg-white tw-rounded-lg tw-w-full tw-max-w-lg dark:tw-bg-slate-800 tw-shadow-lg tw-overflow-hidden">
                <h3 className="tw-text-2xl tw-font-semibold tw-p-6 tw-mb-4 tw-text-slate-800 dark:tw-text-slate-100">
                  Notas importantes
                </h3>
                <div className="tw-p-6 tw-bg-slate-50 dark:tw-bg-slate-700 tw-border-y-2 tw-border-slate-200 tw-shadow-inner rounded-lg">
                  {destino.notas.map((info) => (
                    <div key={info.id} className="tw-mb-6">
                      <h4 className="tw-font-semibold tw-text-xl tw-underline tw-text-slate-700 dark:tw-text-slate-100">
                        {info.title}
                      </h4>
                      {info.datos.map((dato, index) => (
                        <p
                          className="tw-text-sm tw-text-slate-600 dark:tw-text-slate-400 tw-mb-2"
                          key={index}
                        >
                          {dato}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="tw-flex tw-justify-end tw-mt-6 tw-px-6 tw-pb-6">
                  <button
                    className="tw-bg-primary tw-p-3 tw-font-semibold tw-text-white tw-rounded-lg tw-px-10 hover:tw-bg-primary-dark transition-all duration-300 ease-in-out"
                    onClick={() => setOpenModal(false)}
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Importante;
