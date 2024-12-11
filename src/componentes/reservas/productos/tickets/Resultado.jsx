import Buscador from "./filtros/Buscador";
import Tickets from "./Tickets";
function Productos() {
  return (
    <main className=" flex justify-center flex-col items-center  mb-10 min-h-[0vh]">
      <div
        className="w-full bg-cover bg-center p-8 relative shadow-xl"
        style={{
          backgroundImage: "url('/banner_cruise.jfif')",
        }}
      >
        <div className="bg-indigo-200 dark:bg-black text-pink-600 bg-opacity-50 dark:bg-opacity-45 absolute top-0 left-0 w-full h-full pointer-events-none"></div>
        <div className="container relative">
          <Buscador />
        </div>
      </div>
      <article className="grid grid-cols-1 lg:gap-10 xs:gap-28 w-full container mt-10 min-h-[35vh]">
        <Tickets />
      </article>
    </main>
  );
}
export default Productos;
