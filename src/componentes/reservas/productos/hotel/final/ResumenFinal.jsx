import { useLocation } from "react-router-dom";

function ResumenFinal() {
  const location = useLocation();
  const { producto, habitacion, datosContacto } = location.state || {};
  return (
    <div>
      {JSON.stringify(datosContacto)}
      aef
    </div>
  );
}

export default ResumenFinal;
