import { useRef, useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import L from "leaflet";
import "leaflet-defaulticon-compatibility";
import "leaflet/dist/leaflet.css";
import Cluster from "./Cluster";
import { useNavigate } from "react-router-dom";
import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";
import Estrellas from "../../../../../helpers/visuales/Estrellas";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Filtrado from "./Filtrado";
const customIconUrl = "/logos/hotel.png";

const MapaHoteles = ({ hoteles }) => {
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

      map.flyTo(marker.getLatLng(), Math.max(map.getZoom(), 13), {
        animate: true,
        duration: 1,
      });
    }
  };

  /*   const handleHotelLeave = (hotel) => {
    const marker = markersRef.current[hotel.id];
  };
 */
  const markerIcon = new L.Icon({
    iconUrl: customIconUrl,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });

  return (
    <main>
      <Filtrado />
      <section
        className={`tw-grid tw-gap-10 tw-mt-5 ${
          showMapOnly ? "tw-grid-cols-1" : "tw-grid-cols-3 xl:tw-grid-cols-4"
        }`}
      >
        {!showMapOnly && (
          <div className="tw-hidden lg:tw-grid xl:tw-grid-cols-2 xl:tw-col-span-2 tw-gap-10">
            {hoteles.map((hotel) => (
              <div
                key={hotel.id}
                className="tw-h-fit tw-relative tw-border-2 tw-border-slate-100 dark:tw-border-slate-700 dark:tw-bg-slate-800 tw-rounded-xl tw-shadow-lg tw-overflow-hidden tw-transition-transform tw-duration-300 hover:tw-scale-105 hover:tw-shadow-xl"
                onMouseEnter={() => handleHotelHover(hotel)}
                /*        onMouseLeave={() => handleHotelLeave(hotel)} */
              >
                <div className="tw-h-[200px] tw-overflow-hidden">
                  <Carousel slide={false} indicators={true}>
                    {hotel.fotos.map((foto, idx) => (
                      <img
                        key={idx}
                        src={foto}
                        alt={`Imagen ${idx + 1} de ${hotel.nombre}`}
                        className="tw-h-full tw-w-full tw-object-cover"
                      />
                    ))}
                  </Carousel>
                </div>
                <div className="tw-p-4">
                  <div className="tw-flex tw-justify-between tw-items-center tw-flex-wrap">
                    <h3 className="tw-text-lg tw-font-bold tw-text-gray-800 dark:tw-text-white">
                      {hotel.nombre}
                    </h3>
                    <Estrellas estrellas={hotel.estrellas} />
                  </div>
                  <Link
                    to={"/hotel"}
                    state={hotel}
                    className="tw-block tw-mt-4"
                  >
                    <button className="tw-w-full tw-bg-indigo-500 dark:tw-bg-indigo-800 hover:tw-bg-indigo-600 dark:hover:tw-bg-indigo-700 tw-smooth tw-text-white tw-font-semibold tw-py-2 tw-rounded-lg tw-text-center tw-shadow-md">
                      Precio: €{hotel.precio}
                      <span className="tw-block tw-text-sm tw-font-normal">
                        {hotel.regimen}
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
        <div
          className={`tw-w-full tw-border-2 tw-border-slate-100 tw-shadow hover:tw-shadow-xl tw-smooth tw-h-[85vh] tw-z-0 tw-mb-0 ${
            showMapOnly ? "tw-col-span-1" : "tw-col-span-3 lg:tw-col-span-2"
          } tw-sticky tw-top-10 tw-rounded-2xl tw-overflow-hidden`}
        >
          <div
            className="tw-hidden lg:tw-flex tw-absolute tw-top-5 tw-left-5 tw-z-50 hover:tw-scale-105 tw-smooth tw-cursor-pointer tw-p-2 tw-bg-indigo-500 tw-px-3 tw-text-white tw-rounded-lg tw-shadow-lg tw-text-2xl"
            onClick={() => setShowMapOnly(!showMapOnly)}
          >
            {showMapOnly ? <FaArrowRight /> : <FaArrowLeft />}
          </div>
          <MapContainer
            center={[hoteles[0].lat, hoteles[0].lng]}
            zoom={6}
            style={{ height: "100%", width: "100%" }}
            zoomControl={false}
            ref={mapRef}
          >
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
            />
            {/*   <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            /> */}
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
