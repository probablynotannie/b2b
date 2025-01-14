import React, { useState } from "react";
import Fecha from "../../../../inputs/Fecha";
import Origen from "../../../../inputs/Destinos";
const Eleccion = () => {
  const [rooms, setRooms] = useState(4);
  const [roomData, setRoomData] = useState(
    Array.from({ length: rooms }, () => ({ people: 2, ages: [25, 25] }))
  );
  const [fecha, setFecha] = useState();
  const handleRoomChange = (index, field, value) => {
    const newRoomData = [...roomData];
    if (field === "people") {
      newRoomData[index].people = parseInt(value);
      newRoomData[index].ages = Array.from(
        { length: parseInt(value) },
        () => 25
      );
    } else if (field === "ages") {
      newRoomData[index].ages = value;
    }
    setRoomData(newRoomData);
  };
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
  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Combinado Cantabria y Asturias
      </h2>

      <div className="mb-4">
        <Origen destinos={destinos} destino={origen} setDestino={setOrigen} />
      </div>
      <div className="mb-4">
        <Fecha fecha={fecha} setFecha={setFecha} />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Número de habitaciones
        </label>
        <select
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          value={rooms}
          onChange={(e) => {
            const value = parseInt(e.target.value);
            setRooms(value);
            setRoomData(
              Array.from(
                { length: value },
                (_, i) => roomData[i] || { people: 2, ages: [25, 25] }
              )
            );
          }}
        >
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={n}>
              {n} Habitaciones
            </option>
          ))}
        </select>
      </div>

      {roomData.map((room, index) => (
        <div key={index} className="mb-4 border p-4 rounded-md">
          <h3 className="text-lg font-medium text-gray-700">
            Datos viajeros habitación {index + 1}
          </h3>
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Personas
            </label>
            <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={room.people}
              onChange={(e) =>
                handleRoomChange(index, "people", e.target.value)
              }
            >
              {[1, 2, 3, 4].map((n) => (
                <option key={n} value={n}>
                  {n} Person
                </option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {room.ages.map((age, ageIndex) => (
              <div key={ageIndex}>
                <label className="block text-sm font-medium text-gray-700">
                  Edad
                </label>
                <select
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  value={age}
                  onChange={(e) => {
                    const newAges = [...room.ages];
                    newAges[ageIndex] = parseInt(e.target.value);
                    handleRoomChange(index, "ages", newAges);
                  }}
                >
                  {Array.from({ length: 100 }, (_, i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Eleccion;
