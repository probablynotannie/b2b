import { useRef } from "react";
import Cruceros_destacados from "./Cruceros_destacados";
import Meses from "./Meses";
import { FaArrowDownLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { slugify } from "../../../../../assets/scripts/slugify";
import Placeholder_Cruceros from "./placeholders/Cruceros";
function Cruceros({ setRequestData, data, isLoading }) {
  const contentRef = useRef(null);
  const handleScroll = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleNavieraClick = (nav) => {
    const datosForm = {
      idNav: nav.id_naviera,
    };
    setRequestData(datosForm);
    const enlace = "/zona/" + slugify(nav.name_naviera);
    navigate(`/listadoCruceros${enlace}`, { state: { datosForm } });
  };
  const navigate = useNavigate();
  const crucerosLoading = false;
  return (
    <div className="tw-px-5">
      <div className="tw-text-4xl tw-text-center tw-font-bold tw-p-3 tw-border-b-2 dark:tw-text-white tw-border-slate-100 dark:tw-border-slate-700 tw-mb-5 tw-flex tw-items-center tw-justify-between">
        Más
        <button
          onClick={handleScroll}
          className="tw-border-2 dark:tw-border-slate-700 tw-rounded-full tw-bg-secondary tw-text-white tw-p-2 tw-animate-bounce"
        >
          <FaArrowDownLong />
        </button>
      </div>

      <div ref={contentRef}>
        <div className="tw-grid lg:tw-grid-cols-2 tw-gap-20 tw-mt-10 tw-bg-slate-50 tw-shadow-sm hover:tw-shadow-md tw-smooth tw-rounded-lg dark:tw-bg-slate-900">
          <Meses setRequestData={setRequestData} />
          {!isLoading && data?.navieras && (
            <section className="dark:tw-text-white tw-flex-col tw-py-5">
              <h2 className="tw-font-bold tw-text-xl tw-mb-5 tw-text-center tw-text-gray-800 dark:tw-text-slate-100">
                Buscar por Navieras
              </h2>
              <div className="tw-flex tw-justify-center tw-gap-10 tw-flex-wrap tw-my-5">
                {data?.navieras?.map((nav, index) => (
                  <div
                    className="hover:tw-scale-105 tw-smooth tw-cursor-pointer"
                    key={index}
                    onClick={() => handleNavieraClick(nav)}
                  >
                    <img
                      src={`//pic-2.vpackage.net/cruceros_img/${nav.img_naviera}`}
                      alt={`Naviera ${nav.name_naviera}`}
                      className="tw-object-fill tw-h-[100px] tw-rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
        <div className="tw-mt-8">
          <div className="tw-bg-slate-50 tw-shadow-sm hover:tw-shadow-md tw-smooth tw-rounded-lg dark:tw-bg-slate-900 tw-p-5  tw-px-10">
            <h2 className="tw-font-bold tw-text-2xl tw-mb-5 tw-text-slate-800 dark:tw-text-slate-100 tw-mt-5">
              Cruceros destacados
            </h2>
            {crucerosLoading === false ? (
              <Cruceros_destacados />
            ) : (
              <Placeholder_Cruceros />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cruceros;
