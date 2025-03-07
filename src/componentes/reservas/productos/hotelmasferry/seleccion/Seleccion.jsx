import { useLocation } from "react-router-dom";
import Aside from "./Aside";
import Detalles from "./Detalles";
function Seleccion() {
  const location = useLocation();
  const producto = location.state;
  const hotel = producto.hotel;
  const ferry = producto.ferry;
  const habitacion = producto.habitacion;
  return (
    <article className="tw-container tw-my-10 lg:tw-mb-10 lg:tw-mt-auto">
      <article className="tw-my-5 tw-mt-10 tw-grid tw-grid-cols-3 tw-gap-10">
        <section className="tw-col-span-3 lg:tw-col-span-2 tw-shadow-lg hover:tw-shadow-xl tw-duration-300 tw-transition tw-rounded-lg tw-p-5 tw-border-2 tw-border-slate-100 dark:tw-border-slate-700 tw-min-h-[55vh] dark:tw-bg-slate-800">
          <Detalles hotel={hotel} ferry={ferry} />
        </section>
        <section className="tw-col-span-3 lg:tw-col-span-1 tw-shadow-lg hover:tw-shadow-xl tw-duration-300 tw-transition tw-rounded-lg tw-p-5 tw-border-2 tw-border-slate-100 dark:tw-border-slate-700 tw-h-fit tw-sticky tw-top-24 dark:tw-bg-slate-800">
          <Aside hotel={hotel} ferry={ferry} habitacion={habitacion} />
        </section>
      </article>
    </article>
  );
}
export default Seleccion;
