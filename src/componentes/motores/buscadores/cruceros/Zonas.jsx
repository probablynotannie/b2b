import zonas from "./destinos.json";
import { useNavigate } from "react-router-dom";

function Zonas({ setRequestData }) {
  const navigate = useNavigate();
  const highlightedZones = zonas
    .filter((zona) => zona.destacado === 1)
    .slice(0, 4);

  const handleZoneClick = (producto) => {
    const newRequestData = {
      idZona: producto.id_zona_destino,
      fechSal: 0,
      duracion: 0,
      idPuerto: 0,
      idNav: 0,
      img: producto.img_zona_header,
      titulo: producto.name,
      desc: producto.texto,
    };

    setRequestData(newRequestData);
    navigate("/listadoCruceros", { state: { newRequestData } });
  };

  return (
    <div>
      <h2 className="tw-font-bold tw-text-xl xl:tw-text-2xl dark:tw-text-white">
        Zonas Destacadas
      </h2>
      <div className="tw-grid md:tw-grid-cols-2 xl:tw-grid-cols-1 tw-gap-3 tw-mt-3">
        {highlightedZones.map((zona, index) => (
          <div key={index} onClick={() => handleZoneClick(zona)}>
            <div className="tw-relative tw-h-[12vh] lg:tw-h-[5vh] xl:tw-h-[8.5vh] tw-top-0 tw-cursor-pointer tw-group hover:tw-scale-[103%] tw-transition tw-duration-400">
              <img
                src={zona.img_zona_header || "/default-image.jpg"}
                className="tw-opacity-90 tw-rounded tw-h-full tw-shadow tw-mb-4 tw-w-full tw-object-cover"
                alt="Imagen reserva"
              />
              <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-indigo-800 dark:tw-bg-indigo-900 dark:tw-bg-opacity-70 tw-bg-opacity-30 hover:tw-bg-opacity-65 tw-transition tw-duration-300 tw-flex tw-items-center tw-justify-center tw-p-4 tw-rounded">
                <div className="tw-text-white lg:tw-text-xl xl:tw-text-3xl tw-font-semibold tw-text-center">
                  {zona.texto}
                </div>
              </div>
              <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-black tw-bg-opacity-75 tw-text-white tw-flex tw-items-center tw-justify-center tw-p-4 tw-rounded tw-opacity-0 hover:tw-opacity-100 tw-transition tw-duration-300">
                <p className="hidden lg:flex tw-text-md tw-text-center">
                  {zona.descripcion}
                </p>
                <h3 className="tw-flex lg:hidden tw-text-3xl tw-text-center tw-font-bold">
                  {zona.texto}
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
