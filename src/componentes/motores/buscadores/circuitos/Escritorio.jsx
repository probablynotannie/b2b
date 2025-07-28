import Input_Destinos from "../../../inputs/Destinos";
function Escritorio({ destinos, control }) {
  return (
    <>
      <div className="tw-col-span-6">
        <Input_Destinos
          datos={destinos}
          name="origen"
          control={control}
          placeholder="Selecciona un origen"
        />
      </div>
      <div className="tw-col-span-6">
        <Input_Destinos
          datos={destinos}
          name="destino"
          control={control}
          placeholder="Selecciona un destino"
        />
      </div>
    </>
  );
}

export default Escritorio;
