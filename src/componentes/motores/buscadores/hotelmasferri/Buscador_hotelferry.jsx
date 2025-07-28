import {
  FaGlobeAfrica,
  FaGlobeAsia,
  FaGlobeEurope,
  FaGlobeAmericas,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Movil from "./Movil";
import Escritorio from "./Escritorio";
import Buscador from "../Buscador";
function Buscador_Destinos({ listado }) {
  const navigate = useNavigate();
  const continents = [
    { id: "AF", name: "Africa", flag: <FaGlobeAfrica /> },
    { id: "AM", name: "América", flag: <FaGlobeAmericas /> },
    { id: "AS", name: "Asia", flag: <FaGlobeAsia /> },
    { id: "EU", name: "Europa", flag: <FaGlobeEurope /> },
    { id: "OC", name: "Oceanía", flag: <FaGlobeEurope /> },
    {
      id: "HK",
      name: "Haiku",
      flag: <img src="../../logo.png" alt="logo" className="tw-w-5 tw-h-4" />,
    },
  ];
  const regions = {
    AF: [
      { id: 1, name: "Nigeria" },
      { id: 2, name: "Africa" },
      { id: 3, name: "Egipto" },
    ],
    AM: [
      { id: 4, name: "USA" },
      { id: 5, name: "Canada" },
      { id: 6, name: "Mexico" },
    ],
    AS: [
      { id: 7, name: "China" },
      { id: 8, name: "Japón" },
      { id: 9, name: "India" },
    ],
    EU: [
      { id: 10, name: "Alemania" },
      { id: 11, name: "Francia" },
      { id: 12, name: "Italia" },
    ],
    OC: [
      { id: 13, name: "Australia" },
      { id: 14, name: "Fiji" },
    ],
    HK: [
      { id: 15, name: "Hola" },
      { id: 16, name: "Haiku" },
      { id: 17, name: "Vuela" },
    ],
  };

  const onSubmit = (data) => {
    navigate("/listadoHotelMasFerry", {
      state: { datosForm: data },
    });
  };
  const {
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });
  return (
    <Buscador
      submit={handleSubmit(onSubmit)}
      listado={listado}
      titulo={"Buscador de Hotel + Ferry"}
      contenidoEscritorio={
        <Escritorio
          control={control}
          setValue={setValue}
          errors={errors}
          continents={continents}
          regions={regions}
        />
      }
      contenidoMovil={
        <Movil
          control={control}
          setValue={setValue}
          errors={errors}
          continents={continents}
          regions={regions}
        />
      }
    />
  );
}

export default Buscador_Destinos;
