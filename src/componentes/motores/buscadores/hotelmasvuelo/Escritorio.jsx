import Input_Buscador from "../../../inputs/Buscador";
import Input_HabAdNin from "../../../inputs/Hab_Adulto_Ninio";
import Input_DateRange from "../../../inputs/DateRange";
function Escritorio({
  control,
  setValue,
  destinos,
  listado,
  habitacion,
  setHabitacion,
  roomData,
  setRoomData,
}) {
  return (
    <>
      <div className="tw-col-span-3">
        <Input_Buscador
          control={control}
          name={"origen"}
          setValue={setValue}
          placeholder={"Origen"}
          destinos={destinos}
        />
      </div>
      <div className="tw-col-span-3">
        <Input_Buscador
          control={control}
          name={"destino"}
          setValue={setValue}
          placeholder={"Destino"}
          destinos={destinos}
        />
      </div>

      <div
        className={`${listado === true ? "tw-col-span-2" : "tw-col-span-3"}`}
      >
        <Input_DateRange
          control={control}
          nameStartDate="startDate"
          nameEndDate="endDate"
          placeholder="Fechas"
        />
      </div>

      <div className="tw-col-span-3">
        <Input_HabAdNin
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
