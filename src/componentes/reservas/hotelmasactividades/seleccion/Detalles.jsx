import Actividad from "./Actividad";
import Info from "../../hotel/detalles/contenidoPrincipal/Info";
function Detalles({ hotel, actividades, habitacion }) {
  return (
    <div className="tw-flex tw-flex-col tw-gap-5">
      <Info hotel={hotel} habitacion={habitacion} />
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
