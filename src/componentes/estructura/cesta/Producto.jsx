import { FaCalendarAlt, FaTrash } from "react-icons/fa";
import Iconos from "./Iconos";
import { FaPerson } from "react-icons/fa6";
function Producto({ producto, onRemove, index }) {
  console.log(producto);
  return (
    <div className="tw-flex tw-gap-3 tw-py-3 hover:tw-bg-slate-100 tw-smooth tw-group tw-p-2">
      <img
        src={producto.img}
        alt={producto.nombre || "Producto"}
        className="tw-w-28 tw-h-full tw-object-cover tw-rounded-lg"
      />
      <div className="tw-w-full">
        <div className="tw-flex tw-justify-between tw-items-center">
          <h3 className="tw-font-bold tw-text-secondary">{producto.titulo}</h3>
          <span>
            <Iconos tipo={producto.type} />
          </span>
        </div>
        <div className="tw-pl-3">
          <ul>
            <li className="tw-flex tw-items-center tw-gap-1">
              <FaCalendarAlt className="tw-text-slate-500" />
              <p className="tw-text-sm tw-text-slate-500">{producto.fecha}</p>
            </li>
            <li className="tw-flex tw-items-center tw-gap-1">
              <FaPerson className="tw-text-500-500" />
              <p className="tw-text-sm tw-text-slate-500 ">
                PAX: {producto.pax}x
              </p>
            </li>
          </ul>
          <div className="tw-flex tw-justify-between tw-items-center">
            <span className="tw-font-bold group-hover:tw-text-secondary tw-smooth">
              Total: {producto.precio.toFixed(2)}€
            </span>
            <button
              onClick={() => onRemove(index)}
              className="tw-text-slate-400 hover:tw-text-red-600 tw-smooth tw-flex tw-items-center tw-gap-2"
              aria-label={`Eliminar ${producto.nombre}`}
              title="Eliminar producto"
            >
              <FaTrash />
               Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Producto;
