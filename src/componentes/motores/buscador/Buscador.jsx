import Sidebar from "../sidebar/Sidebar";
function Buscador({ buscador, destacados, backgroundImage }) {
  return (
    <article className="lg:tw-grid tw-grid-cols-10 tw-gap-10 lg:tw-px-20 lg:tw-py-10">
      <Sidebar />
      <div className="tw-col-span-10 lg:tw-col-span-7 xl:tw-col-span-8 tw-flex-col">
        <div
          className="tw-relative tw-h-fit md:tw-min-h-[25vh] lg:tw-rounded-lg lg:tw-shadow tw-flex"
          style={{
            backgroundImage: backgroundImage,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="tw-w-full tw-pb-10 tw-bg-indigo-500 dark:tw-bg-indigo-900 dark:tw-bg-opacity-60 tw-rounded tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-bg-opacity-40 tw-p-5 tw-flex tw-items-center tw-justify-center">
            {buscador}
          </div>
        </div>
        {destacados}
      </div>
    </article>
  );
}

export default Buscador;
