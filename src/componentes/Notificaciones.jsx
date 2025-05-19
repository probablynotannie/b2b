import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const notificacionesData = [
  {
    id: 1,
    titulo: "¡Viaje a París confirmado!",
    resumen: "Tu vuelo del 20 de junio a París ha sido confirmado.",
    detalle:
      "¡Buen viaje! Tu vuelo a París está confirmado para el 20 de junio a las 10:30 AM desde el Aeropuerto Internacional de Madrid (MAD), terminal 4, puerta B12. Recuerda tener tu pasaporte vigente y presentarte con al menos 2 horas de antelación para el embarque.",
  },
  {
    id: 2,
    titulo: "Check-in disponible para Roma",
    resumen: "Haz tu check-in para el vuelo del 18 de junio.",
    detalle:
      "Ya puedes hacer el check-in en línea para tu vuelo con destino a Roma el 18 de junio a las 14:45 PM. El embarque comenzará 40 minutos antes en la puerta C5. Se recomienda llevar tu tarjeta de embarque digital para agilizar el acceso.",
  },
  {
    id: 3,
    titulo: "Cambio de puerta - Vuelo a Ámsterdam",
    resumen: "Tu puerta de embarque ha cambiado a D3.",
    detalle:
      "Atención: tu vuelo a Ámsterdam programado para el 21 de junio a las 16:00 PM saldrá ahora desde la puerta D3 en lugar de B8. Llega con tiempo para evitar retrasos y revisa las pantallas del aeropuerto ante posibles actualizaciones.",
  },
  {
    id: 4,
    titulo: "Retraso en vuelo a Berlín",
    resumen: "Tu vuelo ha sido retrasado 1 hora.",
    detalle:
      "Lamentamos informarte que tu vuelo a Berlín ha sido retrasado. La nueva hora de salida es a las 18:30 PM. Te recomendamos mantenerte informado a través de la app y aprovechar los espacios de descanso en la terminal.",
  },
  {
    id: 5,
    titulo: "Actualización del itinerario - Lisboa",
    resumen: "Se ha modificado el horario del traslado terrestre.",
    detalle:
      "El traslado en autobús desde el aeropuerto de Lisboa a tu hotel ahora será a las 20:15 PM, 30 minutos más tarde de lo previsto. El punto de encuentro será la salida de llegadas, zona B.",
  },
  {
    id: 6,
    titulo: "Documentación incompleta",
    resumen: "Faltan documentos para tu vuelo a Nueva York.",
    detalle:
      "Hemos detectado que no has subido tu comprobante de vacunación COVID-19. Este documento es obligatorio para ingresar a EE.UU. Sube el archivo a tu perfil antes del 22 de junio para evitar problemas en el check-in.",
  },
  {
    id: 7,
    titulo: "Equipaje listo para recogida",
    resumen: "Tu equipaje ha llegado a Barcelona.",
    detalle:
      "Tu equipaje del vuelo desde Viena ha sido procesado correctamente y ya está disponible para recogida en la cinta 7 del área de llegadas del aeropuerto de Barcelona. Verifica el número de etiqueta si tienes más de una maleta registrada.",
  },
  {
    id: 8,
    titulo: "Asiento confirmado - Ventana",
    resumen: "Te asignamos el asiento 14A en tu vuelo a Praga.",
    detalle:
      "¡Listo! Has sido asignado al asiento 14A, junto a la ventana, para tu vuelo a Praga del 25 de junio. Puedes cambiarlo hasta 24 horas antes de la salida desde la sección 'Mis viajes'.",
  },
  {
    id: 9,
    titulo: "Vuelo cancelado - Estocolmo",
    resumen: "Tu vuelo ha sido cancelado por condiciones climáticas.",
    detalle:
      "Por motivos de seguridad debido a tormentas eléctricas, el vuelo con destino a Estocolmo ha sido cancelado. Puedes reprogramarlo sin costo adicional o solicitar un reembolso desde la sección de soporte. Sentimos las molestias.",
  },
];

function Notificaciones() {
  const [seleccionada, setSeleccionada] = useState(null);
  const handleSelect = (n) => setSeleccionada();
  const handleBack = () => setSeleccionada(null);

  return (
    <div className="tw-container tw-p-4 tw-my-10">
      <h1 className="tw-font-bold tw-text-2xl tw-mb-2 dark:tw-text-slate-100">
        Notificaciones
      </h1>
      <div className="md:tw-grid md:tw-grid-cols-5 tw-border dark:tw-border-slate-700 tw-border-slate-100 tw-gap-4 tw-bg-slate-50 dark:tw-bg-slate-800 tw-rounded-lg tw-shadow-md hover:tw-shadow-lg tw-smooth md:tw-h-[60vh] tw-overflow-hidden">
        <div
          className={` tw-flex tw-p-3 tw-flex-col tw-items-center tw-col-span-2 lg:tw-col-span-1 tw-space-y-2 tw-overflow-y-auto tw-pr-3 tw-border-r dark:tw-border-slate-700 
            ${
              seleccionada && window.innerWidth < 768 ? "tw-hidden" : "tw-block"
            } md:tw-block`}
        >
          {notificacionesData.map((n) => (
            <div
              key={n.id}
              className={`tw-cursor-pointer tw-w-full tw-p-3 tw-bg-white tw-border dark:tw-bg-slate-900 tw-smooth tw-rounded-md tw-shadow-sm hover:tw-shadow-md hover:tw-bg-blue-50 dark:hover:tw-bg-slate-950 ${
                seleccionada?.id === n.id
                  ? "tw-border-l-4 dark:tw-border-slate-700 dark:tw-border-l-blue-500 tw-border-l-blue-500"
                  : " tw-border-slate-100 dark:tw-border-slate-700"
              }`}
              onClick={() => handleSelect(n)}
            >
              <h4 className="tw-font-semibold dark:tw-text-slate-100">
                {n.titulo}
              </h4>
              <p className="tw-text-sm tw-text-gray-500 dark:tw-text-slate-400">
                {n.resumen}
              </p>
            </div>
          ))}
        </div>
        {seleccionada && (
          <div className="tw-col-span-3 lg:tw-col-span-4 tw-pl-4 tw-p-2 tw-overflow-y-auto ">
            <button
              onClick={handleBack}
              className="md:tw-hidden tw-mb-4  tw-text-secondary dark:tw-text-secondaryDark tw-font-bold hover:tw-scale-105 tw-smooth tw-flex tw-items-center tw-gap-1"
            >
              <FaArrowLeft /> Volver
            </button>
            <h2 className="tw-text-2xl tw-font-bold tw-mb-2 dark:tw-text-slate-100 ">
              {seleccionada.titulo}
            </h2>
            <p className="tw-text-gray-700 dark:tw-text-slate-300 tw-bg-white dark:tw-bg-slate-900 tw-h-[90%] tw-w-[98%] tw-rounded-lg tw-p-3">
              {seleccionada.detalle}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Notificaciones;
