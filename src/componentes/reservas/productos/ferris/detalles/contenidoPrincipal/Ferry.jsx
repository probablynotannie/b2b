import extractFechaHora from "../../../../../../assets/scripts/extractDateAndTime.js";
import Datos from "../../../../../../helpers/visuales/DatoTituloIcono";
import { FaCalendarAlt } from "react-icons/fa";
import formatearFecha from "../../../../../../assets/scripts/formatearFecha.js";
import { IoMdClock } from "react-icons/io";
import calcularDuracion from "../../../../../../assets/scripts/calcularDuracion.js";

function Ferry({ ferry, tipo }) {
  const { fecha: fecha_salida, hora: horaIda } = extractFechaHora(
    ferry.fecha_salida
  );
  const { fecha: fecha_llegada, hora: horaLlegada } = extractFechaHora(
    ferry.fecha_llegada
  );
  const duracionViaje = calcularDuracion(
    ferry.fecha_salida,
    ferry.fecha_llegada
  );
  return (
    <div className="tw-bg-slate-50 dark:tw-bg-slate-800 tw-p-3 tw-rounded-lg">
      <div className="tw-flex tw-justify-between tw-items-center tw-border-b tw-border-slate-100 dark:tw-border-slate-700 tw-pb-2 dark:tw-text-white tw-font-semibold">
        <h3>Ferry de {tipo}</h3>
        <span>{duracionViaje}</span>
      </div>
      <div className="tw-p-4 tw-grid tw-grid-cols-2 tw-gap-5">
        <Datos
          icon={
            <FaCalendarAlt className="tw-text-cyan-500 dark:tw-text-cyan-500" />
          }
          title={"Fecha salida"}
          value={formatearFecha(fecha_salida)}
        />
        <Datos
          icon={
            <IoMdClock className="tw-text-pink-400 dark:tw-text-pink-400 tw-text-2xl" />
          }
          title={"Hora salida"}
          value={horaIda}
        />
        <Datos
          icon={
            <FaCalendarAlt className="tw-text-cyan-700 dark:tw-text-cyan-700" />
          }
          title={"Fecha llegada"}
          value={formatearFecha(fecha_llegada)}
        />
        <Datos
          icon={
            <IoMdClock className="tw-text-pink-600 dark:tw-text-pin-600 tw-text-2xl" />
          }
          title={"Hora llegada"}
          value={horaLlegada}
        />
      </div>
    </div>
  );
}

export default Ferry;
