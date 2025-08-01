import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Movil from "./Movil";
import Escriotorio from "./Escritorio";
import Buscador from "../Buscador";
function Buscador_Transfers({ listado }) {
  const navigate = useNavigate();
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
  const { setValue, control, handleSubmit } = useForm({
    defaultValues: {
      adults: 2,
      children: 0,
      infants: 0,
      horaRecogida: "12:00",
      horaDevolucion: "12:00",
      startDate: 0,
      endDate: 0,
      destination: 0,
      origin: 0,
    },
  });

  const onSubmit = (data) => {
    navigate("/listadotransfers", {
      state: { data },
    });
  };

  return (
    <Buscador
      submit={handleSubmit(onSubmit)}
      titulo={"Buscador de Transfers"}
      listado={listado}
      contenidoEscritorio={
        <Escriotorio
          control={control}
          listado={listado}
          setValue={setValue}
          destinos={destinos}
        />
      }
      contenidoMovil={
        <Movil
          control={control}
          listado={listado}
          setValue={setValue}
          destinos={destinos}
        />
      }
    />
  );
}

export default Buscador_Transfers;
