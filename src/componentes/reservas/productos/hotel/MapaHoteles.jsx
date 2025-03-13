import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet-defaulticon-compatibility";
import "leaflet/dist/leaflet.css";

const customIconUrl = "/logos/hotel.png";

const MapaHoteles = ({ hoteles }) => {
  return (
    <div className="tw-w-full tw-h-[85vh] tw-z-0 tw-mb-0 tw-mt-5">
      <MapContainer
        center={[hoteles[0].lat, hoteles[0].lng]}
        zoom={6}
        style={{
          height: "90%",
          width: "100%",
        }}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {hoteles.map((hotel) => (
          <Marker
            key={hotel.id}
            position={[hotel.lat, hotel.lng]}
            icon={
              new L.Icon({
                iconUrl: customIconUrl,
                iconSize: [40, 40],
                iconAnchor: [20, 40],
                popupAnchor: [0, -40],
              })
            }
          >
            <Popup className="custom-popup">
              <h3 className="popup-title">{hotel.nombre}</h3>
              <img
                src={hotel.imagenes[0].src}
                className="popup-image"
                alt="imagen hotel"
              />
              <p className="popup-price">Precio: €{hotel.precio}</p>
            </Popup>

            <Tooltip direction="top" offset={[0, -30]} permanent>
              <div className="tw-text-black">
                <span>€{hotel.precio}</span>
              </div>
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapaHoteles;
