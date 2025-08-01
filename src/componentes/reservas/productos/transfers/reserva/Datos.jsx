/* CRUCEROS */
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import ComponenteDatos from "../../../../../helpers/visuales/datos/Datos";
const Transfer = () => {
  const location = useLocation();
  const coche = location.state || {};
  const img = "/banners/banner_coches.webp";
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    navigate("/reservaTransfer", {
      state: { data, coche },
    });
  };
  return (
    <ComponenteDatos
      register={register}
      errors={errors}
      submit={handleSubmit(onSubmit)}
      tipo={"Seguro"}
      img={img}
      itinerario={
        coche.route.origin.name + " - " + coche.route.destination.name
      }
    />
  );
};

export default Transfer;
