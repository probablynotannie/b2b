import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ComponenteDatos from "../../../../../helpers/visuales/datos/Datos.jsx";
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
    <ComponenteDatos
      submit={handleSubmit(onSubmit)}
      register={register}
      img={img}
      errors={errors}
      tipo={"Circuito"}
      itinerario={actividad.titulo}
      fecha={fechaIda}
    />
  );
}

export default Datos;
