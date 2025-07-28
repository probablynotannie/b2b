import Input_Buscador from "../../../inputs/Buscador";
import Input_DateRange from "../../../inputs/DateRange";
import Input_AdultoNInio from "../../../inputs/Adulto_Ninio";
function Movil({
  control,
  setValue,
  destinos,
  adultos,
  setAdultos,
  ninios,
  setNinios,
  ninioAges,
  setNinioAges,
}) {
  return (
    <>
      <Input_Buscador
        control={control}
        name={"origen"}
        setValue={setValue}
        placeholder={"Origen"}
        destinos={destinos}
      />
      <Input_DateRange
        control={control}
        placeholder={"Fechas"}
        nameStartDate={"salida"}
        nameEndDate={"llegada"}
      />
      <Input_AdultoNInio
        adultos={adultos}
        setAdultos={setAdultos}
        setNinios={setNinios}
        ninios={ninios}
        ninioAges={ninioAges}
        setNinioAges={setNinioAges}
      />
    </>
  );
}

export default Movil;
