import { useState } from "react";
import { Popover } from "flowbite-react";
import { FaCar } from "react-icons/fa";
import { FaArrowsAltH } from "react-icons/fa";
import { FaArrowsAltV } from "react-icons/fa";
import { FaTrailer } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa6";

function Vehiculos({
  setValue,
  nameVehiculos,
  nameTipoVehiculo,
  nameRemolque,
  nameLongitud,
  nameAltura,
  nameLongRemolque,
  nameAltRemolque,
}) {
  const [vehiculos, setNumVehiculos] = useState(0);
  const [tipoVehiculo, setTipoVehiculo] = useState(0);
  const [remolque, setRemolque] = useState("0");
  const [longitud, setLongitud] = useState(0);
  const [altura, setAltura] = useState(0);
  const [longitudRemolque, setLongitudRemolque] = useState(0);
  const [alturaRemolque, setAlturaRemolque] = useState(0);
  const [open, setOpen] = useState(false);

  function handleAmountChange(e) {
    const val = Number(e.target.value);
    setNumVehiculos(val);
    setValue(nameVehiculos, val);
  }

  function handleSecondSelectChange(e) {
    const val = Number(e.target.value); // Value as number
    setTipoVehiculo(val); // Store as number
    setValue(nameTipoVehiculo, val);
  }

  const handleLongitudRemolqueChange = (e) => {
    const val = Number(e.target.value);
    setLongitudRemolque(val);
    setValue(nameLongRemolque, val);
  };

  const handleAlturaRemolqueChange = (e) => {
    const val = Number(e.target.value);
    setAlturaRemolque(val);
    setValue(nameAltRemolque, val);
  };

  const handleLongitudChange = (e) => {
    const val = Number(e.target.value);
    setLongitud(val);
    setValue(nameLongitud, val);
  };

  const handleAlturaChange = (e) => {
    const val = Number(e.target.value);
    setAltura(val);
    setValue(nameAltura, val);
  };

  function handleLastDropdownChange(e) {
    const val = Number(e.target.value);
    setRemolque(val);
    setValue(nameRemolque, val);
  }

  // Check if selected vehicle type is a "Motos" type
  const isMotoSelectedInSecond =
    tipoVehiculo === 3 || tipoVehiculo === 4 || tipoVehiculo === 5; // Motos options are 3, 4, and 5

  const isNoSelectedInLast = remolque === "0";

  return (
    <div className="tw-relative tw-w-full">
      <Popover
        aria-labelledby="area-popover"
        open={open}
        onOpenChange={setOpen}
        content={
          <div>
            <div className=" tw-bg-slate-900 tw-text-white tw-h-14 tw-flex tw-items-center tw-pl-4 tw-font-semibold tw-rounded-t-lg">
              Tipo de vehiculo
            </div>
            <div className="tw-w-96 tw-space-y-3 tw-p-4 tw-text-sm tw-text-gray-500 dark:tw-bg-slate-800">
              <div>
                <span className="tw-text-slate-700 dark:tw-text-slate-300 tw-font-semibold">
                  Vehiculos
                </span>
                <div className="tw-relative">
                  <select
                    onChange={handleAmountChange}
                    className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-h-[40px] tw-pl-10 tw-w-full tw-cursor-pointer"
                  >
                    <option value={0}>0</option>
                    <option value={1}>1</option>
                  </select>
                  <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon tw-text-white tw-h-[40px] tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2">
                    <FaCar />
                  </div>
                </div>
              </div>
              {vehiculos === 1 && (
                <>
                  <div className="tw-grid tw-grid-cols-2 tw-gap-2">
                    <div className="tw-col-span-2">
                      <div className="tw-relative">
                        <select
                          onChange={handleSecondSelectChange}
                          className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-h-[40px] tw-pl-10 tw-w-full tw-cursor-pointer"
                        >
                          <option value={1}>
                            Turismo. altura menor a 2 metros
                          </option>
                          <option value={2}>
                            Turismo. altura superior a 2 metros
                          </option>
                          <option value={3}>Motos hasta 250 cc</option>
                          <option value={4}>Motos de 250 a 500 cc</option>
                          <option value={5}>Motos desde 500 cc</option>
                          <option value={6}>Autocar</option>
                          <option value={7}>Autocaravana</option>
                          <option value={8}>Bicicleta</option>
                        </select>
                        <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon tw-text-white tw-h-[40px] tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2">
                          <FaCarSide />
                        </div>
                      </div>
                    </div>
                    {!isMotoSelectedInSecond && (
                      <>
                        <div>
                          <span>Longitud</span>

                          <div className="tw-relative">
                            <select
                              value={longitud}
                              onChange={handleLongitudChange}
                              className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-h-[40px] tw-pl-10 tw-w-full tw-cursor-pointer"
                            >
                              <option value={0}>1m 00cm</option>
                              <option value={1}>1m 05cm</option>
                              <option value={2}>1m 10cm</option>
                            </select>
                            <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon tw-text-white tw-h-[40px] tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2">
                              <FaArrowsAltH />
                            </div>
                          </div>
                        </div>
                        <div>
                          <span>Altura</span>
                          <div className="tw-relative">
                            <select
                              value={altura}
                              onChange={handleAlturaChange}
                              className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-h-[40px] tw-pl-10 tw-w-full tw-cursor-pointer"
                            >
                              <option value={0}>1m 00cm</option>
                              <option value={1}>1m 05cm</option>
                              <option value={2}>1m 10cm</option>
                            </select>
                            <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon tw-text-white tw-h-[40px] tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2">
                              <FaArrowsAltV />
                            </div>
                          </div>
                        </div>
                        <div className="tw-col-span-2">
                          <span>Remolque</span>
                          <div className="tw-relative tw-col-span-2">
                            <select
                              onChange={handleLastDropdownChange}
                              className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-h-[40px] tw-pl-10 tw-w-full tw-cursor-pointer"
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
                            <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon tw-text-white tw-h-[40px] tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2">
                              <FaTrailer />
                            </div>
                          </div>
                        </div>
                        {!isNoSelectedInLast && (
                          <>
                            <div>
                              <span>Longirud remolque</span>
                              <div className="tw-relative">
                                <select
                                  value={longitudRemolque}
                                  onChange={handleLongitudRemolqueChange}
                                  className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-h-[40px] tw-pl-10 tw-w-full tw-cursor-pointer"
                                >
                                  <option value={0}>1m 00cm</option>
                                  <option value={1}>1m 05cm</option>
                                  <option value={2}>1m 10cm</option>
                                </select>
                                <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon tw-text-white tw-h-[40px] tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2">
                                  <FaArrowsAltH />
                                </div>
                              </div>
                            </div>
                            <div>
                              <span>Altura remolque</span>
                              <div className="tw-relative">
                                <select
                                  value={alturaRemolque}
                                  onChange={handleAlturaRemolqueChange}
                                  className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-h-[40px] tw-pl-10 tw-w-full tw-cursor-pointer"
                                >
                                  <option value={0}>1m 00cm</option>
                                  <option value={1}>1m 05cm</option>
                                  <option value={2}>1m 10cm</option>
                                </select>
                                <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon tw-text-white tw-h-[40px] tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2">
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
        <div className="tw-border tw-flex tw-items-center tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-h-[40px] tw-pl-10 tw-w-full tw-cursor-pointer">
          Vehiculos
        </div>
      </Popover>
      <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-[40px] tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
        <FaCar />{" "}
      </div>
    </div>
  );
}

export default Vehiculos;
