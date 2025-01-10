import FormatearFecha from "../../../estructura/FormatearFecha";

import { FaCheck } from "react-icons/fa";
function Ferry({ producto, tipo }) {
  return (
    <div className="w-full p-3 border border-slate-100 dark:bg-slate-800 dark:border-slate-700 shadow my-5">
      <div className="flex justify-between items-center border-b pb-3 border-slate-100 dark:border-slate-700 dark:text-slate-100 mb-3">
        <div>
          <h3 className="ml-1 font-semibold">Ferry {tipo}</h3>
          <p className="text-sm">{FormatearFecha(producto.fecha)}</p>
        </div>
        <img
          src={producto.compania}
          alt={"logo compania"}
          className="w-[100px] dark:bg-white rounded-full"
        />
      </div>
      <div className="bg-slate-50 text-sm dark:bg-slate-700 dark:text-slate-200 p-2">
        <div className="flex justify-between items-center">
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
