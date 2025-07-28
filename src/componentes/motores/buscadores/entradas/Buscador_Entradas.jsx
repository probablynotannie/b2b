import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Movil from "./Movil";
import Escritorio from "./Escritorio";
import Buscador from "../Buscador";
function Buscador_Entradas({ listado }) {
  const navigate = useNavigate();
  const [fecha, setFecha] = useState();
  const [adultos, setAdultos] = useState(2);
  const [ninios, setNinios] = useState(0);
  const [ninioAges, setNinioAges] = useState([]);
  const destinos = [
    { id: 0, type: "Destino", name: "MADRID Centro", destino: "Madrid" },
    { id: 1, type: "Destino", name: "MADRID Afueras", destino: "Madrid" },
    { id: 2, type: "Destino", name: "BARCELONA", destino: "Madrid" },
    { id: 3, type: "Destino", name: "SEVILLA", destino: "Sevilla" },
    {
      id: 4,
      type: "Destino",
      name: "MADRID - CAPE GIRARDEAU",
      destino: "Madrid",
    },
    { id: 5, type: "Hotel", name: "Hotel Barcelona", destino: "Barcelona" },
    { id: 6, type: "Hotel", name: "Hotel Madrid", destino: "Madrid" },
    { id: 7, type: "Hotel", name: "Hotel Sevilla", destino: "Sevilla" },
  ];
  const {
    setValue,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      startDate: 0,
    },
  });

  const onSubmit = (data) => {
    navigate("/listadoEntradas", {
      state: { data },
    });
  };

  return (
    <Buscador
      submit={handleSubmit(onSubmit)}
      titulo={"Buscador de Entradas"}
      listado={listado}
      contenidoEscritorio={
        <Escritorio
          listado={listado}
          control={control}
          setValue={setValue}
          destinos={destinos}
          fecha={fecha}
          adultos={adultos}
          setAdultos={setAdultos}
          setNinioAges={setNinioAges}
          ninioAges={ninioAges}
          ninios={ninios}
          setNinios={setNinios}
        />
      }
      contenidoMovil={
        <Movil
          control={control}
          setValue={setValue}
          destinos={destinos}
          fecha={fecha}
          adultos={adultos}
          setAdultos={setAdultos}
          setNinioAges={setNinioAges}
          ninioAges={ninioAges}
          ninios={ninios}
          setNinios={setNinios}
        />
      }
    />
  );
}

export default Buscador_Entradas;
