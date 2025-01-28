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
  const positions = destino.itinerario.map(({ lat, lng }) => [lat, lng]);

  return (
    <div className="tw-rounded-xl tw-overflow-hidden tw-w-full tw-h-full tw-z-0">
      <MapContainer
        center={positions[0]}
        zoom={6}
        style={{ height: "90%", width: "100%" }}
        zoomControl={false}
      >
        <TileLayer
          url="https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://wikimediafoundation.org/">Wikimedia</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {destino.itinerario.map((location) => (
          <Marker key={location.id} position={[location.lat, location.lng]}>
            <Popup>
              <strong>{location.destino}</strong>
            </Popup>
          </Marker>
        ))}
        <Polyline positions={positions} color="green" weight={3} />
      </MapContainer>
    </div>
  );
};

export default MapWithJourney;
