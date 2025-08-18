import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";
const customIconUrl = "/logos/hotel.png";

function Map({ hotel }) {
  const markerIcon = new L.Icon({
    iconUrl: customIconUrl,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });

  return (
    <MapContainer
      center={[hotel.Lat, hotel.Long]}
      zoom={12}
      style={{ height: "100%", width: "100%" }}
      zoomControl={false}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
      />
      <Marker position={[hotel.Lat, hotel.Long]} icon={markerIcon} />
    </MapContainer>
  );
}

export default Map;
