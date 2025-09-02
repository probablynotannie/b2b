import { FaFerry } from "react-icons/fa6";
import DetalleFerry from "../reserva/Ferry";
function Ferry({ ida, vuelta }) {
  return (
    <section>
      <DetalleFerry producto={ida} tipo={"Ida"} />
      {vuelta && <DetalleFerry producto={vuelta} tipo={"Vuelta"} />}
    </section>
  );
}
export default Ferry;
