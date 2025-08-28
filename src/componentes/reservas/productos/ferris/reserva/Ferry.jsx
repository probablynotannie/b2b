import FormatearFecha from "../../../../../assets/scripts/formatearFecha";
import { FaCheck } from "react-icons/fa";

function Ferry({ producto, tipo }) {
  return (
    <div className="tw-w-full tw-p-3 tw-border tw-border-slate-100 dark:tw-bg-slate-900 dark:tw-border-slate-700 tw-shadow tw-my-5">
      <div className="tw-flex tw-justify-between tw-items-center tw-border-b tw-pb-3 tw-border-slate-100 dark:tw-border-slate-700 dark:tw-text-slate-100 tw-mb-3">
        <div>
          <h3 className="tw-ml-1 tw-font-semibold">
            Ferry {tipo}
            <span className="tw-ml-1 tw-text-sm"> ({producto.ruta})</span>
          </h3>
          <p className="tw-text-sm">{FormatearFecha(producto.fecha)}</p>
        </div>
        <div className="dark:tw-bg-slate-200 tw-p-1 tw-rounded-lg">
          <img
            src={producto.compania}
            alt={"logo compania"}
            className="tw-w-[100px]"
          />
        </div>
      </div>
      <div className="tw-bg-slate-50 tw-text-sm dark:tw-bg-slate-900 dark:tw-text-slate-200 tw-p-2">
        <div className="md:tw-flex tw-justify-between tw-items-center">
          <p>Duración de viaje: {producto.duracion_viaje}</p>
          <p>
            {producto.hora_salida} - {producto.hora_llegada}
          </p>
        </div>
        <ul>
          <li className="tw-flex tw-items-center tw-gap-1">
            Cambios:
            <span>
              {producto.cambios === true ? (
                <FaCheck className="tw-text-green-500 tw-text-sm" />
              ) : (
                <span className="text-red tw-font-bold tw-text-danger">X</span>
              )}
            </span>
          </li>
          <li className="tw-flex tw-items-center tw-gap-1">
            cancelaciones:
            <span>
              {producto.cancelaciones === true ? (
                <FaCheck className="tw-text-green-500 tw-text-sm" />
              ) : (
                <span className="text-red tw-font-bold tw-text-danger">
                  {" "}
                  X{" "}
                </span>
              )}{" "}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Ferry;
