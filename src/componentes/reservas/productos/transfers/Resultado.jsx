import { useState, useEffect } from "react";
import Coches from "./Listado";
import { useQuery } from "@tanstack/react-query";
import Buscador from "../../../motores/buscadores/transfers/Buscador_Transfers";
import Aside from "./filtros/Aside";
import Cargando from "../../estructura/skeleton_placeholders_listado/Cargando";
import PlaceHolder from "../../estructura/skeleton_placeholders_listado/transfers";
import { MdCancel } from "react-icons/md";
import Resultado from "../../Resultado";
const fetchData = async (newRequestData) => {
  const response = await fetch(
    "https://devxml.vpackage.net/Motores/public/api/Traslados/search/123/1"
  );
  if (!response.ok) {
    throw new Error("Error cargando datos");
  }
  const data = await response.json();
  return data.traslados;
};

function Productos() {
  const { newRequestData = {} } = location.state || {};
  const { data, isLoading, error } = useQuery({
    queryKey: ["transfersData", newRequestData],
    queryFn: () => fetchData(newRequestData),
  });
  const [selectedCars, setSelectedCars] = useState([]);

  const [values, setValues] = useState([0, 5000]);
  const [minMax, setMinMax] = useState([0, 5000]);

  useEffect(() => {
    if (!isLoading && data && data.length > 0) {
      const prices = data.map((coche) => coche.price);
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);
      setMinMax([minPrice, maxPrice]);
      setValues([minPrice, maxPrice]);
    }
  }, [data, isLoading]);

  const filteredCoches =
    !isLoading && data
      ? data.filter(
          (coche) => coche.price >= values[0] && coche.price <= values[1]
        )
      : [];

  const handleCompareChange = (coche, isChecked) => {
    if (isChecked) {
      setSelectedCars((prev) => [...prev, coche]);
    } else {
      setSelectedCars((prev) => prev.filter((car) => car.id !== coche.id));
    }
  };

  return (
    <Resultado
      background={"url('/banners/banner_hoteles.webp')"}
      wideContent={false}
      position={"center"}
      color={"tw-bg-orange-300/40"}
      buscador={<Buscador listado={true} />}
      aside={<Aside values={values} setValues={setValues} minMax={minMax} />}
      listado={
        <>
          {isLoading ? (
            <>
              <Cargando />
              <PlaceHolder />
            </>
          ) : error ? (
            <div className="tw-flex tw-justify-center tw-items-center tw-h-96 tw-flex-col">
              <MdCancel className="tw-text-3xl tw-text-danger" />
              <p className="tw-text-slate-400 dark:tw-text-slate-300 tw-text-lg">
                Ha habido problema extrayendo los datos :(
                {console.error(error.message)}
              </p>
            </div>
          ) : filteredCoches.length > 0 ? (
            <section className="tw-pb-12">
              <h3 className="tw-text-secondary tw-font-semibold tw-text-lg">
                Resultados ({filteredCoches.length})
              </h3>
              <Coches
                coches={filteredCoches}
                setSelectedCars={setSelectedCars}
                selectedCars={selectedCars}
                handleCompareChange={handleCompareChange}
              />
            </section>
          ) : (
            <div className="tw-flex tw-justify-center tw-items-center tw-h-96 tw-flex-col">
              <MdCancel className="tw-text-3xl tw-text-danger tw-animate-bounce" />
              <p className="tw-text-slate-400 dark:tw-text-slate-300 tw-text-lg">
                No hay coches disponibles con estos datos.
              </p>
            </div>
          )}
        </>
      }
    />
  );
}

export default Productos;
