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
  ];
  
  return (
    <Popover
      aria-labelledby="profile-popover"
      content={
        <div className="w-72 p-3">
          <div className="border-b-2 border-slate-100 pb-2 mb-2 flex items-center justify-between">
            <span className="font-bold text-primary">Notificaciones</span>
            <img
              className="h-10 w-16 rounded-full"
              src="../../dit.png"
              alt="Jese Leos"
            />
          </div>
          <div>
            {notificaciones.map((notificacion) => (
              <div
                key={notificacion.id}
                className="bg-slate-50 rounded-xl mt-2 p-2 pt-1 shadow-sm grid grid-cols-6 space-x-2"
              >
                <div className="p-2 border-2 rounded-full  col-span-1 flex justify-center items-center">
                  <CiBellOn className="text-3xl " />
                </div>
                <div className="col-span-5">
                  <h3 className="text-sm font-semibold text-secondary">
                    {notificacion.titulo}
                  </h3>
                  <p className="text-xs line-clamp-2 text-slate-500">
                    {notificacion.texto} aefaf
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      }
    >
      <div className="text-slate-400 w-fit cursor-pointer hover:text-secondary transition flex items-center">
        <CiBellOn className="text-3xl" />
      </div>
    </Popover>
  );
}

export default Notificaciones;
