import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  Tooltip,
} from "react-leaflet";
import "leaflet-defaulticon-compatibility";
import "leaflet/dist/leaflet.css";

const MapWithJourney = ({ destino }) => {
  const positions = destino.noches.map(({ lat, lng }) => [lat, lng]);

  return (
    <div className="w-full h-full mb-0">
      <MapContainer
        center={positions[0]}
        zoom={6}
        style={{ height: "100%", width: "100%" }}
        zoomControl={false} // Disable default zoom control
      >
        <TileLayer
          url="https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://wikimediafoundation.org/">Wikimedia</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {destino.noches.map((location) => (
          <Marker key={location.id} position={[location.lat, location.lng]}>
            <Tooltip permanent offset={[0, -20]}>
              <strong>{location.name}</strong>
              <br />
              {location.country}
              <br />
              {location.nights} noche(s)
            </Tooltip>
          </Marker>
        ))}
        <Polyline positions={positions} color="green" weight={3} />
      </MapContainer>
    </div>
  );
};

export default MapWithJourney;
