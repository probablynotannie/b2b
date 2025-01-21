import { useLocation } from "react-router-dom";
import FormatearFecha from "../../../estructura/FormatearFecha";
import { SiMentorcruise } from "react-icons/si";
import Reserva from "../../../estructura/reserva/Resumen";
import { Link } from "react-router-dom";
import Detalles from "./Detalles";
import DatosContacto from "../../../estructura/DatosContacto";
function ReservaFinal() {
  const location = useLocation();
  const {
    datosContacto,
    producto,
    cabinPhotos,
    pasajeros,
    selectedDate,
    endDate,
    selectedPrice,
  } = location.state || {};
  return (
    <main className="grid lg:grid-cols-3 min-h-[55vh] items-start container gap-y-10 my-10 lg:gap-12">
      <section className="col-span-2 shadow-lg hover:shadow-xl transition duration-300 rounded-lg min-h-[15vh] border border-slate-200 dark:border-slate-700 dark:bg-slate-900 p-5">
        <div className="flex justify-between items-center  border-b-2 border-slate-100 dark:text-slate-200 dark:border-slate-800 pb-2">
          <h1 className="font-bold">Crucero {producto.titulo}</h1>
          <img
            src={producto.logo}
            className="w-[60px] rounded-full"
            alt={producto.nombreCrucero}
          />
        </div>
        <DatosContacto
          nombre={datosContacto.nombre}
          apellidos={datosContacto.apellido}
          email={datosContacto.email}
          numero={datosContacto.numero}
        />
        <Detalles
          datosContacto={datosContacto}
          cabinPhotos={cabinPhotos}
          producto={producto}
        />
      </section>
      <article className="sticky top-24 col-span-2 lg:col-span-1 shadow-lg hover:shadow-xl transition duration-300 rounded-lg min-h-[15vh] border border-slate-100  dark:border-slate-800 dark:bg-slate-900 p-5">
        <h2 className="font-semibold border-b-2 border-slate-100 dark:text-slate-200 dark:border-slate-700 pb-2">
          Resumen
        </h2>
        <Reserva img={producto.crucero} txt={producto.titulo} />

        <ul className="mt-3 text-sm dark:text-white">
          <li className="text-start flex items-center gap-1">
            <SiMentorcruise className="text-secondary text-lg" />
            {FormatearFecha(selectedDate)}
          </li>
          <li className="text-end flex items-center justify-end gap-1">
            {endDate ? FormatearFecha(endDate) : "Fecha no seleccionada"}
            <SiMentorcruise className="text-secondary text-lg" />
          </li>
        </ul>
        {pasajeros.map((pasajero, index) => {
          const discount = pasajero.discount || 0;
          const discountedPrice = (
            selectedPrice *
            (1 - discount / 100)
          ).toFixed(2);
          return (
            <div
              key={index}
              className="border-b flex text-sm justify-between items-end dark:border-slate-700 py-2"
            >
              <div>
                <h4 className="dark:text-white font-semibold text-base">
                  Pasajero {index + 1}
                </h4>
                <span className="dark:text-slate-300 block text-sm">
                  Edad: {pasajero.age}
                </span>
                <span className="dark:text-slate-300 text-sm">
                  Descuento: {discount}%
                </span>
              </div>
              <span className="dark:text-white font-semibold">
                Total: {discountedPrice}€
              </span>
            </div>
          );
        })}
        <Link
          to={"/resumenCrucero"}
          state={{
            datosContacto,
            producto,
            cabinPhotos,
            pasajeros,
            selectedDate,
            endDate,
            selectedPrice,
          }}
        >
          <button className="w-full bg-secondary dark:bg-green-600 rounded-lg  hover:shadow-lg transition duration-300 text-white p-3 font-semibold mt-2">
            {pasajeros
              .reduce((total, pasajero) => {
                const discount = pasajero.discount || 0;
                const discountedPrice = selectedPrice * (1 - discount / 100);
                return total + discountedPrice;
              }, 0)
              .toFixed(2)}
            €
          </button>
        </Link>
      </article>
    </main>
  );
}
export default ReservaFinal;
