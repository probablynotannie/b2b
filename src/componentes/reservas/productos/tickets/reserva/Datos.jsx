import Reserva from "../../../datos/Reserva";
import DatosContacto from "../../../../../helpers/visuales/datos/DatosContacto";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import FormatearFecha from "../../../../../helpers/FormatearFecha";

function Datos() {
  const location = useLocation();
  const { producto, tickets } = location.state || {};
  const fechaIda = (
    <div className="tw-p-3  tw-bg-opacity-40 tw-rounded-lg">
      {tickets.map((ticket, index) => (
        <div
          className="tw-text-sm tw-mt-3 tw-pl-2 tw-bg-secondary tw-text-white tw-p-1 tw-rounded-lg tw-font-semibold"
          key={index}
        >
          <p>
            Día - {FormatearFecha(ticket.date)} a las {ticket.time} -{" "}
            {ticket.quantity}x {ticket.type}
          </p>
        </div>
      ))}
    </div>
  );
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    navigate("/reservaTickets", {
      state: { data, producto, tickets },
    });
  };
  return (
    <main className="tw-my-16 tw-flex tw-justify-center tw-container tw-min-h-[68vh]">
      <article className="tw-p-5 tw-w-full tw-border-2 tw-border-slate-200 dark:tw-border-slate-800 tw-rounded-xl tw-shadow-xl tw-bg-white dark:tw-bg-slate-800">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="tw-font-semibold tw-text-xl dark:tw-text-white">
            Datos Contacto
          </h2>
          <div className="tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-3 tw-text-sm tw-mt-6">
            <DatosContacto register={register} errors={errors} />
          </div>
          <Reserva
            img={"/banners/banner_actividades2.webp"}
            position={"center"}
            tipo={"Entrada"}
            itinerario={producto.titulo}
            fechaIda={fechaIda}
          />
          <div className="tw-flex tw-justify-end">
            <button className="tw-btn_primario tw-btn_accesorios">
              Reservar
            </button>
          </div>
        </form>
      </article>
    </main>
  );
}

export default Datos;
