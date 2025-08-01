import Input_Buscador from "../../../inputs/Buscador";
import Input_HabAdNin from "../../../inputs/Hab_Adulto_Ninio";
import Input_DateRange from "../../../inputs/DateRange";
function Movil({
  control,
  setValue,
  destinos,
  habitacion,
  setHabitacion,
  roomData,
  setRoomData,
}) {
  return (
    <>
      <Input_Buscador
        control={control}
        name={"origen"}
        setValue={setValue}
        placeholder={"Origen"}
        destinos={destinos}
      />

      <Input_Buscador
        control={control}
        name={"destino"}
        setValue={setValue}
        placeholder={"Destino"}
        destinos={destinos}
      />

      <Input_DateRange
        control={control}
        nameStartDate="startDate"
        nameEndDate="endDate"
        placeholder="Selecciona un rango de fechas"
      />
      <Input_HabAdNin
        habitacion={habitacion}
        setHabitacion={setHabitacion}
        roomData={roomData}
        setRoomData={setRoomData}
      />
    </>
  );
}

export default Movil;
