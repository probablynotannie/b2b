import FormatearFecha from "../../../../assets/scripts/formatearFecha";
import tarifaNames from "../jsons/TarifaNames";
import calcularDuracion from "../../../../assets/scripts/calcularDuracion";
import extractFechaHora from "../../../../assets/scripts/extractDateAndTime";
function Ferry({ producto, tipo, ferry }) {
  const duracionViajeIda = calcularDuracion(
    producto.fecha_salida,
    producto.fecha_llegada
  );
  const { hora: horaVuelta } = extractFechaHora(producto.fecha_salida);
  const { hora: horaLlegadaVuelta } = extractFechaHora(producto.fecha_llegada);
  return (
    <div className="tw-w-full tw-p-3 tw-border tw-border-slate-100 dark:tw-bg-slate-900 dark:tw-border-slate-700 tw-shadow tw-my-5">
      <div className="tw-flex tw-justify-between tw-items-center tw-border-b tw-pb-3 tw-border-slate-100 dark:tw-border-slate-700 dark:tw-text-slate-100">
        <div>
          <h3 className="tw-flex tw-gap-1 tw-items-center tw-font-semibold">
            Ferry {tipo}
            <span className="tw-text-sm">
              ({producto.puerto_origen} + {producto.puerto_destino})
            </span>
          </h3>
          <p className="tw-text-sm">{FormatearFecha(producto.fecha_llegada)}</p>
        </div>
        <div className="dark:tw-bg-slate-200 tw-p-1 tw-rounded-lg">
          <img
            src={ferry.operador.imagen}
            alt={"logo compania"}
            className="tw-w-[100px]"
          />
        </div>
      </div>
      <div className="tw-bg-slate-100 tw-text-sm dark:tw-bg-slate-900 dark:tw-text-slate-200 tw-p-2">
        <div className="md:tw-flex tw-justify-between tw-items-center">
          <div className="">Duración: {duracionViajeIda}</div>
          <div>
            {horaVuelta} - {horaLlegadaVuelta}
          </div>
        </div>
        <ul>
          <li className="tw-flex tw-items-center tw-gap-1">
            Tipo: <span> {tarifaNames[producto.tipo].Title}</span>
          </li>
          <li className="tw-flex tw-items-center tw-gap-1">
            {tarifaNames[producto.tipo].Descrip}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Ferry;
