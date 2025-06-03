import { useLocation } from "react-router-dom";
import Tren from "../detalles/Tren";
import Map from "../Mapa";
import DatosTren from "../detalles/DatosTren";
import DatosContacto from "../../../estructura/DatosContacto";
import Reserva from "../../../estructura/reserva/Resumen";
import { Link } from "react-router-dom";
function ReservaFinal() {
  const location = useLocation();
  const { ida, vuelta, data } = location.state || {};
  const tren = {
    ida: ida,
    vuelta: vuelta,
  };
  return (
    <main className="tw-grid lg:tw-grid-cols-3 tw-min-h-[55vh] tw-items-start tw-container tw-gap-y-10 tw-my-10 tw-mb-20 lg:tw-gap-12">
      <section className="tw-col-span-2 tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-200 dark:tw-border-slate-700 dark:tw-bg-slate-900 tw-p-5">
        <h1 className="tw-font-bold tw-border-b-2 tw-border-slate-100 dark:tw-text-slate-200 dark:tw-border-slate-800 tw-pb-2">
          Reservando tren de ida {vuelta && " y vuelta"}
        </h1>
        <DatosContacto
          nombre={data.nombre}
          apellidos={data.apellidos}
          email={data.email}
          numero={data.numero}
        />
        <section className="tw-flex tw-flex-col tw-gap-4">
          <Tren tren={ida} tipo="ida" cesta={true} />
          <Map tren={ida} />
        </section>
        <section className="tw-mt-5">
          {vuelta && (
            <section className="tw-flex tw-flex-col tw-gap-4">
              <Tren tren={vuelta} tipo="vuelta" cesta={true} />
              <Map tren={vuelta} />
            </section>
          )}
        </section>
      </section>
      <article className="tw-sticky tw-top-10 tw-col-span-2 lg:tw-col-span-1 tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-100 dark:tw-border-slate-800 dark:tw-bg-slate-900 tw-p-5">
        <h2 className="tw-font-semibold tw-border-b-2 tw-border-slate-100 dark:tw-text-slate-200 dark:tw-border-slate-700 tw-pb-2">
          Resumen
        </h2>
        <Reserva
          img={"/banners/banner_ferris.webp"}
          txt={"tren de ida " + (vuelta && " y vuelta")}
        />

        <DatosTren tren={ida} tipo="ida" />
        {vuelta && <DatosTren tren={vuelta} tipo="vuelta" />}
        <Link to={"/resumenTren"} state={{ tren, data }}>
          <button className=" tw-btn_accesorios tw-btn_primario tw-w-full">
            {(
              ida.price +
              ida.claseElegida.precioExtra +
              (vuelta && vuelta.price + vuelta.claseElegida.precioExtra)
            ).toFixed(2)}
            €
          </button>
        </Link>
      </article>
    </main>
  );
}

export default ReservaFinal;
