import { useLocation } from "react-router-dom";
function Destino() {
  const location = useLocation();
  const { destino = {} } = location.state || {};
  return <div>Destino</div>;
}

export default Destino;
