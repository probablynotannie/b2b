import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  Tooltip,
} from "react-leaflet";
import "leaflet-defaulticon-compatibility";
import "leaflet/dist/leaflet.css";

// 15 dias es un monton no? No entiendo que es esto jajaj En fin... 
// Espero poder hacer todo a mi ritmo.
// Yo creo que voy a sufrir demasiado.
// Ya no me entero de nada que es esta mierda
// Tio eso de mirar los pies me da un poco de mal rollete eh.. No se como lo voy a llevar
// Cuantas calorias seran esas.

const MapWithJourney = ({ destino }) => {
  const positions = destino.noches.map(({ lat, lng }) => [lat, lng]);
  return (
    <div className="w-full h-full z-0 mb-0 ">
      <MapContainer
        center={positions[0]}
        zoom={6}
        style={{
          height: "90%",
          width: "100%",
        }}
        zoomControl={false}
      >
        <TileLayer
          url="https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://wikimediafoundation.org/">Wikimedia</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {destino.noches.map((location) => (
          <Marker key={location.id} position={[location.lat, location.lng]}>
            <Tooltip permanent offset={[0, -20]}>
              <stron>{location.name}</stron>
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
