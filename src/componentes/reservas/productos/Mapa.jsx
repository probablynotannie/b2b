import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const hotelLocations = [
  { id: 1, name: "Hotel A", position: [40.712776, -74.005974] },
  { id: 2, name: "Hotel B", position: [34.052235, -118.243683] },
  { id: 3, name: "Hotel C", position: [41.878113, -87.629799] },
];

const HotelMap = () => {
  return (
    <MapContainer
      center={[40.712776, -74.005974]}
      zoom={4}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {hotelLocations.map((hotel) => (
        <Marker key={hotel.id} position={hotel.position}>
          <Popup>{hotel.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default HotelMap;
