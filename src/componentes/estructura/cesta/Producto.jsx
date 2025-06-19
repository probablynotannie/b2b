import { FaCalendarAlt, FaTrash } from "react-icons/fa";
import { useState } from "react";
import Iconos from "./Iconos";
import ModalEliminar from "./ModalEliminar";
function Producto({ producto, onRemove, index }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="tw-flex tw-gap-3 tw-py-3 hover:tw-bg-slate-100 dark:tw-bg-slate-800 tw-rounded tw-smooth tw-group tw-p-2">
      <img
        src={producto.img}
        alt={producto.nombre || "Producto"}
        className="tw-w-28 tw-object-cover tw-rounded-lg"
      />
      <div className="tw-w-full">
        <div className="tw-flex tw-justify-between tw-items-center">
          <h3 className="tw-font-bold tw-text-secondary dark:tw-text-secondaryDark">
            {producto.titulo}
          </h3>
          <span>
            <Iconos tipo={producto.type} />
          </span>
        </div>
        <div className="tw-pl-3">
          <ul className="tw-text-slate-500 dark:tw-text-slate-400">
            <li className="tw-flex tw-items-center tw-gap-1">
              <FaCalendarAlt />
              <p className="tw-text-sm">{producto.fecha}</p>
            </li>
            {producto.pax && (
              <li className="tw-flex tw-items-center tw-gap-1 tw-text-sm">
                {producto.pax}
              </li>
            )}
            {producto.ubicacion && <li>{producto.ubicacion}</li>}
          </ul>
          <div className="tw-flex tw-justify-between tw-items-center">
            <span className="tw-font-semibold group-hover:tw-text-secondary dark:group-hover:tw-text-secondaryDark dark:tw-text-slate-100 tw-smooth">
              Total: {producto.precio.toFixed(2)}€
            </span>
            <button
              onClick={() => setIsModalOpen(true)}
              className="tw-text-slate-400 hover:tw-text-red-600 tw-smooth tw-flex tw-items-center tw-gap-2"
              aria-label={`Eliminar ${producto.nombre}`}
              title="Eliminar producto"
            >
              <FaTrash />
              Eliminar
            </button>
            <ModalEliminar
              producto={producto}
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onConfirm={() => {
                onRemove(index);
                setIsModalOpen(false);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Producto;
