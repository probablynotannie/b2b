import Info from "../../../hotel/detalles/contenidoPrincipal/Info";
import DetallesFerry from "../../../ferris/detalles/contenidoPrincipal/Detalles";
function Detalles({ hotel, ferry, habitacion }) {
  return (
    <section>
      <section>
        <Info hotel={hotel} habitacion={habitacion} />
      </section>
      <section className="tw-mt-10 tw-border-t-2 tw-border-slate-100 dark:tw-border-slate-700 tw-pt-10">
        <DetallesFerry ida={ferry.ida} vuelta={ferry.vuelta && ferry.vuelta} />
      </section>
    </section>
  );
}

export default Detalles;
