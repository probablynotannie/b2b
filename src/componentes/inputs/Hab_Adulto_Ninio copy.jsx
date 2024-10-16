import { useState } from "react";
import { MdMeetingRoom } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";
import { FaChild } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { Drawer, Sidebar } from "flowbite-react";
function SelectorPersonas() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);
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
      <div className="absolute top-0 pointer-events-none  bg-inputIcon text-white h-full rounded-tl-md rounded-bl-md flex items-center justify-center w-8 text-xl ">
        <MdPeopleAlt />
      </div>

      <div
        onClick={() => setIsOpen(true)}
        className="border border-gray-300 bg-white text-gray-700 p-2.5 rounded-lg pl-10 text-sm"
      >
        {habitacion} hab {adultos} adultos {ninios} niños
      </div>
      <Drawer position="right" open={isOpen} onClose={handleClose}>
        <Drawer.Header
          className="border-b-2 border-slate-100"
          title="Habitación/Adulto/Niños"
          titleIcon={() => <></>}
        />
        <Drawer.Items>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0"
          >
            <div className="flex h-full flex-col justify-between py-2">
              <div>
                <div>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div>
                      <span className="text-sm">Habitaciones</span>
                      <div className="relative">
                        <select
                          onChange={onHabitacionChange}
                          id="habitaciones"
                          className="pl-10 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-0 focus:ring-blue-500 focus:border-blue-500  w-full p-2.5"
                        >
                          <option value={1} defaultValue>
                            1
                          </option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                        </select>

                        <div className="absolute top-0 pointer-events-none  bg-secondary text-white h-full rounded-tl-md rounded-bl-md flex items-center justify-center w-8 text-xl">
                          <MdMeetingRoom />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <span className="text-sm">Adultos</span>
                        <div className="relative">
                          <select
                            onChange={onAdultosChange}
                            id="habitaciones"
                            className="pl-10 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-0 focus:ring-blue-500 focus:border-blue-500  w-full p-2.5"
                          >
                            <option value={1}>1</option>
                            <option value={2} defaultValue>
                              2
                            </option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                          </select>

                          <div className="absolute top-0 pointer-events-none  bg-secondary text-white h-full rounded-tl-md rounded-bl-md flex items-center justify-center w-8 text-xl">
                            <FaPerson />
                          </div>
                        </div>
                      </div>
                      <div>
                        <span className="text-sm">Niños</span>
                        <div className="relative">
                          <select
                            onChange={onNiniosChange}
                            id="habitaciones"
                            className="pl-10 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-0 focus:ring-blue-500 focus:border-blue-500  w-full p-2.5"
                          >
                            <option value={0} defaultValue>
                              0
                            </option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                          </select>
                          <div className="absolute top-0 pointer-events-none  bg-secondary text-white h-full rounded-tl-md rounded-bl-md flex items-center justify-center w-8 text-xl">
                            <FaChild />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </div>
  );
}

export default SelectorPersonas;
