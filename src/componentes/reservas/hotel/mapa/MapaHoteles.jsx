import { useRef, useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import L from "leaflet";
import "leaflet-defaulticon-compatibility";
import "leaflet/dist/leaflet.css";
import Cluster from "./Cluster";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Estrellas from "../../../../helpers/visuales/Estrellas";
import { FaArrowLeft, FaArrowRight, FaMapPin } from "react-icons/fa";
import Filtrado from "./Filtrado";
import Placeholder from "./Placeholder";
import { MdCancel } from "react-icons/md";
import getEstrellas from "../hook/getEstrellas";
import HotelMas from "../hotelMas";
import groupAndMergeByCode from "../hook/mergeHabitaciones";
import calcularFechaSalida from "../../../../assets/scripts/fechaSalidaConInicioYNoches";
const customIconUrl = "/logos/hotel.png";
const MapaHoteles = ({
  reserva,
  hoteles,
  values,
  setValues,
  minMax,
  setMinMax,
  setHoteles,
  hotelesSinFiltrar,
  neto,
  openModalPrecios,
  setOpenModalPrecios,
  confirmacion,
  habitacionSeleccionada,
  setHabitacion,
  selectedHotel,
  hotelMas,
}) => {
  const markersRef = useRef({});
  const [showMapOnly, setShowMapOnly] = useState(false);
  const mapRef = useRef(null);
  const navigate = useNavigate();
  const handleNavigateToHotel = (hotel) => {
    navigate("/hotel", { state: { ...hotel, reserva } });
  };
  useEffect(() => {
    if (mapRef.current) {
      setTimeout(() => {
        mapRef.current.invalidateSize();
      }, 300);
    }
  }, [showMapOnly]);
  const handleHotelHover = (hotel) => {
    const marker = markersRef.current[hotel.idHotel];
    if (!marker || !mapRef.current) return;

    const map = mapRef.current;
    const parent = marker.__parent;

    const openPopupSafely = () => {
      setTimeout(() => {
        marker.openPopup();
      }, 50);
    };

    if (parent && typeof parent.zoomToShowLayer === "function") {
      parent.zoomToShowLayer(marker, openPopupSafely);
    } else {
      const targetZoom = map.getMaxZoom();
      map.once("moveend", openPopupSafely);
      map.flyTo(marker.getLatLng(), targetZoom, {
        animate: true,
        duration: 1,
      });
    }
  };

  const markerIcon = new L.Icon({
    iconUrl: customIconUrl,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });
  function habitacionMasBarata(hotel) {
    if (!hotel?.ListaPrecios || hotel.ListaPrecios.length === 0) return null;

    return hotel.ListaPrecios.reduce((min, item) =>
      parseFloat(item.Price) < parseFloat(min.Price) ? item : min
    );
  }
  const fechaSalida = calcularFechaSalida(reserva.fecini, reserva.noc);

  return (
    <main>
      <Filtrado
        hoteles={hoteles}
        allHoteles={hotelesSinFiltrar}
        setHoteles={setHoteles}
        values={values}
        setValues={setValues}
        minMax={minMax}
        setMinMax={setMinMax}
      />
      {hoteles.length > 0 ? (
        <section
          className={`tw-grid  tw-mt-16 ${
            showMapOnly ? "tw-grid-cols-1" : "tw-grid-cols-5 2xl:tw-grid-cols-4"
          }`}
        >
          {!showMapOnly && (
            <div className=" tw-hidden lg:tw-grid xl:tw-grid-cols-1 lg:tw-col-span-2 2xl:tw-col-span-1">
              {hoteles.map((hotel, index) => {
                const agrupados = groupAndMergeByCode(hotel.ListaPrecios);
                const habitacion = habitacionMasBarata(hotel);
                console.log(hotel);
                return (
                  <div
                    key={hotel.idHotel}
                    onMouseEnter={() => handleHotelHover(hotel)}
                    className={`
                          ${
                            selectedHotel?.idHotel === hotel.idHotel
                              ? "tw-bg-elegido dark:tw-bg-slate-900 tw-border-secondary"
                              : " tw-bg-slate-50  dark:tw-bg-slate-900 tw-border-slate-200 dark:tw-border-slate-700 hover:tw-border-secondary"
                          }
                    tw-group  tw-flex tw-flex-row tw-border tw-smooth tw-transition-transform tw-duration-300 tw-ease-in-out hover:tw-shadow-lg tw-rounded-xl tw-overflow-hidden`}
                  >
                    <img
                      alt="imagen"
                      src={hotel.ListFotos[0]}
                      loading="lazy"
                      className=" tw-w-2/5 tw-object-cover tw-rounded-lg"
                    />
                    <div className="tw-flex-1 tw-p-4 tw-flex tw-flex-col tw-justify-between">
                      <div className="tw-flex tw-flex-col tw-gap-2 tw-border-b tw-pb-4 tw-border-slate-100 dark:tw-border-slate-700">
                        <div className="tw-flex tw-flex-col">
                          <h3 className="tw-text-lg tw-font-semibold tw-text-gray-900 dark:tw-text-white">
                            {hotel.NombreHotel}
                          </h3>
                          <Estrellas
                            estrellas={getEstrellas(hotel.CategoryName)}
                          />
                        </div>
                        <p className="tw-text-xs tw-text-gray-500 dark:tw-text-gray-400 tw-flex tw-items-start tw-gap-2">
                          <FaMapPin className="tw-text-red-500 tw-text-[1rem]" />{" "}
                          {hotel.Dir}
                        </p>
                        <p className="tw-text-xs tw-text-slate-500 dark:tw-text-slate-400">
                          habitaciones disponibles
                        </p>
                      </div>
                      <div className="tw-mt-4">
                        {hotelMas === true ? (
                          <HotelMas
                            botonMapa={true}
                            setOpenModalPrecios={setOpenModalPrecios}
                            openModalPrecios={openModalPrecios}
                            neto={neto}
                            habitacion={habitacion}
                            index={index}
                            reserva={reserva}
                            fechaSalida={fechaSalida}
                            hotel={hotel}
                            agrupados={agrupados}
                            habitacionSeleccionada={habitacionSeleccionada}
                            setHabitacion={setHabitacion}
                            confirmacion={confirmacion}
                          />
                        ) : (
                          <Link
                            to={"/hotel"}
                            state={{ ...hotel, reserva }}
                            className="tw-w-full tw-font-medium tw-rounded-lg"
                          >
                            <span
                              className={`tw-smooth group-hover:tw-text-secondary dark:group-hover:tw-text-secondaryDark tw-text-xl tw-font-mono ${
                                neto === true
                                  ? "tw-text-sky-500 dark:tw-text-sky-300"
                                  : "dark:tw-text-slate-100"
                              }`}
                            >
                              {neto !== true
                                ? habitacion.Price
                                : habitacion.Pvp}
                              {habitacion.Currency === "EUR"
                                ? "€"
                                : habitacion.Currency}
                            </span>
                            <span className="tw-block tw-text-sm tw-font-light tw-text-slate-500 tw-smooth dark:tw-text-slate-400">
                              {habitacion.BoardName}
                            </span>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          <div
            className={`tw-w-full tw-border-2 tw-border-slate-100 tw-shadow hover:tw-shadow-xl tw-smooth tw-h-[100vh] tw-z-0 tw-mb-0 ${
              showMapOnly ? "tw-col-span-1" : "tw-col-span-5 lg:tw-col-span-3"
            } tw-sticky tw-top-0 tw-rounded-2xl tw-overflow-hidden`}
          >
            <div
              className="tw-hidden lg:tw-flex tw-absolute tw-top-5 tw-left-5 tw-z-50 hover:tw-scale-105 tw-smooth tw-cursor-pointer tw-p-2 tw-bg-indigo-500 tw-px-3 tw-text-white tw-rounded-lg tw-shadow-lg tw-text-2xl"
              onClick={() => setShowMapOnly(!showMapOnly)}
            >
              {showMapOnly ? <FaArrowRight /> : <FaArrowLeft />}
            </div>

            <MapContainer
              center={[hoteles[0].Lat, hoteles[0].Long]}
              zoom={12}
              style={{ height: "100%", width: "100%" }}
              zoomControl={false}
              ref={mapRef}
            >
              <TileLayer
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
              />
              <Cluster
                hotelMas={hotelMas}
                reserva={reserva}
                hoteles={hoteles}
                markerIcon={markerIcon}
                onMarkerRef={(id, marker) => (markersRef.current[id] = marker)}
                neto={neto}
                onNavigateToHotel={handleNavigateToHotel}
              />
            </MapContainer>
          </div>
        </section>
      ) : (
        <div className="tw-grid tw-grid-cols-3 tw-gap-10 tw-mt-10">
          <div className="tw-grid-cols-1">
            <Placeholder />
          </div>
          <div className="tw-col-span-2 tw-items-center tw-justify-center tw-flex tw-text-slate-500 tw-flex-col ">
            <MdCancel className="tw-text-red-500 tw-text-4xl tw-animate-pulse" />
            No hay hoteles que mostrar en el mapa, actualiza los filtros para
            proceder.
          </div>
        </div>
      )}
    </main>
  );
};

export default MapaHoteles;
