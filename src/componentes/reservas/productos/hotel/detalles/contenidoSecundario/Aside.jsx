import InfoHotel from "../contenidoPrincipal/Info";
import Reserva from "../../../../../../helpers/visuales/ReservaFinal/Resumen";
function Aside({ producto }) {
  return (
    <>
      <Reserva img={producto.ListFotos[0]} txt={producto.NombreHotel} />
      <section>
        <InfoHotel aside={true} hotel={producto} />
      </section>
    </>
  );
}

export default Aside;
