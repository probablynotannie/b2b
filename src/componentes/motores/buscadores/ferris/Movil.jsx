import Input_Destinos from "../../../inputs/Destinos";
import Input_Fecha from "../../../inputs/Fecha";
import Input_DateRange from "../../../inputs/DateRange";
import Input_Vehiculos from "../../../inputs/Vehiculos";
import Input_Bonificacion from "../../../inputs/Bonificacion";
import { FaArrowRight } from "react-icons/fa";
import { GoArrowSwitch } from "react-icons/go";
function Movil({
  control,
  setValue,
  fecha,
  errors,
  viaje,
  origenes,
  destinos,
  handleviajeChange,
}) {
  return (
    <>
      <div className="tw-flex tw-gap-2">
        <div
          onClick={() => handleviajeChange("ida")}
          className={`tw-select-none tw-flex tw-items-center tw-gap-2 tw-px-4 tw-py-2 tw-rounded-lg tw-border tw-cursor-pointer tw-transition-all
                    ${
                      viaje === "ida"
                        ? "tw-bg-pink-100 dark:tw-bg-pink-900  tw-border-pink-500 tw-text-pink-700 dark:tw-text-pink-300"
                        : "tw-bg-slate-100 dark:tw-bg-slate-900 tw-border-slate-300 dark:tw-border-slate-600 tw-text-slate-500 dark:tw-text-slate-400"
                    }`}
        >
          <FaArrowRight className="tw-text-pink-700 dark:tw-text-pink-500" />
          Solo ida
        </div>
        <div
          onClick={() => handleviajeChange("ida_vuelta")}
          className={`tw-select-none tw-flex tw-items-center tw-gap-2 tw-px-4 tw-py-2 tw-rounded-lg tw-border tw-cursor-pointer tw-transition-all
                    ${
                      viaje === "ida_vuelta"
                        ? "tw-bg-blue-100 dark:tw-bg-blue-900 tw-border-blue-500 tw-text-blue-700 dark:tw-text-blue-300"
                        : "tw-bg-slate-100 dark:tw-bg-slate-900 tw-border-slate-300 dark:tw-border-slate-600 tw-text-slate-500 dark:tw-text-slate-400"
                    }`}
        >
          <GoArrowSwitch className="tw-text-blue-700 dark:tw-text-blue-500" />
          Ida y vuelta
        </div>
      </div>
      <Input_Destinos
        datos={origenes}
        name="idZonaOrigen"
        control={control}
        placeholder="Selecciona un origen"
      />
      <Input_Destinos
        datos={destinos}
        name="idZona"
        control={control}
        placeholder="Selecciona un destino"
      />
      {viaje === "ida" ? (
        <Input_Fecha
          errors={errors}
          fecha={fecha}
          name={"fecha"}
          setValue={setValue}
          control={control}
          required={true}
        />
      ) : (
        <Input_DateRange
          control={control}
          placeholder={"Fechas"}
          nameStartDate={"salida"}
          nameEndDate={"llegada"}
        />
      )}
      <div>
        <Input_Vehiculos
          setValue={setValue}
          nameVehiculos="vehiculos"
          nameTipoVehiculo="tipoVehiculo"
          nameRemolque="remolque"
          nameLongitud="longitud"
          nameAltura={"altura"}
          nameLongRemolque={"longitudRemolque"}
          nameAltRemolque={"alturaRemolque"}
        />
      </div>
      <div>
        <Input_Bonificacion
          setValue={setValue}
          namePasajeros="pasajeros"
          control={control}
          errors={errors}
        />
      </div>
      l
    </>
  );
}

export default Movil;
