import Aside from "../ferris/filtros/Aside";
import MasFerris from "../ferris/Ferris";
function Vuelos({
  ida,
  setIda,
  vuelta,
  setVuelta,
  ferris,
  ferry,
  setFerry,
  seleccion,
}) {
  return (
    <>
      <aside className="hidden lg:block col-span-9 lg:col-span-3 h-fit lg:sticky  top-5 lg:bg-slate-100 lg:dark:bg-slate-800 lg:border-2 border-slate-200  dark:tw-border-slate-800 rounded-lg lg:shadow-xl hover:lg:shadow-2xl transition px-3 lg:p-3 lg:pb-10">
        <Aside />
      </aside>
      <section className="col-span-9 lg:col-span-6 p-3">
        <MasFerris
          seleccion={seleccion}
          ferris={ferris}
          ida={ida}
          ferry={ferry}
          setFerry={setFerry}
          setIda={setIda}
          vuelta={vuelta}
          setVuelta={setVuelta}
        />
      </section>
    </>
  );
}

export default Vuelos;
