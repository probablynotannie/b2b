import { useState } from "react";
import { Popover } from "flowbite-react";
import { FaCar } from "react-icons/fa";
import { FaArrowsAltH } from "react-icons/fa";
import { FaArrowsAltV } from "react-icons/fa";
import { FaTrailer } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa6";

function Vehiculos({
  vehiculos,
  setNumVehiculos,
  tipoVehiculo,
  setTipoVehiculo,
  remolque,
  setRemolque,
  longitud,
  setLongitud,
  altura,
  setAltura,
  alturaRemolque,
  setAlturaRemolque,
  longitudRemolque,
  setLongitudRemolque,
}) {
  const [open, setOpen] = useState(false);
  function handleAmountChange(e) {
    setNumVehiculos(Number(e.target.value));
  }
  const handleLongitudRemolqueChange = (e) => {
    setLongitudRemolque(e.target.value);
  };

  const handleAlturaRemolqueChange = (e) => {
    setAlturaRemolque(e.target.value);
  };
  const handleLongitudChange = (e) => {
    setLongitud(e.target.value);
  };
  const handleAlturaChange = (e) => {
    setAltura(e.target.value);
  };
  function handleSecondSelectChange(e) {
    setTipoVehiculo(e.target.value);
  }
  function handleLastDropdownChange(e) {
    setRemolque(e.target.value);
  }
  const isMotoSelectedInSecond = tipoVehiculo.includes("Moto");
  const isNoSelectedInLast = remolque === "0";

  return (
    <div className="tw-relative tw-w-full">
      <Popover
        aria-labelledby="area-popover"
        open={open}
        onOpenChange={setOpen}
        content={
          <div>
            <div className="tw-bg-slate-800 tw-text-white tw-h-14 tw-flex tw-items-center tw-pl-4 tw-font-semibold">
              Tipo de vehiculo
            </div>
            <div className="tw-w-96 tw-space-y-3 tw-p-4 tw-text-sm tw-text-gray-500">
              <div>
                <span className="tw-text-slate-700 tw-font-semibold">
                  Vehiculos
                </span>
                <div className="tw-relative">
                  <select
                    onChange={handleAmountChange}
                    className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-pl-10 tw-w-full tw-cursor-pointer"
                  >
                    <option value={0}>0</option>
                    <option value={1}>1</option>
                  </select>
                  <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2">
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
                          className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-pl-10 tw-w-full tw-cursor-pointer"
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
                        <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2">
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
                              className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-pl-10 tw-w-full tw-cursor-pointer"
                            >
                              <option value={0}>1m 00cm</option>
                              <option value={1}>1m 05cm</option>
                              <option value={2}>1m 10cm</option>
                            </select>
                            <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-slate-700 tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
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
                              className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-pl-10 tw-w-full tw-cursor-pointer"
                            >
                              <option value={0}>1m 00cm</option>
                              <option value={1}>1m 05cm</option>
                              <option value={2}>1m 10cm</option>
                            </select>
                            <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-slate-700 tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
                              <FaArrowsAltV />
                            </div>
                          </div>
                        </div>
                        <div className="tw-col-span-2">
                          <span>Remolque</span>
                          <div className="tw-relative tw-col-span-2">
                            <select
                              onChange={handleLastDropdownChange}
                              className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-pl-10 tw-w-full tw-cursor-pointer"
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
                            <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2">
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
                                  className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-pl-10 tw-w-full tw-cursor-pointer"
                                >
                                  <option value={0}>1m 00cm</option>
                                  <option value={1}>1m 05cm</option>
                                  <option value={2}>1m 10cm</option>
                                </select>
                                <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-slate-700 tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
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
                                  className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-pl-10 tw-w-full tw-cursor-pointer"
                                >
                                  <option value={0}>1m 00cm</option>
                                  <option value={1}>1m 05cm</option>
                                  <option value={2}>1m 10cm</option>
                                </select>
                                <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-slate-700 tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
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
        <div className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-pl-10 tw-w-full tw-cursor-pointer">
          Vehiculos
        </div>
      </Popover>
      <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
        <FaCar />{" "}
      </div>
    </div>
  );
}

export default Vehiculos;
