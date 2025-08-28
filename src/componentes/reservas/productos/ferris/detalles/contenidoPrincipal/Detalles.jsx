import { FaFilePdf } from "react-icons/fa";
import Ferry from "./Ferry";
function Detalles({ ida, vuelta, ferry }) {
  console.log(ferry);
  return (
    <div>
      <div className="tw-grid tw-flex-col tw-gap-5">
        <Ferry ferry={ida} tipo={"ida"} />
        {vuelta && <Ferry ferry={vuelta} tipo={"vuelta"} />}
      </div>
      
    </div>
  );
}

export default Detalles;
