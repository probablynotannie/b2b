import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import ComponenteDatos from "../../../../../helpers/visuales/datos/Datos";
import formatearFecha from "../../../../../helpers/FormatearFecha";
function Datos() {
  const location = useLocation();
  const { producto, habitacion } = location.state;
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

  return (
    <ComponenteDatos
      register={register}
      errors={errors}
      submit={handleSubmit(onSubmit)}
      tipo={"Hotel"}
      itinerario={producto.nombre + " - " + habitacion.regimen}
      fecha={formatearFecha(producto.fecha)}
      fechaVuelta={formatearFecha(producto.fechaSalida)}
      img={img}
      extras={extras}
    />
  );
}

export default Datos;
