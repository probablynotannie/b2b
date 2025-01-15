import Sidebar from "./sidebar/Sidebar";
import Input_PHab_Ad_Nin from "../inputs/Hab_Adulto_Ninio2";
import Input_Buscador2 from "../inputs/Buscador2";
import Input_DateRange from "../inputs/DateRange";
import Input_Nacionalidad from "../inputs/Nacionalidad";
import { Link } from "react-router-dom";
import { useState } from "react";
function Hoteles() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [habitacion, setHabitacion] = useState(1);
  const [roomData, setRoomData] = useState([
    { id: Date.now(), adultos: 1, ninios: 0, ninioAges: [] },
  ]);
  const [nacionalidad, setNacionalidad] = useState();
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
  const [destino, setDestino] = useState("");
  return (
    <div className="h-{100vh} p-0">
      <div className="grid  grid-cols-10 gap-10 lg:px-20 lg:min-h-[78vh] min-h-[90vh] lg:py-10">
        <Sidebar />
        <div
          className="relative flex  lg:block items-center justify-center h-full  col-span-10 lg:col-span-7 xl:col-span-8 min-h-[68vh] lg:rounded-lg lg:shadow-lg"
          style={{
            backgroundImage: `url(/banner_hoteles.jpg)`,
            backgroundSize: "cover",
          }}
        >
          <div
            className={`absolute z-0 bg-indigo-800 w-full h-full bg-opacity-35 rounded-lg shadow-lg px-10 `}
          ></div>
          <div className="relative xl:top-32 lg:left-20 bg-CajaForms bg-opacity-80 dark:bg-opacity-90 text-white px-4 md:px-10 w-11/12 md:w-2/3 lg:w-2/4  2xl:w-2/7 h-fit py-5 pb-16 rounded-lg shadow-xl">
            <form>
              <h2 className="text-3xl font-bold ">Buscador de hoteles</h2>
              <div className="grid grid-cols-1 gap-2  mt-2">
                <div>
                  <Input_Buscador2
                    destinos={destinos}
                    destino={destino}
                    setDestino={setDestino}
                  />
                </div>
                <div>
                  <Input_DateRange
                    startDate={startDate}
                    endDate={endDate}
                    setStartDate={setStartDate}
                    setEndDate={setEndDate}
                  />
                </div>
                <div>
                  <Input_Nacionalidad
                    value={nacionalidad}
                    setValue={setNacionalidad}
                  />
                </div>
                <div>
                  <Input_PHab_Ad_Nin
                    habitacion={habitacion}
                    setHabitacion={setHabitacion}
                    roomData={roomData}
                    setRoomData={setRoomData}
                  />
                </div>
              </div>
              <div className="absolute -bottom-5 right-5">
                <Link to="/listadoHoteles">
                  <button className="bg-slate-900 border-2 border-white border-opacity-20 shadow-xl rounded-lg p-3 px-16 font-bold w-full">
                    Buscar
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hoteles;
