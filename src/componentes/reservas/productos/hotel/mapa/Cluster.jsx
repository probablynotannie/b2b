import { useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";
import "leaflet.markercluster";
import ReactDOM from "react-dom/client";
import Estrellas from "../../../../../helpers/visuales/Estrellas";
import { FaMapPin } from "react-icons/fa";
import getEstrellas from "../hook/getEstrellas";
const HotelPopup = ({ hotel, onNavigate, habitacion, neto }) => (
  <div className="tw-w-fit tw-bg-white/90 tw-p-2 tw-rounded-lg tw-shadow">
    <img
      className="tw-min-w-[270px] tw-h-[150px] tw-object-cover tw-rounded-lg tw-block tw-mb-2"
      src={hotel.ListFotos[1]}
      alt={hotel.NombreHotel}
    />
    <div className="tw-flex tw-justify-between tw-items-center ">
      <span className="tw-font-bold">{hotel.NombreHotel}</span>
      <Estrellas estrellas={getEstrellas(hotel.CategoryName)} />
    </div>
    <span className="tw-flex tw-items-center tw-gap-1 tw-mb-2">
      <FaMapPin className="tw-text-red-600" />
      {hotel.Dir}
    </span>
    <button
      className={`tw-btn_accesorios ${
        neto === true
          ? "tw-bg-sky-200 tw-text-sky-800 hover:tw-bg-sky-200/80 dark:tw-bg-sky-900 dark:tw-text-sky-100 hover:dark:tw-bg-sky-950"
          : "tw-bg-secondary dark:tw-bg-secondaryDark"
      }`}
      style={{ width: "100%" }}
      onClick={onNavigate}
    >
      desde {neto !== true ? habitacion.Price : habitacion.Pvp}
      {habitacion.Currency === "EUR" ? "€" : habitacion.Currency}
    </button>
  </div>
);

const Cluster = ({
  hoteles,
  markerIcon,
  onMarkerRef,
  onNavigateToHotel,
  neto,
}) => {
  function habitacionMasBarata(hotel) {
    if (!hotel?.ListaPrecios || hotel.ListaPrecios.length === 0) return null;

    return hotel.ListaPrecios.reduce((min, item) =>
      parseFloat(item.Price) < parseFloat(min.Price) ? item : min
    );
  }

  const map = useMap();
  useEffect(() => {
    const clusterGroup = L.markerClusterGroup();
    hoteles.forEach((hotel) => {
      const habitacion = habitacionMasBarata(hotel);
      const estrellas = hotel.CategoryCode.split("*").length - 1;
      const marker = L.marker([hotel.Lat, hotel.Long], { icon: markerIcon });
      const popupContainer = document.createElement("div");

      marker.bindPopup(popupContainer, {
        autoPan: true,
        autoPanPadding: [20, 20],
        closeButton: false,
      });
      let reactRoot = null;
      marker.on("popupopen", () => {
        if (!reactRoot) {
          reactRoot = ReactDOM.createRoot(popupContainer);
        }
        reactRoot.render(
          <HotelPopup
            neto={neto}
            estrellas={estrellas}
            habitacion={habitacion}
            hotel={hotel}
            onNavigate={() => {
              onNavigateToHotel(hotel);
              map.closePopup();
            }}
          />
        );
        setTimeout(() => {
          marker.getPopup().update();
        }, 0);
      });
      marker.on("mouseover", () => {
        setTimeout(() => {
          marker.openPopup();
        }, 0);
      });
      marker.on("click", () => {
        marker.openPopup();
      });
      clusterGroup.addLayer(marker);

      if (onMarkerRef) {
        onMarkerRef(hotel.idHotel, marker);
      }
    });
    map.addLayer(clusterGroup);
    return () => {
      map.removeLayer(clusterGroup);
    };
  }, [hoteles, map, markerIcon, onMarkerRef, onNavigateToHotel]);

  return null;
};

export default Cluster;
