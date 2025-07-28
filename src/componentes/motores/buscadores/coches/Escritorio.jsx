import Input_Destinos from "../../../inputs/Buscador";
import Input_DateRange from "../../../inputs/DateRangeWithTime";
import Input_Edad from "../../../inputs/Edad";

function Inputs({ lugarEntrega, control, setValue, destinos, listado }) {
  return (
    <>
      <div
        className={
          lugarEntrega === true && listado === true
            ? "tw-col-span-12 lg:tw-col-span-12 xl:tw-col-span-3 2xl:tw-col-span-4"
            : lugarEntrega === false
            ? "tw-col-span-6 lg:tw-col-span-6 xl:tw-col-span-3 2xl:tw-col-span-3"
            : "tw-col-span-12 lg:tw-col-span-12 xl:tw-col-span-4 2xl:tw-col-span-4"
        }
      >
        <Input_Destinos
          required={true}
          control={control}
          name={"origen"}
          setValue={setValue}
          placeholder={"Origen"}
          destinos={destinos}
        />
      </div>
      {lugarEntrega === false && (
        <div
          className={`${
            lugarEntrega === false
              ? "tw-col-span-6 xl:tw-col-span-2 2xl:tw-col-span-3"
              : "tw-col-span-2"
          }`}
        >
          <Input_Destinos
            required={true}
            control={control}
            name={"destino"}
            setValue={setValue}
            placeholder={"Destino"}
            destinos={destinos}
          />
        </div>
      )}
      <div
        className={`tw-col-span-4 ${
          lugarEntrega === false ? "xl:tw-col-span-2" : "xl:tw-col-span-3"
        } `}
      >
        <Input_DateRange
          control={control}
          nameFecha="startDate"
          nameHora="horaRecogida"
          placeholder="Selecciona una fecha y hora"
        />
      </div>
      <div
        className={`tw-col-span-4 ${
          lugarEntrega === false ? "xl:tw-col-span-2" : "xl:tw-col-span-3"
        } `}
      >
        <Input_DateRange
          control={control}
          nameFecha="endDate"
          nameHora="horaDevolucion"
          placeholder="Selecciona una fecha y hora"
        />
      </div>
      <div
        className={`${
          listado === true
            ? "tw-col-span-3 lg:tw-col-span-3 xl:tw-col-span-2 2xl:tw-col-span-1"
            : "tw-col-span-4 xl:tw-col-span-2"
        }`}
      >
        <Input_Edad
          control={control}
          name="edadConductor"
          edadMinima={18}
          edadMaxima={100}
        />
      </div>
    </>
  );
}

export default Inputs;
