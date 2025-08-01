import HotelDetalles from "../../hotel/final/Hotel";
import CocheDetalles from "../../coches/final/Coche";
import CircuitoDetalles from "../../circuitos/final/Circuito";
import VuelosDetalles from "../../vuelos/final/Vuelos";
import formatearFecha from "../../../../../scripts/FormatearFecha";
function Detalles({ productos }) {
  const typeComponentMap = {
    1: (producto) => (
      <HotelDetalles hotel={producto.hotel} habitacion={producto.habitacion} />
    ),
    5: (producto) => (
      <CocheDetalles
        producto={producto.producto}
        conductor={producto.conductor}
        precio={producto.precio}
        extras={producto.selectedExtras}
      />
    ),
    11: (producto) => (
      <VuelosDetalles ida={producto.ida} vuelta={producto.vuelta} />
    ),
    12: (producto) => (
      <CircuitoDetalles
        actividad={producto}
        fechaIda={formatearFecha(producto.fecha)}
        adultos={2}
        ninios={4}
        habitacion={producto.habitacion}
      />
    ),
  };
  return (
    <div>
      <div>
        {productos.map((producto, index) => {
          const componenteAMostrar = typeComponentMap[producto.type];
          return (
            <div key={index} className="tw-mt-4">
              {componenteAMostrar ? componenteAMostrar(producto) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Detalles;
