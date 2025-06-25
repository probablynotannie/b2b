import { AiFillEuroCircle } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import { TbTaxEuro } from "react-icons/tb";
import FormatearFecha from "../../../../../helpers/FormatearFecha";

function ModalPrecio({
  isOpen,
  onClose,
  temporal,
  cruiseImage,
  producto,
  setPrecioSeleccionado,
  setIsModalOpen,
}) {
  if (!isOpen || !temporal) return null;
  return (
    <div className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-50 tw-flex tw-justify-center tw-items-center tw-z-10 tw-h-screen">
      <div className="tw-bg-white tw-rounded-lg tw-p-6 tw-relative tw-w-[90%] tw-max-w-2xl dark:tw-bg-slate-700">
        <div className="tw-flex tw-justify-between tw-items-center tw-border-b-2 tw-border-slate-100 dark:tw-border-slate-700">
          <h6 className="tw-font-semibold tw-text-lg dark:tw-text-white">
            {temporal.cabin}
          </h6>
          <button
            className="tw-text-gray-600 dark:tw-text-gray-300 "
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        <div>
          <img
            src={"//pic-2.vpackage.net/cruceros_img/" + cruiseImage}
            alt="imagen crucero"
            className="tw-h-[25vh] tw-w-full tw-rounded-xl tw-object-cover tw-my-4"
          />
          <div className="tw-mt-5">
            <div className="tw-flex tw-justify-around tw-border-y-2 tw-border-slate-100 dark:tw-border-slate-700 tw-py-3 tw-mb-3 tw-mt-3">
              <div className="tw-flex tw-items-center tw-justify-center tw-flex-col tw-text-secondary tw-font-semibold">
                <AiFillEuroCircle className="tw-text-3xl" />
                {parseFloat(temporal.price).toFixed(2)}€
              </div>
              <div className="tw-flex tw-items-center tw-justify-center tw-flex-col tw-text-secondary tw-font-semibold">
                <FaCalendarAlt className="tw-text-3xl" />
                {FormatearFecha(temporal.date)}
              </div>
              <div className="tw-flex tw-items-center tw-justify-center tw-flex-col tw-text-secondary tw-font-semibold">
                <TbTaxEuro className="tw-text-3xl" />
                <span>+ {temporal.datos.tasas}€</span>
              </div>
            </div>
            <ul className="dark:tw-text-slate-300 tw-grid sm:tw-grid-cols-2">
              <li>
                <b>Barco:</b> {producto.barco.nombre.texto}
              </li>
              <li>
                <b>Camarote:</b> {temporal.cabin}
                <span className="tw-text-slate-400 tw-text-sm tw-ml-1">
                  (ID:{temporal.datos.camarote})
                </span>
              </li>
              <li>
                <b>Precio:</b> {temporal.price}€{" "}
                <span className="tw-text-slate-400">(por persona)</span>
              </li>
              <li>
                <b>Tasas:</b> {temporal.datos.tasas}€
              </li>
              <li>
                <b>Vuelos:</b>{" "}
                {temporal.datos.vuelo_incluido === "1"
                  ? "Incluidos"
                  : "No incluidos"}
              </li>
            </ul>
          </div>
          <button
            onClick={() => {
              if (temporal) {
                setPrecioSeleccionado(temporal);
                setIsModalOpen(false);
              }
            }}
            disabled={!temporal}
            className=" tw-btn_accesorios tw-btn_primario tw-mt-4"
          >
            Confirmar selección
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalPrecio;
