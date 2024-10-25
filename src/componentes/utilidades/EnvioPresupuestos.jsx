import Sidebar from "./sidebar/Sidebar";

function Clientes() {
  return (
    <div className="grid grid-cols-7 gap-10  md:px-20 md:min-h-[78vh] min-h-[90vh] md:py-10">
      <Sidebar />
      <div
        className="relative flex items-center justify-center col-span-7 lg:col-span-5 xl:col-span-6 min-h-[68vh] md:rounded-lg md:shadow-lg"
        style={{
          backgroundImage: `url(/banner_coches.jpg)`,
          backgroundSize: "cover",
        }}
      >
        <div
          className={`bg-indigo-800 w-full h-full bg-opacity-55 rounded-lg shadow-lg px-10`}
        ></div>
        <div className="absolute md:top-32 md:left-20 bg-CajaForms  bg-opacity-80 text-white px-4 md:px-10 w-11/12 md:w-2/3 xl:w-1/3 h-fit py-5 pb-16 rounded-lg shadow-xl">
          <form></form>
        </div>
      </div>
    </div>
  );
}

export default Clientes;
