import Input_Buscador from "../../../inputs/Buscador";
import Input_DateRange from "../../../inputs/DateRange";
import Input_Nacionalidad from "../../../inputs/Nacionalidad";
import Input_Hab_Ad_Nin from "../../../inputs/Hab_Adulto_Ninio";

export default function Movil({
  control,
  setValue,
  destinos,
  register,
  errors,
  habitacion,
  setHabitacion,
  roomData,
  setRoomData,
}) {
  return (
    <>
      <Input_Buscador
        required={true}
        control={control}
        name={"origen"}
        setValue={setValue}
        placeholder={"Origen"}
        destinos={destinos}
      />
      <Input_DateRange
        control={control}
        nameStartDate="startDate"
        nameEndDate="endDate"
        placeholder="Selecciona un rango de fechas"
      />
      <Input_Nacionalidad
        setValue={setValue}
        required={false}
        name={`macionalidad`}
        register={register}
        errors={errors}
        tipo={"Nacionalidad"}
      />
      <Input_Hab_Ad_Nin
        habitacion={habitacion}
        setHabitacion={setHabitacion}
        roomData={roomData}
        setRoomData={setRoomData}
      />
      <input type="hidden" {...register("numper")} />
    </>
  );
}
