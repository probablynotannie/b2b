import Input_Destinos from "../../../inputs/Buscador";
import Input_Personas from "../../../inputs/Adulto_Ninio_Infant";
import Input_DateRangeMobile from "../../../inputs/DateRange";
import Input_Hora from "../../../inputs/Hora";
function Movil({ control, destinos, setValue }) {
  return (
    <>
      <Input_Destinos
        control={control}
        name={"origen"}
        setValue={setValue}
        placeholder={"Origen"}
        destinos={destinos}
      />
      <Input_Destinos
        control={control}
        name={"destino"}
        setValue={setValue}
        placeholder={"Destino"}
        destinos={destinos}
      />
      <Input_DateRangeMobile
        control={control}
        nameStartDate="startDate"
        nameEndDate="endDate"
        placeholder="Selecciona un rango de fechas"
      />
      <Input_Hora control={control} setValue={setValue} name={"horaRecogida"} />
      <Input_Hora
        control={control}
        setValue={setValue}
        name={"horaDevolucion"}
      />
      <Input_Personas
        control={control}
        nameAdult={"adults"}
        nameKid={"children"}
        nameInfant={"infants"}
      />
    </>
  );
}

export default Movil;
