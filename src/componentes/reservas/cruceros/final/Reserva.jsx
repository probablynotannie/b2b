import Pasajeros from "../reserva/Pasajeros";
import {
  FaCalendarAlt,
  FaCircle,
  FaMoneyBillWave,
  FaQrcode,
  FaShip,
} from "react-icons/fa";
import DatoTituloIcono from "../../../../helpers/visuales/DatoTituloIcono";
function Reserva({ reserva, pasajeros }) {
  return (
    <div>
      <section className="tw-p-6 dark:tw-bg-slate-900 tw-mx-auto tw-space-y-6">
        <div className="tw-grid tw-gap-6 md:tw-grid-cols-2 tw-bg-slate-100 tw-p-5 tw-rounded-lg tw-border tw-border-slate-200/70">
          <DatoTituloIcono
            icon={<FaCalendarAlt className="tw-text-indigo-500" />}
            title={"Fecha Limite Emisión"}
            value={reserva.FechaLimiteEmision}
          />
          <DatoTituloIcono
            icon={<FaCalendarAlt className="tw-text-indigo-500" />}
            title={"Fecha Limite Pago"}
            value={reserva.FechaLimitePago}
          />
          <DatoTituloIcono
            icon={<FaMoneyBillWave className="tw-text-pink-500" />}
            title={"Importe Total"}
            value={reserva.importe}
          />
          <DatoTituloIcono
            icon={<FaMoneyBillWave className="tw-text-blue-500" />}
            title={"Importe Neto"}
            value={reserva.importeNeto}
          />
          <DatoTituloIcono
            icon={<FaMoneyBillWave className="tw-text-indigo-500" />}
            title={"Comisión Agencia"}
            value={reserva.comisionAgencia}
          />
          <DatoTituloIcono
            icon={<FaMoneyBillWave className="tw-text-cyan-500" />}
            title={"Comisión DIT"}
            value={reserva.comisionDit}
          />

          <DatoTituloIcono
            icon={<FaMoneyBillWave className="tw-text-green-500" />}
            title={"Importe Pagado"}
            value={reserva.importePagado}
          />
          <DatoTituloIcono
            icon={<FaShip className="tw-text-blue-500" />}
            title={"Nombre itinerario"}
            value={reserva.nombre}
          />
          <DatoTituloIcono
            icon={<FaQrcode className="tw-text-purple-500" />}
            title={"Orden"}
            value={reserva.orden}
          />
          <DatoTituloIcono
            icon={<FaCircle className="tw-text-orange-500" />}
            title={"Estado"}
            value={reserva.estado === 0 ? "Pendiente" : "Procesado"}
          />
        </div>
      </section>
      <Pasajeros pasajeros={pasajeros} />
    </div>
  );
}

export default Reserva;
