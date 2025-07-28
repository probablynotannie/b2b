import Input_Buscador from "../../../inputs/Buscador";
import Input_DateRange from "../../../inputs/DateRange";
import Input_Fecha from "../../../inputs/Fecha";
function Escritorio({ control, setValue, destinos, fecha, viaje, listado }) {
  return (
    <>
      <div className="tw-col-span-4">
        <Input_Buscador
          /* required={true} */
          control={control}
          name={"origen"}
          setValue={setValue}
          placeholder={"Origen"}
          destinos={destinos}
        />
      </div>
      <div className="tw-col-span-4">
        <Input_Buscador
          /* required={true} */
          control={control}
          name={"destino"}
          setValue={setValue}
          placeholder={"Destino"}
          destinos={destinos}
        />
      </div>

      <div
        className={`${listado === true ? "tw-col-span-3" : "tw-col-span-4"}`}
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
    </>
  );
}

export default Escritorio;
