import HotelDetalles from "../../hotel/reserva/HotelDetalles";
import Actividad from "./Actividad";
function Detalles({ hotel, actividades }) {
  return (
    <div>
      <HotelDetalles hotel={hotel} />
      <div className="tw-grid md:tw-grid-cols-2 tw-gap-5">
        {actividades.map((actividad, index) => (
          <section
            key={index}
            className="tw-pb-20 tw-bg-white tw-duration-300 dark:tw-bg-slate-800 tw-h-auto tw-max-w-full tw-rounded-lg tw-rounded-t-lg tw-shadow tw-transition tw-relative dark:tw-border-2 dark:tw-border-slate-700"
          >
            <Actividad actividad={actividad} />
          </section>
        ))}
      </div>
    </div>
  );
}

export default Detalles;
