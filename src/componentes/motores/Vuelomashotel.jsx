import Sidebar from "./sidebar/Sidebar";
import Buscador_HotVuelo from "./buscadores/hotelmasvuelo/Buscador_HotVuelo";
import Destacados from "./buscadores/destacados/Destacados";
import destacados from "./buscadores/hotelmasvuelo/destacados.json";
function HotelMasVuelo() {
  return (
    <article className="lg:tw-grid tw-grid-cols-10  tw-gap-10 lg:tw-px-20 lg:tw-py-10 tw-min-h-[76vh]">
      <Sidebar />
      <div className="tw-col-span-10 lg:tw-col-span-7 xl:tw-col-span-8 tw-flex-col">
        <div
          className="tw-relative tw-h-fit md:tw-min-h-[25vh] lg:tw-rounded-lg lg:tw-shadow tw-flex"
          style={{
            backgroundImage: `url(/banners/banner_avion.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="tw-w-full tw-pb-10 tw-bg-indigo-500 dark:tw-bg-indigo-900 dark:tw-bg-opacity-60 tw-rounded tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-bg-opacity-40 tw-p-5 tw-flex tw-items-center tw-justify-center">
            <Buscador_HotVuelo />
          </div>
        </div>
        <Destacados destacados={destacados} columnas={4} filas={2} />
      </div>
    </article>
  );
}

export default HotelMasVuelo;
