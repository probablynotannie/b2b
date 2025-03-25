import { FaArrowCircleRight } from "react-icons/fa";
function Itinerario({ producto }) {
  return (
    <div
      className="tw-space-y-8 tw-relative before:tw-absolute before:tw-inset-0 
      before:tw-ml-2 md:before:tw-ml-4 before:-tw-translate-x-1/2 
      before:tw-h-full before:tw-w-0.5 before:tw-bg-gradient-to-b 
      before:tw-from-transparent before:tw-via-slate-300 before:tw-to-transparent"
    >
      {producto.map(
        (itinerario, index) =>
          itinerario.puerto.name !== "NOT AVAILABLE" && (
            <div key={index} className="tw-relative">
              <div className="md:tw-flex tw-items-center tw-space-x-4 tw-mb-3">
                <div className="tw-flex tw-items-center tw-space-x-3 md:tw-space-x-2">
                  <div className="tw-w-8 tw-h-8 tw-flex tw-items-center tw-justify-center">
                    <FaArrowCircleRight className="tw-text-2xl tw-text-secondary tw-bg-white dark:tw-bg-transparent dark:tw-text-white" />
                  </div>
                </div>
                <div className="tw-text-slate-500 dark:tw-text-slate-400 tw-ml-4 md:tw-ml-8">
                  <span className="tw-text-slate-900 dark:tw-text-slate-100 tw-font-bold">
                    {itinerario.puerto.name}
                  </span>{" "}
                  {itinerario.hora_llegada !== "-" && itinerario.hora_llegada} -{" "}
                  {itinerario.hora_salida !== "-" && itinerario.hora_salida}
                </div>
              </div>
              <div className="tw-bg-white dark:tw-bg-slate-900 tw-p-4 tw-border tw-border-slate-200 dark:tw-border-slate-700 tw-rounded-lg tw-text-slate-500 tw-shadow tw-ml-10 md:tw-ml-20">
                {itinerario.puerto.img_puerto_header && (
                  <img
                    src={
                      "//pic-2.vpackage.net/cruceros_img/" +
                      itinerario.puerto.img_puerto_header
                    }
                    alt={itinerario.puerto.name}
                    className="tw-w-[350px] tw-h-[20vh] tw-object-cover tw-rounded-lg tw-shadow"
                  />
                )}
                <div>
                  <ul className="tw-mt-3">
                    {itinerario.hora_llegada !== "-" && (
                      <li className="tw-text-slate-400">
                        llegada:{" "}
                        <span className="tw-font-semibold tw-text-secondary">
                          {itinerario.hora_llegada}
                        </span>
                      </li>
                    )}
                    {itinerario.hora_salida !== "-" && (
                      <li className="tw-text-slate-400">
                        salida:
                        <span className="tw-font-semibold tw-text-secondary">
                          {itinerario.hora_salida}
                        </span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
}

export default Itinerario;
