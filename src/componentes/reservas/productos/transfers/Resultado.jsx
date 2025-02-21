import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Buscador from "./filtros/Buscador";
import Aside from "./filtros/Aside";
import Coches from "./Listado";
import Cargando from "../../estructura/skeleton_placeholders/Cargando";
import PlaceHolder from "../../estructura/skeleton_placeholders/transfers";
import { MdCancel } from "react-icons/md";

const fetchData = async (newRequestData) => {
  const response = await fetch(
    "https://devxml.vpackage.net/Motores/public/api/Traslados/search/1/123"
  );
  if (!response.ok) {
    throw new Error("Error cargando datos");
  }
  const data = await response.json();
  return data.traslados;
};

function Productos() {
  const { newRequestData = {} } = location.state || {};
  const { data, isLoading } = useQuery({
    queryKey: ["transfersData", newRequestData],
    queryFn: () => fetchData(newRequestData),
  });

  const [values, setValues] = useState([0, 5000]); // Default range
  const [minMax, setMinMax] = useState([0, 5000]);

  const [selectedCars, setSelectedCars] = useState([]);

  // After the data is fetched, set the min and max values dynamically.
  useEffect(() => {
    if (!isLoading && data && data.length > 0) {
      const prices = data.map((coche) => coche.price);
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);
      setMinMax([minPrice, maxPrice]); // Set min and max
      setValues([minPrice, maxPrice]); // Set initial slider values
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
    <main className="tw-flex tw-justify-between w tw-flex-col tw-items-center tw-mb-10 tw-flex-grow ">
      <div
        className="tw-relative tw-w-full tw-p-8 tw-bg-center tw-bg-cover tw-shadow-md"
        style={{
          backgroundImage: "url('/banner_hoteles.jpg')",
        }}
      >
        <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-text-pink-600 tw-bg-orange-200 tw-pointer-events-none dark:tw-bg-black tw-bg-opacity-35 dark:tw-bg-opacity-45"></div>
        <div className="tw-flex">
          <div className="tw-container tw-relative">
            <Buscador />
          </div>
          <aside className="tw-col-span-9 tw-px-3 tw-transition tw-rounded-lg lg:tw-hidden lg:tw-col-span-3 tw-h-fit  tw-top-5 lg:tw-bg-slate-100 lg:dark:tw-bg-slate-800 lg:tw-border-2 tw-border-slate-200 dark:tw-border-slate-800 lg:tw-shadow-xl hover:lg:tw-shadow-2xl lg:tw-p-3 lg:tw-pb-10">
            <Aside values={values} setValues={setValues} minMax={minMax} />
          </aside>
        </div>
      </div>
      <article className="tw-grid tw-grid-cols-9 lg:tw-gap-10 xs:gap-28 tw-w-full tw-container tw-mt-10">
        <aside className="tw-hidden lg:tw-block tw-col-span-9 lg:tw-col-span-3 tw-h-fit lg:tw-sticky tw-top-10 lg:tw-bg-slate-100 lg:dark:tw-bg-slate-800 lg:tw-border-2 tw-border-slate-200 dark:tw-border-slate-800 tw-rounded-lg lg:tw-shadow-xl hover:lg:tw-shadow-2xl tw-transition tw-px-3 lg:tw-p-3 lg:tw-pb-10">
          <Aside values={values} setValues={setValues} minMax={minMax} />
        </aside>
        <section className="tw-col-span-9 lg:tw-col-span-6 tw-p-3">
          {isLoading ? (
            <>
              <Cargando />
              <PlaceHolder />
            </>
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
              <MdCancel className="tw-text-3xl tw-text-red-500 tw-animate-bounce" />
              <p className="tw-text-slate-400 dark:tw-text-slate-300 tw-text-lg">
                No hay coches disponibles con estos datos.
              </p>
            </div>
          )}
        </section>
      </article>
    </main>
  );
}

export default Productos;
