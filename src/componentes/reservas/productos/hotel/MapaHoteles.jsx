import { useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet-defaulticon-compatibility";
import "leaflet/dist/leaflet.css";
import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";

const customIconUrl = "/logos/hotel.png";
const MapaHoteles = ({ hoteles }) => {
  const [hoveredHotel, setHoveredHotel] = useState(null);
  const markersRef = useRef({});
  const handleHotelHover = (hotel) => {
    setHoveredHotel(hotel.id);
    const marker = markersRef.current[hotel.id];
    if (marker) {
      marker.openPopup();
    }
  };
  const handleHotelLeave = (hotel) => {
    setHoveredHotel(null);
    const marker = markersRef.current[hotel.id];
    if (marker) {
      marker.closePopup();
    }
  };

  return (
    <>
      <div className="tw-grid tw-grid-cols-4 tw-gap-10">
        <div className="tw-flex tw-flex-col tw-gap-10">
          {hoteles.map((hotel) => (
            <div
              key={hotel.id}
              className="tw-relative tw-pb-10 tw-bg-slate-100 dark:tw-bg-slate-800 tw-rounded-lg tw-cursor-pointer tw-transition-transform hover:tw-scale-105"
              onMouseEnter={() => handleHotelHover(hotel)}
              onMouseLeave={() => handleHotelLeave(hotel)}
            >
              <div className="tw-h-[150px]">
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
              <div className="tw-p-2">
                <div className="tw-flex tw-justify-between tw-items-center">
                  <h3 className="tw-text-secondary dark:tw-text-secondary tw-font-bold tw-text-lg">
                    {hotel.nombre}
                  </h3>
                  <div className="tw-flex tw-text-secondary">
                    {[...Array(5)].map((_, i) =>
                      i < Math.floor(hotel.estrellas) ? (
                        <IoMdStar key={i} className="tw-text-lg" />
                      ) : i === Math.floor(hotel.estrellas) &&
                        hotel.estrellas % 1 !== 0 ? (
                        <IoMdStarHalf key={i} className="tw-text-lg" />
                      ) : (
                        <IoMdStarOutline key={i} className="tw-text-lg" />
                      )
                    )}
                  </div>
                </div>
                <Link
                  to={"/hotel"}
                  state={hotel}
                  className="tw-flex tw-justify-center"
                >
                  <button className=" tw-bg-secondary tw-rounded-lg tw-text-white tw-px-10 tw-font-bold tw-p-2 ">
                    Precio: €{hotel.precio}
                    <span className=" tw-text-white tw-rounded-lg tw-text-xs tw-p-1">
                      {hotel.regimen}
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="tw-w-full tw-h-[85vh] tw-z-0 tw-mb-0 tw-mt-5 tw-col-span-3 tw-sticky tw-top-10 tw-rounded-2xl tw-overflow-hidden tw-relative">
          <div className="tw-absolute tw-inset-0 tw-top-0 tw-z-50 dark:tw-bg-cyan-900/10 tw-bg-indigo-200/10 tw-pointer-events-none tw-rounded-2xl"></div>
          <MapContainer
            center={[hoteles[0].lat, hoteles[0].lng]}
            zoom={6}
            style={{ height: "100%", width: "100%" }}
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
                ref={(el) => (markersRef.current[hotel.id] = el)}
              >
                <Popup className="custom-popup">
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
      </div>
    </>
  );
};

export default MapaHoteles;
