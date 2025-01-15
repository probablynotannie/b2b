import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  Tooltip,
  Popup,
} from "react-leaflet";
import "leaflet-defaulticon-compatibility";
import "leaflet/dist/leaflet.css";

const MapWithJourney = ({ tren }) => {
  // Create an array of positions, ensuring both lat/lng are defined
  const positions = tren.segments.reduce((acc, segment) => {
    // Check if both departure and arrival positions are valid
    if (
      segment.departurePosition &&
      typeof segment.departurePosition.latitude === "number" &&
      typeof segment.departurePosition.longitude === "number" &&
      segment.arrivalPosition &&
      typeof segment.arrivalPosition.latitude === "number" &&
      typeof segment.arrivalPosition.longitude === "number"
    ) {
      acc.push([
        segment.departurePosition.latitude,
        segment.departurePosition.longitude,
      ]);
      acc.push([
        segment.arrivalPosition.latitude,
        segment.arrivalPosition.longitude,
      ]);
    }
    return acc;
  }, []);

  return (
    <div className="w-full h-[30vh] z-0 mb-0">
      <MapContainer
        center={positions[0]} // Center map on the first position (departure of the first segment)
        zoom={6}
        style={{
          height: "90%",
          width: "100%",
        }}
        zoomControl={false}
        className=""
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Markers for each departure and arrival position */}
        {tren.segments.map((segment) => (
          <>
            {segment.departurePosition &&
              typeof segment.departurePosition.latitude === "number" &&
              typeof segment.departurePosition.longitude === "number" && (
                <Marker
                  key={`departure-${segment.id}`}
                  position={[
                    segment.departurePosition.latitude,
                    segment.departurePosition.longitude,
                  ]}
                >
                  <Popup>
                    <span>{segment.departurePosition.name}</span>
                  </Popup>
                </Marker>
              )}

            {segment.arrivalPosition &&
              typeof segment.arrivalPosition.latitude === "number" &&
              typeof segment.arrivalPosition.longitude === "number" && (
                <Marker
                  key={`arrival-${segment.id}`}
                  position={[
                    segment.arrivalPosition.latitude,
                    segment.arrivalPosition.longitude,
                  ]}
                >
                  <Tooltip permanent offset={[0, -20]}>
                    <span>{segment.arrivalPosition.name}</span>
                  </Tooltip>
                </Marker>
              )}
          </>
        ))}

        {/* Polyline for the journey path */}
        {positions.length > 1 && (
          <Polyline positions={positions} color="green" weight={3} />
        )}
      </MapContainer>
    </div>
  );
};

export default MapWithJourney;
