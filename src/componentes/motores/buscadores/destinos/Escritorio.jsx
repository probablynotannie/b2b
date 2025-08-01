import Input_Mes from "../../../inputs/Mes";
import Input_Destinos from "../../../inputs/Pais_Ciudad";
function Escritorio({ control, continents, regions, listado }) {
  return (
    <>
      <div
        className={`${listado === true ? "tw-col-span-6" : "tw-col-span-6"}`}
      >
        <Input_Destinos
          control={control}
          nameContinent="continent"
          nameRegion="region"
          continents={continents}
          regions={regions}
        />
      </div>
      <div
        className={`${listado === true ? "tw-col-span-5" : "tw-col-span-6"}`}
      >
        <Input_Mes name={"fechSal"} control={control} />
      </div>
    </>
  );
}

export default Escritorio;
