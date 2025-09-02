import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import FormatearFecha from "../../../../assets/scripts/formatearFecha";
import ComponenteDatos from "../../../../helpers/visuales/datos/Datos";
function Datos() {
  const location = useLocation();
  const { ida, vuelta } = location.state || {};
  const img = "/banners/banner_trenes.webp";
  const itinerario = "";
  const fechaIda = FormatearFecha(ida.searchSummary.depDate);
  const fechaVuelta = ida.searchSummary.retDate
    ? FormatearFecha(ida.searchSummary.retDate)
    : "Sin vuelta";
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    navigate("/reservaTren", {
      state: { data, ida, vuelta },
    });
  };
  return (
    <ComponenteDatos
      img={img}
      submit={handleSubmit(onSubmit)}
      register={register}
      errors={errors}
      titulo={"Reservando Tren"}
      tipo={"Tren de ida " + (vuelta ? "y vuelta" : "")}
      itinerario={itinerario}
      fecha={fechaIda}
      fechaVuelta={fechaVuelta}
    />
  );
}

export default Datos;
