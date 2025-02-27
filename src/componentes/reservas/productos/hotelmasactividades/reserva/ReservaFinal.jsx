import { useLocation } from "react-router-dom";
import Detalles from "../seleccion/Detalles";
import DatosContacto from "../../../estructura/DatosContacto";
import Aside from "../seleccion/Aside";
import Reserva from "../../../estructura/reserva/Resumen";
import { Link } from "react-router-dom";
function ReservaFinal() {
  const location = useLocation();
  const { datosContacto, hotel, actividades, habitacion } =
    location.state || {};
  const calculateTotalPrice = () => {
    const actividadesTotal = actividades.reduce((sum, actividad) => {
      const precioActividad = Number(actividad.precioTotal);
      return sum + precioActividad;
    }, 0);
    const precioHotel = Number(hotel.precio);
    return precioHotel + actividadesTotal;
  };
  return (
    <main className="grid lg:grid-cols-3 min-h-[55vh] items-start container gap-y-10 my-10 lg:gap-12">
      <section className="col-span-2 shadow-lg hover:shadow-xl transition duration-300 rounded-lg min-h-[15vh] border border-slate-200 dark:tw-border-slate-700 dark:bg-slate-900 p-5">
        <h1 className="font-bold border-b-2 border-slate-100 dark:tw-text-slate-200 dark:tw-border-slate-800 pb-2">
          Reservando coche
        </h1>
        <DatosContacto
          nombre={datosContacto.nombre}
          apellidos={datosContacto.apellido}
          email={datosContacto.email}
          numero={datosContacto.numero}
        />
        <section className="mt-8">
          <Detalles hotel={hotel} actividades={actividades} />
        </section>
      </section>
      <article className="sticky top-24 col-span-2 lg:col-span-1 shadow-lg hover:shadow-xl transition duration-300 rounded-lg min-h-[15vh] border border-slate-100  dark:tw-border-slate-800 dark:bg-slate-900 p-5">
        <h2 className="font-semibold border-b-2 border-slate-100 dark:tw-text-slate-200 dark:tw-border-slate-700 pb-2">
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
        <section className="my-2">
          <Aside hotel={hotel} actividades={actividades} />
        </section>
        <Link
          to={"/resumenHotelMasActividades"}
          state={{ datosContacto, hotel, actividades, habitacion }}
        >
          <button className="w-full tw-bg-secondary dark:bg-green-600 rounded-lg  hover:shadow-lg transition duration-300 text-white p-3 font-semibold mt-2">
            {calculateTotalPrice()}€
          </button>
        </Link>
      </article>
    </main>
  );
}

export default ReservaFinal;
