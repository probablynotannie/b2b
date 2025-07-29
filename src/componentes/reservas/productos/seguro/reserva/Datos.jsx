import { useLocation } from "react-router-dom";
import FormatearFecha from "../../../../../scripts/FormatearFecha";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ComponenteDatos from "../../../../../helpers/visuales/datos/Datos";
function Datos() {
  const location = useLocation();
  const seguro = location.state || {};
  const img = "/banners/banner_seguros.webp";
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    navigate("/reservaSeguro", {
      state: { data, seguro },
    });
  };
  return (
    <ComponenteDatos
      register={register}
      errors={errors}
      submit={handleSubmit(onSubmit)}
      tipo={"Seguro"}
      img={img}
      itinerario={seguro.titulo}
      fecha={FormatearFecha(seguro.inicio)}
      fechaVuelta={FormatearFecha(seguro.fin)}
    />
  );
}

export default Datos;
