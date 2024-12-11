import Buscador from "./filtros/Buscador";
import Tickets from "./Tickets";
function Productos() {
  return (
    <main className=" flex justify-center flex-col items-center  mb-10">
      <div
        className="w-full bg-cover bg-center p-8 relative shadow-xl"
        style={{
          backgroundImage: "url('/banner_actividades2.jpg')",
        }}
      >
        <div className="bg-indigo-500 dark:bg-black bg-opacity-90 dark:bg-opacity-45 absolute top-0 left-0 w-full h-full pointer-events-none"></div>
        <div className="flex">
          <div className="container relative">
            <Buscador />
          </div>
        </div>
      </div>
      <article className="grid grid-cols-1 lg:gap-10 xs:gap-28 w-full container mt-10">
        <section className="p-3">
          <Tickets />
        </section>
      </article>
    </main>
  );
}
export default Productos;
