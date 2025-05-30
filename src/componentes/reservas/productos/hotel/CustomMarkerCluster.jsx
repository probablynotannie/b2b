import { useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";
import "leaflet.markercluster";

const CustomMarkerCluster = ({ hoteles, markerIcon, onMarkerRef }) => {
  const map = useMap();

  useEffect(() => {
    const clusterGroup = L.markerClusterGroup();

    hoteles.forEach((hotel) => {
      const marker = L.marker([hotel.lat, hotel.lng], { icon: markerIcon });

      marker.bindPopup(`
        <div style="width: 200px">
          <strong>${hotel.nombre}</strong><br/>
          Precio: €${hotel.precio}<br/>
          Estrellas: ${hotel.estrellas}
          <button> holi </button>
        </div>
      `);

      clusterGroup.addLayer(marker);

      if (onMarkerRef) {
        onMarkerRef(hotel.id, marker);
      }
    });

    map.addLayer(clusterGroup);

    return () => {
      map.removeLayer(clusterGroup);
    };
  }, [hoteles, map, markerIcon, onMarkerRef]);

  return null;
};

export default CustomMarkerCluster;
