import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  Popup,
} from "react-leaflet";
import "leaflet-defaulticon-compatibility";
import "leaflet/dist/leaflet.css";

const MapWithJourney = ({ destino }) => {
  const positions = destino.noches.map(({ lat, lng }) => [lat, lng]);

  return (
    <div className="tw-w-full tw-h-full tw-mb-0">
      <MapContainer
        center={positions[0]}
        zoom={6}
        style={{ height: "100%", width: "100%" }}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {destino.noches.map((location) => (
          <Marker key={location.id} position={[location.lat, location.lng]}>
            <Popup permanent offset={[0, -20]}>
              <strong>{location.name}</strong>
              <br />
              {location.country}
              <br />
              {location.nights} noche(s)
            </Popup>
          </Marker>
        ))}
        <Polyline positions={positions} color="green" weight={3} />
      </MapContainer>
    </div>
  );
};

export default MapWithJourney;
