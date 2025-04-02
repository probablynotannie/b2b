import { useLocation } from "react-router-dom";
import Detalles from "../seleccion/Detalles";
import DatosContacto from "../../../estructura/DatosContacto";
import Aside from "../seleccion/Aside";
import Reserva from "../../../estructura/reserva/Resumen";
import { Link } from "react-router-dom";
function ReservaFinal() {
  const location = useLocation();
  const { data, hotel, actividades, habitacion } = location.state || {};
  const calculateTotalPrice = () => {
    const actividadesTotal = actividades.reduce((sum, actividad) => {
      const precioActividad = Number(actividad.precioTotal);
      return sum + precioActividad;
    }, 0);
    const precioHotel = Number(hotel.precio);
    return precioHotel + actividadesTotal;
  };
  return (
    <main className="tw-grid lg:tw-grid-cols-3 tw-min-h-[55vh] tw-items-start tw-container tw-gap-y-10 tw-my-10 lg:tw-gap-12">
      <section className="tw-col-span-2 tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-200 dark:tw-border-slate-700 dark:tw-bg-slate-900 tw-p-5">
        <h1 className="tw-font-bold tw-border-b-2 tw-border-slate-100 dark:tw-text-slate-200 dark:tw-border-slate-800 tw-pb-2">
          Reservando coche
        </h1>
        <DatosContacto
          nombre={data.nombre}
          apellidos={data.apellido}
          email={data.email}
          numero={data.numero}
        />
        <section className="tw-mt-8">
          <Detalles hotel={hotel} actividades={actividades} />
        </section>
      </section>
      <article className="tw-sticky tw-top-10 tw-col-span-2 lg:tw-col-span-1 tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-100 dark:tw-border-slate-800 dark:tw-bg-slate-900 tw-p-5">
        <h2 className="tw-font-semibold tw-border-b-2 tw-border-slate-100 dark:tw-text-slate-200 dark:tw-border-slate-700 tw-pb-2">
          Resumen
        </h2>
        <Reserva
          img={hotel.img}
          txt={
            "Hotel + " +
            " " +
            actividades.length +
            " actividad" +
            (actividades.length > 1 ? "es" : "")
          }
        />
        <section className="tw-my-2">
          <Aside hotel={hotel} actividades={actividades} />
        </section>
        <Link
          to={"/resumenHotelMasActividades"}
          state={{ data, hotel, actividades, habitacion }}
        >
          <button className=" tw-btn_accesorios tw-btn_primario tw-w-full">
            {calculateTotalPrice()}€
          </button>
        </Link>
      </article>
    </main>
  );
}

export default ReservaFinal;
