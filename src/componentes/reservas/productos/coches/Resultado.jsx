import Buscador from "../../../motores/buscadores/coches/Buscador_Coches";
import Aside from "./filtros/Aside";
import Coches from "./Coches";
import { useEffect, useState } from "react";
import Cargando from "../../estructura/skeleton_placeholders_listado/Cargando";
import PlaceHolder from "../../estructura/skeleton_placeholders_listado/Coches";
import Resultado from "../../Resultado";
function Productos() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  const [values, setValues] = useState([0, 5000]);
  const [minMax, setMinMax] = useState([0, 5000]);
  return (
    <Resultado
      background={"url('/banners/banner_coches_listado.webp')"}
      position={"bottom"}
      color={"tw-bg-orange-300/45"}
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
            <Coches />
          )}
        </>
      }
    />
  );
}
export default Productos;
