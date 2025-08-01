import Input_Select from "../../../inputs/Selector";
import Input_dateRange from "../../../inputs/DateRange";
import Input_selectNum from "../../../inputs/SelectorNums";
import { FaGlobe, FaUserShield } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaPerson } from "react-icons/fa6";
function Movil({
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
      <Input_Select
        errors={errors}
        icono={<FaUserShield />}
        placeholder="Tipo seguro"
        opciones={seguros}
        name={"tipo"}
        register={register}
      />

      <Input_Select
        errors={errors}
        icono={<FaGlobe />}
        placeholder="Destino"
        opciones={destinos}
        name={"destino"}
        register={register}
      />

      <Input_dateRange
        control={control}
        placeholder={"Fechas"}
        nameStartDate={"salida"}
        nameEndDate={"llegada"}
      />

      <Input_Select
        errors={errors}
        icono={<IoPersonSharp />}
        placeholder="Residencia"
        opciones={residentes}
        name="residente"
        register={register}
      />

      <Input_selectNum
        placeholder={"Núm pasajeros"}
        control={control}
        name={"pasajeros"}
        num={maxPasajeros}
        icono={<FaPerson />}
      />
    </>
  );
}

export default Movil;
