import { GiCruiser } from "react-icons/gi";
import formatearFecha from "../../../estructura/FormatearFecha";
import Detalles from "../reserva/Detalles";
import { FaUser } from "react-icons/fa6";
function Crucero({
  producto,
  cabinPhotos,
  pasajeros,
  selectedDate,
  endDate,
  selectedPrice,
}) {
  return (
    <section className="tw-mt-10 tw-shadow-lg hover:tw-shadow-xl tw-transition tw-duration-300 tw-border dark:tw-bg-slate-800 tw-bg-slate-50 tw-p-5 tw-border-slate-200 dark:tw-border-slate-700 tw-rounded-lg">
      <section className="tw-flex tw-justify-between tw-items-center tw-border-b-2 tw-border-slate-100 dark:tw-border-slate-700 tw-pb-2 tw-mb-5">
        <div>
          <h3 className="tw-text-lg tw-font-bold dark:tw-text-white">
            {producto.titulo}
          </h3>
          <p className="tw-text-slate-500 dark:tw-text-slate-300 tw-flex tw-gap-2 tw-items-center">
            {formatearFecha(selectedDate)} - {formatearFecha(endDate)}
          </p>
        </div>
        <div className="tw-flex tw-flex-col tw-justify-center tw-items-center">
          <GiCruiser className="tw-text-xl text-secondary dark:tw-text-secondary" />
          <span className="text-secondary dark:tw-text-secondary tw-font-bold">
            {selectedPrice.toFixed(2)}€
          </span>
        </div>
      </section>
      <section className="tw-border-2 tw-p-3 tw-border-slate-100 dark:tw-border dark:tw-border-slate-800">
        <h4 className="tw-font-bold tw-text-slate-700 dark:tw-text-slate-200">
          {pasajeros.length}x Pasajero{pasajeros.length > 1 ? "s" : ""}{" "}
        </h4>
        <div className="tw-flex tw-flex-wrap tw-gap-10">
          {pasajeros.map((pasajero, index) => (
            <div
              className="tw-bg-slate-100 dark:tw-bg-slate-700 dark:tw-text-slate-300 tw-shadow tw-rounded-lg tw-p-2 tw-flex tw-items-center tw-gap-2"
              key={pasajero.id}
            >
              <FaUser />
              <p>
                <span className="tw-font-bold"> Pasajero {index + 1} </span>-{" "}
                {pasajero.age} Años - {pasajero.discount}% descuento
              </p>
            </div>
          ))}
        </div>
      </section>
      <Detalles cabinPhotos={cabinPhotos} producto={producto} />
    </section>
  );
}
export default Crucero;
