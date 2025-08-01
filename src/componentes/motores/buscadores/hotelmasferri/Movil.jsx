import Input_Destinos from "../../../inputs/Pais_Ciudad";
import Input_Vehiculos from "../../../inputs/Vehiculos";
import Input_Bonificaciones from "../../../inputs/Bonificacion";
import Input_DateRange from "../../../inputs/DateRange";
function Movil({ control, setValue, errors, continents, regions }) {
  return (
    <>
      <div className="tw-col-span-2 lg:tw-col-span-2">
        <Input_DateRange
          control={control}
          placeholder={"Fechas"}
          nameStartDate={"salida"}
          nameEndDate={"llegada"}
        />
      </div>
      <div className="tw-col-span-2 lg:tw-col-span-1">
        <Input_Bonificaciones
          setValue={setValue}
          namePasajeros="pasajeros"
          control={control}
          errors={errors}
        />
      </div>
      <div className="tw-col-span-2 lg:tw-col-span-1">
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
      <div className="tw-col-span-2 lg:tw-col-span-2">
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

export default Movil;
