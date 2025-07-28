import Input_Buscador from "../../../inputs/Buscador";
import Input_DateRange from "../../../inputs/DateRange";
import Input_DateRangeMobile from "../../../inputs/DateRange";
import Input_Hab_Ad_Nin from "../../../inputs/Hab_Adulto_Ninio";
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
        name={"idZona"}
        setValue={setValue}
        placeholder={"Destino"}
        destinos={destinos}
      />
      <Input_DateRangeMobile
        control={control}
        nameStartDate="startDate"
        nameEndDate="endDate"
        placeholder="Selecciona un rango de fechas"
      />
      <Input_Hab_Ad_Nin
        habitacion={habitacion}
        setHabitacion={setHabitacion}
        roomData={roomData}
        setRoomData={setRoomData}
      />
    </>
  );
}

export default Movil;
