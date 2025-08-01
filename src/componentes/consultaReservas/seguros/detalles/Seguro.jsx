import DetallesSeguro from "./Detalles";
import Error from "../../../../helpers/visuales/error/Error";
import { useLocation } from "react-router-dom";
import Desglose from "./Desglose";
import Acciones from "./Acciones";
import Servicio from "./Servicio";
import DatosAccionRealizada from "./DatosAccionRealizada";
import { useEffect, useState } from "react";
import SkeletonPlaceholder from "../../../../placeholders/Detalles";

function Detalles() {
  const location = useLocation();
  const { seguro = {} } = location.state || {};
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {Object.keys(seguro).length > 0 ? (
        <main className="tw-grid lg:tw-grid-cols-3 tw-min-h-[55vh] tw-items-start tw-container tw-gap-y-10 tw-my-10 tw-mb-20 lg:tw-gap-12">
          {loading ? (
            <SkeletonPlaceholder />
          ) : (
            <>
              <div className=" tw-col-span-2 tw-space-y-8">
                <section
                  className={`tw-bg-white dark:tw-bg-slate-800
            } tw-space-y-3 tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-100 dark:tw-border-slate-700 tw-p-5`}
                >
                  <DetallesSeguro seguro={seguro} />
                </section>
                <section
                  className={`tw-bg-white dark:tw-bg-slate-800
            } tw-space-y-3 tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-100 dark:tw-border-slate-700 tw-p-5`}
                >
                  <Servicio seguro={seguro} />
                </section>
              </div>
              <aside className="tw-sticky tw-top-10 tw-col-span-2 lg:tw-col-span-1 ">
                {seguro.estado === 0 && (
                  <DatosAccionRealizada user={seguro.accionRealizadoPor} />
                )}
                <section
                  className="
             tw-bg-white dark:tw-bg-slate-800
               tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-100 dark:tw-border-slate-800 tw-p-5"
                >
                  <div className="tw-flex tw-justify-between tw-pb-2 tw-border-b tw-border-slate-100 dark:tw-border-slate-700">
                    <h2 className="tw-font-bold dark:tw-text-white tw-text-lg">
                      {seguro.orden}
                    </h2>
                    <div className="tw-flex tw-items-center tw-flex-wrap tw-text-xs tw-gap-2">
                      {seguro.estado === 0 ? (
                        <div className="tw-bg-red-500 tw-p-1 tw-rounded-lg tw-text-white tw-font-bold">
                          cancelada
                        </div>
                      ) : seguro.estado === 1 ? (
                        <div className="tw-bg-green-500 tw-p-1 tw-rounded-lg tw-text-white tw-font-bold">
                          completada
                        </div>
                      ) : seguro.estado === 2 ? (
                        <div className="tw-bg-orange-400 tw-p-1 tw-rounded-lg tw-text-white tw-font-bold">
                          pendiente
                        </div>
                      ) : (
                        <div className="tw-bg-green-500 tw-p-1 tw-rounded-lg tw-text-white tw-font-bold">
                          Sin Datos
                        </div>
                      )}
                      {seguro.estadoPago === 1 ? (
                        <div className="tw-bg-green-500 tw-p-1 tw-rounded-lg tw-text-white tw-font-bold">
                          pagado
                        </div>
                      ) : (
                        <div className="tw-bg-red-500 tw-p-1 tw-rounded-lg tw-text-white tw-font-bold">
                          sin pagar
                        </div>
                      )}
                    </div>
                  </div>
                  <Desglose seguro={seguro} />
                </section>
                <section
                  className="
             tw-mt-8
            tw-col-span-2 lg:tw-col-span-1"
                >
                  <Acciones
                    estado={seguro.estado}
                    estadoPago={seguro.estadoPago}
                  />
                </section>
              </aside>
            </>
          )}
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
