import DetallesCoche from "./Detalles";
import Error from "../../../../helpers/visuales/error/Error";
import { useLocation } from "react-router-dom";
import Desglose from "./Desglose";
import { useEffect, useState } from "react";
import SkeletonPlaceholder from "../../../../helpers/placeholders/Detalles";

function Ferry() {
  const location = useLocation();
  const { destino = {} } = location.state || {};
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {Object.keys(destino).length > 0 ? (
        <main className="tw-grid lg:tw-grid-cols-3 tw-min-h-[55vh] tw-items-start tw-container tw-gap-y-10 tw-my-10 tw-mb-20 lg:tw-gap-12">
          {loading ? (
            <SkeletonPlaceholder />
          ) : (
            <>
              <section
                className={`tw-bg-white dark:tw-bg-slate-800
            } tw-space-y-3 tw-col-span-2 tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-100 dark:tw-border-slate-700 tw-p-5`}
              >
                <DetallesCoche destino={destino} />
              </section>
              <aside
                className={`
               tw-bg-white dark:tw-bg-slate-800
                tw-sticky tw-top-10 tw-col-span-2 lg:tw-col-span-1 tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-100 dark:tw-border-slate-800 tw-p-5`}
              >
                <div className="tw-flex tw-justify-between tw-pb-2 tw-border-b tw-border-slate-100 dark:tw-border-slate-700">
                  <h2 className="tw-font-bold dark:tw-text-white tw-text-lg">
                    {destino.orden}
                  </h2>
                  <div className="tw-flex tw-items-center tw-flex-wrap tw-text-xs tw-gap-2">
                    {destino.estado === 1 ? (
                      <div className="tw-bg-green-500 tw-p-1 tw-rounded-lg tw-text-white tw-font-bold">
                        Disponible
                      </div>
                    ) : destino.estado === 2 ? (
                      <div className="tw-bg-orange-400 tw-p-1 tw-rounded-lg tw-text-white tw-font-bold">
                        bajo petición
                      </div>
                    ) : (
                      <div className="tw-bg-green-500 tw-p-1 tw-rounded-lg tw-text-white tw-font-bold">
                        Sin Datos
                      </div>
                    )}
                    <td className=" tw-px-1">
                      {destino.estadoPago === 1 ? (
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
                <Desglose destino={destino} />
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

export default Ferry;
