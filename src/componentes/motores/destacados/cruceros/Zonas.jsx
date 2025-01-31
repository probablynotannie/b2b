import zonas from "./jsons/zonas.json";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Zonas({ setRequestData }) {
  const navigate = useNavigate(); // Initialize navigation
  const handleZoneClick = (producto) => {
    const newRequestData = {
      puerto: "",
      destino: producto.val,
      mes: "",
      duracion: "",
      naviera: "",
    };
    setRequestData(newRequestData);
    navigate("/listadoCruceros", { state: { newRequestData, producto } });
  };

  return (
    <div>
      <h2 className="tw-font-bold tw-text-xl xl:tw-text-2xl dark:tw-text-white">
        Zonas Destacados
      </h2>
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
