import Sidebar from "./sidebar/Sidebar";

function Clientes() {
  return (
    <div className="tw-grid tw-grid-cols-7 tw-gap-10 md:tw-px-20 lg:tw-min-h-[78vh] tw-min-h-[90vh] md:tw-py-10">
      <Sidebar />
      <div
        className="tw-relative tw-flex tw-items-center tw-justify-center tw-col-span-7 lg:tw-col-span-5 xl:tw-col-span-6 tw-min-h-[68vh] md:tw-rounded-lg md:tw-shadow-lg"
        style={{
          backgroundImage: `url(/banner_coches.jpg)`,
          backgroundSize: "cover",
        }}
      >
        <div
          className={`tw-bg-indigo-800 tw-w-full tw-h-full tw-bg-opacity-55 tw-rounded-lg tw-shadow-lg tw-px-10`}
        ></div>
        <div className="tw-absolute md:tw-top-32 md:tw-left-20 tw-bg-CajaForms tw-bg-opacity-80 dark:bg-opacity-90 tw-text-white tw-px-4 md:tw-px-10 tw-w-11/12 md:tw-w-2/3 xl:tw-w-1/3 tw-h-fit tw-py-5 tw-pb-16 tw-rounded-lg tw-shadow-xl">
          <form></form>
        </div>
      </div>
    </div>
  );
}

export default Clientes;
