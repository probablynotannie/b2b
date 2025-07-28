import Input_Buscador from "../../../inputs/Buscador";
import Input_DateRange from "../../../inputs/DateRange";
import Input_Hab_Ad_Nin from "../../../inputs/Hab_Adulto_Ninio";
function Escritorio({
  listado,
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
      <div className="tw-col-span-4">
        <Input_Buscador
          control={control}
          name={"idZona"}
          setValue={setValue}
          placeholder={"Destino"}
          destinos={destinos}
        />
      </div>
      <div
        className={`${listado === true ? "tw-col-span-3" : "tw-col-span-4"}`}
      >
        <Input_DateRange
          control={control}
          nameStartDate="startDate"
          nameEndDate="endDate"
          placeholder="Fechas"
        />
      </div>

      <div className="tw-col-span-4">
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
