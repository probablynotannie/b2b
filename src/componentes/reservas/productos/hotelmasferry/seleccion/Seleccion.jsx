import { useLocation } from "react-router-dom";
import Aside from "./Aside";
import Detalles from "./Detalles";
function Seleccion() {
  const location = useLocation();
  const producto = location.state;
  const hotel = producto.hotel;
  const ferry = producto.ferry;
  const habitacion = producto.habitacion;
  console.log(habitacion);
  return (
    <article className="container my-10 lg:mb-10 lg:mt-auto ">
      <article className="my-5 mt-10 grid grid-cols-3 gap-10">
        <section className="col-span-3 lg:col-span-2 shadow-lg hover:shadow-xl duration-300 transition rounded-lg p-5 border-2 border-slate-100 dark:tw-border-slate-700 min-h-[55vh] dark:bg-slate-800">
          <Detalles hotel={hotel} ferry={ferry} />
        </section>
        <section className="col-span-3 lg:col-span-1 shadow-lg hover:shadow-xl duration-300 transition rounded-lg p-5 border-2 border-slate-100 dark:tw-border-slate-700 h-fit sticky top-24 dark:bg-slate-800">
          <Aside hotel={hotel} ferry={ferry} habitacion={habitacion} />
        </section>
      </article>
    </article>
  );
}
export default Seleccion;
