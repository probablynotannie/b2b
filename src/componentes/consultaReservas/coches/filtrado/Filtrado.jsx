import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Input_DateRange from "../../../inputs/filtrados/fechas/DateRange";
import Input_Texto from "../../../inputs/filtrados/Texto";

function Filtrado({
  fechaEntradaDesde,
  setFechaEntradaDesde,
  fechaEntradaHasta,
  setFechaEntradaHasta,
  fechaGestionDesde,
  setFechaGestionDesde,
  fechaGestionHasta,
  setFechaGestionHasta,
  pagadas,
  setPagadas,
  localizador,
  setLocalizador,
  activas,
  setActivas,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getButtonClass = (selectedValue, buttonValue) => {
    if (buttonValue === "Todas") {
      return selectedValue === buttonValue
        ? "tw-bg-orange-400 hover:tw-bg-orange-500 dark:tw-bg-yellow-700 dark:hover:tw-bg-yellow-800 tw-text-white"
        : "tw-bg-gray-400 hover:tw-bg-gray-500 dark:tw-bg-slate-600 dark:hover:tw-bg-slate-700 tw-text-gray-100";
    }
    if (buttonValue === "Pagadas" || buttonValue === "Activas") {
      return selectedValue === buttonValue
        ? "tw-bg-green-500 hover:tw-bg-green-600 dark:tw-bg-green-700 dark:hover:tw-bg-green-800 tw-text-white"
        : "tw-bg-gray-400 hover:tw-bg-gray-500 dark:tw-bg-slate-600 dark:hover:tw-bg-slate-700 tw-text-gray-100";
    }
    if (buttonValue === "impagadas" || buttonValue === "Canceladas") {
      return selectedValue === buttonValue
        ? "tw-bg-red-500 hover:tw-bg-red-600 dark:tw-bg-red-700 dark:hover:tw-bg-red-800 tw-text-white"
        : "tw-bg-gray-400 hover:tw-bg-gray-500 dark:tw-bg-slate-600 dark:hover:tw-bg-slate-700 tw-text-gray-100";
    }
  };

  return (
    <>
      <div className="tw-w-full sm:tw-hidden">
        <button
          onClick={() => setIsModalOpen(true)}
          className="tw-relative tw-border-2 tw-shadow-xl dark:tw-border-slate-700 tw-bg-white lg:tw-hidden dark:tw-bg-slate-800 dark:tw-placeholder-slate-400 dark:tw-text-white dark:tw-focus:ring-slate-600 dark:tw-focus:border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-3 tw-pl-10 tw-w-full tw-cursor-pointer"
        >
          Filtros de reservas de coches
          <span className="tw-absolute tw-top-0 tw-left-0 tw-pointer-events-none tw-bg-inputIcon dark:tw-bg-slate-800 dark:tw-border-slate-800 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
            <FaSearch />
          </span>
        </button>
      </div>

      {isModalOpen && (
        <div className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-50 tw-flex tw-justify-center tw-items-center tw-z-50">
          <div className="tw-bg-white tw-rounded-lg tw-relative dark:tw-bg-slate-800 tw-min-h-[100vh] tw-w-[100vw]">
            <div className="tw-flex tw-justify-between tw-items-center tw-mb-4 tw-bg-slate-800 dark:tw-bg-slate-900 tw-p-5">
              <h2 className="tw-text-xl tw-font-bold tw-text-white">
                Filtrado
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="tw-text-xl tw-text-white"
              >
                &times;
              </button>
            </div>
            <div className="tw-p-3">
              <form>
                <Input_DateRange
                  startDate={fechaEntradaDesde}
                  setStartDate={setFechaEntradaDesde}
                  endDate={fechaEntradaHasta}
                  setEndDate={setFechaEntradaHasta}
                  placeholder="Fechas Entrada"
                />
                <Input_DateRange
                  startDate={fechaGestionDesde}
                  setStartDate={setFechaGestionDesde}
                  endDate={fechaGestionHasta}
                  setEndDate={setFechaGestionHasta}
                  placeholder="Fechas Gestion"
                />
                <button className="tw-bg-slate-800 tw-w-full tw-mt-3 dark:tw-bg-slate-900 tw-flex tw-justify-center tw-items-center tw-h-full tw-p-3 tw-px-10 tw-rounded-lg tw-shadow">
                  <FaSearch className="tw-text-white tw-text-xl" />
                </button>
              </form>
              <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-col-span-12">
                <button
                  className="tw-text-2xl tw-rounded-full tw-w-[50px] tw-h-[50px] tw-border-2 tw-mt-10 tw-text-slate-300 tw-border-slate-300 dark:tw-border-slate-600"
                  onClick={() => setIsModalOpen(false)}
                >
                  X
                </button>
                <span className="tw-text-slate-400">Cerrar</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="tw-hidden sm:tw-flex tw-w-full tw-bg-white dark:tw-bg-slate-900 dark:tw-bg-opacity-80 tw-bg-opacity-80 tw-rounded tw-p-4 tw-pb-10 tw-flex-col tw-items-center tw-justify-center tw-h-fit">
        <div className="tw-w-full">
          <div className="tw-flex tw-items-center tw-justify-between">
            <h2 className="tw-text-3xl tw-font-bold dark:tw-text-white">
              Reservas de coches
            </h2>
            <button
              className="tw-text-slate-500 hover:tw-text-slate-800 tw-smooth tw-text-sm"
              onClick={() => {
                setFechaEntradaDesde(null);
                setFechaEntradaHasta(null);
                setFechaGestionDesde(null);
                setFechaGestionHasta(null);
                setPagadas("Todas");
                setActivas("Todas");
                setLocalizador("");
              }}
            >
              Resetear filtros
            </button>
          </div>
          <div className="tw-grid lg:tw-grid-cols-3 2xl:tw-grid-cols-5 tw-gap-4 tw-mt-6">
            <Input_DateRange
              startDate={fechaEntradaDesde}
              setStartDate={setFechaEntradaDesde}
              endDate={fechaEntradaHasta}
              setEndDate={setFechaEntradaHasta}
              placeholder="Fechas Entrada"
            />
            <Input_DateRange
              startDate={fechaGestionDesde}
              setStartDate={setFechaGestionDesde}
              endDate={fechaGestionHasta}
              setEndDate={setFechaGestionHasta}
              placeholder="Fechas Gestión"
            />
            <Input_Texto
              texto={localizador}
              setTexto={setLocalizador}
              placeholder="Localizador"
              icon={<FaSearch />}
            />
            <div className="tw-grid tw-grid-cols-2 tw-col-span-3 2xl:tw-col-span-2 tw-gap-5">
              <div className="tw-flex tw-gap-2">
                {["Pagadas", "impagadas", "Todas"].map((label) => {
                  return (
                    <button
                      onClick={() => setPagadas(label)}
                      key={label}
                      className={`tw-flex-1 tw-text-sm tw-font-semibold tw-rounded-lg  ${getButtonClass(
                        pagadas,
                        label
                      )} hover:tw-brightness-110 tw-transition-all tw-h-[40px] tw-p-1`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
              <div className="tw-flex tw-gap-2">
                {["Activas", "Canceladas", "Todas"].map((label) => {
                  return (
                    <button
                      onClick={() => setActivas(label)}
                      key={label}
                      className={`tw-flex-1 tw-text-sm tw-font-semibold tw-rounded-lg  ${getButtonClass(
                        activas,
                        label
                      )} hover:tw-brightness-110 tw-transition-all tw-h-[40px] tw-p-1`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filtrado;
