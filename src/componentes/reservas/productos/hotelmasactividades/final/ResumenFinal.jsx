import { useLocation } from "react-router-dom";

function ResumenFinal() {
  const location = useLocation();
  const { datosContacto, hotel, actividades } = location.state || {};
  return <div>ResumenFinal</div>;
}

export default ResumenFinal;
