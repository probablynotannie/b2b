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
    <article className="tw-container tw-my-10 lg:tw-mb-10 lg:tw-mt-auto">
      <article className="tw-my-5 tw-mt-10 tw-grid tw-grid-cols-3 tw-gap-10">
        <section className="tw-col-span-3 lg:tw-col-span-2 tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-p-5 tw-border-2 tw-border-slate-100 dark:tw-border-slate-700 tw-min-h-[55vh] dark:tw-bg-slate-800">
          <Detalles hotel={hotel} actividades={actividades} />
        </section>
        <section className="tw-col-span-3 lg:tw-col-span-1 tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-p-5 tw-border-2 tw-border-slate-100 dark:tw-border-slate-700 tw-h-fit tw-sticky tw-top-10 dark:tw-bg-slate-800">
          <Aside hotel={hotel} actividades={actividades} />
          <Link
            to={"/datosHotelMasActividades"}
            state={{ hotel, actividades, habitacion }}
          >
            <button className="tw-btn_accesorios tw-btn_primario tw-w-full tw-mt-3">
              {calculateTotalPrice().toFixed(2)}€
            </button>
          </Link>
        </section>
      </article>
    </article>
  );
}
export default Seleccion;
