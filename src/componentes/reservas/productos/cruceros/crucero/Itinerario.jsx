import { Timeline } from "flowbite-react";
import { FaArrowCircleRight } from "react-icons/fa";

function Itinerario({ producto }) {
  console.log(producto);
  return (
    <>
      <h3 className="tw-font-bold tw-text-lg tw-mt-5 dark:tw-text-white">
        Itinerario
      </h3>
      <div className="tw-space-y-8 tw-relative before:tw-absolute before:tw-inset-0 before:tw-ml-5 before:-tw-translate-x-px md:before:tw-ml-[8.75rem] md:before:tw-translate-x-0 before:tw-h-full before:tw-w-0.5 before:tw-bg-gradient-to-b before:tw-from-transparent before:tw-via-slate-300 before:tw-to-transparent">
        {producto.itinerario.map((itinerario, index) => (
          <div key={index} className="tw-relative">
            <div className="md:tw-flex tw-items-center md:tw-space-x-4 tw-mb-3">
              <div className="tw-flex tw-items-center tw-space-x-4 md:tw-space-x-2 md:tw-space-x-reverse">
                <div className="tw-flex tw-items-center tw-justify-center tw-w-10 tw-h-10 tw-rounded-full tw-bg-white dark:tw-bg-secondaryDark tw-shadow md:tw-order-1">
                  <FaArrowCircleRight className="tw-text-2xl tw-text-secondary dark:tw-text-white" />
                </div>

                <div className="md:tw-w-28" />
              </div>

              <div className="tw-text-slate-500 dark:tw-text-slate-400 tw-ml-14">
                <span className="tw-text-slate-900 dark:tw-text-slate-100 tw-font-bold">
                  {itinerario.destino}
                </span>{" "}
                {itinerario.dias}
              </div>
            </div>

            <div className="tw-bg-white dark:tw-bg-slate-900 tw-p-4 tw-border tw-border-slate-200 dark:tw-border-slate-700 tw-rounded-lg tw-text-slate-500 tw-shadow tw-ml-14 md:tw-ml-44">
              <img
                src={itinerario.img}
                alt={itinerario.destino}
                className="tw-w-[350px] tw-h-[20vh] tw-object-cover tw-rounded-lg tw-shadow"
              />

              <p className="tw-text-slate-600 dark:tw-text-slate-200 tw-mt-4">
                {itinerario.descripcion}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Itinerario;
