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
    <main className="tw-grid lg:tw-grid-cols-3 tw-min-h-[55vh] tw-items-start tw-container tw-gap-y-10 tw-my-10 lg:tw-gap-12">
      <section className="tw-col-span-2 tw-shadow-lg hover:tw-shadow-xl tw-transition tw-duration-300 tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-200 dark:tw-border-slate-700 dark:tw-bg-slate-900 tw-p-5">
        <div className="tw-flex tw-justify-between tw-items-center tw-border-b-2 tw-border-slate-100 dark:tw-text-slate-200 dark:tw-border-slate-800 tw-pb-2">
          <h1 className="tw-font-bold">Crucero {producto.titulo}</h1>
          <img
            src={producto.logo}
            className="tw-w-[60px] tw-rounded-full"
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
      <article className="tw-sticky tw-top-24 tw-col-span-2 lg:tw-col-span-1 tw-shadow-lg hover:tw-shadow-xl tw-transition tw-duration-300 tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-100 dark:tw-border-slate-800 dark:tw-bg-slate-900 tw-p-5">
        <h2 className="tw-font-semibold tw-border-b-2 tw-border-slate-100 dark:tw-text-slate-200 dark:tw-border-slate-700 tw-pb-2">
          Resumen
        </h2>
        <Reserva img={producto.crucero} txt={producto.titulo} />

        <ul className="tw-mt-3 tw-text-sm dark:tw-text-white">
          <li className="tw-text-start tw-flex tw-items-center tw-gap-1">
            <SiMentorcruise className="tw-text-secondary tw-text-lg" />
            {FormatearFecha(selectedDate)}
          </li>
          <li className="tw-text-end tw-flex tw-items-center tw-justify-end tw-gap-1">
            {endDate ? FormatearFecha(endDate) : "Fecha no seleccionada"}
            <SiMentorcruise className="tw-text-secondary tw-text-lg" />
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
              className="tw-border-b tw-flex tw-text-sm tw-justify-between tw-items-end dark:tw-border-slate-700 tw-py-2"
            >
              <div>
                <h4 className="dark:tw-text-white tw-font-semibold tw-text-base">
                  Pasajero {index + 1}
                </h4>
                <span className="dark:tw-text-slate-300 tw-block tw-text-sm">
                  Edad: {pasajero.age}
                </span>
                <span className="dark:tw-text-slate-300 tw-text-sm">
                  Descuento: {discount}%
                </span>
              </div>
              <span className="dark:tw-text-white tw-font-semibold">
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
          <button className="tw-w-full tw-bg-secondary dark:tw-bg-green-600 tw-rounded-lg hover:tw-shadow-lg tw-transition tw-duration-300 tw-text-white tw-p-3 tw-font-semibold tw-mt-2">
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
