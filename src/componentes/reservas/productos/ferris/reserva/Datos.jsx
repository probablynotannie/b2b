import { useLocation } from "react-router-dom";
import FormatearFecha from "../../../../../helpers/FormatearFecha";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ComponenteDatos from "../../../../../helpers/visuales/datos/Datos";
function Datos() {
  const location = useLocation();
  const { ida, vuelta } = location.state || {};
  const img = "/banners/banner_ferris.webp";
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    navigate("/reservaFerry", {
      state: { data, ida, vuelta },
    });
  };

  return (
    <ComponenteDatos
      submit={handleSubmit(onSubmit)}
      register={register}
      errors={errors}
      img={img}
      tipo={"Ferry"}
      itinerario={ida.puerto_origen + " - " + ida.puerto_destino}
      fecha={FormatearFecha(ida.fecha)}
      fechaVuelta={vuelta ? FormatearFecha(vuelta.fecha) : null}
    />
  );
}

export default Datos;
