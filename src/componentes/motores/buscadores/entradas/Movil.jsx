import Input_Buscador from "../../../inputs/Buscador";
import Input_Fecha from "../../../inputs/Fecha";
import Input_AdultoNInio from "../../../inputs/Adulto_Ninio";
function Movil({
  control,
  setValue,
  destinos,
  fecha,
  adultos,
  setAdultos,
  setNinioAges,
  ninioAges,
  ninios,
  setNinios,
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
      <Input_Fecha
        fecha={fecha}
        name={"fecha"}
        setValue={setValue}
        control={control}
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
