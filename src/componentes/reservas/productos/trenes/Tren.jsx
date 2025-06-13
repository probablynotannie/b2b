import { useLocation } from "react-router-dom";
import { useState } from "react";
import Tren from "./detalles/Tren";
import { Link } from "react-router-dom";
import DatosTren from "./detalles/DatosTren";
function Producto() {
  const location = useLocation();
  const producto = location.state;
  const [ida, setIda] = useState({
    ...producto[0],
    claseElegida: producto[0].claseElegida || producto[0].clasesDeAsiento[0],
  });
  const [vuelta, setVuelta] = useState(
    producto[1]
      ? {
          ...producto[1],
          claseElegida:
            producto[1].claseElegida || producto[1].clasesDeAsiento[0],
        }
      : null
  );
  const handleClassChange = (tren, setTren, nuevaClase) => {
    setTren((prevTren) => ({
      ...prevTren,
      claseElegida: nuevaClase,
    }));
  };
  return (
    <main className="tw-grid lg:tw-grid-cols-3 tw-min-h-[55vh] tw-items-start tw-container tw-gap-y-10 tw-my-10 tw-mb-20 lg:tw-gap-12">
      <section className="tw-col-span-2 tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-200 dark:tw-border-slate-700 dark:tw-bg-slate-900 tw-p-5">
        <h1 className="tw-font-bold tw-border-b-2 tw-border-slate-100 dark:tw-text-slate-200 dark:tw-border-slate-800 tw-pb-2">
          Reservando tren de ida {vuelta && "y vuelta"}
        </h1>
        <section className="tw-border-2 tw-border-slate-200 tw-rounded-xl tw-shadow tw-bg-slate-50 dark:tw-bg-slate-800 dark:tw-border-slate-700 tw-p-5">
          <Tren
            tren={ida}
            tipo={"Ida"}
            classSeat={ida.claseElegida}
            setClassSeat={(nuevaClase) =>
              handleClassChange(ida, setIda, nuevaClase)
            }
          />
        </section>
        {vuelta && (
          <section className="tw-border-2 tw-border-slate-200 tw-rounded-xl tw-shadow tw-bg-slate-50 dark:tw-bg-slate-800 dark:tw-border-slate-700 tw-p-5 tw-mt-10">
            <Tren
              tren={vuelta}
              tipo={"Vuelta"}
              classSeat={vuelta.claseElegida}
              setClassSeat={(nuevaClase) =>
                handleClassChange(vuelta, setVuelta, nuevaClase)
              }
            />
          </section>
        )}
      </section>
      <article className="tw-sticky tw-top-10 tw-col-span-2 lg:tw-col-span-1 tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-100 dark:tw-border-slate-800 dark:tw-bg-slate-900 tw-p-5">
        <h2 className="tw-font-semibold tw-border-b-2 tw-border-slate-100 dark:tw-text-slate-200 dark:tw-border-slate-700 tw-pb-2">
          Tren de ida {vuelta && "y vuelta"}
        </h2>
        <DatosTren tren={ida} tipo="ida" />
        {vuelta && <DatosTren tren={vuelta} tipo="vuelta" />}
        <Link to={"/datosTren"} state={{ ida, vuelta }}>
          <button className=" tw-btn_accesorios tw-btn_primario tw-w-full">
            {(
              ida.price +
              ida.claseElegida.precioExtra +
              (vuelta && vuelta.price + vuelta.claseElegida.precioExtra)
            ).toFixed(2)}
            €
          </button>
        </Link>
      </article>
    </main>
  );
}

export default Producto;
