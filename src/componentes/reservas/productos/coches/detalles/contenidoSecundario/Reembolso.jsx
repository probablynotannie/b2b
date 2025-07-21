import { FaCheckCircle, FaCheckDouble, FaMinusCircle } from "react-icons/fa";
import { useState } from "react";
import { CiNoWaitingSign } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import { useEffect } from "react";
function Reembolso({ contratar, setContratar, reembolso }) {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModal]);
  return (
    <div>
      <div className="tw-flex tw-justify-between tw-flex-wrap">
        <h2 className="tw-font-semibold dark:tw-text-white">
          Reembolso Franquicia Total
        </h2>
        <span className="tw-bg-green-500 tw-h-fit tw-rounded-md tw-p-1 tw-px-2 tw-font-bold tw-text-white tw-text-sm">
          {reembolso.toFixed(2)}€
        </span>
      </div>
      <p className="tw-text-sm dark:tw-text-slate-200">
        El seguro que incluye el alquiler tiene una franquicia que el cliente
        deberá pagar al proveedor en caso de devolver el coche con daños. Por
        sólo 10.00€/día, nosotros le devolvemos la franquicia a su regreso. Este
        producto incluye:
      </p>
      <ul className="tw-text-sm tw-flex tw-flex-col tw-gap-2 dark:tw-text-slate-200">
        {[
          "Franquicia por daños al coche",
          "Franquicia por robo del coche",
          "Ventanillas, parabrisas, retrovisores",
          "Interiores, ruedas, llantas, bajo y techo",
          "Cargo por pérdida de llaves",
        ].map((item, index) => (
          <li className="tw-flex tw-items-center tw-ml-5" key={index}>
            <FaCheckCircle className="tw-text-lg tw-mr-2 tw-text-green-500" />
            {item}
          </li>
        ))}
      </ul>

      <div className="tw-grid tw-grid-cols-2 tw-gap-5">
        <button
          className="tw-rounded-lg tw-bg-slate-400 dark:tw-bg-slate-900 tw-text-white tw-p-2 tw-w-full tw-font-bold tw-mt-3"
          onClick={() => setOpenModal(true)}
        >
          Más información
        </button>
        <button
          onClick={() => setContratar((val) => !val)}
          className={`tw-rounded-lg ${
            contratar === false
              ? "tw-bg-green-500 dark:tw-bg-green-700"
              : "tw-bg-red-500 dark:tw-bg-red-700"
          } tw-text-white tw-p-2 tw-w-full tw-font-bold tw-mt-3`}
        >
          {contratar === false ? "Contratar" : "Quitar"}
        </button>
      </div>

      {openModal && (
        <div className="tw-fixed tw-inset-0 tw-bg-black/50 tw-z-50 tw-flex tw-items-start tw-justify-center tw-overflow-y-auto tw-p-6">
          <div className="tw-relative tw-bg-slate-100 tw-max-h-[90vh] tw-overflow-scroll tw-overflow-x-hidden scrollbar-hidden dark:tw-bg-slate-900 tw-border dark:tw-border-slate-700  tw-rounded-lg tw-max-w-4xl tw-w-full tw-text-white tw-space-y-6 tw-backdrop-blur">
            <div className="tw-flex tw-justify-between tw-sticky tw-top-0 tw-bg-slate-100 dark:tw-bg-slate-900 dark:tw-text-slate-200 tw-p-6 tw-border-b tw-text-slate-700 dark:tw-border-slate-700 tw-border-slate-300 tw-pb-5">
              <h2 className="tw-text-xl tw-font-semibold">
                Producto de Reembolso de Franquicia Total
              </h2>
              <button
                className="tw-text-slate-300 dark:tw-text-slate-500 dark:hover:tw-text-slate-200 hover:tw-text-slate-700 tw-smooth tw-text-xl"
                onClick={() => setOpenModal(false)}
              >
                x
              </button>
            </div>
            <div className="tw-space-y-6 tw-text-sm tw-p-6">
              <h3 className="tw-text-base tw-flex tw-items-center tw-leading-relaxed tw-bg-green-500 tw-w-fit tw-p-1 tw-px-2 tw-text-white tw-rounded">
                <FaCheckDouble className="tw-mr-2" />
                Este producto cubre:
              </h3>
              <ul className="tw-space-y-4 tw-text-slate-500">
                {[
                  "El reembolso de la franquicia pagada por daños al vehículo derivados de colisión.",
                  "El reembolso de la franquicia pagada por robo (total o parcial) del vehículo.",
                  "Cubre además cargo por daños a: ventanillas, parabrisas, retrovisores, interiores, ruedas, llantas, bajo y techo.",
                  "Cargo por pérdida de llaves.",
                ].map((text, index) => (
                  <li className="tw-flex tw-items-center" key={index}>
                    <FaCheckCircle className="tw-w-5 tw-h-5 tw-text-green-500 tw-flex-shrink-0" />
                    <span className="tw-ml-2 tw-text-sm tw-text-slate-700 dark:tw-text-slate-400">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="tw-text-base tw-leading-relaxed tw-text-slate-500 dark:tw-text-slate-400">
                Este tipo de producto no será reembolsable una vez iniciado el
                contrato de alquiler. Es decir, si tu cliente se arrepiente de
                haberlo contratado con nosotros, deberías eliminarlo de la
                reserva antes de que empiece el alquiler. Una vez iniciado el
                alquiler no podremos eliminarlo ni reembolsarlo.
              </p>
              <h3 className="tw-text-base tw-flex tw-items-center tw-leading-relaxed tw-bg-red-500 tw-w-fit tw-p-1 tw-px-2 tw-text-white tw-rounded">
                <CiNoWaitingSign className="tw-mr-2" />
                Este producto cubre:
              </h3>
              <p className="tw-text-base tw-leading-relaxed tw-text-slate-500 dark:tw-text-white">
                El "reembolso de franquicia total" pierde su validez:
              </p>
              <ul className="tw-space-y-4">
                {[
                  "Daños ocasionados por negligencia del conductor o de cualquiera de los ocupantes del vehículo (incluyendo, sin limitarlo a esto, cuando se conduce por carreteras no convencionales, por caminos sin asfaltar, cuando se haya conducido sin prestar la debida atención, de forma temeraria o negligente).",
                  "Cuando el conductor esté bajo los efectos de substancias como el alcohol, cualquier tipo de drogas, etc.",
                  "Cuando el conductor no sea la persona indicada en el contrato de alquiler, o no haya sido incluido como conductor adicional en nuestra reserva.",
                  "Cuando el daño sea causado por haber sido remolcado el vehículo por alguien no autorizado por la compañía de alquiler.",
                  "Cuando el daño sea causado por actos vandálicos y/o agentes atmosféricos.",
                ].map((text, index) => (
                  <li className="tw-flex tw-items-center" key={index}>
                    <FaMinusCircle className="tw-w-5 tw-h-5 tw-text-danger tw-flex-shrink-0" />
                    <span className="tw-ml-2 tw-text-sm tw-text-slate-700 dark:tw-text-slate-400">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="tw-text-base tw-leading-relaxed tw-text-slate-500 dark:tw-text-slate-400">
                En estos casos la responsabilidad del cliente no se limita al
                importe de la franquicia, sino que deberá pagar el total de los
                gastos pudiendo incluso exceder el importe de la franquicia.
              </p>
              <h3 className="tw-text-base tw-flex tw-items-center tw-leading-relaxed tw-bg-orange-400 tw-w-fit tw-p-1 tw-px-2 tw-text-white tw-rounded">
                <CiNoWaitingSign className="tw-mr-2" />
                Este producto cubre:
              </h3>
              <p className="tw-text-base tw-leading-relaxed tw-text-slate-500 dark:tw-text-slate-400">
                Si la compañía de alquiler local cobrara a tu cliente la
                franquicia y previamente nos has contratado el Producto de
                Reembolso de Franquicia Total, envíanos la documentación
                detallada abajo y se la reembolsaremos lo antes posible.
              </p>
              <ul className="tw-space-y-4">
                {[
                  "Copia legible del contrato de alquiler que el cliente firmó en destino con el proveedor local.",
                  "Copia del extracto de la tarjeta de crédito donde aparezca el cargo de la franquicia.",
                  "Copia legible del parte de accidente y/o parte de daños al coche (se lo dará la compañía de alquiler local).",
                  "Copia legible del parte de la policía si hubiera intervenido.",
                  "Copia legible de la denuncia a la policía en caso de robo del coche.",
                  "Cualquier documentación relacionada.",
                ].map((documento, index) => (
                  <li key={index} className="tw-flex tw-items-center">
                    <GoDotFill className="tw-w-3 tw-h-3 tw-text-orange-400 tw-flex-shrink-0" />
                    <span className="tw-ml-2 tw-text-sm tw-text-slate-700 dark:tw-text-slate-400">
                      {documento}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="tw-flex tw-justify-end tw-p-5 tw-border-t-2 tw-border-slate-200 dark:tw-border-slate-700">
              <button
                className="tw-mt-4 tw-px-4 tw-py-2 tw-bg-slate-700 hover:tw-bg-slate-600 tw-rounded tw-text-white"
                onClick={() => setOpenModal(false)}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Reembolso;
