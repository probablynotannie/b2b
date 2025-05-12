import { useState } from "react";
import { Popover } from "flowbite-react";
import { CiBellOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Notificaciones() {
  const [notificaciones, setNotificaciones] = useState([
    {
      id: 0,
      titulo: "Vuelve a estar disponible",
      texto:
        "La reserva de Barcelona-Italia vuelve a estar disponible. ¡Resérvalo ya antes de que se agote!",
      fecha: "Hace 2h",
    },
    {
      id: 1,
      titulo: "Error en reserva",
      texto:
        "Hubo un problema con tu reserva. Inténtalo de nuevo o contacta con soporte.",
      fecha: "Hace 5h",
    },
    {
      id: 2,
      titulo: "Reserva completada",
      texto: "Tu reserva se ha completado con éxito. ¡Disfruta tu viaje!",
      fecha: "Ayer",
    },
    {
      id: 3,
      titulo: "Agotado",
      texto: "Las entradas para el festival de programación se han agotado. :(",
      fecha: "Hace 2 días",
    },
  ]);
  const navigate = useNavigate();

  const MostrarNotificaciones = () => {
    navigate("/notificaciones", {
      state: {},
    });
  };
  return (
    <Popover
      aria-labelledby="notificaciones-popover"
      content={
        <div className="tw-w-80 tw-p-4 tw-bg-white dark:tw-bg-slate-800 tw-border tw-border-slate-300 dark:tw-border-slate-700 tw-rounded-lg tw-shadow-lg">
          <div className="tw-flex tw-items-center tw-justify-between tw-border-b tw-pb-2 dark:tw-border-slate-700">
            <span className="tw-font-semibold tw-text-slate-700 dark:tw-text-white">
              Notificaciones
            </span>
            <button
              className="tw-text-xs tw-text-primary dark:tw-text-slate-300 hover:tw-underline"
              onClick={() => setNotificaciones([])}
            >
              Marcar todas como leídas
            </button>
          </div>
          <div className="tw-space-y-3 tw-mt-3">
            {notificaciones.length > 0 ? (
              notificaciones.map((notificacion) => (
                <div
                  key={notificacion.id}
                  className="tw-cursor-pointer tw-flex tw-items-center tw-gap-3 tw-p-3 tw-rounded-lg tw-bg-slate-100 dark:tw-bg-slate-700 hover:tw-bg-slate-200 dark:hover:tw-bg-slate-600 tw-transition"
                >
                  <div className="tw-flex-1">
                    <h3 className="tw-text-sm tw-font-medium tw-text-slate-800 dark:tw-text-white">
                      {notificacion.titulo}
                    </h3>
                    <p className="tw-text-xs tw-text-slate-600 dark:tw-text-slate-300 tw-line-clamp-2">
                      {notificacion.texto}
                    </p>
                    <span className="tw-text-[11px] tw-text-slate-500 dark:tw-text-slate-400 tw-block tw-text-end">
                      {notificacion.fecha}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p className="tw-text-center tw-text-slate-500 dark:tw-text-slate-400 tw-text-sm">
                No tienes notificaciones nuevas.
              </p>
            )}
            <button
            onClick={MostrarNotificaciones}
            className="tw-btn_accesorios tw-btn_primario tw-w-full">
              Mostrar todos
            </button>
          </div>
        </div>
      }
    >
      <div className="tw-text-white tw-relative hover:tw-text-secondary tw-transition tw-cursor-pointer dark:tw-bg-slate-700 tw-bg-slate-700 tw-flex tw-items-center tw-justify-center tw-w-[35px] tw-h-[35px] tw-rounded-full tw-text-2xl">
        <CiBellOn className="tw-text-3xl" />
        {notificaciones.length > 0 && (
          <div className="tw-absolute -tw-top-1 tw-right-0 tw-bg-red-500 tw-text-white tw-text-xs tw-font-bold tw-rounded-full tw-w-5 tw-h-5 tw-flex tw-items-center tw-justify-center">
            {notificaciones.length}
          </div>
        )}
      </div>
    </Popover>
  );
}

export default Notificaciones;
