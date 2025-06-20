import { useLocation } from "react-router-dom";
import Reserva from "../../../datos/Reserva";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import DatosContacto from "../../../../../helpers/visuales/datos/DatosContacto.jsx";
const formatearFecha = (fecha) => {
  const opciones = { day: "numeric", month: "long", year: "numeric" };
  return new Intl.DateTimeFormat("es-ES", opciones).format(new Date(fecha));
};
function Datos() {
  const location = useLocation();
  const { actividad, datosForm, habitacion, roomData } = location.state || {};
  const img = actividad.img;
  const fechaIda = formatearFecha(datosForm.fecha);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    navigate("/reservaCircuito", {
      state: { data, actividad, fechaIda, habitacion, roomData },
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
            img={img}
            position={"bottom"}
            tipo={"Circuito"}
            itinerario={actividad.titulo}
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
