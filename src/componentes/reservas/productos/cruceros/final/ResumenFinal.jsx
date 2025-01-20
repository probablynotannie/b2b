import { useLocation } from "react-router-dom";

function ResumenFinal() {
  const location = useLocation();
  const {
    datosContacto,
    producto,
    cabinPhotos,
    pasajeros,
    selectedDate,
    endDate,
    selectedPrice,
  } = location.state || {};
  return <div>ResumenFinal</div>;
}

export default ResumenFinal;
