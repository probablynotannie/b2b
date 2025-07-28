import Input_Select from "../../../inputs/Selector";
import Input_dateRange from "../../../inputs/DateRange";
import Input_selectNum from "../../../inputs/SelectorNums";
import { FaGlobe, FaUserShield } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaPerson } from "react-icons/fa6";
function Escritorio({
  errors,
  seguros,
  register,
  control,
  residentes,
  maxPasajeros,
  destinos,
}) {
  return (
    <>
      <div className="tw-col-span-6 xl:tw-col-span-3">
        <Input_Select
          errors={errors}
          icono={<FaUserShield />}
          placeholder="Tipo seguro"
          opciones={seguros}
          name={"tipo"}
          register={register}
        />
      </div>
      <div className="tw-col-span-6 xl:tw-col-span-3">
        <Input_Select
          errors={errors}
          icono={<FaGlobe />}
          placeholder="Destino"
          opciones={destinos}
          name={"destino"}
          register={register}
        />
      </div>
      <div className="tw-col-span-4 xl:tw-col-span-2">
        <Input_dateRange
          control={control}
          placeholder={"Fechas"}
          nameStartDate={"salida"}
          nameEndDate={"llegada"}
        />
      </div>
      <div className="tw-col-span-4 xl:tw-col-span-2">
        <Input_Select
          errors={errors}
          icono={<IoPersonSharp />}
          placeholder="Residencia"
          opciones={residentes}
          name="residente"
          register={register}
        />
      </div>
      <div className="tw-col-span-4 xl:tw-col-span-2">
        <Input_selectNum
          placeholder={"Personas"}
          control={control}
          name={"pasajeros"}
          num={maxPasajeros}
          icono={<FaPerson />}
        />
      </div>
    </>
  );
}

export default Escritorio;
