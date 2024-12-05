import { useState } from "react";
import { Popover } from "flowbite-react";
import { FaCar } from "react-icons/fa";
import { FaArrowsAltH } from "react-icons/fa";
import { FaArrowsAltV } from "react-icons/fa";
import { FaTrailer } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa6";

function Vehiculos() {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(0);
  const [secondSelectValue, setSecondSelectValue] = useState("");
  const [lastDropdownValue, setLastDropdownValue] = useState("0");

  function handleAmountChange(e) {
    setSelectedValue(Number(e.target.value));
  }

  function handleSecondSelectChange(e) {
    setSecondSelectValue(e.target.value);
  }

  function handleLastDropdownChange(e) {
    setLastDropdownValue(e.target.value);
  }

  // Mirar si esta seleccionada alguna de las opciones de moto
  const isMotoSelectedInSecond = secondSelectValue.includes("Moto");

  // Mirar si esta seleccionada no en remolques
  const isNoSelectedInLast = lastDropdownValue === "0";

  return (
    <div className="relative w-full">
      <Popover
        aria-labelledby="area-popover"
        open={open}
        onOpenChange={setOpen}
        content={
          <div>
            <div className="bg-primary h-14 flex items-center pl-4 font-semibold">
              Tipo de vehiculo
            </div>
            <div className="w-96 space-y-3 p-4 text-sm text-gray-500">
              <div>
                <span className="text-primary font-semibold">Vehiculos</span>
                <div className="relative">
                  <select
                    onChange={handleAmountChange}
                    className="border bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5 pl-10 w-full cursor-pointer"
                  >
                    <option value={0}>0</option>
                    <option value={1}>1</option>
                  </select>
                  <div className=" absolute top-0 pointer-events-none bg-inputIcon text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl dark:bg-slate-800 dark:border-slate-600 dark:border-y-2 dark:border-l-2">
                    <FaCar />
                  </div>
                </div>
              </div>

              {selectedValue === 1 && (
                <>
                  <div className="grid grid-cols-2 gap-2">
                    <div className=" col-span-2">
                      <div className="relative">
                        <select
                          onChange={handleSecondSelectChange}
                          className="border bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5 pl-10 w-full cursor-pointer"
                        >
                          <option value="Turismo. altura menor a 2 metros">
                            Turismo. altura menor a 2 metros
                          </option>
                          <option value="Turismo. altura superior a 2 metros">
                            Turismo. altura superior a 2 metros
                          </option>
                          <option value="Furgoneta">Furgoneta</option>
                          <option value="Motos hasta 250 cc">
                            Motos hasta 250 cc
                          </option>
                          <option value="Motos de 250 a 500 cc">
                            Motos de 250 a 500 cc
                          </option>
                          <option value="Motos desde 500 cc">
                            Motos desde 500 cc
                          </option>
                          <option value="Autocar">Autocar</option>
                          <option value="Autocaravana">Autocaravana</option>
                          <option value="Bicicleta">Bicicleta</option>
                        </select>
                        <div className=" absolute top-0 pointer-events-none bg-inputIcon text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl dark:bg-slate-800 dark:border-slate-600 dark:border-y-2 dark:border-l-2">
                          <FaCarSide />
                        </div>
                      </div>
                    </div>
                    {!isMotoSelectedInSecond && (
                      <>
                        <div>
                          <span>Longitud</span>

                          <div className="relative">
                            <select className="border bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5 pl-10 w-full cursor-pointer">
                              <option value={0}>1m 00cm</option>
                              <option value={1}>1m 05cm</option>
                              <option value={2}>1m 10cm</option>
                            </select>
                            <div className="absolute top-0 pointer-events-none bg-primary text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl">
                              <FaArrowsAltH />
                            </div>
                          </div>
                        </div>
                        <div>
                          <span>Altura</span>
                          <div className="relative">
                            <select className="border bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5 pl-10 w-full cursor-pointer">
                              <option value={0}>1m 00cm</option>
                              <option value={1}>1m 05cm</option>
                              <option value={2}>1m 10cm</option>
                            </select>
                            <div className="absolute top-0 pointer-events-none bg-primary text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl">
                              <FaArrowsAltV />
                            </div>
                          </div>
                        </div>
                        <div className="col-span-2">
                          <span>Remolque</span>
                          <div className="relative col-span-2">
                            <select
                              onChange={handleLastDropdownChange}
                              className="border bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5 pl-10 w-full cursor-pointer"
                            >
                              <option value={0}>No</option>
                              <option value={1}>
                                Remolque, altura menor a 2 metros
                              </option>
                              <option value={2}>
                                Remolque, altura superior a 2 metros
                              </option>
                              <option value={3}>Caravana</option>
                            </select>
                            <div className=" absolute top-0 pointer-events-none bg-inputIcon text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl dark:bg-slate-800 dark:border-slate-600 dark:border-y-2 dark:border-l-2">
                              <FaTrailer />
                            </div>
                          </div>
                        </div>
                        {!isNoSelectedInLast && (
                          <>
                            <div>
                              <span>Longirud remolque</span>
                              <div className="relative">
                                <select className="border bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5 pl-10 w-full cursor-pointer">
                                  <option value={0}>1m 00cm</option>
                                  <option value={1}>1m 05cm</option>
                                  <option value={2}>1m 10cm</option>
                                </select>
                                <div className="absolute top-0 pointer-events-none bg-primary text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl">
                                  <FaArrowsAltH />
                                </div>
                              </div>
                            </div>
                            <div>
                              <span>Altura remolque</span>
                              <div className="relative">
                                <select className="border bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5 pl-10 w-full cursor-pointer">
                                  <option value={0}>1m 00cm</option>
                                  <option value={1}>1m 05cm</option>
                                  <option value={2}>1m 10cm</option>
                                </select>
                                <div className="absolute top-0 pointer-events-none bg-primary text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl">
                                  <FaArrowsAltV />
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        }
      >
        <div className="border bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5 pl-10 w-full cursor-pointer">
          Vehiculos
        </div>
      </Popover>
      <div className="absolute top-0 pointer-events-none bg-inputIcon dark:bg-slate-800 dark:border-slate-600 dark:border-y-2 dark:border-l-2 text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl">
        <FaCar />{" "}
      </div>
    </div>
  );
}

export default Vehiculos;
