import Reserva from "../../../datos/Reserva";
import { useLocation } from "react-router-dom";
import Input_Texto from "../../../../inputs/Texto";
import Input_Numero from "../../../../inputs/Numero";
import Input_Email from "../../../../inputs/Email";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
function Datos() {
  const location = useLocation();
  const navigate = useNavigate();

  const reserva = location.state || {};
  const img = "/banner_ferris.jpg";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    navigate("/reservaHotel", {
      state: { data, reserva },
    });
  };

  return (
    <main className="my-10  flex justify-center container min-h-[68vh]">
      <article className="p-5 w-full border-2 border-slate-200 dark:tw-border-slate-800 rounded-xl shadow-xl bg-white dark:bg-slate-800">
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
          </div>
        </form>
        <Reserva
          img={img}
          position={"center"}
          tipo={"Destino"}
          itinerario={reserva.nombre}
          fechaIda={reserva.fechaIda}
          fechaVuelta={reserva.fechaVuelta}
        />
        <div className="flex justify-end">
          <button className="tw-bg-secondary p-3 text-white font-semibold rounded-lg shadow hover:shadow-lg transition duration-300">
            Reservar
          </button>
        </div>
      </article>
    </main>
  );
}

export default Datos;
