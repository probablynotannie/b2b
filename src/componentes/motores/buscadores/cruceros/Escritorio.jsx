import Input_Destinos from "../../../inputs/Destinos";
import Input_Puertos from "../../../inputs/Puertos";
import Input_Navieras from "../../../inputs/Navieras";
import Input_Mes from "../../../inputs/Mes";
import Input_Dias from "../../../inputs/SelectorDias";
function Escritorio({ listado, zonasOrd, control, puertosOrd, navierasOrd }) {
  return (
    <>
      <div
        className={`tw-col-span-4 ${
          listado
            ? "lg:tw-col-span-4 xl:tw-col-span-3"
            : "lg:tw-col-span-6 xl:tw-col-span-3"
        }`}
      >
        <Input_Destinos
          datos={zonasOrd}
          name="idZona"
          control={control}
          placeholder="Destino"
        />
      </div>
      <div
        className={`tw-col-span-4 ${
          listado
            ? "lg:tw-col-span-4 xl:tw-col-span-2"
            : "lg:tw-col-span-6 xl:tw-col-span-3"
        }`}
      >
        <Input_Puertos
          datos={puertosOrd}
          name="idPuerto"
          control={control}
          placeholder="Puerto"
        />
      </div>
      <div className="tw-col-span-4 lg:tw-col-span-4 xl:tw-col-span-2">
        <Input_Navieras
          datos={navierasOrd}
          name="idNav"
          control={control}
          placeholder="Naviera"
        />
      </div>
      <div
        className={`${
          listado
            ? "tw-col-span-5 lg:tw-col-span-5 xl:tw-col-span-2"
            : "tw-col-span-6 lg:tw-col-span-4 xl:tw-col-span-2"
        }`}
      >
        <Input_Mes control={control} name="fechSal" />
      </div>
      <div
        className={`${
          listado
            ? "tw-col-span-5 lg:tw-col-span-6 xl:tw-col-span-2"
            : "tw-col-span-6 lg:tw-col-span-4 xl:tw-col-span-2"
        }`}
      >
        <Input_Dias control={control} name="duracion" />
      </div>
    </>
  );
}

export default Escritorio;
