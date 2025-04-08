import DetallesCoche from "./coche/Detalles";
import Error from "../Error";
import { useLocation } from "react-router-dom";
function Detalles() {
  const location = useLocation();
  const { coche = {} } = location.state || {};
  return (
    <>
      {Object.keys(coche).length > 0 ? (
        <main className="tw-grid lg:tw-grid-cols-3 tw-min-h-[55vh] tw-items-start tw-container tw-gap-y-10 tw-my-10 lg:tw-gap-12">
          <section
            className={` ${
              coche.estado === "cancelada"
                ? "tw-bg-red-50 dark:tw-bg-red-950/70"
                : coche.estado === "pendiente"
                ? "tw-bg-orange-50 dark:tw-bg-yellow-950/80"
                : "tw-bg-green-50 dark:tw-bg-green-950"
            } tw-space-y-3 tw-col-span-2 tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-100 dark:tw-border-slate-700 tw-p-5`}
          >
            <div className="tw-flex tw-justify-between tw-items-center">
              <h2 className="tw-font-bold dark:tw-text-white tw-text-xl">
                {coche.orden}
              </h2>
              <div className="tw-flex tw-flex-row tw-items-center tw-text-xs tw-gap-2">
                {coche.estado === "cancelada" ? (
                  <div className="tw-bg-red-500 tw-p-1 tw-rounded-lg tw-text-white tw-font-bold">
                    cancelada
                  </div>
                ) : coche.estado === "pendiente" ? (
                  <div className="tw-bg-orange-400 tw-p-1 tw-rounded-lg tw-text-white tw-font-bold">
                    pendiente
                  </div>
                ) : (
                  <div className="tw-bg-green-500 tw-p-1 tw-rounded-lg tw-text-white tw-font-bold">
                    completada
                  </div>
                )}
                <td className="tw-py-4 tw-px-1">
                  {coche.estadoPago === "Si" ? (
                    <div className="tw-bg-green-500 tw-p-1 tw-rounded-lg tw-text-white tw-font-bold">
                      pagado
                    </div>
                  ) : (
                    <div className="tw-bg-red-500 tw-p-1 tw-rounded-lg tw-text-white tw-font-bold">
                      sin pagar
                    </div>
                  )}
                </td>
              </div>
            </div>
            <DetallesCoche coche={coche} />
          </section>
          <article
            className={`
                 ${
                   coche.estado === "cancelada"
                     ? "tw-bg-red-50 dark:tw-bg-red-950/70"
                     : coche.estado === "pendiente"
                     ? "tw-bg-orange-50 dark:tw-bg-yellow-950/80"
                     : "tw-bg-green-50 dark:tw-bg-green-950"
                 }
                tw-sticky tw-top-10 tw-col-span-2 lg:tw-col-span-1 tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-100 dark:tw-border-slate-800 tw-p-5`}
          >
            <h2 className="tw-font-bold dark:tw-text-white tw-text-lg">
              Agencia
            </h2>
          </article>
        </main>
      ) : (
        <>
          <Error />
        </>
      )}
    </>
  );
}

export default Detalles;
