import { useState, useEffect } from "react";
import Aside from "../hotel/filtros/Aside";
import Aside_Ferry from "../ferris/filtros/Aside";
import Hoteles from "../hotel/Hoteles";
import MasFerris from "../ferris/Ferris";
import Buscador from "../../motores/buscadores/hotelmasferri/Buscador_hotelferry";
import { FaHotel, FaList, FaMapMarkedAlt } from "react-icons/fa";
import { FaShip } from "react-icons/fa";
import { BsFillBasket2Fill } from "react-icons/bs";
import Cesta from "./Cesta";
import PlaceHolder from "../../../placeholders/listados/Hoteles";
import Cargando from "../../../placeholders/listados/Cargando";
import Resultado from "../../../helpers/Resultado";
import { useParams } from "react-router-dom";
import getHoteles from "../hotel/hook/getHoteles";
import { useQuery } from "@tanstack/react-query";
import useNetoStore from "../../../assets/netoSwitcher/useNetoStore";
import Paginacion from "../../../helpers/visuales/pagination/Paginacion";
import PaginacionFooter from "../../../helpers/visuales/pagination/PaginacionFooter";
import ferrisRealesGnv from "../ferris/jsons/ferrisRealesGnv.json";
import ferrisRealesTrasmed from "../ferris/jsons/ferrisRealesTrasmed.json";
import ferrisRealesBalearia from "../ferris/jsons/ferrisRealesBalearia.json";
import NetoSwitcher from "../../../assets/netoSwitcher/Switch";
import MapaHoteles from "../hotel/mapa/MapaHoteles";
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

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["hoteles", reserva],
    queryFn: getHoteles,
    select: (data) => data,
  });
  const [hoteles, setHoteles] = useState(data);

  const [activeTab, setActiveTab] = useState("Resultados");

  const [habitacion, setHabitacion] = useState();

  const [ida, setIda] = useState(null);
  const [vuelta, setVuelta] = useState(null);
  const [ferry, setFerry] = useState({});

  const [values, setValues] = useState([0, 5000]);
  const [minMax, setMinMax] = useState([0, 5000]);
  const [valuesFerris, setValuesFerris] = useState([0, 5000]);
  const [minMaxFerris, setMinMaxFerris] = useState([0, 5000]);
  const [viewMode, setViewMode] = useState("list");
  const [selectedHotel, setSelectedHotel] = useState(data);
  const neto = useNetoStore((state) => state.neto);
  const hotelesPorPagina = 10;
  const [page, setPage] = useState();
  const indexUltimoHotel = page * hotelesPorPagina;
  const indexPrimerHotel = indexUltimoHotel - hotelesPorPagina;
  const hotelesAMostrar = hoteles?.slice(indexPrimerHotel, indexUltimoHotel);
  const paginasTotales = Math.ceil(hoteles?.length / hotelesPorPagina);
  const [openModalPrecios, setOpenModalPrecios] = useState(null);

  const confirmacion = (habitacion, hotel) => {
    setSelectedHotel(hotel);
    setOpenModalPrecios(null);
    setActiveTab("Ferris");
  };
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  const ferrisArray = [
    ferrisRealesGnv,
    ferrisRealesTrasmed,
    ferrisRealesBalearia,
  ];
  return (
    <Resultado
      background={"url('/banners/banner_avion.webp')"}
      position={"center"}
      color={"tw-bg-blue-500/50"}
      buscador={<Buscador listado={true} />}
      wideContent={!isReservaIncomplete && viewMode === "list" ? false : true}
      ocultarAside={!isReservaIncomplete && viewMode === "list" ? false : true}
      aside={
        <>
          {activeTab === "Resultados" ? (
            <>
              {viewMode === "list" && (
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
              )}
            </>
          ) : (
            <>
              <Aside_Ferry
                isLoading={loading}
                ferris={ferrisArray}
                values={valuesFerris}
                setValues={setValuesFerris}
                minMax={minMaxFerris}
              />
            </>
          )}
        </>
      }
      extraInfo={
        <div className="tw-flex tw-space-x-4 tw-mb-6 tw-col-span-9 tw-container tw-mt-10">
          <button
            className={`tw-px-4 tw-py-2 tw-border-b-2 tw-flex tw-items-center ${
              activeTab === "Resultados"
                ? "tw-border-secondary tw-text-secondary tw-font-bold "
                : " tw-text-slate-700 dark:tw-text-slate-200 tw-border-none"
            }`}
            onClick={() => setActiveTab("Resultados")}
          >
            <FaHotel className="tw-mr-1" /> Resultados
          </button>
          <button
            className={`tw-px-4 tw-py-2 tw-border-b-2 tw-flex tw-items-center ${
              activeTab === "Ferris"
                ? "tw-border-secondary tw-text-secondary tw-font-bold "
                : " tw-text-slate-700 dark:tw-text-slate-200 tw-border-none"
            }`}
            onClick={() => setActiveTab("Ferris")}
          >
            <FaShip className="tw-mr-1" /> Cambiar Ferry
          </button>
          <button
            className={`tw-px-4 tw-py-2 tw-border-b-2 tw-flex tw-items-center ${
              activeTab === "Cesta"
                ? "tw-border-secondary tw-text-secondary tw-font-bold "
                : " tw-text-slate-700 dark:tw-text-slate-200 tw-border-none"
            }`}
            onClick={() => setActiveTab("Cesta")}
          >
            <BsFillBasket2Fill className="tw-mr-1" /> Cesta
          </button>
        </div>
      }
      listado={
        <>
          {activeTab === "Resultados" && (
            <>
              {isLoading ? (
                <>
                  <Cargando />
                  <PlaceHolder />
                </>
              ) : (
                <>
                  <>
                    <div className="tw-flex tw-justify-between tw-items-center">
                      <h3
                        className={`tw-text-secondary
                 tw-font-semibold tw-text-lg tw-flex tw-items-center`}
                      >
                        Resultados ({hoteles?.length})
                      </h3>
                      <div className="tw-flex tw-gap-2">
                        <NetoSwitcher />
                        <button
                          className={`tw-flex tw-items-center tw-gap-2 tw-p-2 tw-rounded-md ${
                            viewMode === "list"
                              ? "tw-bg-secondary dark:tw-bg-secondaryDark tw-text-white"
                              : "tw-bg-slate-200 dark:tw-bg-slate-800 dark:tw-text-slate-200"
                          }`}
                          onClick={() => setViewMode("list")}
                        >
                          <FaList /> Lista
                        </button>
                        <button
                          className={`tw-flex tw-items-center tw-gap-2 tw-p-2 tw-rounded-md ${
                            viewMode === "map"
                              ? "tw-bg-secondary dark:tw-bg-secondaryDark tw-text-white"
                              : "tw-bg-slate-200 dark:tw-bg-slate-800 dark:tw-text-slate-200"
                          }`}
                          onClick={() => setViewMode("map")}
                        >
                          <FaMapMarkedAlt /> Mapa
                        </button>
                      </div>
                    </div>

                    {viewMode === "list" ? (
                      <div>
                        {hotelesAMostrar && (
                          <>
                            <div className="tw-flex tw-justify-start">
                              <Paginacion
                                totalPages={paginasTotales}
                                page={page}
                                setPage={setPage}
                              />
                            </div>
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
                            <div className="tw-flex tw-justify-end tw-mt-4">
                              <PaginacionFooter
                                totalPages={paginasTotales}
                                page={page}
                                setPage={setPage}
                              />
                            </div>
                          </>
                        )}
                      </div>
                    ) : (
                      <>
                        <MapaHoteles
                          openModalPrecios={openModalPrecios}
                          setOpenModalPrecios={setOpenModalPrecios}
                          confirmacion={confirmacion}
                          habitacionSeleccionada={habitacion}
                          setHabitacion={setHabitacion}
                          selectedHotel={selectedHotel}
                          hotelMas={true}
                          reserva={reserva}
                          setHoteles={setHoteles}
                          hotelesSinFiltrar={data}
                          neto={neto}
                          hoteles={hoteles}
                          values={values}
                          setValues={setValues}
                          minMax={minMax}
                          setMinMax={setMinMax}
                        />
                      </>
                    )}
                  </>
                </>
              )}
            </>
          )}
          {activeTab === "Ferris" && (
            <>
              {ferrisArray && (
                <div>
                  {ferrisArray.map((ferryData, index) => (
                    <MasFerris
                      ocultarBoton={true}
                      key={index}
                      ferrisData={ferryData}
                      ferry={ferry}
                      setFerry={setFerry}
                      ida={ida}
                      setIda={setIda}
                      vuelta={vuelta}
                      setVuelta={setVuelta}
                    />
                  ))}
                </div>
              )}
            </>
          )}
          {activeTab === "Cesta" && (
            <Cesta
              neto={neto}
              habitacion={habitacion}
              setHabitacion={setHabitacion}
              hotel={selectedHotel}
              setHotel={setSelectedHotel}
              ferry={ferry}
            />
          )}
        </>
      }
    />
  );
}
export default Productos;
