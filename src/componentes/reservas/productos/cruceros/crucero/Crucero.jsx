import { useParams } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Aside from "./contenidoSecundario/Aside";
import Placeholder from "../../../../../placeholders/Detalles";
import Error from "../filtros/Error";
import fetchCrucero from "../hook/crucero";
import PaginaDetalles from "../../../../../helpers/visuales/PaginaDetalles";
import Crucero from "./contenidoPrincipal/Crucero";
function Producto() {
  const { idCrucero } = useParams();
  const [pasajeros, setPasajeros] = useState([]);
  const [precioSeleccionado, setPrecioSeleccionado] = useState(null);
  const {
    data: producto,
    isLoading,
    isError,
  } = useQuery({
    refetchInterval: 10_000,
    refetchIntervalInBackground: true,
    queryKey: ["crucero", idCrucero],
    queryFn: () => fetchCrucero(idCrucero),
    enabled: !!idCrucero,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <Placeholder />;
  }

  if (!producto) {
    return (
      <div>
        <Error error={"No se ha encontrado este crucero"} />
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <Error tipo={3} error={"Ha habido un error inesperado."} />
      </div>
    );
  }
  const getImagenCruceroDisponible = (producto) => {
    if (producto?.barco?.img_header_embarcacion) {
      return producto.barco.img_header_embarcacion;
    }
    const firstAvailablePortImage = producto?.itin_dias
      ?.map((dia) => dia.puerto?.img_puerto_header)
      .find((img) => img && img.trim() !== "");
    return firstAvailablePortImage || null;
  };
  const cruiseImage =
    getImagenCruceroDisponible(producto) ?? "default-image.jpg";

  return (
    <PaginaDetalles
      titulo={producto?.barco?.nombre?.texto}
      contenidoPrincipal={
        <Crucero
          producto={producto}
          pasajeros={pasajeros}
          setPasajeros={setPasajeros}
          cruiseImage={cruiseImage}
          precioSeleccionado={precioSeleccionado}
          setPrecioSeleccionado={setPrecioSeleccionado}
        />
      }
      contenidoSecundario={
        <Aside
          producto={producto}
          precioSeleccionado={precioSeleccionado}
          pasajeros={pasajeros}
          cruiseImage={cruiseImage}
        />
      }
    />
  );
}

export default Producto;
