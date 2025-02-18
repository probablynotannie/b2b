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
      <div className="flex justify-between">
        <h2 className="font-semibold dark:text-white">
          Reembolso Franquicia Total
        </h2>
        <span className="bg-green-500 rounded-md p-1 px-2 font-bold text-white text-sm">
          {reembolso} €
        </span>
      </div>
      <p className="text-sm dark:text-slate-200">
        El seguro que incluye el alquiler tiene una franquicia que el cliente
        deberá pagar al proveedor en caso de devolver el coche con daños. Por
        sólo 10.00€/día, nosotros le devolvemos la franquicia a su regreso. Este
        producto incluye:
      </p>
      <ul className="text-sm flex flex-col gap-2 dark:text-slate-200">
        <li className="flex items-center ml-5">
          <FaCheckCircle className="text-lg mr-2 text-green-500" />
          Franquicia por daños al coche
        </li>

        <li className="flex items-center ml-5">
          <FaCheckCircle className="text-lg mr-2 text-green-500" />
          Franquicia por robo del coche
        </li>

        <li className="flex items-center ml-5">
          <FaCheckCircle className="text-lg mr-2 text-green-500" />
          Ventanillas, parabrisas, retrovisores
        </li>

        <li className="flex items-center ml-5">
          <FaCheckCircle className="text-lg mr-2 text-green-500" />
          Interiores, ruedas, llantas, bajo y techo
        </li>

        <li className="flex items-center ml-5">
          <FaCheckCircle className="text-lg mr-2 text-green-500" />
          Cargo por pérdida de llaves
        </li>
      </ul>
      <div className="grid grid-cols-2 gap-5">
        <button
          className="rounded-lg bg-slate-400 dark:bg-slate-900 text-white p-2 w-full font-bold mt-3"
          onClick={() => setOpenModal(true)}
        >
          Más información
        </button>
        <button
          onClick={() => setContratar((val) => !val)}
          className={`rounded-lg ${
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
          <div className="space-y-6 text-sm">
            <h3 className="text-base flex items-center leading-relaxed bg-green-500 w-fit p-1 px-2 text-white rounded">
              <FaCheckDouble className="mr-2" />
              Este producto cubre:
            </h3>
            <ul className="space-y-4 text-slate-500">
              {[
                "El reembolso de la franquicia pagada por daños al vehículo derivados de colisión.",
                "El reembolso de la franquicia pagada por robo (total o parcial) del vehículo.",
                "Cubre además cargo por daños a: ventanillas, parabrisas, retrovisores, interiores, ruedas, llantas, bajo y techo.",
                "Cargo por pérdida de llaves.",
              ].map((text, index) => (
                <li className="flex items-center" key={index}>
                  <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="ml-2 text-sm text-slate-700 dark:text-slate-400">
                    {text}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-base leading-relaxed text-slate-500 dark:text-slate-400">
              Este tipo de producto no será reembolsable una vez iniciado el
              contrato de alquiler. Es decir, si tu cliente se arrepiente de
              haberlo contratado con nosotros, deberías eliminarlo de la reserva
              antes de que empiece el alquiler. Una vez iniciado el alquiler no
              podremos eliminarlo ni reembolsarlo.
            </p>
            <h3 className="text-base flex items-center leading-relaxed bg-red-500 w-fit p-1 px-2 text-white rounded">
              <CiNoWaitingSign className="mr-2" />
              Este producto cubre:
            </h3>
            <p className="text-base leading-relaxed text-slate-500 dark:text-white">
              El "reembolso de franquicia total" pierde su validez:
            </p>
            <ul className="space-y-4">
              {[
                "Daños ocasionados por negligencia del conductor o de cualquiera de los ocupantes del vehículo (incluyendo, sin limitarlo a esto, cuando se conduce por carreteras no convencionales, por caminos sin asfaltar, cuando se haya conducido sin prestar la debida atención, de forma temeraria o negligente).",
                "Cuando el conductor esté bajo los efectos de substancias como el alcohol, cualquier tipo de drogas, etc.",
                "Cuando el conductor no sea la persona indicada en el contrato de alquiler, o no haya sido incluido como conductor adicional en nuestra reserva.",
                "Cuando el daño sea causado por haber sido remolcado el vehículo por alguien no autorizado por la compañía de alquiler.",
                "Cuando el daño sea causado por actos vandálicos y/o agentes atmosféricos.",
              ].map((text, index) => (
                <li className="flex items-center" key={index}>
                  <FaMinusCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="ml-2 text-sm text-slate-700 dark:text-slate-400">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-base leading-relaxed text-slate-500 dark:text-slate-400">
              En estos casos la responsabilidad del cliente no se limita al
              importe de la franquicia, sino que deberá pagar el total de los
              gastos pudiendo incluso exceder el importe de la franquicia.
            </p>
            <h3 className="text-base flex items-center leading-relaxed bg-orange-400 w-fit p-1 px-2 text-white rounded">
              <CiNoWaitingSign className="mr-2" />
              Este producto cubre:
            </h3>
            <p className="text-base leading-relaxed text-slate-500 dark:text-slate-400">
              Si la compañía de alquiler local cobrara a tu cliente la
              franquicia y previamente nos has contratado el Producto de
              Reembolso de Franquicia Total, envíanos la documentación detallada
              abajo y se la reembolsaremos lo antes posible.
            </p>
            <ul className="space-y-4">
              {[
                "Copia legible del contrato de alquiler que el cliente firmó en destino con el proveedor local.",
                "Copia del extracto de la tarjeta de crédito donde aparezca el cargo de la franquicia.",
                "Copia legible del parte de accidente y/o parte de daños al coche (se lo dará la compañía de alquiler local).",
                "Copia legible del parte de la policía si hubiera intervenido.",
                "Copia legible de la denuncia a la policía en caso de robo del coche.",
                "Cualquier documentación relacionada.",
              ].map((documento, index) => (
                <li key={index} className="flex items-center">
                  <GoDotFill className="w-3 h-3 text-orange-400 flex-shrink-0" />
                  <span className="ml-2 text-sm text-slate-700 dark:text-slate-400 ">
                    {documento}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="dark:text-slate-200"
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
