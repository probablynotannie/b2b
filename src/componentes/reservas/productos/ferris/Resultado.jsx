import Buscador from "../../../motores/buscadores/ferris/Buscador_Ferris";
import Aside from "./filtros/Aside";
import Ferris from "./Ferris";
import { useState, useEffect } from "react";
import Cargando from "../../estructura/skeleton_placeholders_listado/Cargando";
import PlaceHolder from "../../estructura/skeleton_placeholders_listado/Ferris";
import Resultado from "../../../../helpers/Resultado";
import ferrisRealesGnv from "./jsons/ferrisRealesGnv.json";
import ferrisRealesTrasmed from "./jsons/ferrisRealesTrasmed.json";
import ferrisRealesBalearia from "./jsons/ferrisRealesBalearia.json";
import NetoSwitcher from "../../../../helpers/netoSwitcher/Switch";
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
            <div className="tw-flex tw-space-y-5 tw-flex-col">
              <div className="tw-flex tw-items-center tw-justify-between">
                <h3
                  className={`tw-text-secondary
                 tw-font-semibold tw-text-lg tw-flex tw-items-center`}
                >
                  Resultados
                </h3>
                <NetoSwitcher />
              </div>
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
          )}
        </>
      }
    />
  );
}
export default Productos;
