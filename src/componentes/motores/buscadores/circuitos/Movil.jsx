import Input_Destinos from "../../../inputs/Destinos";
function Movil({ destinos, control }) {
  return (
    <>
      <Input_Destinos
        datos={destinos}
        name="origen"
        control={control}
        placeholder="Selecciona un origen"
      />
      <Input_Destinos
        datos={destinos}
        name="destino"
        control={control}
        placeholder="Selecciona un destino"
      />
    </>
  );
}

export default Movil;
