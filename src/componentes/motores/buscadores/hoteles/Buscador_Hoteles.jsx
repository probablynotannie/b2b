import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Buscador from "../Buscador";
import Escritorio from "./Escritorio";
import Movil from "./Movil";
import normalizeDestinos from "../../../inputs/scripts/normalizedDestinos";
import getDestinos from "../_hooks/getDestinos";
import getHoteles from "../_hooks/getHoteles";
import { useQuery } from "@tanstack/react-query";
import getNoches from "../../../../assets/scripts/getNochesDeStartDateYEndDate";
import simplificarFecha from "../../../../assets/scripts/simplificarFecha";
function Buscador_Cruceros({ listado }) {
  const { data: hotelesParsed, isLoading: isHotelesLoading } = useQuery({
    queryKey: ["hoteles"],
    queryFn: getHoteles,
  });
  const { data: destinosParsed, isLoading: isDestinosLoading } = useQuery({
    queryKey: ["destinos"],
    queryFn: getDestinos,
    enabled: !!hotelesParsed,
  });
  const navigate = useNavigate();
  const destinosormalized = normalizeDestinos(
    !isDestinosLoading && destinosParsed,
    !isHotelesLoading && hotelesParsed
  );
  const [habitacion, setHabitacion] = useState(1);
  const [roomData, setRoomData] = useState([
    { id: Date.now(), adultos: 1, ninios: 0, ninioAges: [] },
  ]);
  const roomDataANumper = (rooms) => {
    return rooms
      .map((room) => {
        const base = `${room.adultos},${room.ninios}`;
        const ages =
          room.ninioAges.length > 0 ? `,${room.ninioAges.join(",")}` : "";
        return base + ages;
      })
      .join(";");
  };
  const onSubmit = (data) => {
    const fecha = simplificarFecha(data.startDate);
    const noches = getNoches(data.startDate, data.endDate);
    const numper = data.numper;
    const codArea = data.codarea;
    const codCity = data.codcity;
    const reserva = {
      codarea: 251 /* calculado pero por ahora no lo paso */,
      codcity: 199 /* calculado pero por ahora no lo paso */,
      fecini: "28-07-2026" /* calculado pero por ahora no lo paso */,
      noc: 5 /* calculado pero por ahora no lo paso */,
      numper: "2,0;3,1,6" /* calculado pero por ahora no lo paso */,
    };
    const path = `/listadoHoteles/${reserva.codarea}/${reserva.codcity}/${reserva.fecini}/${reserva.noc}/${reserva.numper}`;
    navigate(path);
  };
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      startDate: 0,
      endDate: 0,
      codcity: 0,
      codarea: 0,
      tipo: "",
      numper: "",
    },
  });
  useEffect(() => {
    const serialized = roomDataANumper(roomData);
    setValue("numper", serialized);
  }, [roomData, setValue]);

  return (
    <>
      <Buscador
        listado={listado}
        submit={handleSubmit(onSubmit)}
        titulo={"Buscador de Hoteles"}
        contenidoEscritorio={
          <>
            <Escritorio
              control={control}
              setValue={setValue}
              destinos={destinosormalized}
              register={register}
              errors={errors}
              habitacion={habitacion}
              setHabitacion={setHabitacion}
              roomData={roomData}
              setRoomData={setRoomData}
              listado={listado}
            />
          </>
        }
        contenidoMovil={
          <Movil
            control={control}
            setValue={setValue}
            destinos={destinosormalized}
            register={register}
            errors={errors}
            habitacion={habitacion}
            setHabitacion={setHabitacion}
            roomData={roomData}
            setRoomData={setRoomData}
          />
        }
      />
    </>
  );
}

export default Buscador_Cruceros;
