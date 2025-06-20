import DatosContacto from "../../../estructura/DatosContacto";
import HotelDetalles from "../../hotel/final/Hotel";
import CocheDetalles from "../../coches/final/Coche";
import CircuitoDetalles from "../../circuitos/final/Circuito";
function Detalles({ datosContacto, productos }) {
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
    12: (producto) => (
      <CircuitoDetalles
        actividad={producto}
        fechaIda={producto.fecha}
        adultos={2}
        ninios={4}
        habitacion={producto.habitacion}
      />
    ),
  };
  return (
    <div>
      <DatosContacto
        nombre={datosContacto.nombre}
        apellidos={datosContacto.apellido}
        numero={datosContacto.numero}
        email={datosContacto.email}
      />
      <div>
        {productos.map((producto) => {
          const componenteAMostrar = typeComponentMap[producto.type];
          return (
            <div key={producto.id} className="tw-mt-4">
              {componenteAMostrar ? componenteAMostrar(producto) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Detalles;
