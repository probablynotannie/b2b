import { useLocation } from "react-router-dom";

function ResumenFinal() {
  const location = useLocation();
  const { producto, selectedExtras, precio, datosContacto, conductor } =
    location.state || {};
  return <div>ResumenFinal</div>;
}

export default ResumenFinal;
