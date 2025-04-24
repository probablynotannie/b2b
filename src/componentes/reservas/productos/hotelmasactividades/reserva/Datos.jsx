import Reserva from "../../../datos/Reserva";
import { useLocation } from "react-router-dom";
import Input_Texto from "../../../../inputs/Texto";
import Input_Numero from "../../../../inputs/Numero";
import Input_Email from "../../../../inputs/Email";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
function Datos() {
  const location = useLocation();
  const { hotel, actividades, habitacion } = location.state || {};
  const img = "/banners/banner_hoteles.webp";
  const itinerario =
    hotel.nombre +
    " + " +
    actividades.length +
    " actividad" +
    (actividades.length > 1 ? "es" : "");
  const fechaIda = (
    <ul>
      <li>
        Hotel: {hotel.fecha} - {hotel.fechaSalida}
      </li>

      {actividades.map((actividad, index) => (
        <li key={index}>
          {actividad.titulo} - ({actividad.fechaSeleccionada} -
          {actividad.horaSeleccionada})
        </li>
      ))}
    </ul>
  );
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    navigate("/reservaHotelMasActividades", {
      state: { data, hotel, actividades, habitacion },
    });
  };
  return (
    <main className="tw-my-16 tw-flex tw-justify-center tw-container tw-min-h-[68vh]">
      <article className="tw-p-5 tw-w-full tw-border-2 tw-border-slate-200 dark:tw-border-slate-800 tw-rounded-xl tw-shadow-xl tw-bg-white dark:tw-bg-slate-800">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="tw-font-semibold tw-text-xl dark:tw-text-white">
            Datos Contacto
          </h1>
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
          <Reserva
            img={img}
            position={"center"}
            tipo={"Hotel + actividades"}
            itinerario={itinerario}
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
