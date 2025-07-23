import Reserva from "../../../datos/Reserva";
import { useLocation } from "react-router-dom";
import DatosContacto from "../../../../../helpers/visuales/datos/DatosContacto";
import FormatearFecha from "../../../../../helpers/FormatearFecha";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ComponenteDatos from "../../../../../helpers/visuales/datos/Datos";
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
    <ComponenteDatos
      submit={handleSubmit(onSubmit)}
      register={register}
      errors={errors}
      img={img}
      tipo={"Hotel + Ferry"}
      itinerario={itinerario}
      fecha={fechaIda}
      fechaVuelta={fechaVuelta}
    />
  );
}

export default Datos;
