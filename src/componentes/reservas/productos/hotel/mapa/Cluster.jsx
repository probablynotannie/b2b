import { useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";
import "leaflet.markercluster";
import ReactDOM from "react-dom/client";
import Estrellas from "../../../../../helpers/visuales/Estrellas";
import { FaMapPin } from "react-icons/fa";

const HotelPopup = ({ hotel, onNavigate }) => (
  <div className="tw-w-[250px] tw-bg-white/90 tw-p-2 tw-rounded-lg tw-shadow">
    <img
      className="tw-w-full tw-h-[150px] tw-object-cover tw-rounded-lg tw-block tw-mb-2"
      src={hotel.fotos[1]}
      alt={hotel.nombre}
    />
    <div className="tw-flex tw-justify-between tw-items-center ">
      <span className="tw-font-bold">{hotel.nombre}</span>
      <Estrellas estrellas={5} />
    </div>
    <span className="tw-flex tw-items-center tw-gap-1">
      <FaMapPin className="tw-text-red-600" />
      {hotel.ubicacion}
    </span>
    <button
      className="tw-btn_accesorios tw-bg-indigo-500"
      style={{ marginTop: 10, width: "100%" }}
      onClick={onNavigate}
    >
      Desde {hotel.precio}€
    </button>
  </div>
);

const CustomMarkerCluster = ({
  hoteles,
  markerIcon,
  onMarkerRef,
  onNavigateToHotel,
}) => {
  const map = useMap();

  useEffect(() => {
    const clusterGroup = L.markerClusterGroup();

    hoteles.forEach((hotel) => {
      const marker = L.marker([hotel.lat, hotel.lng], { icon: markerIcon });

      const popupContainer = document.createElement("div");

      marker.bindPopup(popupContainer);
      marker.on("popupopen", () => {
        const root = ReactDOM.createRoot(popupContainer);
        root.render(
          <HotelPopup
            hotel={hotel}
            onNavigate={() => {
              onNavigateToHotel(hotel);
              map.closePopup();
            }}
          />
        );
      });

      clusterGroup.addLayer(marker);

      if (onMarkerRef) {
        onMarkerRef(hotel.id, marker);
      }
    });

    map.addLayer(clusterGroup);

    return () => {
      map.removeLayer(clusterGroup);
    };
  }, [hoteles, map, markerIcon, onMarkerRef, onNavigateToHotel]);

  return null;
};

export default CustomMarkerCluster;
