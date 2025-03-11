/* CRUCEROS */
import Reserva from "../../../datos/Reserva";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import Input_Texto from "../../../../inputs/Texto";
import Input_Numero from "../../../../inputs/Numero";
import Input_Email from "../../../../inputs/Email";

const Transfer = () => {
  const location = useLocation();
  const coche = location.state || {};
  const img = "/banner_coches.jpg";
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    navigate("/reservaTransfer", {
      state: { data, coche },
    });
  };

  return (
    <main className="tw-my-10 tw-flex tw-justify-center tw-container tw-min-h-[68vh]">
      <article className="tw-p-5 tw-w-full tw-border-2 tw-border-slate-200 dark:tw-border-slate-800 tw-rounded-xl tw-shadow-md hover:tw-shadow-lg tw-transition tw-duration-300 tw-bg-white dark:tw-bg-slate-800">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="tw-font-semibold tw-text-xl dark:tw-text-white">
            Datos Contacto
          </h2>
          <div className="tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-3 tw-text-sm tw-mt-6">
            <Input_Texto
              tipo={"Nombre"}
              name="nombre"
              register={register}
              errors={errors}
            />
            <Input_Texto
              tipo={"Apellido"}
              name="apellido"
              register={register}
              errors={errors}
            />
            <Input_Numero
              tipo="numero"
              register={register}
              errors={errors}
              name="numero"
            />
            <Input_Email
              tipo="email"
              register={register}
              errors={errors}
              name="email"
            />
          </div>
          <Reserva
            img={img}
            position={"center"}
            tipo={coche.name}
            itinerario={
              coche.route.origin.name + " - " + coche.route.destination.name
            }
          />
          <div className="tw-flex tw-justify-end">
            <button
              type="submit"
              className="tw-bg-secondary tw-p-3 tw-text-white tw-font-semibold tw-rounded-lg tw-mt-3"
            >
              Reservar
            </button>
          </div>
        </form>
      </article>
    </main>
  );
};

export default Transfer;
