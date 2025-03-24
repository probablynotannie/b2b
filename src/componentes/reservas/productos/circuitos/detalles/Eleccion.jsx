import Fecha from "../../../../inputs/Fecha";
import Origen from "../../../../inputs/Destinos";
import Input_Hab_Ad_Ni from "../../../../inputs/Hab_Adulto_Ninio";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Datos_Destino from "../../../../../helpers/destinos.json";
const Eleccion = ({
  fecha,
  habitacion,
  setHabitacion,
  roomData,
  setRoomData,
  actividad,
}) => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    navigate("/datosCircuito", {
      state: { datosForm: data, actividad, habitacion, roomData },
    });
  };

  

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="tw-mt-4 tw-space-y-2">
      <Origen
        required={true}
        datos={Datos_Destino}
        name="destino"
        control={control}
        placeholder="Selecciona un destino"
      />
      <Fecha
        required={true}
        fecha={fecha}
        name={"fecha"}
        setValue={setValue}
        control={control}
      />

      <Input_Hab_Ad_Ni
        habitacion={habitacion}
        setHabitacion={setHabitacion}
        roomData={roomData}
        setRoomData={setRoomData}
      />

      <button className="tw-w-full tw-bg-secondary dark:tw-bg-green-600 tw-rounded-lg hover:tw-shadow-lg tw-transition tw-duration-300 tw-text-white tw-p-3 tw-font-semibold tw-mt-2">
        {actividad.precio.toFixed(2)}€
      </button>
    </form>
  );
};

export default Eleccion;
