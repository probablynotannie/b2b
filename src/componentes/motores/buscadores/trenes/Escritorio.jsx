import Input_Select from "../../../inputs/Select";
import Input_Fecha from "../../../inputs/Fecha";
import Input_DateRange from "../../../inputs/DateRange";
import Input_Bonificacion from "../../../inputs/Pasajeros_Descuentos";
function Escritorio({
  listado,
  viaje,
  fecha,
  setValue,
  control,
  register,
  watch,
}) {
  return (
    <>
      <div className="tw-col-span-3">
        <Input_Select placeholder={"Origen"} />
      </div>
      <div className="tw-col-span-3">
        <Input_Select placeholder={"Destino"} />
      </div>
      <div
        className={`${
          listado === true ? "tw-col-span-2" : "tw-col-span-3"
        }`}
      >
        {viaje === "ida" ? (
          <Input_Fecha
            fecha={fecha}
            name={"fecha"}
            setValue={setValue}
            control={control}
          />
        ) : (
          <Input_DateRange
            control={control}
            placeholder={"Fechas"}
            nameStartDate={"salida"}
            nameEndDate={"llegada"}
          />
        )}
      </div>

      <div className="tw-col-span-3">
        <Input_Bonificacion
          register={register}
          setValue={setValue}
          watch={watch}
          control={control}
        />
      </div>
    </>
  );
}

export default Escritorio;
