import Input_Destinos from "../../../inputs/Destinos";
import Input_Fecha from "../../../inputs/Fecha";
import Input_DateRange from "../../../inputs/DateRange";
import Input_Vehiculos from "../../../inputs/Vehiculos";
import Input_Bonificacion from "../../../inputs/Bonificacion";
function Escritorio({
  listado,
  control,
  setValue,
  fecha,
  errors,
  viaje,
  origenes,
  destinos,
}) {
  return (
    <>
      <div
        className={`${
          listado === true
            ? "tw-col-span-6 2xl:tw-col-span-2"
            : "tw-col-span-6 2xl:tw-col-span-3"
        }`}
      >
        <Input_Destinos
          datos={origenes}
          name="idZonaOrigen"
          control={control}
          placeholder="Origen"
        />
      </div>
      <div className=" tw-col-span-6 2xl:tw-col-span-2">
        <Input_Destinos
          datos={destinos}
          name="idZona"
          control={control}
          placeholder="Destino"
        />
      </div>
      <div
        className={`${
          listado === true
            ? "tw-col-span-3 2xl:tw-col-span-3"
            : "tw-col-span-4 2xl:tw-col-span-3"
        }`}
      >
        {viaje === "ida" ? (
          <div className="tw-flex tw-flex-col">
            <Input_Fecha
              fecha={fecha}
              name={"fecha"}
              setValue={setValue}
              control={control}
            />
          </div>
        ) : (
          <Input_DateRange
            control={control}
            placeholder={"Fechas"}
            nameStartDate={"salida"}
            nameEndDate={"llegada"}
          />
        )}
      </div>
      <div
        className={`${
          listado === true
            ? "tw-col-span-3 2xl:tw-col-span-2"
            : "tw-col-span-4 2xl:tw-col-span-2"
        }`}
      >
        <Input_Bonificacion
          setValue={setValue}
          namePasajeros="pasajeros"
          control={control}
          errors={errors}
        />
      </div>
      <div
        className={`${
          listado === true
            ? "tw-col-span-5 2xl:tw-col-span-2"
            : "tw-col-span-4 2xl:tw-col-span-2"
        }`}
      >
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
    </>
  );
}

export default Escritorio;
