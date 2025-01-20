import { useLocation } from "react-router-dom";

function ResumenFinal() {
  const location = useLocation();
  const { hotel, ferry, datosContacto  } = location.state || {};
  return <div>ResumenFinal</div>;
}

export default ResumenFinal;
