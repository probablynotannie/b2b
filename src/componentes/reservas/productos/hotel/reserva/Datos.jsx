/* HOTEL */
import Reserva from "../../../datos/Reserva";
import Input_Texto from "../../../../inputs/Texto";
import Input_Numero from "../../../../inputs/Numero";
import Input_Email from "../../../../inputs/Email";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

function Datos() {
  const location = useLocation();
  const { producto, habitacion } = location.state;
  const img = "/banner_hoteles.jpg";
  const navigate = useNavigate();
  const extras = (
    <div>
      {producto.pax !== 0 && (
        <span className="tw-mr-2"> Adultos: {producto.pax}</span>
      )}
      {producto.pax_ninios !== 0 && <span> Niños: {producto.pax_ninios}</span>}
    </div>
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    navigate("/reservaHotel", {
      state: { data, producto, habitacion },
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
          </group>
          <Reserva
            img={img}
            position={"center"}
            tipo={"Hotel"}
            itinerario={producto.nombre + " - " + habitacion.regimen}
            fechaIda={producto.fecha}
            fechaVuelta={producto.fechaSalida}
            extras={extras}
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
