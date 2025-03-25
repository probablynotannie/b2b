import Aside from "../ferris/filtros/Aside";
import MasFerris from "../ferris/Ferris";
import { useState } from "react";
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
  const [values, setValues] = useState([0, 5000]);
  const [minMax, setMinMax] = useState([0, 5000]);
  return (
    <>
      <aside className="tw-hidden lg:tw-block tw-col-span-9 lg:tw-col-span-3 tw-h-fit lg:tw-sticky tw-top-5 lg:tw-bg-slate-100 lg:dark:tw-bg-slate-800 lg:tw-border-2 tw-border-slate-200 dark:tw-border-slate-800 tw-rounded-lg lg:tw-shadow-xl hover:lg:tw-shadow-2xl tw-transition tw-px-3 lg:tw-p-3 lg:tw-pb-10">
        <Aside values={values} setValues={setValues} minMax={minMax} />
      </aside>
      <section className="tw-col-span-9 lg:tw-col-span-6 tw-p-3">
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
