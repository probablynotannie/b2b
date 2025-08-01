import Input_Destinos from "../../../inputs/Pais_Ciudad";
import Input_Vehiculos from "../../../inputs/Vehiculos";
import Input_Bonificaciones from "../../../inputs/Bonificacion";
import Input_DateRange from "../../../inputs/DateRange";

function Escritorio({
  listado,
  control,
  setValue,
  errors,
  continents,
  regions,
}) {
  return (
    <>
      <div
        className={`${
          listado === true
            ? "tw-col-span-6 md:tw-col-span-3 lg:tw-col-span-6 xl:tw-col-span-2"
            : "tw-col-span-6 md:tw-col-span-3 lg:tw-col-span-6 xl:tw-col-span-3"
        }`}
      >
        <Input_DateRange
          control={control}
          placeholder={"Fechas"}
          nameStartDate={"salida"}
          nameEndDate={"llegada"}
        />
      </div>
      <div className="tw-col-span-6 md:tw-col-span-3 lg:tw-col-span-6 xl:tw-col-span-3">
        <Input_Bonificaciones
          setValue={setValue}
          namePasajeros="pasajeros"
          control={control}
          errors={errors}
        />
      </div>

      <div className="tw-col-span-6 md:tw-col-span-3 lg:tw-col-span-6 xl:tw-col-span-3">
        <Input_Vehiculos
          setValue={setValue}
          nameVehiculos="vehiculos"
          nameTipoVehiculo="tipoVehiculo"
          nameRemolque="remolque"
          nameLongitud="longitud"
          nameAltura={"altura"}
          nameLongRemolque={"longitudRemolque"}
          nameAltRemolque={"alturaRemolque"}
        />
      </div>

      <div
        className={`tw-col-span-6 md:tw-col-span-3 xl:tw-col-span-3 ${
          listado === true ? "lg:tw-col-span-5" : "lg:tw-col-span-6"
        }`}
      >
        <Input_Destinos
          control={control}
          nameContinent="continent"
          nameRegion="region"
          continents={continents}
          regions={regions}
        />
      </div>
    </>
  );
}

export default Escritorio;
