import Input_Buscador from "../../../inputs/Buscador";
import Input_DateRange from "../../../inputs/DateRange";
import Input_Nacionalidad from "../../../inputs/Nacionalidad";
import Input_Hab_Ad_Nin from "../../../inputs/Hab_Adulto_Ninio";
function Escritorio({
  control,
  setValue,
  destinos,
  register,
  errors,
  habitacion,
  setHabitacion,
  roomData,
  listado,
  setRoomData,
}) {
  return (
    <>
      <div className="tw-col-span-3">
        <Input_Buscador
          /* required={true} */
          control={control}
          name={"origen"}
          setValue={setValue}
          placeholder={"Origen"}
          destinos={destinos}
        />
      </div>
      <div className="tw-col-span-3">
        <Input_DateRange
          control={control}
          nameStartDate="startDate"
          nameEndDate="endDate"
          placeholder="Rango de fechas"
        />
      </div>
      <div
        className={`${listado === true ? "tw-col-span-2" : "tw-col-span-3"}`}
      >
        <Input_Nacionalidad
          setValue={setValue}
          required={false}
          name={`nacionalidad`}
          register={register}
          errors={errors}
          tipo={"Nacionalidad"}
        />
      </div>
      <div className="tw-col-span-3">
        <Input_Hab_Ad_Nin
          habitacion={habitacion}
          setHabitacion={setHabitacion}
          roomData={roomData}
          setRoomData={setRoomData}
        />
      </div>
    </>
  );
}

export default Escritorio;
