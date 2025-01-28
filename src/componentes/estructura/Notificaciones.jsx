import { Popover } from "flowbite-react";
import { CiBellOn } from "react-icons/ci";

function Notificaciones() {
  const notificaciones = [
    {
      id: 0,
      titulo: "Vuelve a estar disponible",
      texto:
        "La reserva de Barcelona-Italia vuelve a estar disponible, reservalo ya para que no te quedes sin. porfa?",
    },
    {
      id: 1,
      titulo: "Error en reserva",
      texto: "Hola que tal estas jajaj ",
    },
    {
      id: 2,
      titulo: "Reserva completado",
      texto: "Hola que tal estas jajaj",
    },
    {
      id: 4,
      titulo: "Agotado",
      texto:
        "El billete reservado para el día 27 de octubre para las entradas al festival de programación se han agotado. :(",
    },
  ];

  return (
    <Popover
      aria-labelledby="profile-popover"
      content={
        <div className="tw-w-96 tw-p-3 tw-bg-white dark:tw-bg-slate-800">
          <div className="tw-border-b-2 tw-border-slate-100 tw-pb-2 tw-mb-2 tw-flex tw-items-center tw-justify-between">
            <span className="tw-font-bold text-primary dark:tw-text-slate-100">
              Notificaciones
            </span>
            <img
              className="tw-h-10 tw-w-16 tw-rounded-full"
              src="../../dit.png"
              alt="Jese Leos"
            />
          </div>
          <div>
            {notificaciones.map((notificacion) => (
              <div
                key={notificacion.id}
                className="tw-bg-slate-50 hover:tw-bg-gray-200 dark:tw-bg-slate-700 dark:hover:tw-bg-slate-600 tw-transition tw-cursor-pointer tw-rounded-xl tw-mt-2 tw-p-2 tw-pt-1 tw-shadow-sm tw-grid tw-grid-cols-6 tw-items-center tw-space-x-2"
              >
                <div className="tw-bg-slate-700 dark:tw-bg-slate-800 tw-rounded-full tw-border tw-text-white tw-border-slate-300 dark:tw-border-slate-800 tw-flex tw-justify-center tw-items-center tw-w-10 tw-h-10">
                  <CiBellOn className="tw-text-3xl" />
                </div>
                <div className="tw-col-span-5">
                  <h3 className="tw-text-sm tw-font-semibold text-secondary dark:tw-text-slate-100">
                    {notificacion.titulo}
                  </h3>
                  <p className="tw-text-xs tw-line-clamp-2 tw-text-slate-500 dark:tw-text-slate-300">
                    {notificacion.texto}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      }
    >
      <div className="tw-relative tw-text-slate-400 tw-cursor-pointer hover:text-secondary tw-transition tw-flex tw-items-center tw-rounded-full tw-justify-center tw-h-10">
        <CiBellOn className="tw-text-4xl" />
        <div className="tw-absolute tw-select-none -tw-top-1 tw-left-4 tw-text-sm bg-secondary tw-text-white tw-rounded-full tw-w-5 tw-flex tw-justify-center tw-items-center tw-font-bold">
          {notificaciones.length}
        </div>
      </div>
    </Popover>
  );
}

export default Notificaciones;
