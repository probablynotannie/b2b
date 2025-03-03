import formatearFecha from "../../../../../helpers/FormatearFecha";


import { FaCheck } from "react-icons/fa";

function Ferry({ producto, tipo }) {
  return (
    <div className="w-full p-3 border border-slate-100 dark:bg-slate-800 dark:tw-border-slate-700 shadow my-5">
      <div className="flex justify-between items-center border-b pb-3 border-slate-100 dark:tw-border-slate-700 dark:tw-text-slate-100 mb-3">
        <div>
          <h3 className="ml-1 font-semibold">
            Ferry {tipo}{" "}
            <span className="ml-1 text-sm"> ({producto.ruta})</span>
          </h3>
          <p className="text-sm">{FormatearFecha(producto.fecha)}</p>
        </div>
        <div className=" dark:bg-slate-200 p-1 rounded-lg">
          <img
            src={producto.compania}
            alt={"logo compania"}
            className="w-[100px]"
          />
        </div>
      </div>
      <div className="bg-slate-50 text-sm dark:bg-slate-700 dark:tw-text-slate-200 p-2">
        <div className="md:flex justify-between items-center">
          <p>Duración de viaje: {producto.duracion_viaje}</p>
          <p>
            {producto.hora_salida} - {producto.hora_llegada}
          </p>
        </div>
        <ul>
          <li className="flex items-center gap-1">
            Cambios:
            <span>
              {producto.cambios === true ? (
                <FaCheck className="text-green-500 text-sm" />
              ) : (
                <span className="text-red font-bold text-red-500"> X </span>
              )}{" "}
            </span>
          </li>
          <li className="flex items-center gap-1">
            cancelaciones:
            <span>
              {producto.cancelaciones === true ? (
                <FaCheck className="text-green-500 text-sm" />
              ) : (
                <span className="text-red font-bold text-red-500"> X </span>
              )}{" "}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Ferry;
