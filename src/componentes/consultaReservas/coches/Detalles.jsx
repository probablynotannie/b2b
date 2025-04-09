import DetallesCoche from "./coche/Detalles";
import Error from "../Error";
import { useLocation } from "react-router-dom";
import Desglose from "./Desglose";
function Detalles() {
  const location = useLocation();
  const { coche = {} } = location.state || {};
  return (
    <>
      {Object.keys(coche).length > 0 ? (
        <main className="tw-grid lg:tw-grid-cols-3 tw-min-h-[55vh] tw-items-start tw-container tw-gap-y-10 tw-my-10 lg:tw-gap-12">
          <section
            className={`tw-bg-white dark:tw-bg-slate-800
            } tw-space-y-3 tw-col-span-2 tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-100 dark:tw-border-slate-700 tw-p-5`}
          >
            <div className="tw-flex tw-justify-between tw-items-center dark:tw-text-white tw-pb-2 tw-border-b tw-border-slate-100 dark:tw-border-slate-700">
              <h2 className="tw-font-bold  tw-text-xl">{coche.modelo}</h2>
              <span className="tw-font-bold">{coche.localizador}</span>
            </div>
            <DetallesCoche coche={coche} />
          </section>
          <aside
            className={`
               tw-bg-white dark:tw-bg-slate-800
                tw-sticky tw-top-10 tw-col-span-2 lg:tw-col-span-1 tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-100 dark:tw-border-slate-800 tw-p-5`}
          >
            <div className="tw-flex tw-justify-between tw-pb-2 tw-border-b tw-border-slate-100 dark:tw-border-slate-700">
              <h2 className="tw-font-bold dark:tw-text-white tw-text-lg">
                {coche.orden}
              </h2>
              <div className="tw-flex tw-items-center tw-flex-wrap tw-text-xs tw-gap-2">
                {coche.estado === "cancelada" ? (
                  <div className="tw-bg-red-500  tw-p-1 tw-rounded-lg tw-text-white tw-font-bold">
                    cancelada
                  </div>
                ) : coche.estado === "pendiente" ? (
                  <div className="tw-bg-orange-400  tw-p-1 tw-rounded-lg tw-text-white tw-font-bold">
                    pendiente
                  </div>
                ) : (
                  <div className="tw-bg-green-500  tw-p-1 tw-rounded-lg tw-text-white tw-font-bold">
                    completada
                  </div>
                )}
                <td className=" tw-px-1">
                  {coche.estadoPago === "Si" ? (
                    <div className="tw-bg-green-500  tw-p-1 tw-rounded-lg tw-text-white tw-font-bold">
                      pagado
                    </div>
                  ) : (
                    <div className="tw-bg-red-500  tw-p-1 tw-rounded-lg tw-text-white tw-font-bold">
                      sin pagar
                    </div>
                  )}
                </td>
              </div>
            </div>
            <Desglose coche={coche} />
          </aside>
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
