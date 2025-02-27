import Reserva from "../../../datos/Reserva";
import Input_Texto from "../../../../inputs/Texto";
import Input_Numero from "../../../../inputs/Numero";
import Input_Email from "../../../../inputs/Email";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import FormatearFecha from "../../../estructura/FormatearFecha";
function Datos() {
  const location = useLocation();
  const { producto, tickets } = location.state || {};
  const fechaIda = (
    <div className="tw-p-3 bg-opacity-40 tw-rounded-lg">
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
    <main className="tw-my-10 tw-flex tw-justify-center tw-container tw-min-h-[68vh]">
      <article className="tw-p-5 tw-w-full tw-border-2 tw-border-slate-200 dark:tw-border-slate-800 tw-rounded-xl tw-shadow-xl tw-bg-white dark:tw-bg-slate-800">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="tw-font-semibold tw-text-xl dark:tw-text-white">
            Datos Contacto
          </h2>
          <group className="tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-3 tw-text-sm tw-mt-6">
            <Input_Texto
              required={true}
              tipo={"Nombre"}
              name="nombre"
              register={register}
              errors={errors}
            />
            <Input_Texto
              required={true}
              tipo={"Apellido"}
              name="apellido"
              register={register}
              errors={errors}
            />
            <Input_Numero
              required={true}
              tipo="numero"
              register={register}
              errors={errors}
              name="numero"
            />
            <Input_Email
              required={true}
              tipo="email"
              register={register}
              errors={errors}
              name="email"
            />
          </group>
          <Reserva
            img={"/banner_actividades2.jpg"}
            position={"center"}
            tipo={"Entrada"}
            itinerario={producto.titulo}
            fechaIda={fechaIda}
          />
          <div className="tw-flex tw-justify-end">
            <button className="tw-bg-secondary tw-p-3 tw-text-white tw-font-semibold tw-rounded-lg tw-shadow hover:tw-shadow-lg tw-transition tw-duration-300">
              Reservar
            </button>
          </div>
        </form>
      </article>
    </main>
  );
}

export default Datos;
