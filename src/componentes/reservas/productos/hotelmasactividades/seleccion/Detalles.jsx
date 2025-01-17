import HotelDetalles from "../../hotel/reserva/HotelDetalles";
import Actividad from "./Actividad";
function Detalles({ hotel, actividades }) {
  return (
    <div>
      <HotelDetalles hotel={hotel} />
      <div className="grid md:grid-cols-2 gap-5">
        {actividades.map((actividad, index) => (
          <section
            key={index}
            className="pb-20 bg-white duration-300 dark:bg-slate-800 h-auto max-w-full rounded-lg rounded-t-lg  shadow transition relative"
          >
            <Actividad actividad={actividad} />
          </section>
        ))}
      </div>
    </div>
  );
}

export default Detalles;
