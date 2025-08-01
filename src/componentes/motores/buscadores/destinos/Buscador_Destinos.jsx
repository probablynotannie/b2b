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
    navigate("/listadoDestinos", {
      state: { datosForm: data },
    });
  };
  const { handleSubmit, control } = useForm({
    defaultValues: {
      continent: 0,
      region: 0,
      fechSal: 0,
    },
  });
  return (
    <Buscador
      submit={handleSubmit(onSubmit)}
      titulo={"Buscador de Destinos"}
      listado={listado}
      contenidoMovil={
        <Movil
          control={control}
          continents={continents}
          regions={regions}
          listado={listado}
        />
      }
      contenidoEscritorio={
        <Escritorio
          control={control}
          continents={continents}
          regions={regions}
          listado={listado}
        />
      }
    />
  );
}

export default Buscador_Destinos;
