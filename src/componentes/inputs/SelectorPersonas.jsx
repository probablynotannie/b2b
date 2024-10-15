import { useState } from "react";
import { Popover } from "flowbite-react";
import { MdMeetingRoom } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";

function SelectorPersonas() {
  const [open, setOpen] = useState(false);

  const [habitacion, setHabitacion] = useState(1);
  const [adultos, setAdultos] = useState(2);
  const [ninios, setNinios] = useState(0);
  const [ninioAges, setNinioAges] = useState([]);
  function onHabitacionChange(e) {
    let resultado = e.target.value;
    setHabitacion(resultado);
  }
  function onAdultosChange(e) {
    let resultado = e.target.value;
    setAdultos(resultado);
  }
  function onNiniosChange(e) {
    const count = parseInt(e.target.value, 10);
    setNinios(count);

    // Create an array of empty strings with the length of selected ninio count
    setNinioAges(new Array(count).fill(""));
  }
  const handleAgeChange = (index, age) => {
    const newAges = [...ninioAges];
    newAges[index] = age;
    setNinioAges(newAges);
  };
  return (
    <div className="relative w-full">
      <Popover
        aria-labelledby="area-popover"
        open={open}
        onOpenChange={setOpen}
        content={
          <div className=" w-72 space-y-3 p-4 text-sm text-gray-500">
            <div>
              <span className="text-sm">Habitaciones</span>
              <div className="relative">
                <select
                  onChange={onHabitacionChange}
                  id="habitaciones"
                  className="pl-12 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-0 focus:ring-blue-500 focus:border-blue-500  w-full p-2.5"
                >
                  <option value={1} selected>
                    1
                  </option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                </select>

                <div className="absolute top-0 pointer-events-none  bg-primary text-white h-full rounded-tl-md rounded-bl-md flex items-center justify-center w-8 text-xl">
                  <MdMeetingRoom />
                </div>
              </div>
            </div>
            <div>
              <span className="text-sm">Adultos</span>
              <div className="relative">
                <select
                  onChange={onAdultosChange}
                  id="habitaciones"
                  className="pl-12 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-0 focus:ring-blue-500 focus:border-blue-500  w-full p-2.5"
                >
                  <option value={1}>1</option>
                  <option value={2} selected>
                    2
                  </option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                </select>

                <div className="absolute top-0 pointer-events-none  bg-primary text-white h-full rounded-tl-md rounded-bl-md flex items-center justify-center w-8 text-xl">
                  <MdMeetingRoom />
                </div>
              </div>
            </div>
            <div>
              <span className="text-sm">Niños</span>
              <div className="relative">
                <select
                  onChange={onNiniosChange}
                  id="habitaciones"
                  className="pl-12 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-0 focus:ring-blue-500 focus:border-blue-500  w-full p-2.5"
                >
                  <option value={0} selected>
                    0
                  </option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                </select>

                <div className="absolute top-0 pointer-events-none  bg-primary text-white h-full rounded-tl-md rounded-bl-md flex items-center justify-center w-8 text-xl">
                  <MdMeetingRoom />
                </div>
              </div>
              {ninios > 0 && (
                <div className="grid grid-cols-3 gap-1">
                  {Array.from({ length: ninios }).map((_, index) => (
                    <div key={index} className="mt-4">
                      <input
                        required
                        type="number"
                        id={`ninio-age-${index}`}
                        value={ninioAges[index] || ""}
                        onChange={(e) => handleAgeChange(index, e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        placeholder="Edad"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        }
      >
        <div className="border border-gray-300 bg-white text-gray-700 p-2.5 rounded-lg pl-10 text-sm">
          {habitacion} hab {adultos} adultos {ninios} niños
        </div>
      </Popover>
      <div className="absolute top-0 pointer-events-none  bg-inputIcon text-white h-full rounded-tl-md rounded-bl-md flex items-center justify-center w-8 text-xl ">
        <MdPeopleAlt />
      </div>
    </div>
  );
}

export default SelectorPersonas;
