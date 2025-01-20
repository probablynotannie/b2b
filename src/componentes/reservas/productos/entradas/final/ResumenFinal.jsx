import { useLocation } from "react-router-dom";

function ResumenFinal() {
  const location = useLocation();
  const { producto, tickets, datosContacto } = location.state || {};
  return <div>ResumenFinal</div>;
}

export default ResumenFinal;
