import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Buscador from "../Buscador";
import Escritorio from "./Escritorio";
import Movil from "./Movil";
function Buscador_Cruceros({ listado }) {
  const navigate = useNavigate();
  const [habitacion, setHabitacion] = useState(1);
  const [roomData, setRoomData] = useState([
    { id: Date.now(), adultos: 1, ninios: 0, ninioAges: [] },
  ]);
  const { setValue, control, handleSubmit } = useForm({
    defaultValues: {
      startDate: 0,
      endDate: 0,
      origen: 0,
      destino: 0,
    },
  });

  const onSubmit = (data) => {
    const reserva = {
      codarea: 251 /* calculado pero por ahora no lo paso */,
      codcity: 199 /* calculado pero por ahora no lo paso */,
      fecini: "28-07-2026" /* calculado pero por ahora no lo paso */,
      noc: 5 /* calculado pero por ahora no lo paso */,
      numper: "2,0;3,1,6" /* calculado pero por ahora no lo paso */,
    };
    const path = `/listadohotelmasvuelo/${reserva.codarea}/${reserva.codcity}/${reserva.fecini}/${reserva.noc}/${reserva.numper}`;
    navigate(path);
  };
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

  return (
    <Buscador
      submit={handleSubmit(onSubmit)}
      titulo={"Busacdor de Hotel + Vuelo"}
      listado={listado}
      contenidoEscritorio={
        <Escritorio
          control={control}
          setValue={setValue}
          destinos={destinos}
          listado={listado}
          habitacion={habitacion}
          setHabitacion={setHabitacion}
          roomData={roomData}
          setRoomData={setRoomData}
        />
      }
      contenidoMovil={
        <>
          <Movil
            control={control}
            setValue={setValue}
            destinos={destinos}
            listado={listado}
            habitacion={habitacion}
            setHabitacion={setHabitacion}
            roomData={roomData}
            setRoomData={setRoomData}
          />
        </>
      }
    />
  );
}

export default Buscador_Cruceros;
