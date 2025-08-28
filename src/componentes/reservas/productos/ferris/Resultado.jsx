import Buscador from "../../../motores/buscadores/ferris/Buscador_Ferris";
import Aside from "./filtros/Aside";
import Ferris from "./Ferris";
import { useState, useEffect } from "react";
import Cargando from "../../../../placeholders/listados/Cargando";
import PlaceHolder from "../../../../placeholders/listados/Ferris";
import Resultado from "../../../../helpers/Resultado";
import ferrisRealesGnv from "./jsons/ferrisRealesGnv.json";
import ferrisRealesTrasmed from "./jsons/ferrisRealesTrasmed.json";
import ferrisRealesBalearia from "./jsons/ferrisRealesBalearia.json";
import ferrisRealesSoloIda from "./jsons/ferrisRealesSoloIda.json";
function Productos() {
  const ferrisArray = [
    ferrisRealesGnv,
    ferrisRealesTrasmed,
    ferrisRealesBalearia,
  ];
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
            <div className="tw-flex tw-flex-col tw-gap-3">
              <div className="tw-flex tw-items-center tw-justify-between">
                <h3
                  className={`tw-text-secondary
                 tw-font-semibold tw-text-lg tw-flex tw-items-center`}
                >
                  Resultados
                </h3>
              </div>
              <div>
                {ferrisArray.map((ferryData, index) => (
                  <Ferris
                    key={index}
                    ferrisData={ferryData}
                    ferry={ferry}
                    setFerry={setFerry}
                    ida={ida}
                    setIda={setIda}
                    vuelta={vuelta}
                    setVuelta={setVuelta}
                  />
                ))}
              </div>
            </div>
          )}
        </>
      }
    />
  );
}
export default Productos;
