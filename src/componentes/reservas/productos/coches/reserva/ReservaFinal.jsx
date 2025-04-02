import { useLocation } from "react-router-dom";
import { FaUser, FaCar } from "react-icons/fa";
import { MdEmail, MdPhoneAndroid } from "react-icons/md";
import Detalles from "../detalles/Detalles";
import Reserva from "../../../estructura/reserva/Resumen";
import { Link } from "react-router-dom";
function ReservaFinal() {
  const location = useLocation();
  const { producto, selectedExtras, precio, data, conductor } =
    location.state || {};
  return (
    <main className="tw-grid lg:tw-grid-cols-3 tw-min-h-[55vh] tw-items-start tw-container tw-gap-y-10 tw-my-10 lg:tw-gap-12">
      <section className="tw-col-span-2 tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-200 dark:tw-border-slate-700 dark:tw-bg-slate-900 tw-p-5">
        <div className="tw-flex tw-justify-between tw-items-center tw-border-b-2 tw-pb-5 tw-border-slate-100 dark:tw-border-slate-700">
          <h1 className="tw-text-2xl tw-font-bold dark:tw-text-white">
            {producto.nombre}
          </h1>
          <span className="tw-bg-slate-500 tw-rounded-md tw-text-white tw-p-2">
            {producto.tipo}
          </span>
        </div>
        <Detalles coche={producto} />
      </section>
      <article className="tw-sticky tw-top-10 tw-col-span-2 lg:tw-col-span-1 tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-100 dark:tw-border-slate-800 dark:tw-bg-slate-900 tw-p-5">
        <Reserva img={producto.img} txt={producto.nombre} />
        <h2 className="tw-font-semibold tw-border-b-2 tw-border-slate-100 dark:tw-text-slate-200 dark:tw-border-slate-700 tw-pb-2">
          Datos de contacto
        </h2>

        <div className="tw-flex tw-flex-nowrap tw-gap-2 tw-mt-2 tw-items-center tw-text-slate-500 dark:tw-text-slate-400">
          <FaUser className="tw-text-slate-700 dark:tw-text-slate-200" />
          <span>{data.nombre}</span>
          <span>{data.apellido}</span>
        </div>
        <div className="tw-flex tw-flex-nowrap tw-gap-2 tw-mt-2 tw-items-center tw-text-slate-500 dark:tw-text-slate-400">
          <MdEmail className="tw-text-slate-700 dark:tw-text-slate-200" />
          <span>{data.email}</span>
        </div>
        <div className="tw-flex tw-flex-nowrap tw-gap-2 tw-mt-2 tw-items-center tw-text-slate-500 dark:tw-text-slate-400">
          <MdPhoneAndroid className="tw-text-slate-700 dark:tw-text-slate-200" />
          <span>{data.numero}</span>
        </div>
        <h2 className="tw-font-semibold tw-border-b-2 tw-border-slate-100 dark:tw-text-slate-200 dark:tw-border-slate-700 tw-pb-2 tw-mt-3 tw-mb-2">
          Coche y Extras
        </h2>
        <div className="dark:tw-text-slate-300">
          <div className="tw-flex tw-justify-between tw-gap-2 tw-mt-2 tw-items-center">
            <div className="tw-flex tw-items-center">
              <FaCar className="tw-text-slate-700 dark:tw-text-slate-200 tw-mr-1" />
              <span>{producto.nombre}</span>
            </div>
            <span>{producto.dias} días</span>
          </div>
          <div className="tw-flex tw-justify-between tw-gap-2 tw-mt-2 tw-items-center">
            <span>Puertas</span>
            <span> {producto.puertas} </span>
          </div>
          <div>
            <ul>
              {selectedExtras.map((extra, index) => (
                <li key={index} className="tw-flex tw-justify-between">
                  <span>
                    <span className="tw-font-semibold tw-mr-1 dark:tw-text-slate-100">
                      {extra.quantity}x
                    </span>
                    {extra.id === "GPS" && "GPS"}
                    {extra.id === "sillitabebe" && "Sillita bebé"}
                    {extra.id === "sillitaninio" && "Sillita niño"}
                    {extra.id === "elevador" && "Elevador"}
                  </span>
                  <span>{extra.price} €</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <h2 className="tw-font-semibold tw-border-b-2 tw-mt-2 tw-border-slate-100 dark:tw-text-slate-200 dark:tw-border-slate-700 tw-pb-2">
          Datos de conductor
        </h2>
        <div className="tw-flex tw-flex-nowrap tw-gap-2 tw-mt-2 tw-items-center dark:tw-text-slate-100">
          <FaUser className="tw-text-slate-700 dark:tw-text-slate-200" />
          <span>
            {conductor.nombre} {conductor.apellido}
          </span>
        </div>
        <p className="tw-text-sm tw-text-red-400 dark:tw-text-danger tw-mt-2">
          Comprueba los datos de contacto para poder comunicar cualquier cambio
          con la resera.
        </p>
        <Link
          to={"/resumenCoche"}
          state={{ producto, selectedExtras, precio, data, conductor }}
        >
          <button className=" tw-btn_accesorios tw-btn_primario tw-w-full">
            {precio.toFixed(2)}€
          </button>
        </Link>
      </article>
    </main>
  );
}

export default ReservaFinal;
