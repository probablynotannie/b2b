import Tren from "../../detalles/contenidoPrincipal/Tren";
import Map from "../../Mapa";
import DatosContacto from "../../../../../helpers/visuales/ReservaFinal/DatosContacto";
function Detalles({ data, ida, vuelta }) {
  return (
    <div>
      <DatosContacto
        nombre={data.nombre}
        apellidos={data.apellido}
        email={data.email}
        numero={data.numero}
      />
      <section className="tw-flex tw-flex-col tw-gap-4 tw-bg-slate-100/50 dark:tw-bg-inherit tw-shadow tw-rounded-lg tw-mt-5">
        <Tren tren={ida} tipo="ida" cesta={true} />
        <Map tren={ida} />
      </section>
      <section className="tw-mt-5">
        {vuelta && (
          <section className="tw-flex tw-flex-col tw-gap-4 tw-bg-slate-100/50 dark:tw-bg-inherit tw-shadow">
            <Tren tren={vuelta} tipo="vuelta" cesta={true} />
            <div>
              <Map tren={vuelta} />
            </div>{" "}
          </section>
        )}
      </section>
    </div>
  );
}

export default Detalles;
