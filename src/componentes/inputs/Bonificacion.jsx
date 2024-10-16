import { useState } from "react";
import { Popover } from "flowbite-react";
import { MdPeopleAlt } from "react-icons/md";

function Bonificacion() {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(1); // State to track dropdown value
  const [ages, setAges] = useState({}); // State to track ages for each input field
  const [selectedForce, setSelectedForce] = useState(""); // Track the value of the last dropdown

  // Function to handle dropdown change
  const handleSelectChange = (e) => {
    const value = Number(e.target.value);
    setSelectedValue(value);

    // Reset the ages state when the dropdown value changes
    const newAges = {};
    for (let i = 1; i <= value; i++) {
      newAges[i] = ""; // Initialize each age input
    }
    setAges(newAges);
  };

  // Function to handle age input change
  const handleAgeChange = (index, value) => {
    setAges((prev) => ({ ...prev, [index]: value }));
  };

  // Function to handle the last dropdown for military forces
  const handleForceChange = (e) => {
    setSelectedForce(e.target.value);
  };

  return (
    <div className="relative w-full">
      <Popover
        aria-labelledby="area-popover"
        open={open}
        onOpenChange={setOpen}
        content={
          <div>
            <div className="bg-primary h-14 flex items-center pl-4 font-semibold">
              Tipo de bonificacion
            </div>
            <div className="w-96 space-y-3 p-4 text-sm text-gray-500">
              <div>
                <div className="relative">
                  <select
                    value={selectedValue}
                    onChange={handleSelectChange}
                    className="rounded-lg w-full border-slate-300 pl-10"
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                  </select>
                  <div className="absolute top-0 pointer-events-none bg-inputIcon text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl">
                    <MdPeopleAlt />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {Array.from({ length: selectedValue }).map((_, index) => (
                  <div key={index} className="relative">
                    <input
                      type="number"
                      placeholder={`Edad ${index + 1}`}
                      value={ages[index + 1] || ""}
                      onChange={(e) =>
                        handleAgeChange(index + 1, e.target.value)
                      }
                      className="rounded-lg w-full border-slate-300 pl-4"
                    />
                  </div>
                ))}
              </div>

              <div>
                <span>Residente?</span>
                <select className="rounded-lg w-full border-slate-300">
                  <option value={0}>---</option>
                  <option value={"Residente"}>
                    Residente en Ceuta o Melilla
                  </option>
                </select>
              </div>

              <div>
                <span>Municipio?</span>
                <select className="rounded-lg w-full border-slate-300">
                  <option value={"---"}>---</option>
                  <option value={"Ceuta"}>Ceuta</option>
                  <option value={"Melilla"}>Melilla</option>
                </select>
              </div>

              <div>
                <span>Fuerza militar?</span>
                <select
                  value={selectedForce}
                  onChange={handleForceChange}
                  className="rounded-lg w-full border-slate-300"
                >
                  <option value={"---"}>---</option>
                  <option value={"ejercito_tierra"}>Ejército de tierra</option>
                  <option value={"ejercito_aire"}>Ejército de aire</option>
                  <option value={"familia_especial"}>Family Especial</option>
                  <option value={"fuerza_naval"}>Fuerza Naval</option>
                  <option value={"fuerza_general"}>Family General</option>
                </select>
              </div>
              {selectedForce === "ejercito_tierra" && (
                <div>
                  <span>Especialidad Tierra</span>
                  <select className="rounded-lg w-full border-slate-300">
                    <option value={"infanteria"}>Infantería</option>
                    <option value={"artilleria"}>Artillería</option>
                    <option value={"caballeria"}>Caballería</option>
                  </select>
                </div>
              )}

              {selectedForce === "ejercito_aire" && (
                <div>
                  <span>Especialidad Aire</span>
                  <select className="rounded-lg w-full border-slate-300">
                    <option value={"tropa_marineria"}>
                      Militares de tropa y marinería
                    </option>
                    <option value={"generales_almirantes"}>
                      Oficiales Generales y Almirantes
                    </option>
                    <option value={"oficiales_sub"}>
                      Oficiales y Suboficiales
                    </option>
                  </select>
                </div>
              )}

              {selectedForce === "fuerza_naval" && (
                <div>
                  <span>Especialidad Naval</span>
                  <select className="rounded-lg w-full border-slate-300">
                    <option value={"tropa_marineria"}>
                      Militares de tropa y marinería
                    </option>
                    <option value={"generales_almirantes"}>
                      Oficiales Generales y Almirantes
                    </option>
                    <option value={"oficiales_sub"}>
                      Oficiales y Suboficiales
                    </option>
                  </select>
                </div>
              )}

         
            </div>
          </div>
        }
      >
        <div className="border border-gray-300 bg-white text-gray-700 p-2.5 rounded-lg pl-10 text-sm">
          Bonificación/es
        </div>
      </Popover>

      <div className="absolute top-0 pointer-events-none bg-inputIcon text-white h-full rounded-tl-md rounded-bl-md flex items-center justify-center w-8 text-xl">
        <MdPeopleAlt />
      </div>
    </div>
  );
}

export default Bonificacion;
