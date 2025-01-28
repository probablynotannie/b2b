import { useLocation } from "react-router-dom";
import Detalles from "./Detalles";
import { Link } from "react-router-dom";
import Aside from "./Aside";
function Seleccion() {
  const location = useLocation();
  const { hotel, actividades, habitacion } = location.state;
  const calculateTotalPrice = () => {
    const actividadesTotal = actividades.reduce((sum, actividad) => {
      const precioActividad = Number(actividad.precioTotal);
      return sum + precioActividad;
    }, 0);
    const precioHotel = Number(hotel.precio);
    return precioHotel + actividadesTotal;
  };

  return (
    <article className="container my-10 lg:mb-10 lg:mt-auto ">
      <article className="my-5 mt-10 grid grid-cols-3 gap-10">
        <section className="col-span-3 lg:col-span-2 shadow-xl rounded-lg p-5 border-2 border-slate-100 dark:border-slate-700 min-h-[55vh] dark:bg-slate-800">
          <Detalles hotel={hotel} actividades={actividades} />
        </section>
        <section className="col-span-3 lg:col-span-1 shadow-xl rounded-lg p-5 border-2 border-slate-100 dark:border-slate-700 h-fit sticky top-24 dark:bg-slate-800">
          <Aside hotel={hotel} actividades={actividades} />

          <Link
            to={"/datosHotelMasActividades"}
            state={{ hotel, actividades, habitacion }}
          >
            <button className="p-3 text-white font-bold tw-bg-secondary dark:bg-green-600 w-full rounded-lg mt-3">
              {calculateTotalPrice().toFixed(2)}€
            </button>
          </Link>
        </section>
      </article>
    </article>
  );
}
export default Seleccion;
