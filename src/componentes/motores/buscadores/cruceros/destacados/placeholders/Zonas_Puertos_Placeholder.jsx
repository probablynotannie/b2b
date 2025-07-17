import Cargando from "../../../../../../helpers/placeholders/Cargando";
function Zonas_Puertos_Placeholder() {
  return (
    <>
      <div className="xl:tw-col-span-1">
        <div className="tw-flex tw-justify-between">
          <h2 className="tw-font-bold tw-text-xl xl:tw-text-2xl dark:tw-text-white tw-animate-pulse">
            Zonas Destacadas
          </h2>
          <Cargando />
        </div>
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 xl:tw-grid-cols-1 tw-gap-3 tw-mt-3">
          <div className="tw-bg-slate-200 dark:tw-bg-slate-800 tw-rounded-lg tw-h-14 tw-animate-pulse" />
          <div className="tw-bg-slate-200 dark:tw-bg-slate-800 tw-rounded-lg tw-h-14 tw-animate-pulse" />
          <div className="tw-bg-slate-200 dark:tw-bg-slate-800 tw-rounded-lg tw-h-14 tw-animate-pulse" />
          <div className="tw-bg-slate-200 dark:tw-bg-slate-800 tw-rounded-lg tw-h-14 tw-animate-pulse" />
        </div>
      </div>
      <div className="xl:tw-col-span-2">
        <div className="tw-flex tw-justify-between tw-items-center tw-mb-3">
          <h2 className="tw-font-bold tw-text-xl xl:tw-text-2xl dark:tw-text-white tw-animate-pulse">
            Puertos Destacados
          </h2>
        </div>
        <div className="tw-bg-slate-200 dark:tw-bg-slate-800 tw-rounded-lg tw-h-40 xl:tw-h-72 tw-animate-pulse tw-mb-4" />
      </div>
    </>
  );
}

export default Zonas_Puertos_Placeholder;
