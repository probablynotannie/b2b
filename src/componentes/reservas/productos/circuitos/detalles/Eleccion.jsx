import { useState } from "react";
import Fecha from "../../../../inputs/Fecha";
import Origen from "../../../../inputs/Destinos";
import Input_Hab_Ad_Ni from "../../../../inputs/Hab_Adulto_Ninio2";
const Eleccion = ({ fecha, setFecha, habitacion, setHabitacion, roomData, setRoomData }) => {

  const [origen, setOrigen] = useState("");
  const destinos = [
    {
      label: "Origenes",
      options: [
        { value: "Africa", label: "Africa" },
        { value: "Caribe", label: "Caribe" },
        { value: "Emiratos y Mar Rojo", label: "Emiratos y Mar Rojo" },
        { value: "Persian Gulf", label: "Persian Gulf" },
        { value: "Round World", label: "Round World" },
      ],
    },
  ];
  console.log(roomData);
  return (
    <div className="mt-4">
      <div className="mb-4">
        <Origen destinos={destinos} destino={origen} setDestino={setOrigen} />
      </div>
      <div className="mb-4">
        <Fecha fecha={fecha} setFecha={setFecha} />
      </div>
      <div className="mb-4">
        <Input_Hab_Ad_Ni
          habitacion={habitacion}
          setHabitacion={setHabitacion}
          roomData={roomData}
          setRoomData={setRoomData}
        />
      </div>
    </div>
  );
};

export default Eleccion;
