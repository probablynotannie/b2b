import ReactDOM from "react-dom";
import Info from "../../reservas/estructura/reserva/Resumen";
function ModalEliminar({ isOpen, onClose, onConfirm, producto }) {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className="tw-fixed tw-inset-0 tw-z-50 tw-flex tw-items-center tw-justify-center tw-bg-black/50">
      <div className="tw-bg-white tw-border-2 tw-border-red-700 dark:tw-border-red-900 dark:tw-bg-slate-800 tw-rounded-xl tw-shadow-xl tw-w-full tw-max-w-md tw-p-6">
        <h2 className="tw-text-lg tw-font-bold tw-text-slate-800 dark:tw-text-white mb-4">
          ¿Deseas eliminar este producto de la cesta?
        </h2>
        <Info img={producto.img} txt={producto.titulo} />

        <p className="tw-text-slate-400 dark:tw-text-slate-200 my-6 tw-text-center tw-animate-pulse">
          Esta acción no se puede deshacer.
        </p>
        <div className="tw-flex tw-justify-end tw-gap-4">
          <button
            onClick={onClose}
            className="tw-w-full tw-px-4 tw-py-2 tw-rounded-lg tw-bg-slate-200 hover:tw-bg-slate-300 dark:tw-text-slate-300 dark:tw-bg-slate-900 dark:hover:tw-bg-slate-950 tw-smooth tw-font-semibold"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="tw-w-full tw-px-4 tw-py-2 tw-rounded-lg tw-bg-red-600 hover:tw-bg-red-700 tw-text-white tw-smooth tw-font-semibold"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default ModalEliminar;
