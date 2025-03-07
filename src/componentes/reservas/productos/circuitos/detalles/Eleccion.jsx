import { useState } from "react";
import Fecha from "../../../../inputs/Fecha";
import Origen from "../../../../inputs/Destinos";
import Input_Hab_Ad_Ni from "../../../../inputs/Hab_Adulto_Ninio";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import formatearFecha from "../../../../../helpers/FormatearFecha";

const Eleccion = ({
  fecha,
  setFecha,
  habitacion,
  setHabitacion,
  roomData,
  setRoomData,
  actividad,
}) => {
  const destinos = [
    { type: "Destino", name: "MADRID Centro", destino: "Madrid" },
    { type: "Destino", name: "MADRID Afueras", destino: "Madrid" },
    { type: "Destino", name: "BARCELONA", destino: "Madrid" },
    { type: "Destino", name: "SEVILLA", destino: "Sevilla" },
    { type: "Destino", name: "MADRID - CAPE GIRARDEAU", destino: "Madrid" },
    { type: "Hotel", name: "Hotel Barcelona", destino: "Barcelona" },
    { type: "Hotel", name: "Hotel Madrid", destino: "Madrid" },
    { type: "Hotel", name: "Hotel Sevilla", destino: "Sevilla" },
  ];

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    control,
    clearErrors,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // You can navigate here if everything is valid
    // navigate("/datosCircuito", {
    //   state: { datosForm: data, actividad, habitacion, roomData },
    // });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="tw-mt-4 tw-space-y-2">
      <Origen
        datos={destinos}
        name="destino"
        control={control}
        placeholder="Selecciona un destino"
      />
      <Fecha fecha={fecha} name={`fecha`} setValue={setValue} />
      {errors.fecha && (
        <p className="tw-text-red-500 tw-text-sm">{errors.fecha.message}</p>
      )}

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
