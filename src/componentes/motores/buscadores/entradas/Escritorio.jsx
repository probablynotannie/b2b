import Input_Buscador from "../../../inputs/Buscador";
import Input_Fecha from "../../../inputs/Fecha";
import Input_AdultoNInio from "../../../inputs/Adulto_Ninio";
function Escritorio({
  listado,
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
      <div className="tw-col-span-4">
        <Input_Buscador
          control={control}
          name={"origen"}
          setValue={setValue}
          placeholder={"Origen"}
          destinos={destinos}
        />
      </div>
      <div className="tw-col-span-4">
        <Input_Fecha
          fecha={fecha}
          name={"fecha"}
          setValue={setValue}
          control={control}
        />
      </div>

      <div
        className={`${listado === true ? "tw-col-span-3" : "tw-col-span-4"}`}
      >
        <Input_AdultoNInio
          adultos={adultos}
          setAdultos={setAdultos}
          setNinios={setNinios}
          ninios={ninios}
          ninioAges={ninioAges}
          setNinioAges={setNinioAges}
        />
      </div>
    </>
  );
}

export default Escritorio;
