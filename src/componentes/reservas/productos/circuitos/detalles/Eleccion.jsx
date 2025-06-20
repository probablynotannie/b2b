import { useState } from "react";
import Fecha from "../../../../inputs/Fecha";
import Origen from "../../../../inputs/Destinos";
import Input_Hab_Ad_Ni from "../../../../inputs/Hab_Adulto_Ninio";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Datos_Destino from "../../../../../helpers/destinos.json";
import cesta from "../../../../estructura/cesta/Zustand";
import formatearFecha from "../../../../../helpers/FormatearFecha";
import AnadirMasProductos from "../../../../../helpers/visuales/masProductos/AnadirMasProductos";
const Eleccion = ({
  fecha,
  habitacion,
  setHabitacion,
  roomData,
  setRoomData,
  actividad,
}) => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState(null);


  const {
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm();

  const anadirProducto = cesta((state) => state.anadirProducto);

  const onSubmit = (data) => {
    setFormData(data);
    setModalOpen(true);
  };

  const aniadirMas = () => {
    anadirProducto({
      ...actividad,
      fecha: formatearFecha(formData.fecha),
      titulo: actividad.titulo,
      img: actividad.img,
      pax: 2,
      type: 12,
      habitacion,
      roomData,
      data: formData,
    });
    setModalOpen(false);
  };

  const sinProductosAdicionales = () => {
    navigate("/datosCircuito", {
      state: {
        datosForm: formData,
        actividad,
        habitacion,
        roomData,
      },
    });
  };

  return (
    <>
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
        <button
          type="submit"
          className="tw-btn_accesorios tw-btn_primario tw-w-full"
        >
          {actividad.precio.toFixed(2)}€
        </button>
      </form>
      <AnadirMasProductos
        isOpen={modalOpen}
        setModalOpen={setModalOpen}
        masProductos={aniadirMas}
        onConfirm={sinProductosAdicionales}
      />
    </>
  );
};

export default Eleccion;
