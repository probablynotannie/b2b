import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import zonas from "./jsons/zonas.json";
import { useNavigate } from "react-router-dom";

// Function to fetch data from the API
const fetchCrucerosData = async (idZona) => {
  const url = new URL(
    "https://devxml-2.vpackage.net/FrontCruceros/searchjson?json=1"
  );
  url.searchParams.append("idZona", idZona); // Add the idZona to the query parameters
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Error al obtener los cruceros.");
  }
  const data = await response.json();
  return data;
};

function Zonas({ setRequestData }) {
  const navigate = useNavigate();
  const [selectedZona, setSelectedZona] = useState(null);

  // Fetch data for the selected zone using the useQuery hook
  const { data, error, isLoading } = useQuery({
    queryKey: ["cruceros", selectedZona],
    queryFn: () => fetchCrucerosData(selectedZona),
    enabled: !!selectedZona, // Only run the query if a zona is selected
    onSuccess: (data) => {
      if (data && data.idZona === parseInt(selectedZona)) {
        console.log("Producto encontrado:", data);
      } else {
        console.log("No se encontró un producto con idZona igual a", selectedZona);
      }
    },
    onError: (err) => {
      console.error("Error fetching data", err);
    },
  });

  // Handler for zone click
  const handleZoneClick = (zona) => {
    setSelectedZona(zona.val); // Set selectedZona to trigger the query
  };

  return (
    <div>
      <h2 className="tw-font-bold tw-text-xl xl:tw-text-2xl dark:tw-text-white">
        Zonas Destacados
      </h2>
      {isLoading && <p>Cargando...</p>}
      {error && <p className="tw-text-red-500">{error.message}</p>}
      <div className="tw-grid md:tw-grid-cols-2 xl:tw-grid-cols-1 tw-gap-3 tw-mt-3">
        {zonas.map((zona, index) => (
          <div key={index} onClick={() => handleZoneClick(zona)}>
            <div className="tw-relative tw-h-[12vh] lg:tw-h-[5vh] xl:tw-h-[8.5vh] tw-top-0 tw-cursor-pointer tw-group hover:tw-scale-[103%] tw-transition tw-duration-400">
              <img
                src={zona.img}
                className="tw-opacity-90 tw-rounded tw-h-full tw-shadow tw-mb-4 tw-w-full tw-object-cover"
                alt="Imagen reserva"
              />
              <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-indigo-800 dark:tw-bg-indigo-900 dark:tw-bg-opacity-70 tw-bg-opacity-30 hover:tw-bg-opacity-65 tw-transition tw-duration-300 tw-flex tw-items-center tw-justify-center tw-p-4 tw-rounded">
                <div className="tw-text-white lg:tw-text-xl xl:tw-text-3xl tw-font-semibold tw-text-center">
                  {zona.txt}
                </div>
              </div>
              <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-black tw-bg-opacity-75 tw-text-white tw-flex tw-items-center tw-justify-center tw-p-4 tw-rounded tw-opacity-0 hover:tw-opacity-100 tw-transition tw-duration-300">
                <p className="hidden lg:flex tw-text-md tw-text-center">
                  {zona.descripcion_corta}
                </p>
                <h3 className="flex lg:hidden tw-text-lg tw-text-center tw-font-bold">
                  {zona.txt}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Zonas;
