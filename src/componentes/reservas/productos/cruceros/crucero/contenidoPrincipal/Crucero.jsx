import Detalles from "./Detalles";
import Tabs from "./Tabs";
function Crucero({
  producto,
  pasajeros,
  setPasajeros,
  precioSeleccionado,
  setPrecioSeleccionado,
  cruiseImage,
}) {
  return (
    <div>
      <Detalles producto={producto} />
      <Tabs
        producto={producto}
        pasajeros={pasajeros}
        setPasajeros={setPasajeros}
        precioSeleccionado={precioSeleccionado}
        setPrecioSeleccionado={setPrecioSeleccionado}
        cruiseImage={cruiseImage}
      />
    </div>
  );
}

export default Crucero;
