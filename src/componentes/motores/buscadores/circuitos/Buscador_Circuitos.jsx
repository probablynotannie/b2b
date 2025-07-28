import destinos from "./destinos.json";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Buscador from "../Buscador";
import Movil from "./Movil";
import Escritorio from "./Escritorio";
function Buscador_Destinos({ listado }) {
  const navigate = useNavigate();
  const onSubmit = (data) => {
    navigate("/listadocircuitos", {
      state: { datosForm: data },
    });
  };
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  return (
    <Buscador
      submit={handleSubmit(onSubmit)}
      listado={listado}
      titulo={"Buscador de circuitos"}
      contenidoEscritorio={<Escritorio control={control} destinos={destinos} />}
      contenidoMovil={<Movil control={control} destinos={destinos} />}
    />
  );
}

export default Buscador_Destinos;
