import { FaCar, FaUser } from "react-icons/fa";
import { MdEmail, MdPhoneAndroid } from "react-icons/md";
import { Link } from "react-router-dom";
import Reserva from "../../../../../helpers/visuales/ReservaFinal/Resumen";

function Aside({ data, producto, precio, selectedExtras, conductor }) {
  return (
    <div>
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
      <p className="tw-text-sm tw-text-red-400 dark:tw-text-danger tw-my-2">
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
    </div>
  );
}

export default Aside;
