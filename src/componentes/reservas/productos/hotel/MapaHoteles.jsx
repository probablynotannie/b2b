import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet-defaulticon-compatibility";
import "leaflet/dist/leaflet.css";
import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";
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
              <Link
                to={"/hotel"}
                state={hotel}
                className="tw-space-y-2 tw-my-3"
              >
                <div className="tw-h-[200px] tw-w-[300px]">
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
                <div className="tw-space-y-0">
                  <h3 className="tw-font-bold tw-text-lg tw-text-secondary">
                    {hotel.nombre}
                  </h3>
                  <p className="tw-font-medium tw-text-slate-400">
                    Precio: €{hotel.precio}
                  </p>
                </div>
              </Link>
            </Popup>
            <Tooltip
              className="custom-tooltip"
              direction="top"
              offset={[0, -30]} 
              permanent
            >
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
