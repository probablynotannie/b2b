import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import ComponenteDatos from "../../../../../helpers/visuales/datos/Datos";
import formatearFecha from "../../../../../scripts/FormatearFecha";
function Datos() {
  const location = useLocation();
  const { producto, habitacion } = location.state;
  console.log(habitacion);
  const img = "/banners/banner_hoteles.webp";
  const navigate = useNavigate();
  const extras = (
    <div className="tw-mt-2">
      {producto.pax !== 0 && (
        <span className="tw-mr-2 tw-bg-pink-400 tw-rounded-xl  tw-font-semibold tw-text-sm tw-p-1">
          {" "}
          Adultos: {producto.pax}x
        </span>
      )}
      {producto.pax_ninios !== 0 && (
        <span className="tw-bg-pink-400 tw-rounded-xl  tw-font-semibold tw-text-sm tw-p-1">
          {" "}
          Niños: {producto.pax_ninios}x
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
  const fechaEntrada = "05/09/2025";
  const fechaSalida = "10/09/2025";
  console.log(producto);
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
