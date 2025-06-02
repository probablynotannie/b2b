import { useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";
import "leaflet.markercluster";

const CustomMarkerCluster = ({
  hoteles,
  markerIcon,
  onMarkerRef,
  onNavigateToHotel,
}) => {
  const map = useMap();

  useEffect(() => {
    const clusterGroup = L.markerClusterGroup();

    hoteles.forEach((hotel) => {
      const marker = L.marker([hotel.lat, hotel.lng], { icon: markerIcon });

      marker.bindPopup(`
       <div class="custom-tooltip">
  <img 
    class="imagen_popup_hotel" 
    src="${hotel.fotos[1]}" 
    alt="${hotel.nombre}" 
  />
  <strong style="display: block; margin-top: 8px; font-size: 1.1em; color: #333;">
    ${hotel.nombre}
  </strong>
  <div style="margin-top: 4px; color: #555;">
    Precio: €${hotel.precio}<br/>
    Estrellas: ${hotel.estrellas}
  </div>
  <button class="boton_popup_hotel" id="popup-btn-${hotel.id}" style="margin-top: 10px; width: 100%;">
    Ver hotel
  </button>
</div>

      `);

      marker.on("popupopen", () => {
        const btn = document.getElementById(`popup-btn-${hotel.id}`);
        if (btn) {
          btn.onclick = () => {
            onNavigateToHotel(hotel);
            map.closePopup();
          };
        }
      });

      clusterGroup.addLayer(marker);

      if (onMarkerRef) {
        onMarkerRef(hotel.id, marker);
      }
    });

    map.addLayer(clusterGroup);

    return () => {
      map.removeLayer(clusterGroup);
    };
  }, [hoteles, map, markerIcon, onMarkerRef, onNavigateToHotel]);

  return null;
};

export default CustomMarkerCluster;
