import Buscador from "../../motores/buscadores/destinos/Buscador_Destinos";
import Aside from "./filtros/Aside";
import Destinos from "./Destinos";
import { useEffect, useState } from "react";
import Cargando from "../../../placeholders/listados/Cargando";
import PlaceHolder from "../../../placeholders/listados/Destinos";
import Resultado from "../../../helpers/Resultado";
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
      background={"url('/banners/banner_hoteles.webp')"}
      position={"center"}
      color={"tw-bg-indigo-400/50"}
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
            <Destinos />
          )}
        </>
      }
    />
  );
}
export default Productos;
