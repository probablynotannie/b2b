import { useEffect } from "react";

const ConfirmModal = ({ setModalOpen, isOpen, onAltAction, onConfirm }) => {
  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const otrosProductos = [
    { id: 1, img: "/banners/banner_hoteles.webp", titulo: "Hotel" },
    { id: 2, img: "/banners/banner_hoteles.webp", titulo: "Destinos" },
    { id: 3, img: "/banners/banner_cruise.webp", titulo: "Cruceros" },
    { id: 4, img: "/banners/banner_coches.webp", titulo: "Transfers" },
    { id: 5, img: "/banners/banner_coches.webp", titulo: "Coches" },
    { id: 6, img: "/banners/banner_hoteles.webp", titulo: "Tickets" },
    { id: 7, img: "/banners/banner_entradas.webp", titulo: "Entradas" },
    { id: 8, img: "/banners/banner_ferry.webp", titulo: "Ferris" },
    { id: 9, img: "/banners/banner_trenes.webp", titulo: "Tren" },
    { id: 10, img: "/banners/banner_seguros.webp", titulo: "Seguro" },
    { id: 11, img: "/banners/banner_avion.webp", titulo: "Vuelo" },
    { id: 12, img: "/banners/banner_circuitos.webp", titulo: "Circuito" },
    { id: 13, img: "/banners/banner_avion.webp", titulo: "Hotel + vuelo" },
    {
      id: 14,
      img: "/banners/banner_hoteles.webp",
      titulo: "Hotel + actividades",
    },
    { id: 15, img: "/banners/banner_ferry.webp", titulo: "Hotel + ferry" },
  ];

  return (
    <div className="tw-fixed tw-inset-0 tw-bg-black/50 tw-z-50 tw-flex tw-items-center tw-justify-center tw-p-4">
      <div className="tw-bg-white dark:tw-bg-slate-800 tw-rounded-xl tw-shadow-2xl tw-max-w-3xl tw-w-full tw-relative">
        <button
          onClick={() => setModalOpen(false)}
          className="tw-absolute tw-top-4 tw-right-4 tw-text-gray-400 hover:tw-text-black dark:hover:tw-text-white tw-text-xl"
          aria-label="Cerrar"
        >
          &times;
        </button>
        <div className="tw-p-6 sm:tw-p-8">
          <h2 className="tw-text-2xl tw-font-semibold tw-mb-2">
            ¿Qué te gustaría hacer ahora?
          </h2>
          <p className="tw-text-gray-600 dark:tw-text-slate-300 tw-mb-6">
            Puedes añadir más productos a tu reserva o continuar.
          </p>
          <div className="tw-grid tw-grid-cols-2 sm:tw-grid-cols-3 md:tw-grid-cols-4 tw-gap-4 tw-pb-2">
            {otrosProductos.map((producto) => (
              <div
                key={producto.id}
                className="tw-relative tw-rounded-lg tw-overflow-hidden tw-shadow hover:tw-scale-[1.02] tw-transition-transform"
              >
                <img
                  src={producto.img}
                  alt={producto.titulo}
                  className="tw-object-cover tw-w-full tw-h-[100px]"
                />
                <div className="tw-absolute tw-inset-0 tw-bg-black/50 tw-flex tw-items-center tw-justify-center">
                  <span className="tw-text-white tw-font-bold tw-text-center tw-text-sm tw-px-2">
                    {producto.titulo}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="tw-mt-6 tw-flex tw-flex-col sm:tw-flex-row tw-justify-end tw-gap-3">
            <button
              onClick={onAltAction}
              className="tw-bg-gray-200 hover:tw-bg-gray-300 dark:tw-bg-slate-600 dark:hover:tw-bg-slate-700 tw-px-4 tw-py-2 tw-rounded-lg tw-text-sm"
            >
              Añadir más productos
            </button>
            <button
              onClick={onConfirm}
              className="tw-bg-blue-600 hover:tw-bg-blue-700 tw-text-white tw-px-4 tw-py-2 tw-rounded-lg tw-text-sm"
            >
              Solo añadir este producto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
