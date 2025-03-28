import { useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet-defaulticon-compatibility";
import "leaflet/dist/leaflet.css";
import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";

const customIconUrl = "/logos/hotel.png";
const MapaHoteles = ({ hoteles }) => {
  const markersRef = useRef({});
  const handleHotelHover = (hotel) => {
    const marker = markersRef.current[hotel.id];
    if (marker) {
      marker.openPopup();
    }
  };

  const handleHotelLeave = (hotel) => {
    const marker = markersRef.current[hotel.id];
    if (marker) {
      marker.closePopup();
    }
  };

  return (
    <>
      <div className="tw-grid tw-grid-cols-4 tw-gap-10">
        <div className="tw-hidden xl:tw-flex tw-flex-col tw-gap-10">
          {hoteles.map((hotel) => (
            <div
              key={hotel.id}
              className="tw-relative tw-bg-white tw-border-2 tw-border-slate-100 dark:tw-border-slate-700 dark:tw-bg-slate-800 tw-rounded-xl tw-shadow-lg tw-overflow-hidden tw-transition-transform tw-duration-300 hover:tw-scale-105 hover:tw-shadow-xl"
              onMouseEnter={() => handleHotelHover(hotel)}
              onMouseLeave={() => handleHotelLeave(hotel)}
            >
              <div className="tw-h-[200px] tw-overflow-hidden">
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
              <div className="tw-p-4">
                <div className="tw-flex tw-justify-between tw-items-center">
                  <h3 className="tw-text-lg tw-font-bold tw-text-gray-800 dark:tw-text-white">
                    {hotel.nombre}
                  </h3>
                  <div className="tw-flex tw-text-orange-400">
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
                <Link to={"/hotel"} state={hotel} className="tw-block tw-mt-4">
                  <button className="tw-w-full tw-bg-indigo-500 dark:tw-bg-indigo-800 hover:tw-bg-indigo-600 dark:hover:tw-bg-indigo-700 tw-smooth tw-text-white tw-font-semibold tw-py-2 tw-rounded-lg tw-text-center tw-shadow-md">
                    Precio: €{hotel.precio}
                    <span className="tw-block tw-text-sm tw-font-normal">
                      {hotel.regimen}
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="tw-w-full tw-h-[85vh] tw-z-0 tw-mb-0 tw-mt-5 tw-col-span-4 xl:tw-col-span-3 tw-sticky tw-top-10 tw-rounded-2xl tw-overflow-hidden tw-relative">
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
                  <div className="tw-h-[200px] tw-w-[300px] tw-cursor-pointer">
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
                  <Link
                    to={"/hotel"}
                    state={hotel}
                    className="tw-block tw-mt-4 tw-cursor-pointer"
                  >
                    <div className="tw-space-y-0 ">
                      <div className="tw-flex tw-justify-between tw-items-center ">
                        <h3 className="tw-text-lg tw-font-bold tw-text-slate-700  dark:tw-text-secondary ">
                          {hotel.nombre}
                        </h3>
                        <div className="tw-flex tw-text-orange-400">
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
      </div>
    </>
  );
};

export default MapaHoteles;
