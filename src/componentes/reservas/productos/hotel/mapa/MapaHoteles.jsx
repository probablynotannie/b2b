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
import Estrellas from "../../../../../helpers/visuales/Estrellas";
import { FaArrowLeft, FaArrowRight, FaMapPin } from "react-icons/fa";
import Filtrado from "./Filtrado";
const customIconUrl = "/logos/hotel.png";

const MapaHoteles = ({ hoteles, values, setValues, minMax, setMinMax }) => {
  const markersRef = useRef({});
  const [showMapOnly, setShowMapOnly] = useState(false);
  const mapRef = useRef(null);
  const navigate = useNavigate();
  const handleNavigateToHotel = (hotel) => {
    navigate("/hotel", { state: hotel });
  };
  useEffect(() => {
    if (mapRef.current) {
      setTimeout(() => {
        mapRef.current.invalidateSize();
      }, 300);
    }
  }, [showMapOnly]);
  const handleHotelHover = (hotel) => {
    const marker = markersRef.current[hotel.id];
    if (!marker || !mapRef.current) return;
    const map = mapRef.current;
    const parent = marker.__parent;
    if (parent && typeof parent.zoomToShowLayer === "function") {
      parent.zoomToShowLayer(marker, () => {
        setTimeout(() => {
          marker.openPopup();
        }, 300);
      });
    } else {
      const onMoveEnd = () => {
        marker.openPopup();
        map.off("moveend", onMoveEnd);
      };
      map.on("moveend", onMoveEnd);
      map.flyTo(marker.getLatLng(), Math.max(map.getZoom(), 15), {
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

  return (
    <main>
      <Filtrado
        values={values}
        setValues={setValues}
        minMax={minMax}
        setMinMax={setMinMax}
      />
      <section
        className={`tw-grid  tw-mt-16 ${
          showMapOnly ? "tw-grid-cols-1" : "tw-grid-cols-3 xl:tw-grid-cols-4"
        }`}
      >
        {!showMapOnly && (
          <div className=" tw-hidden lg:tw-grid xl:tw-grid-cols-1 xl:tw-col-span-1">
            {hoteles.map((hotel) => (
              <Link
                to={"/hotel"}
                state={hotel}
                key={hotel.id}
                onMouseEnter={() => handleHotelHover(hotel)}
                className="tw-group tw-flex tw-flex-row tw-bg-slate-50 dark:tw-bg-slate-900 tw-border tw-border-slate-200 dark:tw-border-slate-700 hover:tw-border-secondary tw-smooth tw-transition-transform tw-duration-300 tw-ease-in-out hover:tw-shadow-lg tw-rounded-xl tw-overflow-hidden"
              >
                <img
                  alt="imagen"
                  src={hotel.img}
                  className="tw-h-full tw-w-2/5 tw-object-cover tw-rounded-lg"
                />
                <div className="tw-flex-1 tw-p-4 tw-flex tw-flex-col tw-justify-between">
                  <div className="tw-flex tw-flex-col tw-gap-2 tw-border-b tw-pb-4 tw-border-slate-100 dark:tw-border-slate-700">
                    <div className="tw-flex tw-flex-col">
                      <h3 className="tw-text-lg tw-font-semibold tw-text-gray-900 dark:tw-text-white">
                        {hotel.nombre}
                      </h3>
                      <Estrellas estrellas={hotel.estrellas} />
                    </div>
                    <p className="tw-text-xs tw-text-gray-500 dark:tw-text-gray-400 tw-flex tw-items-start tw-gap-2">
                      <FaMapPin className="tw-text-red-500 tw-text-[1rem]" />{" "}
                      {hotel.ubicacion}
                    </p>
                    <p className="tw-text-xs tw-text-slate-500 dark:tw-text-slate-400">
                      {hotel.habitaciones.length} habitaciones disponibles
                    </p>
                  </div>
                  <div className="tw-mt-4">
                    <button className="tw-w-full tw-font-medium tw-rounded-lg">
                      <span className="tw-smooth group-hover:tw-text-secondary dark:group-hover:tw-text-secondaryDark tw-text-xl tw-font-mono dark:tw-text-slate-100">
                        €{hotel.precio}
                      </span>
                      <span className="tw-block tw-text-sm tw-font-light tw-text-slate-500 tw-smooth dark:tw-text-slate-400">
                        {hotel.regimen}
                      </span>
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
        <div
          className={`tw-w-full tw-border-2 tw-border-slate-100 tw-shadow hover:tw-shadow-xl tw-smooth tw-h-[100vh] tw-z-0 tw-mb-0 ${
            showMapOnly ? "tw-col-span-1" : "tw-col-span-3 lg:tw-col-span-3"
          } tw-sticky tw-top-0 tw-rounded-2xl tw-overflow-hidden`}
        >
          <div
            className="tw-hidden lg:tw-flex tw-absolute tw-top-5 tw-left-5 tw-z-50 hover:tw-scale-105 tw-smooth tw-cursor-pointer tw-p-2 tw-bg-indigo-500 tw-px-3 tw-text-white tw-rounded-lg tw-shadow-lg tw-text-2xl"
            onClick={() => setShowMapOnly(!showMapOnly)}
          >
            {showMapOnly ? <FaArrowRight /> : <FaArrowLeft />}
          </div>
          <MapContainer
            center={[hoteles[0].lat, hoteles[0].lng]}
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
              hoteles={hoteles}
              markerIcon={markerIcon}
              onMarkerRef={(id, marker) => (markersRef.current[id] = marker)}
              onNavigateToHotel={handleNavigateToHotel}
            />
          </MapContainer>
        </div>
      </section>
    </main>
  );
};

export default MapaHoteles;
