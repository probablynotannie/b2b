import { useLocation } from "react-router-dom";
function Producto() {
  const location = useLocation();
  const producto = location.state;
  const ida = producto[0];
  const vuelta = producto[1] && producto[1];
  const reserva = {
    type: "hotel",
    nombre: producto.nombre,
    fechaIda: producto.fecha,
    fechaVuelta: producto.fechaSalida,
    precio: producto.precio,
  };
  return (
    <main className="flex justify-center flex-col my-10  px-5 md:px-0">
      <div className="container">{producto.length}</div>
    </main>
  );
}

export default Producto;
