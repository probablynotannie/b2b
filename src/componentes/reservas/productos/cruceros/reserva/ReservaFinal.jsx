import { useLocation } from "react-router-dom";
import FormatearFecha from "../../../estructura/FormatearFecha";
import { SiMentorcruise } from "react-icons/si";
import Reserva from "../../../estructura/reserva/Resumen";
import { Link } from "react-router-dom";
import Detalles from "./Detalles";
import DatosContacto from "../../../estructura/DatosContacto";
function ReservaFinal() {
  const location = useLocation();
  const { data, producto, precioSeleccionado, pasajeros } =
    location.state || {};

  const getCruiseImage = (producto) => {
    if (producto.barco?.img_header_embarcacion) {
      return producto.barco.img_header_embarcacion;
    }
    const firstAvailablePortImage = producto.itin_dias
      .map((dia) => dia.puerto?.img_puerto_header)
      .find((img) => img && img.trim() !== "");
    return firstAvailablePortImage;
  };
  const cruiseImage = getCruiseImage(producto);
  const basePricePerPassenger = Number(precioSeleccionado.price);
  const taxesPerPassenger = Number(precioSeleccionado.datos.tasas);
  const totalPricePerPassenger = basePricePerPassenger + taxesPerPassenger;
  const totalPrice = totalPricePerPassenger * pasajeros.length;

  return (
    <main className="tw-grid lg:tw-grid-cols-3 tw-min-h-[55vh] tw-items-start tw-container tw-gap-y-10 tw-my-10 lg:tw-gap-12">
      <section className="tw-col-span-2 tw-shadow-lg hover:tw-shadow-xl tw-transition tw-duration-300 tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-200 dark:tw-border-slate-700 dark:tw-bg-slate-900 tw-p-5">
        <div className="tw-flex tw-justify-between tw-items-center tw-border-b-2 tw-border-slate-100 dark:tw-text-slate-200 dark:tw-border-slate-800 tw-pb-2">
          <h1 className="tw-font-bold">
            Barco - {producto.barco.nombre.texto}
          </h1>
        </div>
        <DatosContacto
          nombre={data.nombre}
          apellidos={data.apellido}
          email={data.email}
          numero={data.numero}
        />
        <Detalles producto={producto} />
      </section>
      <article className="tw-sticky tw-top-24 tw-col-span-2 lg:tw-col-span-1 tw-shadow-lg hover:tw-shadow-xl tw-transition tw-duration-300 tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-100 dark:tw-border-slate-800 dark:tw-bg-slate-900 tw-p-5">
        <h2 className="tw-font-semibold tw-border-b-2 tw-border-slate-100 dark:tw-text-slate-200 dark:tw-border-slate-700 tw-pb-2">
          Resumen
        </h2>
        <Reserva
          img={"//pic-2.vpackage.net/cruceros_img/" + cruiseImage}
          txt={producto.barco.nombre.texto}
        />

        <ul className="tw-mt-3 tw-text-sm dark:tw-text-white">
          <li className="tw-text-start tw-flex tw-items-center tw-gap-1">
            <SiMentorcruise className="tw-text-secondary tw-text-lg" />
            {FormatearFecha(precioSeleccionado.date)}
          </li>
        </ul>

        {pasajeros.map((pasajero, index) => {
          const discountedPrice = precioSeleccionado.price.toFixed(2);
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
              </div>
              <span className="dark:tw-text-white tw-font-semibold">
                Total:{" "}
                {(
                  Number(discountedPrice) +
                  Number(precioSeleccionado.datos.tasas)
                ).toFixed(2)}
                €
              </span>
            </div>
          );
        })}

        <Link
          to={"/resumenCrucero"}
          state={{
            data,
            producto,
            pasajeros,
          }}
        >
          <button className="tw-w-full tw-bg-secondary dark:tw-bg-green-600 tw-rounded-lg hover:tw-shadow-lg tw-transition tw-duration-300 tw-text-white tw-p-3 tw-font-semibold tw-mt-2">
            TOTAL: {totalPrice.toFixed(2)} €
          </button>
        </Link>
      </article>
    </main>
  );
}
export default ReservaFinal;
