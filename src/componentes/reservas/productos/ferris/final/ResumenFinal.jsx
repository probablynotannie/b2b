import { useLocation } from "react-router-dom";

function ResumenFinal() {
  const location = useLocation();
  const { ida, vuelta, datosContacto } = location.state || {};
  return <div>ResumenFinal</div>;
}

export default ResumenFinal;
