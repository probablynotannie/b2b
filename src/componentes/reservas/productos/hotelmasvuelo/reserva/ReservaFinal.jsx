import { useLocation } from "react-router-dom";
import DatosContacto from "../../../estructura/DatosContacto";
import Reserva from "../../../estructura/reserva/Resumen";
import Aside from "../seleccion/Aside";
import Detalles from "../seleccion/Detalles";
import Pasajeros from "../../vuelos/reserva/Pasajeros";
import { Link } from "react-router-dom";
function ReservaFinal() {
  const location = useLocation();
  const { selectedHotel, ida, vuelta, data, habitacion } = location.state || {};
  return (
    <main className="tw-grid lg:tw-grid-cols-3 tw-min-h-[55vh] tw-items-start tw-container tw-gap-y-10 tw-my-10 tw-mb-20 lg:tw-gap-12">
      <section className="tw-col-span-2 tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-200 
tw-bg-white dark:tw-border-slate-700 dark:tw-bg-slate-900 tw-p-5">
        <h1 className="tw-font-bold tw-border-b-2 tw-border-slate-100 dark:tw-text-slate-200 dark:tw-border-slate-800 tw-pb-2">
          Reservando coche
        </h1>
        <DatosContacto
          nombre={data.nombre}
          apellidos={data.apellido}
          email={data.email}
          numero={data.numero}
        />
        <Detalles ida={ida} vuelta={vuelta} hotel={selectedHotel} />
        <Pasajeros pasajeros={data.pasajeros} />
      </section>
      <article className="tw-sticky tw-top-10 tw-col-span-2 lg:tw-col-span-1 tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-100 dark:tw-border-slate-800 tw-bg-white dark:tw-bg-slate-900 tw-p-5">
        <h2 className="tw-font-semibold tw-border-b-2 tw-border-slate-100 dark:tw-text-slate-200 dark:tw-border-slate-700 tw-pb-2">
          Resumen
        </h2>
        <div className="tw-flex tw-flex-col tw-gap-3">
          <Reserva img={selectedHotel.img} txt={"Hotel + vuelo"} />
          <Aside ida={ida} vuelta={vuelta} hotel={selectedHotel} />
        </div>
        <Link
          to={"/resumenhotelmasvuelo"}
          state={{
            selectedHotel,
            ida,
            vuelta,
            data,
            habitacion,
          }}
        >
          <button className=" tw-btn_accesorios tw-btn_primario tw-w-full tw-mt-2">
            {(
              Number(selectedHotel.precio) +
              Number(ida.flight.precio) +
              (vuelta ? Number(vuelta.flight.precio) : 0)
            ).toFixed(2)}
            €
          </button>
        </Link>
      </article>
    </main>
  );
}

export default ReservaFinal;
