import Input_Buscador from "../../../inputs/Buscador";
import Input_DateRange from "../../../inputs/DateRange";
import Input_Fecha from "../../../inputs/Fecha";
function Movil({ control, setValue, destinos, fecha, viaje }) {
  return (
    <>
      <Input_Buscador
        control={control}
        name={"origen"}
        setValue={setValue}
        placeholder={"Origen"}
        destinos={destinos}
      />
      <Input_Buscador
        control={control}
        name={"destino"}
        setValue={setValue}
        placeholder={"Destino"}
        destinos={destinos}
      />
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
    </>
  );
}

export default Movil;
