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
    <section className="mt-10 shadow-lg hover:shadow-xl transition duration-300 border dark:bg-slate-800 bg-slate-50 p-5 border-slate-200 dark:border-slate-700  rounded-lg">
      <section className="flex justify-between items-center border-b-2 border-slate-100 dark:border-slate-700 pb-2 mb-5">
        <div>
          <h3 className="text-lg font-bold dark:text-white">
            {producto.titulo}
          </h3>
          <p className="text-slate-500 dark:text-slate-300 flex gap-2 items-center">
            {formatearFecha(selectedDate)} - {formatearFecha(endDate)}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <GiCruiser className="text-xl text-secondary dark:text-secondaryDark" />
          <span className="text-secondary dark:text-secondaryDark font-bold">
            {selectedPrice.toFixed(2)}€
          </span>
        </div>
      </section>
      <section className="border-2 p-3 border-slate-100 dark:border-slate-700">
        <h4 className="font-bold text-slate-700 dark:text-slate-200">
          {pasajeros.length}x Pasajero{pasajeros.length > 1 ? "s" : ""}{" "}
        </h4>
        <div className="flex flex-wrap gap-10">
          {pasajeros.map((pasajero, index) => (
            <div
              className="bg-slate-100 dark:bg-slate-700 dark:text-slate-300 shadow rounded-lg p-2 flex items-center gap-2"
              key={pasajero.id}
            >
              <FaUser />
              <p>
                <span className="font-bold"> Pasajero {index + 1} </span>-{" "}
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
