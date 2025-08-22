import Buscador from "../../../motores/buscadores/ferris/Buscador_Ferris";
import Aside from "./filtros/Aside";
import Ferris from "./Ferris";
import ferris from "./Ferris.json";
import { useState, useEffect } from "react";
import Cargando from "../../estructura/skeleton_placeholders_listado/Cargando";
import PlaceHolder from "../../estructura/skeleton_placeholders_listado/Ferris";
import Resultado from "../../../../helpers/Resultado";
function Productos() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  const [ida, setIda] = useState(null);
  const [vuelta, setVuelta] = useState(null);
  const [ferry, setFerry] = useState({});
  const [values, setValues] = useState([0, 5000]);
  const [minMax, setMinMax] = useState([0, 5000]);
  return (
    <Resultado
      background={"url('/banners/banner_ferry.webp')"}
      position={"center"}
      color={"tw-bg-blue-200/50"}
      buscador={<Buscador listado={true} />}
      aside={<Aside values={values} setValues={setValues} minMax={minMax} />}
      listado={
        <>
          {loading ? (
            <>
              <Cargando />
              <PlaceHolder />
            </>
          ) : (
            <Ferris
              ferris={ferris}
              ferry={ferry}
              setFerry={setFerry}
              ida={ida}
              setIda={setIda}
              vuelta={vuelta}
              setVuelta={setVuelta}
            />
          )}
        </>
      }
    />
  );
}
export default Productos;
