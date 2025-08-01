import Input_Destinos from "../../../inputs/Buscador";
import Input_DateRange from "../../../inputs/DateRangeWithTime";
import Input_Personas from "../../../inputs/Adulto_Ninio_Infant";

function Escritorio({ control, listado, setValue, destinos }) {
  return (
    <>
      <div
        className={
          listado !== true ? "tw-col-span-6 xl:tw-col-span-2" : "tw-col-span-2"
        }
      >
        <Input_Destinos
          control={control}
          name={"origen"}
          setValue={setValue}
          placeholder={"Origen"}
          destinos={destinos}
        />
      </div>
      <div
        className={
          listado !== true ? "tw-col-span-6 xl:tw-col-span-2" : "tw-col-span-2"
        }
      >
        <Input_Destinos
          control={control}
          name={"destino"}
          setValue={setValue}
          placeholder={"Destino"}
          destinos={destinos}
        />
      </div>
      <div
        className={
          listado !== true ? "tw-col-span-4 xl:tw-col-span-3" : "tw-col-span-2"
        }
      >
        <Input_DateRange
          control={control}
          nameFecha="startDate"
          nameHora="horaRecogida"
          placeholder="Selecciona una fecha y hora"
        />
      </div>
      <div
        className={
          listado !== true ? "tw-col-span-4 xl:tw-col-span-3" : "tw-col-span-2"
        }
      >
        <Input_DateRange
          control={control}
          nameFecha="endDate"
          nameHora="horaDevolucion"
          placeholder="Selecciona una fecha y hora"
        />
      </div>
      <div
        className={
          listado !== true
            ? "tw-col-span-4 xl:tw-col-span-2"
            : "tw-col-span-11 lg:tw-col-span-3"
        }
      >
        <Input_Personas
          control={control}
          nameAdult={"adults"}
          nameKid={"children"}
          nameInfant={"infants"}
        />
      </div>
    </>
  );
}

export default Escritorio;
