/* HOTEL */
import Reserva from "../../../datos/Reserva";
import Input_Texto from "../../../../inputs/Texto";
import Input_Numero from "../../../../inputs/Numero";
import Input_Email from "../../../../inputs/Email";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
function Datos() {
  const location = useLocation();
  const { producto, habitacion } = location.state;
  const img = "/banner_productos.jpg";
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    navigate("/reservaFerry", {
      state: { data, producto },
    });
  };

  return (
    <main className="tw-my-16 tw-flex tw-justify-center tw-container tw-min-h-[68vh]">
      <article className="tw-p-5 tw-w-full tw-border-2 tw-border-slate-200 dark:tw-border-slate-800 tw-rounded-xl tw-shadow-md hover:tw-shadow-lg tw-smooth tw-bg-white dark:tw-bg-slate-800">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="tw-font-semibold tw-text-xl dark:tw-text-white">
            Datos Contacto
          </h2>
          <div className="tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-3 tw-text-sm tw-mt-6">
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
              className="tw-btn_primario tw-btn_accesorios"
            > 
              Reservar
            </button>
          </div>
        </form>
      </article>
    </main>
  );
}

export default Datos;
