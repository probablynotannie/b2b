import { FaCheckCircle } from "react-icons/fa";
import { Modal } from "flowbite-react";
import { useState } from "react";
import { CiNoWaitingSign } from "react-icons/ci";
import { FaCheckDouble } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

function Reembolso({ contratar, setContratar, reembolso }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <div className="tw-flex tw-justify-between">
        <h2 className="tw-font-semibold dark:tw-text-white">
          Reembolso Franquicia Total
        </h2>
        <span className="tw-bg-green-500 tw-rounded-md tw-p-1 tw-px-2 tw-font-bold tw-text-white tw-text-sm">
          {reembolso} €
        </span>
      </div>
      <p className="tw-text-sm dark:tw-text-slate-200">
        El seguro que incluye el alquiler tiene una franquicia que el cliente
        deberá pagar al proveedor en caso de devolver el coche con daños. Por
        sólo 10.00€/día, nosotros le devolvemos la franquicia a su regreso. Este
        producto incluye:
      </p>
      <ul className="tw-text-sm tw-flex tw-flex-col tw-gap-2 dark:tw-text-slate-200">
        <li className="tw-flex tw-items-center tw-ml-5">
          <FaCheckCircle className="tw-text-lg tw-mr-2 tw-text-green-500" />
          Franquicia por daños al coche
        </li>

        <li className="tw-flex tw-items-center tw-ml-5">
          <FaCheckCircle className="tw-text-lg tw-mr-2 tw-text-green-500" />
          Franquicia por robo del coche
        </li>

        <li className="tw-flex tw-items-center tw-ml-5">
          <FaCheckCircle className="tw-text-lg tw-mr-2 tw-text-green-500" />
          Ventanillas, parabrisas, retrovisores
        </li>

        <li className="tw-flex tw-items-center tw-ml-5">
          <FaCheckCircle className="tw-text-lg tw-mr-2 tw-text-green-500" />
          Interiores, ruedas, llantas, bajo y techo
        </li>

        <li className="tw-flex tw-items-center tw-ml-5">
          <FaCheckCircle className="tw-text-lg tw-mr-2 tw-text-green-500" />
          Cargo por pérdida de llaves
        </li>
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
              ? "bg-green-500 dark:bg-green-700"
              : "bg-red-500 dark:bg-red-700"
          } text-white p-2 w-full font-bold mt-3`}
        >
          {contratar === false ? "Contratar" : "Quitar"}
        </button>
      </div>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Producto de Reembolso de Franquicia Total</Modal.Header>
        <Modal.Body>
          <div className="tw-space-y-6 tw-text-sm">
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
              haberlo contratado con nosotros, deberías eliminarlo de la reserva
              antes de que empiece el alquiler. Una vez iniciado el alquiler no
              podremos eliminarlo ni reembolsarlo.
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
                  <FaMinusCircle className="tw-w-5 tw-h-5 tw-text-red-500 tw-flex-shrink-0" />
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
              Reembolso de Franquicia Total, envíanos la documentación detallada
              abajo y se la reembolsaremos lo antes posible.
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
        </Modal.Body>
        <Modal.Footer>
          <button
            className="dark:tw-text-slate-200"
            onClick={() => setOpenModal(false)}
          >
            Cerrar
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Reembolso;
