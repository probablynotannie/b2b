import { FaCity } from "react-icons/fa";
import Input_Destinos from "../../../inputs/Buscador";
import Input_Edad from "../../../inputs/Edad";
import Input_DateRangeMobile from "../../../inputs/DateRange";
import Input_Hora from "../../../inputs/Hora";

function Inputs({
  control,
  lugarEntrega,
  setLugarEntrega,
  destinos,
  setValue,
}) {
  return (
    <>
      <div className="tw-gap-2">
        <input
          id="ciudadEntrega"
          type="checkbox"
          checked={lugarEntrega}
          onChange={(e) => setLugarEntrega(e.target.checked)}
          className="tw-hidden peer"
        />
        <label
          htmlFor="ciudadEntrega"
          className={`tw-select-none tw-flex tw-items-center tw-gap-2 tw-px-4 tw-py-2 tw-rounded-lg tw-border tw-cursor-pointer tw-transition-all ${
            lugarEntrega === true
              ? "tw-bg-pink-100 dark:tw-bg-pink-900  tw-border-pink-500 tw-text-pink-700 dark:tw-text-pink-300"
              : "tw-bg-slate-200 dark:tw-bg-slate-800 tw-border-slate-300 dark:tw-border-slate-600 tw-text-slate-500"
          }`}
        >
          <FaCity />
          Entrega en la misma ciudad
        </label>
      </div>
      <Input_Destinos
        required={true}
        control={control}
        name={"origen"}
        setValue={setValue}
        placeholder={"Origen"}
        destinos={destinos}
      />
      {lugarEntrega === false && (
        <Input_Destinos
          required={true}
          control={control}
          name={"destino"}
          setValue={setValue}
          placeholder={"Destino"}
          destinos={destinos}
        />
      )}
      <Input_DateRangeMobile
        control={control}
        nameStartDate="startDate"
        nameEndDate="endDate"
        placeholder="Selecciona un rango de fechas"
      />
      <Input_Hora
        control={control}
        setValue={setValue}
        name={"horaRecogida"}
        defaultValue="12:00"
      />
      <Input_Hora
        control={control}
        setValue={setValue}
        name={"horaDevolucion"}
        defaultValue="12:00"
      />
      <Input_Edad
        control={control}
        name="edadConductor"
        edadMinima={18}
        edadMaxima={100}
      />
    </>
  );
}

export default Inputs;
