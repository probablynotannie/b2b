import Input_Destinos from "../../../inputs/Destinos";
import Input_Puertos from "../../../inputs/Puertos";
import Input_Navieras from "../../../inputs/Navieras";
import Input_Mes from "../../../inputs/Mes";
import Input_Dias from "../../../inputs/SelectorDias";
function Movil({ zonasOrd, puertosOrd, control, navierasOrd }) {
  return (
    <>
      <Input_Destinos
        datos={zonasOrd}
        name="idZona"
        control={control}
        placeholder="Selecciona un destino"
      />
      <Input_Puertos
        datos={puertosOrd}
        name="idPuerto"
        control={control}
        placeholder="Selecciona un puerto"
      />
      <Input_Navieras
        datos={navierasOrd}
        name="idNav"
        control={control}
        placeholder="Selecciona una naviera"
      />
      <Input_Mes control={control} name="fechSal" />
      <Input_Dias control={control} name="duracion" />
    </>
  );
}

export default Movil;
