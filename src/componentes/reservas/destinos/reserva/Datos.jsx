import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ComponenteDatos from "../../../../helpers/visuales/datos/Datos";
function Datos() {
  const location = useLocation();
  const navigate = useNavigate();

  const reserva = location.state || {};
  const img = "/banners/banner_ferris.webp";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    navigate("/reservaDestino", {
      state: { data, reserva },
    });
  };

  return (
    <ComponenteDatos
      submit={handleSubmit(onSubmit)}
      register={register}
      errors={errors}
      tipo={"Destino"}
      img={img}
      itinerario={reserva.nombre}
      fecha={reserva.fechaIda}
      fechaVuelta={reserva.fechaVuelta}
      datosAdicionales={""}
    />
  );
}

export default Datos;
