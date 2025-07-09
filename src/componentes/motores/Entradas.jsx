import Sidebar from "./sidebar/Sidebar";
import Buscador_Entradas from "./buscadores/entradas/Buscador_Entradas";
import destacados from "./buscadores/entradas/destacados.json";
import Destacados from "./buscadores/destacados/Destacados";
function Entradas() {
  return (
    <article className="lg:tw-grid tw-grid-cols-10  tw-gap-10 lg:tw-px-20 lg:tw-py-10 tw-min-h-[76vh]">
      <Sidebar />
      <div className="tw-col-span-10 lg:tw-col-span-7 xl:tw-col-span-8 tw-flex-col">
        <div
          className="tw-relative tw-h-fit md:tw-min-h-[25vh] lg:tw-rounded-lg lg:tw-shadow tw-flex"
          style={{
            backgroundImage: `url(/banners/banner_entradas.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="tw-w-full tw-bg-indigo-500 dark:tw-bg-indigo-900 dark:tw-bg-opacity-60 tw-rounded tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-bg-opacity-40 tw-p-5 tw-flex tw-items-center tw-justify-center">
            <Buscador_Entradas />
          </div>
        </div>
        <Destacados destacados={destacados} max={3} columnas={3} filas={2} />
      </div>
    </article>
  );
}

export default Entradas;
