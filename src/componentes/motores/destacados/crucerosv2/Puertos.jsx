import puertos from "./jsons/puertos.json";
function Puertos() {
  return (
    <div>
      <h2 className="tw-font-bold tw-text-2xl dark:tw-text-white">
        Puertos Destacados
      </h2>
      <div className="tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-3 tw-mt-3">
        {puertos.map((zona, index) => (
          <div key={index}>
            <div className="tw-relative hover:tw-scale-[103%] tw-transition tw-duration-400 tw-h-[13vh] tw-top-0 tw-cursor-pointer tw-group">
              <img
                src={zona.img}
                className="tw-opacity-90 tw-h-full tw-shadow tw-mb-4 tw-w-full tw-object-cover"
                alt="Imagen reserva"
              />
              <div className="tw-absolute tw-text-slate-100 tw-text-xl tw-font-semibold tw-text-center tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-indigo-600 dark:tw-bg-orange-900 dark:tw-bg-opacity-40 tw-bg-opacity-30 dark:hover:tw-bg-black dark:hover:bg-opacity-75 hover:tw-bg-opacity-65 tw-transition tw-duration-300 tw-flex tw-items-center tw-justify-center tw-p-4 tw-rounded">
                {zona.txt}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Puertos;
