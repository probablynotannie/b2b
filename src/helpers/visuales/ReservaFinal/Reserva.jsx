import Header from "./Header";
import DatosContacto from "./DatosContacto";
import { Link } from "react-router-dom";
function Reserva({
  datosContacto,
  numReserva,
  finalizada,
  main,
  Icono,
  titulo,
  descripcionTitulo,
  precio,
}) {
  return (
    <>
      <main className="tw-container tw-min-h-[55vh] tw-my-10 tw-p-5">
        <Header numReserva={numReserva} finalizada={finalizada} />
        <article className="tw-mt-10 tw-shadow-md hover:tw-shadow-xl tw-smooth tw-border dark:tw-bg-slate-900 tw-bg-slate-50 tw-p-5 tw-border-slate-200 dark:tw-border-slate-700 tw-rounded-lg">
          <section className="tw-flex tw-justify-between tw-items-center tw-border-b-2 tw-border-slate-100 dark:tw-border-slate-700 tw-pb-2 tw-mb-5">
            <div>
              <h3 className="tw-text-lg tw-font-bold dark:tw-text-white">
                {titulo}
              </h3>
              <div className="tw-text-slate-500 dark:tw-text-slate-300 tw-flex tw-gap-2 tw-items-center">
                {descripcionTitulo}
              </div>
            </div>
            <div className="tw-flex tw-flex-col tw-justify-center tw-items-center">
              <Icono className="tw-text-xl tw-text-secondary dark:tw-text-secondaryDark" />

              <span className="tw-text-secondary dark:tw-text-secondaryDark tw-font-bold">
                {precio}€
              </span>
            </div>
          </section>
          {main}
        </article>
      </main>

      <main className="tw-container tw-mb-16">
        <div className="tw-p-5 tw-border-2 tw-border-slate-100 dark:tw-bg-slate-800 dark:tw-border-slate-700 tw-rounded-lg tw-shadow-md hover:tw-shadow-xl tw-smooth tw-bg-white">
          <DatosContacto
            nombre={datosContacto.nombre}
            apellidos={datosContacto.apellido}
            email={datosContacto.email}
            numero={datosContacto.numero}
          />
          <div className="tw-mt-10 tw-flex tw-justify-end">
            <Link to={"/"}>
              <button className="tw-btn_muted tw-btn_accesorios dark:tw-btn_muted_dark">
                Volver a la página principal
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default Reserva;
