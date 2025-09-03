import { useState } from "react";
import Aside from "../hotel/filtros/Aside";
import Hoteles from "../hotel/Hoteles";
import Entradas from "../tickets/TicketsMas";
import Buscador from "../../motores/buscadores/hotelmasactividades/Buscador_Hotel_Mas_Actividades";
import { FaHotel } from "react-icons/fa";
import { PiMaskHappyFill } from "react-icons/pi";
import Cesta from "./Cesta";
import entradas from "./Tickets.json";
import { BsFillBasket2Fill } from "react-icons/bs";
import PlaceHolder from "../../../placeholders/listados/Hoteles";
import Cargando from "../../../placeholders/listados/Cargando";
import { FaCheck } from "react-icons/fa";
import Resultado from "../../../helpers/Resultado";
import useNetoStore from "../../../assets/netoSwitcher/useNetoStore";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import getHoteles from "../hotel/hook/getHoteles";
import PaginacionFooter from "../../../helpers/visuales/pagination/PaginacionFooter";
import Paginacion from "../../../helpers/visuales/pagination/Paginacion";
function Productos() {
  const { codearea, codcity, fecini, noc, numper } = useParams();
  const reserva = {
    codearea: codearea ? Number(codearea) : null,
    codcity: codcity ? Number(codcity) : null,
    fecini: fecini || null,
    noc: noc ? Number(noc) : null,
    numper: numper || null,
  };
  const isReservaIncomplete = Object.values(reserva).some(
    (val) => val === null || val === ""
  );
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["hoteles", reserva],
    queryFn: getHoteles,
    select: (data) => data,
  });

  const [habitacion, setHabitacion] = useState();
  const [selectedHotel, setSelectedHotel] = useState();
  const [activeTab, setActiveTab] = useState("Resultados");

  const [actividades, setActividades] = useState([]);

  const [viewMode, setViewMode] = useState("list");
  const [hoteles, setHoteles] = useState(data);
  const neto = useNetoStore((state) => state.neto);
  const [values, setValues] = useState([0, 5000]);
  const [minMax, setMinMax] = useState([0, 5000]);
  const hotelesPorPagina = 10;
  const [page, setPage] = useState();
  const indexUltimoHotel = page * hotelesPorPagina;
  const indexPrimerHotel = indexUltimoHotel - hotelesPorPagina;
  const hotelesAMostrar = hoteles?.slice(indexPrimerHotel, indexUltimoHotel);
  const paginasTotales = Math.ceil(hoteles?.length / hotelesPorPagina);
  const confirmacion = (habitacion, hotel) => {
    setSelectedHotel(hotel);
    setOpenModalPrecios(null);
    setActiveTab("actividades");
  };
  const [openModalPrecios, setOpenModalPrecios] = useState(null);
  return (
    <Resultado
      background={"url('/banners/banner_actividades2.webp')"}
      position={"center"}
      color={"tw-bg-indigo-300/20"}
      buscador={<Buscador listado={true} />}
      ocultarAside={
        activeTab === "actividades" || (activeTab === "Cesta" && true)
      }
      wideContent={
        activeTab === "actividades" || (activeTab === "Cesta" && true)
      }
      aside={
        <Aside
          isLoading={isLoading}
          isFetching={isFetching}
          setPage={setPage}
          setHoteles={setHoteles}
          hoteles={data ? data : []}
          values={values}
          setValues={setValues}
          minMax={minMax}
          setMinMax={setMinMax}
        />
      }
      extraInfo={
        <div className="tw-flex tw-items-center tw-space-x-4 tw-mb-6 tw-col-span-9 tw-container tw-mt-10">
          <div className="tw-flex tw-items-center tw-relative">
            <button
              className={`tw-px-4 tw-py-2 tw-border-b-2 tw-flex tw-items-center ${
                activeTab === "Resultados"
                  ? "tw-border-secondary tw-text-secondary tw-font-bold "
                  : "tw-text-slate-700 dark:tw-text-slate-200 tw-border-none"
              }`}
              onClick={() => setActiveTab("Resultados")}
            >
              <FaHotel className="tw-mr-1" /> Hoteles
            </button>
            {selectedHotel && (
              <FaCheck className="tw-text-xs tw-text-green-500 tw-animate-bounce dark:tw-text-secondaryDark tw-absolute -tw-top-0 tw-left-5" />
            )}
          </div>
          <div className="tw-flex tw-items-center tw-relative">
            <button
              className={`tw-px-4 tw-py-2 tw-border-b-2 tw-flex tw-items-center ${
                activeTab === "actividades"
                  ? "tw-border-secondary tw-text-secondary font-bold"
                  : "tw-text-slate-700 dark:tw-text-slate-200 tw-border-none"
              }`}
              onClick={() => setActiveTab("actividades")}
            >
              <PiMaskHappyFill className="tw-mr-1" /> Actividades
            </button>
            {actividades.length > 0 && (
              <FaCheck className="tw-text-xs tw-text-green-500 tw-animate-bounce dark:tw-text-secondaryDark tw-absolute -tw-top-0 tw-left-5" />
            )}
          </div>
          <div className="tw-flex tw-items-center tw-relative">
            {(selectedHotel || actividades.length > 0) && (
              <>
                <span className="-tw-mt-1 tw-ml-1 tw-p-[10px] tw-bg-secondary tw-rounded-full tw-flex tw-items-center tw-justify-center tw-text-white tw-font-bold tw-absolute tw-top-0 tw-left-2 tw-text-xs tw-w-[2px] tw-h-[2px]">
                  {selectedHotel ? 1 + actividades.length : actividades.length}
                </span>
              </>
            )}
            <button
              className={`tw-px-4 tw-py-2 tw-border-b-2 tw-flex tw-items-center ${
                activeTab === "Cesta"
                  ? "tw-border-secondary tw-text-secondary tw-font-bold "
                  : "tw-text-slate-700 dark:tw-text-slate-200 tw-border-none"
              }`}
              onClick={() => setActiveTab("Cesta")}
            >
              <BsFillBasket2Fill className="tw-mr-1 tw-text-lg" /> Cesta
            </button>
          </div>
        </div>
      }
      listado={
        <>
          {activeTab === "Resultados" ? (
            <>
              {isLoading ? (
                <>
                  <Cargando />
                  <PlaceHolder />
                </>
              ) : (
                <>
                  <>
                    <div className="tw-flex tw-justify-between">
                      <h3
                        className={`tw-text-secondary
                 tw-font-semibold tw-text-lg tw-flex tw-items-center`}
                      >
                        Resultados ({hoteles?.length})
                      </h3>
                      <Paginacion
                        totalPages={paginasTotales}
                        page={page}
                        setPage={setPage}
                      />
                    </div>
                    {hotelesAMostrar && (
                      <Hoteles
                        openModalPrecios={openModalPrecios}
                        setOpenModalPrecios={setOpenModalPrecios}
                        confirmacion={confirmacion}
                        habitacionSeleccionada={habitacion}
                        setHabitacion={setHabitacion}
                        selectedHotel={selectedHotel}
                        hotelMas={true}
                        reserva={reserva}
                        neto={neto}
                        hoteles={hotelesAMostrar}
                        page={page}
                        setPage={setPage}
                      />
                    )}
                    <div className="tw-flex tw-justify-end tw-mt-4">
                      <PaginacionFooter
                        totalPages={paginasTotales}
                        page={page}
                        setPage={setPage}
                      />
                    </div>
                  </>
                </>
              )}
            </>
          ) : activeTab === "actividades" ? (
            <>
              <Entradas
                tickets={entradas}
                actividades={actividades}
                setActividades={setActividades}
              />
            </>
          ) : (
            <Cesta
              setHabitacion={setHabitacion}
              neto={neto}
              habitacion={habitacion}
              hotel={selectedHotel}
              actividades={actividades}
              reserva={reserva}
              setHotel={setSelectedHotel}
              setActividades={setActividades}
            />
          )}
        </>
      }
    />
  );
}
export default Productos;
