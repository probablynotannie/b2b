import Reserva from "../../../datos/Reserva";
import { useLocation } from "react-router-dom";
import DatosContacto from "../../../../../helpers/visuales/datos/DatosContacto";
import FormatearFecha from "../../../../../helpers/FormatearFecha";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
function Datos() {
  const location = useLocation();
  const { hotel, ferry, habitacion } = location.state || {};
  const img = "/banners/ferry.webp";
  const navigate = useNavigate();

  const itinerario = (
    <div>
      <p>Hotel: {hotel.nombre}</p>Ferry de ida {ferry.vuelta && " y vuelta"}:{" "}
      {ferry.ida.ruta}
    </div>
  );
  const fechaIda = FormatearFecha(ferry.ida.fecha);
  const fechaVuelta = ferry.vuelta && FormatearFecha(ferry.vuelta.fecha);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    navigate("/reservaHotelFerry", {
      state: { data, hotel, ferry, habitacion },
    });
  };

  return (
    <main className="tw-my-16 tw-flex tw-justify-center tw-container tw-min-h-[68vh]">
      <article className="tw-p-5 tw-w-full tw-border-2 tw-border-slate-200 dark:tw-border-slate-800 tw-rounded-xl tw-shadow-xl tw-bg-white dark:tw-bg-slate-800">
        <h1 className="tw-font-semibold tw-text-xl dark:tw-text-white">
          Datos Contacto
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-3 tw-text-sm tw-mt-6">
            <DatosContacto register={register} errors={errors} />
          </div>
          <Reserva
            img={img}
            position={"center"}
            tipo={"Hotel + Ferry"}
            itinerario={itinerario}
            fechaIda={fechaIda}
            fechaVuelta={fechaVuelta}
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
