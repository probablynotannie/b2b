import Input_Mes from "../../../inputs/Mes";
import Input_Destinos from "../../../inputs/Pais_Ciudad";
function Movil({ control, continents, regions }) {
  return (
    <>
      <Input_Destinos
        control={control}
        nameContinent="continent"
        nameRegion="region"
        continents={continents}
        regions={regions}
      />
      <Input_Mes name={"fechSal"} control={control} />
    </>
  );
}

export default Movil;
