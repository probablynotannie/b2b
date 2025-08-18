import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import ComponenteDatos from "../../../../../helpers/visuales/datos/Datos";
import formatearFecha from "../../../../../scripts/FormatearFecha";
import calcularFechaSalida from "./fechaSalida";
function Datos() {
  const location = useLocation();
  const { producto, habitacion } = location.state;
  const img = "/banners/banner_hoteles.webp";
  const navigate = useNavigate();
  const extras = (
    <div className="tw-mt-2">
      {producto.pax !== 0 && (
        <span className="tw-mr-2 tw-bg-pink-400 tw-rounded-xl tw-font-semibold tw-text-sm tw-p-1 tw-px-2">
          adultos: {habitacion.adultosTotal}x
        </span>
      )}
      {habitacion.niniosTotal !== 0 && (
        <span className="tw-bg-pink-400 tw-rounded-xl tw-font-semibold tw-text-sm tw-p-1 tw-px-2">
          niños: {habitacion.niniosTotal}x
        </span>
      )}
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
  const fechaEntrada = producto.reserva.fecini;
  const noches = producto.reserva.noc;
  const fechaSalida = calcularFechaSalida(fechaEntrada, noches);

  return (
    <ComponenteDatos
      register={register}
      errors={errors}
      submit={handleSubmit(onSubmit)}
      tipo={"Hotel"}
      itinerario={
        habitacion.combinedName ? habitacion.combinedName : habitacion.Name
      }
      fecha={formatearFecha(fechaEntrada)}
      fechaVuelta={formatearFecha(fechaSalida)}
      img={img}
      extras={extras}
    />
  );
}

export default Datos;
