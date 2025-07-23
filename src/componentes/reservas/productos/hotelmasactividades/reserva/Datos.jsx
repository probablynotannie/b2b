import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ComponenteDatos from "../../../../../helpers/visuales/datos/Datos";
import formatearFecha from "../../../../../helpers/FormatearFecha";
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
          {actividad.titulo} - ({formatearFecha(actividad.fechaSeleccionada)} -
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
    <ComponenteDatos
      submit={handleSubmit(onSubmit)}
      register={register}
      errors={errors}
      img={img}
      tipo={"Hotel + actividades"}
      itinerario={itinerario}
      fecha={fechaIda}
    />
  );
}

export default Datos;
