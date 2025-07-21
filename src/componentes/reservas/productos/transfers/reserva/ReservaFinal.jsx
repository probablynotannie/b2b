import { useLocation, Link } from "react-router-dom";
import DatosContacto from "../../../../../helpers/visuales/ReservaFinal/DatosContacto";
import Reserva from "../../../../../helpers/visuales/ReservaFinal/Resumen";
import Detalles from "./Detalles";
import { FaArrowRight } from "react-icons/fa";

function ReservaFinal() {
  const location = useLocation();
  const { coche, data } = location.state || {};
  return (
    <main className="tw-grid lg:tw-grid-cols-3 tw-min-h-[55vh] tw-items-start tw-container tw-gap-y-10 tw-my-10 tw-mb-20 lg:tw-gap-12">
      <section className="tw-col-span-2 tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-200 
tw-bg-white dark:tw-border-slate-700 dark:tw-bg-slate-900 tw-p-5">
        <h1 className="tw-text-2xl tw-font-bold dark:tw-text-white tw-items-center tw-border-b-2 tw-pb-5 tw-border-slate-100 dark:tw-border-slate-700">
          {coche.name}
        </h1>
        <DatosContacto
          nombre={data.nombre}
          apellidos={data.apellido}
          numero={data.numero}
          email={data.email}
        />
        <Detalles coche={coche} />
      </section>
      <article className="tw-sticky tw-top-10 tw-col-span-2 lg:tw-col-span-1 tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-100 dark:tw-border-slate-800 tw-bg-white dark:tw-bg-slate-900 tw-p-5">
        <Reserva img={coche.img} txt={coche.name} />
        <div className="tw-flex tw-border-2 tw-border-dashed dark:tw-border-slate-700 tw-text-slate-600 dark:tw-text-slate-400 tw-text-md tw-items-center tw-gap-2 tw-flex-wrap tw-justify-center tw-p-3 tw-my-3">
          {coche.route.origin.name}
          <FaArrowRight className="tw-animate-pulse tw-animate-delay-500 tw-text-black dark:tw-text-secondaryDark" />
          {coche.route.distance} km
          <FaArrowRight className="tw-animate-pulse tw-text-black dark:tw-text-secondaryDark" />
          {coche.route.destination.name}
        </div>
        <p className="tw-text-center dark:tw-text-slate-300">
          Por favor, confirma todos los datos antes de hacer el pago.
        </p>
        <Link to={"/resumenTransfer"} state={{ coche, data }}>
          <button className=" tw-btn_accesorios tw-btn_primario tw-w-full">
            {coche.price.toFixed(2)}€
          </button>
        </Link>
      </article>
    </main>
  );
}

export default ReservaFinal;
