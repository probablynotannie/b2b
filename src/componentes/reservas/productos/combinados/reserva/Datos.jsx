/* HOTEL */
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import Iconos from "../../../../../componentes/estructura/cesta/Iconos";
import ComponenteDatos from "../../../../../helpers/visuales/datos/Datos";
function Datos() {
  const location = useLocation();
  const { productos, total } = location.state;
  const img = "/banners/banner_hoteles.webp";
  const navigate = useNavigate();
  const extras = (
    <div className="tw-flex tw-flex-wrap tw-gap-2 tw-text-sm tw-text-slate-500 dark:tw-text-slate-300">
      {productos.map((producto) => (
        <div
          key={producto.id}
          className="tw-text-sm tw-bg-secondary dark:tw-bg-secondaryDark tw-p-1 tw-px-2 tw-rounded-md tw-text-white dark:tw-text-white"
        >
          <Iconos tipo={producto.type} />
        </div>
      ))}
    </div>
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    navigate("/resumenCombinados", {
      state: { data, productos, total },
    });
  };

  return (
    <ComponenteDatos
      submit={handleSubmit(onSubmit)}
      register={register}
      errors={errors}
      img={img}
      position={"center"}
      tipo={"Combinado"}
      itinerario={productos.length + " Productos"}
      extras={extras}
    />
  );
}

export default Datos;
