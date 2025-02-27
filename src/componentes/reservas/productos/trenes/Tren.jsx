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
  console.log("aqui", ida);
  return (
    <main className="grid lg:grid-cols-3 min-h-[55vh] items-start container gap-y-10 my-10 lg:gap-12">
      <section className="col-span-2 shadow-lg hover:shadow-xl transition duration-300 rounded-lg min-h-[15vh] border border-slate-200 dark:tw-border-slate-700 dark:bg-slate-900 p-5">
        <h1 className="font-bold border-b-2 border-slate-100 dark:tw-text-slate-200 dark:tw-border-slate-800 pb-2">
          Reservando tren de ida {vuelta && "y vuelta"}
        </h1>
        <section className="border-2 border-slate-200 rounded-xl shadow bg-slate-50 dark:bg-slate-800 dark:tw-border-slate-700 p-5">
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
          <section className="border-2 border-slate-200 rounded-xl shadow bg-slate-50 dark:bg-slate-800 dark:tw-border-slate-700 p-5 mt-10">
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
      <article className="sticky top-24 col-span-2 lg:col-span-1 shadow-lg hover:shadow-xl transition duration-300 rounded-lg min-h-[15vh] border border-slate-100  dark:tw-border-slate-800 dark:bg-slate-900 p-5">
        <h2 className="font-semibold border-b-2 border-slate-100 dark:tw-text-slate-200 dark:tw-border-slate-700 pb-2">
          Tren de ida {vuelta && "y vuelta"}
        </h2>
        <DatosTren tren={ida} tipo="ida" />
        {vuelta && <DatosTren tren={vuelta} tipo="vuelta" />}
        <Link to={"/datosTren"} state={{ ida, vuelta }}>
          <button className="w-full tw-bg-secondary dark:bg-green-600 rounded-lg  hover:shadow-lg transition duration-300 text-white p-3 font-semibold mt-2">
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
