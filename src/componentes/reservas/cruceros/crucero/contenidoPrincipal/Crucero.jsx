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
    <>
      <Detalles producto={producto} />
      <Tabs
        producto={producto}
        pasajeros={pasajeros}
        setPasajeros={setPasajeros}
        precioSeleccionado={precioSeleccionado}
        setPrecioSeleccionado={setPrecioSeleccionado}
        cruiseImage={cruiseImage}
      />
    </>
  );
}

export default Crucero;
