import { FaFerry } from "react-icons/fa6";
import DetalleFerry from "../reserva/Ferry";
function Ferry({ ida, vuelta, ferry }) {
  console.log(ferry);
  return (
    <section>
      <DetalleFerry producto={ida} tipo={"Ida"} ferry={ferry} />
      {vuelta && (
        <DetalleFerry producto={vuelta} tipo={"Vuelta"} ferry={ferry} />
      )}
    </section>
  );
}
export default Ferry;
