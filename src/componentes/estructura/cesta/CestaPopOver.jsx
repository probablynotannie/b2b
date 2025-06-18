import { Popover } from "flowbite-react";
import { FaCartArrowDown, FaTrash } from "react-icons/fa";
import { useRef } from "react";
import cesta from "./Zustand";
import { useNavigate } from "react-router-dom";
import Iconos from "./Iconos";
import { useState } from "react";
import ModalEliminar from "./ModalEliminar";
const ProductoItem = ({ producto, index, onRemove }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      className={`dark:tw-bg-slate-900 tw-px-2 ${
        index !== 0 &&
        "tw-border-t tw-border-slate-200 dark:tw-border-slate-700 "
      }`}
    >
      <div className="tw-flex tw-justify-between tw-items-center tw-bg-slate-50 dark:tw-bg-slat tw-p-2 dark:tw-bg-slate-900">
        <Iconos tipo={producto.type} />
        <span className="tw-text-xs tw-font-semibold tw-text-black dark:tw-text-green-500 tw-p-1 tw-rounded-lg">
          pax: {producto.pax}x
        </span>
      </div>
      <div
        key={index}
        className="tw-flex tw-gap-4 tw-items-center tw-border-b tw-border-slate-100 dark:tw-border-slate-700 tw-pb-4 last:tw-border-b-0"
      >
        <img
          src={producto.img}
          alt={producto.nombre || "Producto"}
          className="tw-w-24 tw-h-24 tw-object-cover tw-rounded-lg tw-shadow-sm"
        />

        <div className="tw-flex-1 tw-flex tw-flex-col tw-justify-between">
          <h3 className="tw-font-semibold tw-text-slate-900 dark:tw-text-slate-100">
            {producto.titulo}
          </h3>
          <p className="tw-text-slate-500 dark:tw-text-slate-400 tw-text-xs tw-mt-1">
            {producto.fecha}
          </p>
          <div className="tw-flex tw-justify-between">
            <span className="tw-text-primary tw-font-bold tw-text-lg tw-mt-1 dark:tw-text-secondaryDark">
              {producto.precio ? producto.precio.toFixed(2) : "145"}€
            </span>
            <button
              onClick={() => setIsModalOpen(true)}
              className="tw-text-slate-400 hover:tw-text-red-600 tw-smooth tw-flex tw-items-center tw-gap-2"
              aria-label={`Eliminar ${producto.nombre}`}
              title="Eliminar producto"
            >
              <FaTrash />
            </button>
          </div>
        </div>
      </div>
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
  );
};
function Cesta() {
  const productos = cesta((state) => state.productos);
  const removeProducto = cesta((state) => state.removeProducto);
  const vaciarCesta = cesta((state) => state.vaciarCesta);
  const navigate = useNavigate();

  const triggerRef = useRef(null);

  function handleFinalizarReserva() {
    triggerRef.current?.click();
    navigate("/cesta");
  }

  return (
    <Popover
      aria-labelledby="notificaciones-popover"
      content={
        <div className="tw-border-0 tw-flex tw-flex-col tw-divide tw-divide-slate-100 dark:tw-divide-slate-700 tw-w-80 tw-max-h-[90vh] tw-overflow-y-scroll scrollbar-hidden tw-p-3 tw-bg-white dark:tw-bg-slate-800 tw-rounded-xl tw-shadow-lg tw-transition-shadow tw-duration-300">
          <div className="tw-flex tw-justify-between tw-items-center tw-text-black dark:tw-text-white tw-border-b-2 tw-border-slate-100 dark:tw-border-slate-700 tw-pb-2">
            <h3 className="tw-text-xl tw-font-extrabold">Cesta</h3>
            {productos.length > 0 && (
              <button
                className="tw-text-slate-400 dark:tw-text-slate-300 hover:tw-text-black hover:dark:tw-text-slate-100 tw-smooth"
                onClick={vaciarCesta}
              >
                vaciar
              </button>
            )}
          </div>
          {productos.length === 0 ? (
            <p className="tw-text-center tw-text-slate-500 dark:tw-text-slate-400 tw-italic">
              No se han añadido productos
            </p>
          ) : (
            productos.map((producto, index) => (
              <ProductoItem
                key={index}
                producto={producto}
                index={index}
                onRemove={removeProducto}
              />
            ))
          )}

          <button
            onClick={handleFinalizarReserva}
            className="tw-btn_accesorios tw-btn_primario tw-mt-5"
          >
            Finalizar la reserva
          </button>
        </div>
      }
    >
      <div
        ref={triggerRef}
        className="tw-text-white tw-relative hover:tw-text-secondary tw-transition tw-cursor-pointer dark:tw-bg-slate-700 tw-bg-slate-700 tw-flex tw-items-center tw-justify-center tw-w-[35px] tw-h-[35px] tw-rounded-full tw-text-2xl"
      >
        <FaCartArrowDown className="tw-text-xl" />
        {productos.length > 0 && (
          <div className="tw-absolute -tw-top-1 tw-right-0 tw-bg-green-600 tw-text-white tw-text-xs tw-font-bold tw-rounded-full tw-w-5 tw-h-5 tw-flex tw-items-center tw-justify-center">
            {productos.length}
          </div>
        )}
      </div>
    </Popover>
  );
}

export default Cesta;
