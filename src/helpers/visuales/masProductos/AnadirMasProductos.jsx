import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ConfirmModal = ({ setModalOpen, isOpen, masProductos, onConfirm }) => {
  const navigate = useNavigate();

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
    {
      id: 1,
      img: "/banners/banner_hoteles.webp",
      link: "/listadoHoteles",
      titulo: "Hotel",
    },
    {
      id: 2,
      img: "/banners/banner_hoteles.webp",
      link: "/listadoDestinos",
      titulo: "Destinos",
    },
    {
      id: 3,
      img: "/banners/banner_cruise.webp",
      link: "/listadocruceros",
      titulo: "Cruceros",
    },
    {
      id: 4,
      img: "/banners/banner_coches.webp",
      link: "/listadoTransfers",
      titulo: "Transfers",
    },
    {
      id: 5,
      img: "/banners/banner_coches.webp",
      link: "/listadoCoches",
      titulo: "Coches",
    },
    {
      id: 6,
      img: "/banners/banner_hoteles.webp",
      link: "/listadoTickets",
      titulo: "Tickets",
    },
    {
      id: 7,
      img: "/banners/banner_entradas.webp",
      link: "/listadoEntradas",
      titulo: "Entradas",
    },
    {
      id: 8,
      img: "/banners/banner_ferry.webp",
      link: "/listadoFerris",
      titulo: "Ferris",
    },
    {
      id: 9,
      img: "/banners/banner_trenes.webp",
      link: "/listadoTrenes",
      titulo: "Tren",
    },
    {
      id: 10,
      img: "/banners/banner_seguros.webp",
      link: "/listadoSeguros",
      titulo: "Seguro",
    },
    {
      id: 11,
      img: "/banners/banner_avion.webp",
      link: "/listadoVuelos",
      titulo: "Vuelo",
    },
    {
      id: 12,
      img: "/banners/banner_circuitos.webp",
      link: "/listadoCircuitos",
      titulo: "Circuito",
    },
  ];
  function continuar(producto) {
    masProductos();
    navigate(producto.link);
  }
  function cestaSinAdicionales() {
    masProductos();
    navigate("/cesta");
  }

  return (
    <div className="tw-fixed tw-inset-0 tw-bg-black/50 tw-z-50 tw-flex tw-items-center tw-justify-center tw-p-4">
      <div className="tw-bg-white dark:tw-bg-slate-800 tw-rounded-xl tw-shadow-2xl tw-max-w-3xl tw-w-full tw-relative">
        <div className="tw-flex tw-justify-between tw-items-center tw-p-5 dark:tw-bg-slate-900 tw-border-b tw-border-slate-100 tw-bg-slate-50 dark:tw-border-slate-700">
          <h2 className="tw-text-2xl tw-font-semibold tw-mb-2 dark:tw-text-white">
            ¿Te gustaría añadir más productos?
          </h2>
          <button
            onClick={() => setModalOpen(false)}
            className="tw-p-2 tw-text-slate-400 hover:tw-text-black dark:hover:tw-text-white tw-text-xl"
            aria-label="Cerrar"
          >
            &times;
          </button>
        </div>
        <div className="tw-p-6 sm:tw-p-8">
          <p className="tw-text-slate-600 dark:tw-text-slate-300 tw-mb-6">
            Puedes añadir más productos a tu reserva o continuar.
          </p>
          <div className="tw-grid tw-grid-cols-2 sm:tw-grid-cols-3 md:tw-grid-cols-4 tw-gap-4 tw-pb-2">
            {otrosProductos.map((producto) => (
              <div
                onClick={() => continuar(producto)}
                key={producto.id}
                className="tw-relative tw-rounded-lg tw-overflow-hidden tw-shadow hover:tw-scale-[1.02] tw-transition-transform tw-cursor-pointer"
              >
                <img
                  src={producto.img}
                  alt={producto.titulo}
                  className="tw-object-cover tw-w-full tw-h-[100px]"
                />
                <div className="tw-absolute tw-inset-0 tw-bg-black/50 hover:tw-bg-black/60 tw-smooth tw-flex tw-items-center tw-justify-center">
                  <span className="tw-text-white tw-font-bold tw-text-center tw-text-sm tw-px-2">
                    {producto.titulo}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="tw-mt-6 tw-flex tw-flex-col sm:tw-flex-row tw-justify-end tw-gap-3 tw-border-t-2 tw-border-slate-100 dark:tw-border-slate-700 tw-pt-4">
            <button
              onClick={cestaSinAdicionales}
              className="tw-bg-slate-600 hover:tw-bg-slate-700 dark:tw-bg-slate-700 dark:hover:tw-bg-slate-600 tw-smooth tw-text-white tw-font-semibold tw-px-4 tw-py-2 tw-rounded-lg tw-text-sm"
            >
              Añadir e ir a la cesta
            </button>
            <button
              onClick={onConfirm}
              className="tw-btn_primario tw-smooth tw-text-white tw-font-semibold tw-px-4 tw-py-2 tw-rounded-lg tw-text-sm"
            >
              Solo este producto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
