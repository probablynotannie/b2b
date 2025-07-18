import DatosContacto from "./DatosContacto";
import Reserva from "./Reserva";
function Datos({
  submit,
  tipo,
  register,
  errors,
  img,
  itinerario,
  fecha,
  fechaVuelta,
  extras,
  datosAdicionales,
}) {
  return (
    <main className="tw-my-16 tw-flex tw-justify-center tw-container tw-min-h-[68vh]">
      <article className="tw-p-5 tw-w-full tw-border-2 tw-border-slate-200 dark:tw-border-slate-800 tw-rounded-xl tw-shadow-md hover:tw-shadow-lg tw-smooth tw-bg-white dark:tw-bg-slate-800">
        <form onSubmit={submit}>
          <h2 className="tw-font-semibold tw-text-xl dark:tw-text-white">
            Datos Contacto
          </h2>
          <div className="tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-3 tw-text-sm tw-mt-6">
            <DatosContacto register={register} errors={errors} />
          </div>
          <Reserva
            img={img}
            position="center"
            tipo={tipo}
            itinerario={itinerario}
            fechaIda={fecha}
            fechaVuelta={fecha}
            extras={extras}
          />
          {datosAdicionales}
          <div className="tw-flex tw-justify-end tw-pt-5 tw-mt-10">
            <button type="submit" className="tw-btn_primario tw-btn_accesorios">
              Reservar
            </button>
          </div>
        </form>
      </article>
    </main>
  );
}

export default Datos;
